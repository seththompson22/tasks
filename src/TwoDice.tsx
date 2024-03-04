import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function TwoDice(): JSX.Element {
    const [die1, rollDie1] = useState<number>(1);
    const [die2, rollDie2] = useState<number>(2);

    return (
        <div>
            <Button onClick={() => d6(die1)}>Roll Left</Button>
            <span datatest-id="left-die">left-die</span>
            <Button>Roll Right</Button>
            <span datatest-id="right-die">right-die</span>
        </div>
    );
}
