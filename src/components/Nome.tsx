export interface NomeProps{
    nome: string
}

export default function Nome(props: NomeProps){
    return(
        <div>
            <p>{props.nome}</p>
        </div>
    )
}