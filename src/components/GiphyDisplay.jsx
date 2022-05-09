

const GiphyDisplay = ({gif}) => {
    if(gif) {
        return (
            <div className="giphy-display">  
            <h1>{gif.data.title}</h1>
            <img src={gif.data.url} alt={gif.data.title} />
            </div>
        )
    }
          
    }


export default GiphyDisplay;