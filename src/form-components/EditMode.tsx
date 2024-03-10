import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isInEditMode, setIsInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsInEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                <Form.Check
                    type="switch"
                    id="is-editing-check"
                    label="Edit Mode"
                    checked={isInEditMode}
                    onChange={updateEditMode}
                />
                <p>
                    {isInEditMode ? (
                        <Form.Group>
                            <Form.Label>Update Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label="I am a Student"
                                checked={isStudent}
                                onChange={updateIsStudent}
                            />
                        </Form.Group>
                    ) : (
                        `${name} is ${isStudent ? "" : "not"} a student`
                    )}
                </p>
            </Form>
            <p></p>
        </div>
    );
}
