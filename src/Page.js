import SimpleListItem from "./SimpleListItem";
import List from "./List";
import News from "./News";
import HeaderCard from "./HeaderCard";
import ThreePieceItemList from "./ThreePieceItemList";
import Search from "./Search";
import Weather from "./Weather";
import Widget from "./Widget";
import VideoListItem from "./VideoListItem";

function Page (props) {
    const { data } = props;

    return (
        <main>
            <header>
                <div>
                    <div className="topLinks">
                        <List className="topLinks" items={data.topLinks}>
                            {items => items.map((elem, index) => 
                                <SimpleListItem key={index} className="topLink" text={elem} />
                            )}
                        </List>
                        <div>{data.dateToday}</div>
                    </div>
                    <List className="newsList" items={data.news}>
                        {items => items.map((item, index) => 
                            <News key={index} news={item} />
                        )}
                    </List>
                    <List className="ratesList" items={data.rates}>
                        {items => items.map((elem, index) => 
                            <ThreePieceItemList key={index} className="rateLi" item={elem} />
                        )}
                    </List>
                </div>
                <HeaderCard card={data.headerCard} />
            </header>
            <div className="mainContainer">
                <div className="logo">Логотип</div>
                <div>
                    <article>
                        <List className="middleLinks" items={data.middleLinks}>
                            {items => items.map((elem, index) => 
                                <SimpleListItem key={index} className="middleLink" text={elem} />
                            )}
                        </List>
                        <Search className="mainSearch" btnText="Найти" textUnder="Найдется всё. Например," 
                        searchPhrase={data.searchPhrase} />
                    </article>   
                    <article className="widgets">
                        <div>
                            <Widget name="Погода" item={data.weather}>
                                {item => <Weather item={item} />}
                            </Widget>
                            <Widget name="Посещаемое" item={data.visited}>
                                {item => <List className="visited" items={item}>
                                    {items => items.map((elem, index) => 
                                        <ThreePieceItemList key={index} className="vizitedItem" item={elem} />
                                    )}
                                </List>}
                            </Widget>
                        </div>
                        <div>
                            <Widget name="Карта Екатеринбурга" item={data.mapLinks}>
                                {item => <List className="map" items={item}>
                                    {items => items.map((elem, index) => 
                                        <SimpleListItem key={index} className="mapLink" text={elem} />
                                    )}
                                </List>}
                            </Widget>
                            <Widget name="Телепрограмма" item={data.TVProgram}>
                                {item => <List className="tv" items={item}>
                                    {items => items.map((elem, index) => 
                                        <ThreePieceItemList key={index} className="tvprogramm" item={elem} />
                                    )}
                                </List>}
                            </Widget>
                        </div>
                        <div>
                            <Widget name="Эфир" item={data.video}>
                                {item => <List className="videos" items={item}>
                                    {items => items.map((elem, index) => 
                                        <VideoListItem key={index} className="video" item={elem} />
                                    )}
                                </List>}
                            </Widget>
                        </div>
                    </article>
                </div>       
            </div>
                 
        </main>
    )
}

export default Page;