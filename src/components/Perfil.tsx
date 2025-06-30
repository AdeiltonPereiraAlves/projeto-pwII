import Foto from "./Foto"
import Habilidade from "./Habilidade"
import Historico from "./Historico"
import Nome from "./Nome"
import Telefone from "./Telefone"

export interface PerfilProps{
    nome: string
    foto: string
    historico: string
    habilidades:string
    telefone:string
}


export default function Perfil(props: PerfilProps){
    return (
        <div>
           <Nome nome={props.nome}/>
           <Foto foto={props.foto}/>
           <Historico historico={props.historico}/>
           <Habilidade habilidade={props.habilidades} /> 
           <Telefone telefone={props.telefone}/>
        </div>
    )
}