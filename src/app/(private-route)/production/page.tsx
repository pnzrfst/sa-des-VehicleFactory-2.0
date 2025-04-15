import MainPage from "@/components/MainPage"

export default function Production(){
    return (
        <section className="body">
            <MainPage namePage="Produção" moduloPage="Principal" header={[""]} isProduction = {true} numberProduction={1}></MainPage>
        </section>
    )
}