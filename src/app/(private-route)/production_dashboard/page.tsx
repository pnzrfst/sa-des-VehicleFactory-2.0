'use client'


import './styles.css'
import Button from '@/components/Button';
import { TbDoorExit } from 'react-icons/tb';
import {  useRouter } from "next/navigation";
import { RiFunctionAddLine } from "react-icons/ri";


export default function Production_dashboard() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/production')
    }


    return (
        <section className="body-container">

            <div className="home-infos">
                <header>
                    <h1>Produção</h1>
                    <span></span>
                    <h3>Principal</h3>
                </header>
                <main className='main'>
                    <div className='filter-button'>
                        <button type='button' className='btns' onClick={handleNavigation}> <RiFunctionAddLine size={20}/></button>
                    </div>
                    <div className="dashboard">

                        <div className='card'>
                            <div className='item'>
                                <h1>Item em Produção</h1>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </section>

    )
}