
export interface TelefoneProps{
    telefone: string
}


export default function Telefone(props: TelefoneProps){
    return(
        <div>
            <p>{props.telefone}</p>
        </div>
    )
}