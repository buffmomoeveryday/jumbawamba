import { useState } from "react"
import TextArea from "./TextArea"
import Stats from "./Stats"

export default function Container() {
    const [text, setText] = useState("")

    return (
        <main className="container">
            <TextArea text={text} setText={setText} />
            <Stats text={text} />
        </main>
    )
}