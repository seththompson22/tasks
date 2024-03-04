import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, changeQuizInProgress] = useState<boolean>(false);

    function decrementAttemptAndStopQuiz(val: number) {
        changeQuizInProgress(false);
        setAttempts(val - 1);
    }

    return (
        <span>
            {quizInProgress ? (
                <Button onClick={() => decrementAttemptAndStopQuiz(attempts)}>
                    Stop Quiz
                </Button>
            ) : (
                <div>
                    {attempts > 0 ? (
                        <Button onClick={() => changeQuizInProgress(true)}>
                            Start Quiz
                        </Button>
                    ) : (
                        ""
                    )}
                    <Button onClick={() => setAttempts(attempts + 1)}>
                        Mulligan
                    </Button>
                </div>
            )}
        </span>
    );
}
