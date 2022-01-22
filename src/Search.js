//компонент для отображения модуля поиска

function Search (props) {
    return (
        <form>
            <input className={props.className}></input>
            <button className={`btn ${props.className}`} type="submit">{props.btnText}</button>
            <div className="textUnderSearch">{`${props.textUnder} ${props.searchPhrase}`}</div>
        </form>
    )
}

export default Search;