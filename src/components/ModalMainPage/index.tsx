import { Dialog } from "@mui/material";
import { Close } from "@mui/icons-material";
import './styles.css';

type ModalMainPageProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
    children: React.ReactNode;
};

export function ModalMainPage({ open, handleClose, children }: ModalMainPageProps) {
    return (
        <Dialog open={open} onClose={() => handleClose(false)}>
            <div className="close" onClick={() => handleClose(false)}>
                <Close />
            </div>
            <div className="container">
                {children}
            </div>
        </Dialog>
    );
}