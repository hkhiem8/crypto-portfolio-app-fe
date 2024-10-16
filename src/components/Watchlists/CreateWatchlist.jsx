import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as watchlistService from '../../services/watchlistService';

const CreateWatchlist = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const watchlist = await watchlistService.createWatchlist(formData.name, formData.description);
            console.log("Created Watchlist:", watchlist);

            // Navigate to the new watchlist via its ID
            navigate(`/watchlists/${watchlist._id}`);
        } catch (error) {
            throw error
        }
    };

    const { name, description } = formData

    return (
        <main className="modal">
            <h1>Create Watchlist</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input-divs">
                    <label htmlFor="name">Watchlist Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input-divs">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        name="description"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button>Create Watchlist</button>
                </div>
            </form>
        </main>
    );
};

export default CreateWatchlist;