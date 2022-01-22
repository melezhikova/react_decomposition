//ссылка-кнопка для выбора из списка

function SimpleListItem (props) {
    
    return (
        <li className={props.className}>{props.text}</li>
    )
}

export default SimpleListItem;