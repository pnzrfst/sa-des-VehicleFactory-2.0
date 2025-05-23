import Button from '@/components/Button';
import './styles.css'
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneSharp  } from "react-icons/io5";
import { TbClockHour4Filled } from "react-icons/tb";

export default function Quality() {
    return (
        <section className="body-container">

            <div className="home-infos">
                <header>
                    <h1>Qualidade & Inspeções</h1>
                    <span></span>
                    <h3>Principal</h3>
                </header>
                <main className='main'>
                    <div className='filter'>
                        <button className='pending-button'><TbClockHour4Filled size={20}/>
                        Pendentes</button>
                        <button className='approved-button'><IoCheckmarkDoneSharp size={20} />Aprovados</button>
                        <button className='repproved-button'><MdClose size={20}/>Reprovados</button>
                    </div>
                    <div className="dashboard">

                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='item'>
                                <h1>Item na qualidade</h1>
                            </div>
                            <div className='buttons-area'>
                                <button className='approved'>Aprovado<FaCheck size={20} /></button>
                                <button className='repproved'>Reprovado <IoCloseCircleOutline size={20} /></button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>

    )
}