import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // my favorite holidays are Easter, Independance Day, Halloween, Thanksgiving, and Christmas
    type Holiday =
        | "Easter"
        | "Independance Day"
        | "Halloween"
        | "Thanksgiving"
        | "Christmas";

    const [holiday, changeHoliday] = useState<Holiday>("Easter");

    type holidayOrder = Record<Holiday, Holiday>;

    const yearOrder: holidayOrder = {
        Easter: "Independance Day",
        "Independance Day": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Easter"
    };

    const alphOrder: holidayOrder = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "Independance Day",
        "Independance Day": "Thanksgiving",
        Thanksgiving: "Christmas"
    };

    type mapToEmoji = Record<Holiday, string>;

    const mapped: mapToEmoji = {
        Easter: "🐇",
        "Independance Day": "🦅",
        Halloween: "🎃",
        Thanksgiving: "🦃",
        Christmas: "🎄"
    };

    return (
        <div>
            <span>Holiday: {mapped[holiday]}</span>
            <Button
                onClick={() => {
                    changeHoliday(alphOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    changeHoliday(yearOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
