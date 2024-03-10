import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [option, setOption] = useState<string>(colors[0]);

    function updateOption(event: React.ChangeEvent<HTMLInputElement>) {
        setOption(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => {
                return (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        name="color"
                        id={c}
                        label={c}
                        value={c}
                        checked={option === c}
                        onChange={updateOption}
                        style={{ backgroundColor: `${c}` }}
                    />
                );
            })}
            <p>
                You have chosen{" "}
                <p
                    data-testid="colored-box"
                    style={{ backgroundColor: `${option}` }}
                >
                    {option}
                </p>
                .
            </p>
        </div>
    );
}
