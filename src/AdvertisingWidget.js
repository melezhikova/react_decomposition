//компонент для отображения рекламного баннера

function AdvertisingWidget (props) {
    <div className={props.className} style={{backgroundImage: props.url}}>
        <button type="button" className={props.className}>{props.btnText}</button>
    </div>
}

export default AdvertisingWidget;