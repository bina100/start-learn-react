import React from "react";
import Counter from "./counter";
import Toggle from "./toggle";
import AppDate from "./appDate";
import SelectComp from "./selectComp";

export default function AppHooks() {
    return (
        <React.Fragment>
            <Counter />
            <hr />
            <Toggle />
            <hr />
            <AppDate />
            <hr />
            <SelectComp/>
        </React.Fragment>

    );
}

