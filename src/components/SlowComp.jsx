import {useState} from 'react';

const newItems = Array.from({length: 3000}, (_, index) => {
    return (
        <div key={index}>
            <img src={"../assets/react.svg"} alt={""}/>
        </div>
    )
})

const SlowComp = () => {
    const [items, setItems] = useState(newItems)

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem"
        }}>
            {items}
        </div>
    );
};

export default SlowComp;