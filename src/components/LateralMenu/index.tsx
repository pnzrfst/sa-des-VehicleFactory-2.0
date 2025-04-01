'use client'
import { FaCircleUser } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import './styles.css'

export default function LateralMenu() {
    return(
        <div className="lateral-menu">
        <header>
            <FaCircleUser size={85}></FaCircleUser>
            <h1>Seu perfil</h1>
        </header>
        <span className="line"></span>
        
        <section className='btns-actions'>
        <button className="template-btn"><FaArrowRight size={20}/>Estoque</button>
        <button className="template-btn"><FaArrowRight size={20}/>Produção</button>
        <button className="template-btn"><FaArrowRight size={20}/>Qualidade</button>
        <button className="template-btn"><FaArrowRight size={20}/>Manutenção</button>
        </section>
    </div>
    )
}