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
