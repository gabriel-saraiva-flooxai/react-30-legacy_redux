import React from "react";

import { childrenWithProps } from "../utils/reactUtils";

export default props => (
    <div>
        <h1>Família</h1>
        <div>
            { childrenWithProps(props.children, props) }
        </div>
    </div>
)