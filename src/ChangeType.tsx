import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "./interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, switchType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                onClick={() =>
                    switchType(
                        type == "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question"
                    )
                }
            >
                Change Type
            </Button>
            {type == "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </span>
    );
}
