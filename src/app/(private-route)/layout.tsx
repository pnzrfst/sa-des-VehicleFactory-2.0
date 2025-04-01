import LateralMenu from "@/components/LateralMenu"
import './styles.css'

export default function PrivateLayout({ children }: { children: React.ReactNode}){
    return (
        <div className="layout">
            <LateralMenu></LateralMenu>
            {children}
        </div>
    )
}