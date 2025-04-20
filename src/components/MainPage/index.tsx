import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import './styles.css'

type MainPageProps = {
    namePage?: string;
    moduloPage?: string;
    header: string[];
    ulItens?: {
        li1: any;
        li2: any;
        li3: any;
        li4: any;
        li5?: any;
    }[],
    isProduction?: boolean
    numberProduction?: number
}



export default function MainPage({ namePage, moduloPage, header, ulItens, isProduction = false, numberProduction }: MainPageProps) {
    return (

        <section className="body-container">
            <header className="div-top">
                <h1>{namePage}</h1>
                <span></span>
                <h3>{moduloPage}</h3>
            </header>

            <div className="header">
                <ul>{}
                    <li>{header[0]}</li>
                    <li>{header[1]}</li>
                    <li>{header[2]}</li>
                    <li>{header[3]}</li>
                    <li>{header[4]}</li>
                    <li>{header[5]}</li>
                </ul>
            </div>
            {!isProduction ?
                (<div className="datagrid">
                    <ul>
                        {
                            ulItens?.map((item, index) => (
                                <li key={index}>
                                    <span className="select"></span>
                                    <span>{item.li1}</span>
                                    <span>{item.li2}</span>
                                    <span>{item.li3}</span>
                                    <span>{item.li4}</span>
                                    <div className='btns-action'>
                                        <button className='edit'><LuPencil size={25} color='white'></LuPencil></button>
                                        <button className='delete'><FaRegTrashCan size={25} color='white'></FaRegTrashCan></button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>)
                : (
                    <div className="formProd">
                        <form className="production-area">
                            <h3>Ordem de Produção Nº {numberProduction}</h3>

                            <div className="name-and-qtd">
                                <label htmlFor="text">Item para produção</label>
                                <input type="text" name="nameProduct" id="nameProduct" />
                                <label htmlFor="text">Quantidade</label>
                                <input type="number" name="qtdProduct" id="qtdProduct" />
                            </div>

                            <div className="itens-and-date">
                                <div className="composicao">
                                    <h3>Composição</h3>
                                    <div className="composicao-items">
                                        <p>aqui estará a composição do produto</p>

                                    </div>
                                    <IoMdAdd size={30} color="#1A73E8" id="btnIncrease"></IoMdAdd>
                                </div>

                                <div className="datas-btns">
                                    <label htmlFor="text">Data de ínicio</label>
                                    <input type="datetime-local" name="start" id="startProduction" />
                                    <label htmlFor="text">Data de término</label>
                                    <input type="datetime-local" name="end" id="endProduction" readOnly />


                                    <div className="btns-production-actions">
                                        <IoClose size={10} color="white" id="close"></IoClose>
                                        <button type="button">Produzir</button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                )

            }
        </section>
    )
}