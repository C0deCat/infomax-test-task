import { Link } from "react-router-dom";
import '../css/ProcessItem.css'

function ProcessItem() {
    return ( 
        <div className="processItem">
                <div className="processItem__header">
                    <h1 className="processItem__headerCaption">Рассмотрение кредитной заявки</h1>
                    <Link to={"/processes"} className="processItem__link processItem__link_disabled">На карту процесса</Link>
                </div>
                <div className="processItem__content">

                    <div className="processItem__flexColumn">
                        <div className="processItem__contentBlock repeatsIcon processItem__contentBlock_big">
                            <span className="processItem__contentBlockData processItem__contentBlockData_big">340 487</span>
                            <span className="processItem__contentBlockHint">выполнено раз</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn">
                        <div className="processItem__contentBlock clockIcon">
                            <span className="processItem__contentBlockData">10ч 36 мин</span>
                            <span className="processItem__contentBlockHint">среднее время выполнения</span>
                        </div>
                        <div className="processItem__contentBlock activeClockIcon">
                            <span className="processItem__contentBlockData">1ч 7 мин (10.5%)</span>
                            <span className="processItem__contentBlockHint">среднее активное время</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn">    
                        <div className="processItem__contentBlock employeesIcon">
                            <span className="processItem__contentBlockData">120 сотрудников</span>
                            <span className="processItem__contentBlockHint">участвует в процессе</span>
                        </div>
                        <div className="processItem__contentBlock scenarioIcon">
                            <span className="processItem__contentBlockData">129 сценариев</span>
                            <span className="processItem__contentBlockHint">в процессе</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn processItem__flexColumn_time">
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Начало</span>
                            <span className="processItem__timeBlockItemData">11 ноября 2017</span>
                        </div>
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Окончание</span>
                            <span className="processItem__timeBlockItemData">6 января 2018</span>
                        </div>
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Загрузка</span>
                            <span className="processItem__timeBlockItemData">10 января 2018</span>
                        </div>
                    </div>

                </div>
            </div>
     );
}

export default ProcessItem;