export interface FotoProps{
    foto: string
}

export default function Foto(props: FotoProps){
    return (
        <div>
            <img src={props.foto} alt="img" />
        </div>
    )
}