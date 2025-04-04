import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import './styles.css'

type MainPageProps = {
    namePage : string;
    moduloPage: string;
    header: string[];
    ulItens: {
        li1: any;
        li2: any;
        li3: any;
        li4: any;
        li5?: any;
    }
}



export default function MainPage({namePage, moduloPage, header, ulItens} : MainPageProps){
    return(
        
        <section className="body-container">
            <header className="div-top">
                <h1>{namePage}</h1>
                <span></span>
                <h3>{moduloPage}</h3>
            </header>

            <div className="header">
                <ul>
                    <li>{header[0]}</li>
                    <li>{header[1]}</li>
                    <li>{header[2]}</li>
                    <li>{header[3]}</li>
                    <li>{header[4]}</li>
                    <li>{header[5]}</li>
                </ul>
            </div>

            <div className="datagrid">
                <ul>
                    <li><button className='select'></button></li>
                    <li>{ulItens.li1}</li>
                    <li>{ulItens.li2}</li>
                    <li>{ulItens.li3}</li>
                    <li>{ulItens.li4}</li>
                    <li className='btns-action'>
                        <button className='edit'><LuPencil size={25} color='white'></LuPencil></button>
                        <button className='delete'><FaRegTrashCan size={25} color='white'></FaRegTrashCan></button>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}