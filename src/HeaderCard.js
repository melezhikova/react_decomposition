//компонент для виджета в вернем правом углу

function HeaderCard (props) {
    const { card } = props;

    return (
        <div>
            <img src={card.img} className="card-img-top" alt={card.description}></img>
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
            </div>
        </div>
    )
}

export default HeaderCard;