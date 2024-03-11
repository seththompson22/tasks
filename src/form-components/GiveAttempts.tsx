import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function useAttempt() {
        attemptsLeft > 0
            ? setAttemptsLeft(attemptsLeft - 1)
            : setAttemptsLeft(0);
    }
    function increaseAttempt() {
        setAttemptsLeft(attemptsLeft + requestedAttempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Add Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts ? requestedAttempts : ""}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(Number(event.target.value))
                    }
                ></Form.Control>
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={increaseAttempt}>gain</Button>
            <p>Attempts Left: {attemptsLeft}</p>
        </div>
    );
}
