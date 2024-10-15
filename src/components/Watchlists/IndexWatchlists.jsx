import { Link } from 'react-router-dom';

const IndexWatchlists = ({ watchlists }) => {

    return (
        <div>
            <h1>Your Watchlists</h1>
            {watchlists.length > 0 ? (
                <ul>
                    {watchlists.map((watchlist) => (
                        <li key={watchlist._id}>
                            <Link to={`/watchlists/${watchlist._id}`}>{watchlist.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No watchlists found.</p>
            )}
        </div>
    );
};

export default IndexWatchlists;
