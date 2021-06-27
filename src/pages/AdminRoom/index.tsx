import { useHistory, useParams } from 'react-router-dom';

import emptyQuestionsImg from '../../assets/images/empty-questions.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../hooks/useRoom';

import { Container } from './styles';
import { database } from '../../services/firebase';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

interface ParamsData {
  id: string;
}

export const AdminRoom: React.FC = () => {
  const history = useHistory();
  const params = useParams<ParamsData>();

  const { room, questions, title } = useRoom(params.id);

  const roomId = params.id;

  async function handleCloseRoom() {
    try {
      await database.ref(`rooms/${roomId}`).update({
        closedAt: new Date(),
      });

      history.push('/');
    } catch (error) {
      alert('Você não tem permissão para realizar essa operação');
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    try {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
      });
    } catch (error) {
      alert('Você não tem permissão para realizar essa operação');
    }
  }

  async function handleHighlightQuestion(questionId: string) {
    try {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
      });
    } catch (error) {
      alert('Você não tem permissão para realizar essa operação');
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    const result = window.confirm(
      'Tem certeza ue você deseja excluir essa pergunta',
    );

    if (result) {
      try {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      } catch (error) {
        alert('Você não tem permissão para realizar essa operação');
      }
    }
  }

  return (
    <Container>
      <Header>
        <div className="host">
          <UserInfo name={room.authorName} avatar={room.authorAvatar} />
        </div>

        <div>
          <RoomCode code={roomId} />

          <Button isOutlined type="button" onClick={handleCloseRoom}>
            Encerrar sala
          </Button>
        </div>
      </Header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.length === 0 ? (
            <>
              <img src={emptyQuestionsImg} alt="Nenhuma pergunta" />

              <p>Nenhuma pergunta por aqui...</p>
            </>
          ) : (
            questions.map(question => (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            ))
          )}
        </div>
      </main>
    </Container>
  );
};
