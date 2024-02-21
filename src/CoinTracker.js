import { useEffect, useState } from "react";

function ConinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setConins]  = useState([]);
    const [amount, setAmount]  = useState(100);
    const [selectedCoin, setSelectedCoin] = useState({});
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then(json => {
            setConins(json);
            setLoading(false);
        }); 
    }
    , []);
    // console.log(coins);
    const onChangeAmount = (event) => {
        setAmount(event.target.value);
    }
    const onChangeCoin = (selectedVal) => {
        if(selectedVal !== undefined && selectedVal > -1) {
            console.log("selectedVal:", selectedVal);
            setSelectedCoin(coins[selectedVal]);
        }
    }
    // console.log("selectedCoin:", selectedCoin);
    // console.log("name:", selectedCoin.name);
    return (
        <div>
            <h1>The Conins!({coins.length})</h1>
            {loading ? 
                <strong>Loading...</strong> :
                <select onChange={e => onChangeCoin(e.target.value)}>
                <option key="default" value="-1">Select Coin</option>
                {coins.map((coin, idx) => (
                    <option key={coin.id} value={idx}> 
                        {coin.name} ({coin.symbol})
                    </option>
                ))}
            </select> 
            }
            
            <hr />
            <label>How much:
            <input
                value={amount}
                onChange={onChangeAmount} 
                type="text" 
                placeholder="Write How much" />
            $
            </label>
            <hr />
            <div> 
            {selectedCoin.quotes !== undefined ? `You can get ${amount / selectedCoin.quotes.USD.price}` : "Select Coin"}
            </div>
        </div>
    )
}

export default ConinTracker;