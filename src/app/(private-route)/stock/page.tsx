import './styles.css'

export default function Stock() {
    return (
        <section className="body-container">
            <header className="div-top">
                <h1>Estoque</h1>
                <span></span>
                <h3>Armazém principal</h3>
            </header>

            <div className="about-products">
                <p><strong>Descrição</strong></p>
                <p><strong>Código</strong></p>
                <p><strong>Unidade</strong></p>
                <p><strong>Estoque</strong></p>
                <p><strong>Ações</strong></p>

            </div>

            <section className="products-area">
                <ul>
                    {/* <li>
                        <button>Marcar</button>
                        <p><strong>Produto 1</strong></p>
                        <p>Exemplo001</p>
                        <p>un</p>
                        <p>900</p>
                        <span className="btns-actions-product">
                            <button>apagar</button>
                            <button>editar</button>
                        </span>
                    </li>
                    <li>
                        <button>Marcar</button>
                        <p><strong>Produto 1</strong></p>
                        <p>Exemplo001</p>
                        <p>un</p>
                        <p>900</p>
                        <span className="btns-actions-product">
                            <button>apagar</button>
                            <button>editar</button>
                        </span>
                    </li>
                    <li>
                        <button>Marcar</button>
                        <p><strong>Produto 1</strong></p>
                        <p>Exemplo001</p>
                        <p>un</p>
                        <p>900</p>
                        <span className="btns-actions-product">
                            <button>apagar</button>
                            <button>editar</button>
                        </span>
                    </li> */}
                    <li>
                        <button>Marcar</button>
                        <div className='name-and-qtd'>
                            <p><strong>Produto 1</strong></p>
                            <p>Exemplo001</p>
                            <p>un</p>
                            <p>900</p>

                        </div>
                        <span className="btns-actions-product">
                            <button>apagar</button>
                            <button>editar</button>
                        </span>
                    </li>
                </ul>
            </section>
        </section>
    )
}