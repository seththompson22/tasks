import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import memeimage from "./assets/meme-image.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Seth Thompson
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>

            <Container>
                <Row>
                    <div
                        style={{
                            width: "50%",
                            height: "400px",
                            backgroundColor: "red",
                            border: "5px solid gray"
                        }}
                    >
                        <Col>
                            <img
                                src={memeimage}
                                alt="Meme that reads the html does not need to load css & js if the html and css are in js"
                                style={{
                                    width: "500px",
                                    marginTop: "50px"
                                }}
                            />
                        </Col>
                    </div>
                    <div
                        style={{
                            width: "50%",
                            height: "400px",
                            backgroundColor: "red",
                            border: "5px solid black"
                        }}
                    >
                        <Col>
                            <h1
                                className="header"
                                style={{
                                    marginTop: "50px"
                                }}
                            >
                                Project Technologies:
                            </h1>
                            <ul>
                                <li>Typescript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Container>
            <hr></hr>
<<<<<<< HEAD
            <DoubleHalf></DoubleHalf>
=======
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
>>>>>>> upstream/task-forms
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <br />
            <RevealAnswer></RevealAnswer>
            <br />
            <StartAttempt></StartAttempt>
            <br />
            <TwoDice></TwoDice>
            <br />
            <CycleHoliday></CycleHoliday>
            <br />
            <Counter></Counter>
            <br />
        </div>
    );
}

export default App;
