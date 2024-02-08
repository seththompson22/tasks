import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import memeimage from "./assets/meme-image.png";

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
                    <Col>
                        <img
                            src={memeimage}
                            alt="Meme that reads the html does not need to load css & js if the html and css are in js"
                        />
                    </Col>
                    <Col>
                        <h1 className="header">Project Technologies:</h1>
                        <ul>
                            <li>Typescript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
