import { useState } from "react"

export default function Stats({ text }) {


    let numberOfCharacters = text.length
    let words = text.trim().split(" ")
    words = words.filter((item) => item != "")

    let FACEBOOK_LIMIT = 2200
    let INSTAGRAM_LIMIT = 280

    return (
        <>
            <section className="stats">
                <Stat number={words.length} label="Words" />
                <Stat number={numberOfCharacters} label="Characters" />
                <Stat number={FACEBOOK_LIMIT - numberOfCharacters} label="Facebook" />
                <Stat number={INSTAGRAM_LIMIT - numberOfCharacters} label="Instagram" />
            </section>
        </>
    )
}


function Stat({ number, label }) {

    return (
        <section className={`stat`} >
            <span className={`stat__number ${number < 0 ? 'stat__number--limit' : 'test'}`}>{number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )

}