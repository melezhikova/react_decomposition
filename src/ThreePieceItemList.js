//компонент для вывода элемента списка, состоящего из 3-х частей

function ThreePieceItemList (props) {
    const { item } = props;

    return (
        <li>
            <a className={`link ${props.className}`} href={item.url}>
                <div className={`${props.className} begin`}>{item.begin}</div>
                <div className={`${props.className} middle`}>{item.middle}</div>
                <div className={`${props.className} end`}>{item.end}</div>
            </a>
        </li>
    )
}

export default ThreePieceItemList;