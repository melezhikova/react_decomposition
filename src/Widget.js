//компонент для отобращения виджетов под основным поиском

function Widget (props) {
    console.log(props);
    return (
        <div className="widget">
            <h3 className="widgetTitle">{props.name}</h3>
            {props.children(props.item)}
        </div>
    )
}

export default Widget;