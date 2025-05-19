import React from "react";

export default function Member(props) {
    return (
        <div>
            {props.name} <strong> {props.lastName} </strong>
        </div>
    )
}