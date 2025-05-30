import { Dialog } from "@mui/material";
import { Close } from "@mui/icons-material";
import './ModalMainPage_styles.css';

type ModalMainPageProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};

export function ModalMainPage({ open, handleClose, children }: ModalMainPageProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="closeModal" onClick={handleClose}>
                <Close />
            </div>
            <div className="container">
                {children}  
            </div>
        </Dialog>
    );
}

















// import { Dialog } from "@mui/material";
// import { Close } from "@mui/icons-material";
// import './styles.css';

// type ModalMainPageProps = {
//     open: boolean;
//     handleClose: () => void;
//     children: React.ReactNode;
// };

// export function ModalMainPage({ open, handleClose, children }: ModalMainPageProps) {
//     return (
//         <Dialog open={open} onClose={() => handleClose}>
//             <div className="close" onClick={() => handleClose}>
//                 <Close />
//             </div>
//             <div className="container">
//                 {children}  
//             </div>
//         </Dialog>
//     );
// }