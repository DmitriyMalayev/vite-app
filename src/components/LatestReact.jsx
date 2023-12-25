import {lazy, Suspense, useState, useTransition} from "react";

const SlowComp = lazy(() => import("./SlowComp.jsx"))
const LatestReact = () => {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])
    const [isPending, startTransition] = useTransition()
    const [show, setShow] = useState(false)
    const handleChange = (e) => {
        setText(e.target.value)
        startTransition(() => {
            const newItems = Array.from({length: 3000}, (_, index) => {
                return (
                    <div key={index}>
                        <img src={"public/vite.svg"} alt={""}/>
                    </div>
                )
            })
            setItems(newItems)
        })
    }

    return (
        <Suspense fallback={<h4>Loading</h4>}>
            <section>
                <form className={"form"}>
                    <input type={"text"} className={"form-input"} value={text} onChange={handleChange}/>
                </form>
                <h4>Items</h4>
                {isPending
                    ? <h4>Loading... </h4>
                    : <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            marginTop: "2rem"
                        }}>
                        {items}
                    </div>
                }
                <button onClick={() => setShow(!show)} className={"btn"}>Toggle</button>
                {show && <SlowComp/>}
            </section>
        </Suspense>

    );
};

export default LatestReact;