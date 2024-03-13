import "./notificacao.css"

interface AlertProps {
    type: "error" | "sucess" | "notification",
    Close?: Function | any,
    titulo: string
}

const Alert = ({ Close, titulo, type }: AlertProps) => {
    switch(type) {
        case "error":
        case "sucess":
        case "notification":
    }

    return (
        <>
            <div className="modal-blur">
                <button onClick={Close}></button>
                <div className="info">
                    {titulo}
                </div>
            </div>
        </>
    )
}

export default Alert;