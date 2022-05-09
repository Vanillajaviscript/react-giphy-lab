import {useState} from "react";


const Button = (props) => {
    const [gifState, setGifState] = useState(null);
    const handleClick = () => {
        props.getGiphy(gifState);
        setGifState(gifState)
    }

    return (
        <div className="button">
           <button onClick={() => {handleClick()}} >Get Gif!</button>
        </div>
    )
}

export default Button;