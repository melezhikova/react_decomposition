//компонент для вывода одной новости

function News (props) {
    const { news } = props;
    
    return (
        <li className={props.className}>
            <div className="icon" style={{backgroundImage: news.icon}}></div>
            <a href={news.url}>{news.text}</a>
        </li>
    )
}

export default News;