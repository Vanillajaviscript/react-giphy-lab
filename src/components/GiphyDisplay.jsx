

const GiphyDisplay = ({gif}) => {
    const {data} = gif;
    const {url, title} = gif;
        return (
            <div className="giphy-display">
             <h1>{data.title}</h1>
             <img src={data.url} alt={data.title} />
          
            </div>
        )
          
    }


export default GiphyDisplay;