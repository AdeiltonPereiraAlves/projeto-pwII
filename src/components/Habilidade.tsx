export interface habilidadeProps {
    habilidade: string
}

export default function habilidade(props: habilidadeProps){
    return(
        <div>
           {props.habilidade}
        </div>
    )
}