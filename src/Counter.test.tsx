import { Counter } from "./Counter";
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";

beforeEach(() => {
    render(<Counter />);
    console.log(screen);
});
