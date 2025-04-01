import './styles.css'

type buttonProps ={
    src: string;
    dataType:'register-button' | 'basic-button' | 'browser-btton'
}

export default function Button({src,dataType}:buttonProps) {
    return (
        <button  className={dataType}>{src}</button>
    )
}