import React from "react";
import { render } from "react-dom";
import Scoreboard from "./components/scoreboard";
import ScoringButtons from "./components/scoringButtons";

render(
    <div>
        <Scoreboard />
        <ScoringButtons />
    </div>,
    document.getElementById("app"));
