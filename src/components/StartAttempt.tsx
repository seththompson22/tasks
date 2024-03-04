import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, changeQuizInProgress] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => changeQuizInProgress(false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    changeQuizInProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={quizInProgress || attempts <= 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </span>
    );
}
