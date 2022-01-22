//компонент для вывода элемента списка из 3-х частей с иконкой в первой части

function VideoListItem (props) {
    const { item } = props;
    return (
        <li className={props.className}>
            <a className={props.className} href={item.url}>
                <div className="icon" style={{backgroundImage: item.img}}></div>
                <div>{item.body}</div>
                <div>{item.source}</div>
            </a>
        </li>
    )
}

export default VideoListItem;