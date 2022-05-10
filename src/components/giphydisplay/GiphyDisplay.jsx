import "./giphydisplay.css";

const GiphyDisplay = ({gif}) => {
    if(gif) {
        return (
            <div className="giphy-display">  
            <h1>{gif.data.title}</h1>
            <img src={gif.data.images.downsized.url} alt={gif.data.title} />
            <h4>Rating: {gif.data.rating}</h4>
            </div>
        )
    // } else if(gif.data.rating == "g") {
    //     return(
    //     <>
    //      <h1>Explicit Content not allowed at General Assembly</h1>
    //     </>
    //     )
    // } 
    }  else {
        return (
        <div>
            <h1>Choose a gif or <italic>"jif"</italic> or whatever</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQsO3fR2C6inmLQg5OCdeQE1ep_PejZkx0A&usqp=CAU" alt="peanut butter" />
        </div>
        )
    }
}

export default GiphyDisplay;