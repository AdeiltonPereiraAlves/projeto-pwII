
export interface historicoProps{
  historico: string
}


export default function Historico(props: historicoProps){
    return(
        <div>
            <p>{props.historico}</p>
        </div>
    )
}