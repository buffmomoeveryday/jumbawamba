import { useState } from "react"
import Warning from "./Warning";

export default function TextArea({text,setText}) {

    const [showWarining, setShowWarning] = useState(false)
    const [message, setMessage] = useState("Forbidden Words Included ")

    const handleChange = (event) => {

        let newText = event.target.value;
        console.log(newText)
        let forbiddenWords = ['<script>', '@', 'ayush']

        let condition = forbiddenWords.some((word) => newText.toLowerCase().includes(word.toLowerCase()));
        if (condition) {
            let item = forbiddenWords.find((word) => newText.toLowerCase().includes(word));
            newText = newText.replace(item, '')
            setText(newText)
            setShowWarning(true)
            setMessage(`No '${item}' allowed`)
            return
        }
        if (showWarining === true) {
            setShowWarning(false)
        }
        setText(newText)
    }

    return (
        <>
            <textarea spellCheck={false} placeholder="Enter your text..." rows={12} className="textarea"
                onChange={handleChange}
                value={text}
            ></textarea>
            <Warning showWarning={showWarining} message={message} />
        </>
    )
}