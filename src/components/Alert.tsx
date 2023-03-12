import React from "react";
type Props = {
    message: string
}
export const Alert: React.FC<Props> = ({message}) => {
    return <p style={{border: "solid 1px red", color: "red"}}>{message}</p>
}