import { RiSearchEyeLine } from "react-icons/ri";
import { TextField } from "@mui/material";
import './styles.css';

export function ProductionForm() {
    return (
        <div className="form-container">
            <h1>Composição</h1>

            <label htmlFor="search-input" className="input-label">
                Digite o que deseja procurar:
            </label>

            <div className="input-group">
                <TextField
                    id="search-input"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <button className="search-button">
                    <RiSearchEyeLine size={20} color="#ffffff" />
                </button>
            </div>
        </div>
    );
}

