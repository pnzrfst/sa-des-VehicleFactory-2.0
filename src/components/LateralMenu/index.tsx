'use client'
import { FaCircleUser } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation"
import './styles.css'
import Link from "next/link";

export default function LateralMenu() {
    const pathName = usePathname();

    const itens = [
        {
            label: "Início",
            page: '/mainpage',
        },
        {
            label: "Manutenção",
            page: '/maintenance',
        },
        {
            label: "Produção",
            page: '/production',
        },
        {
            label: "Estoque",
            page: '/stock',
        },
        {
            label: "Qualidade",
            page: '/quality',
        },
    ]


    return (
        <div className="lateral-menu">
            <header>
                <FaCircleUser size={85}></FaCircleUser>
                <h1>Seu perfil</h1>
            </header>
            <span className="line"></span>

            <section className='btns-actions'>

                {itens.map(item => (
                    <Link
                        key={item.label}
                        href={item.page}
                        className="btn-link"
                        style={{ textDecoration: 'none' }}
                    >
                    
                        <button><FaArrowRight size={20}/>{item.label}</button>
                    </Link>
                ))}

            </section>

            {/* <section className='btns-actions'>
        <button className="template-btn"><FaArrowRight size={20}/>Estoque</button>
        <button className="template-btn"><FaArrowRight size={20}/>Produção</button>
        <button className="template-btn"><FaArrowRight size={20}/>Qualidade</button>
        <button className="template-btn"><FaArrowRight size={20}/>Manutenção</button>
        </section> */}
        </div>
    )
}