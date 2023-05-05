import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {

    const [clicks, setClicks] = useState({});
    const date = new Date().toLocaleDateString('en-CA');

    const getClicks = async () => {
        const resp = await fetch(`${window.api}/clicks/fetch?date=${date}`)
        const data = await resp.json();

        setClicks(data);
    }

    useEffect(() => {
        getClicks();
    }, []);

    const handleBtnClick = async (e) => {
        const resp = await fetch(`${window.api}/clicks/trigger`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date})
        });
        const data = await resp.json();

        setClicks(data);
    }

    useEffect(() => {
        console.log(clicks);
    }, [clicks]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-block text-center p-3">
                        <h1 className="fw-bold mb-3">ClickMe</h1>
                        <div className="h3 mb-4 mb-lg-5 total-clicks">
                            Total Clicks Today: <div className="cntr fw-bold">{Object.keys(clicks).length ? clicks.clicks_count : 0}</div>
                        </div>
                        <div className="mt-2">
                            <button onClick={handleBtnClick} type="button" className="btn btn-primary">Click Me!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
