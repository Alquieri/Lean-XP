import React, { useState } from 'react';
import questions from '../../data/questions';
import './Quiz.css';
import { WinAchievement } from '../../Context/AchievementService.jsx';

const Quiz = (props) => {
    const [userAnswers, setUserAnswers] = useState({});
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const startIndex = (props.bloco - 1) * 5;
    const endIndex = props.bloco * 5;
    const questionsToShow = questions.slice(startIndex, endIndex);

    const handleAnswer = (questionId, selectedOption) => {
        setUserAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
    };

    const handleSubmit = () => {
        let newScore = 0;
        questionsToShow.forEach(q => {
            if (userAnswers[q.id] === q.answer) {
                newScore++;
            }
        });
        setScore(newScore);
        setShowScore(true);

        // ✅ Se acertar pelo menos 3, chama o onQuizComplete
        if (newScore >= 3 && props.onQuizComplete) {
            props.onQuizComplete();
        }
        // Se acertar todas as 5, desbloqueia achievement 4
        if (newScore === 5) {
            const localUser = localStorage.getItem('user');
            if (localUser && WinAchievement) {
                const runAchievement = async () => {
                    await WinAchievement(4);
                };
                runAchievement();
            }
        }

    };

    return (
        <div className="quiz-container">
            <h2>Quiz Lean & XP - Bloco {props.bloco}</h2>

            {questionsToShow.map(q => (
                <div key={q.id} className="question-block">
                    <p className="question">{q.question}</p>
                    {q.options.map(option => (
                        <label key={option} className="option">
                            <input
                                type="radio"
                                name={`question-${q.id}`}
                                value={option}
                                checked={userAnswers[q.id] === option}
                                onChange={() => handleAnswer(q.id, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}

            {!showScore && (
                <button className="button submit-button" onClick={handleSubmit}>
                    Finalizar Quiz
                </button>
            )}

            {showScore && (
                <div className="result">
                    Você acertou {score} de {questionsToShow.length} perguntas!
                    {score >= 3 && (
                        <p className="success-message">Excelente trabalho!</p>
                    )}
                    {score >= 1 && score < 3 && (
                        <p className="encouragement-message">Bom esforço! Continue praticando.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
