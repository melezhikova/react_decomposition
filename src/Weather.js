//виджет погоды

function Weather (props) {
    const { item } = props;
    return (
        <div className="weather">
            <div className="weatherIcon" style={{backgroundImage: item.image}}></div>
            <div className="temperature">{item.temperature}</div>
            <div className="weatherText">{item.text}</div>
        </div>
    )
}

export default Weather;