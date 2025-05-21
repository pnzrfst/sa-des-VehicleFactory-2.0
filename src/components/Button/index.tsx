import './styles.css'

type ButtonProps = {
    src: string;
    dataType: 'register-button' | 'basic-button' | 'browser-btton';
    onClick?: () => void; // <- nova prop opcional
  }
  
  export default function Button({ src, dataType, onClick }: ButtonProps) {
    return (
      <button className={dataType} onClick={onClick}>
        {src}
      </button>
    )
  }