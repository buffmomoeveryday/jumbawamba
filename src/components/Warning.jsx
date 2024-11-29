export default function Warning({ showWarning, message }) {
    if (!showWarning) {
        return null
    } else {
        return (
            <>
                <p className="warning">{message}</p>
            </>
        )
    }
}