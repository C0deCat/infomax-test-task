import { Link } from "react-router-dom";
import '../css/ProcessItem.css'
import moment from 'moment';
import 'moment/locale/ru';

function getDuration(durationInMs) {
    const duration = moment.duration(durationInMs);
    const totalHours = Math.floor(duration.asHours());
    const minutes = duration.minutes();

    const hoursString = totalHours > 0 ? `${totalHours} ч` : "";
    const minutesString = minutes > 0 ? `${minutes} мин` : "";

    return hoursString + " " + minutesString;
}

function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

function ProcessItem(props) {
    moment.locale('ru');

    const name = props.name;
    const numberOfExecutions = props.numberOfExecutions.toLocaleString('ru-RU');
    const averageLeadTime = getDuration(props.averageLeadTime);
    const averageActiveTime = `${getDuration(props.averageActiveTime)} (${
        (parseInt(props.averageActiveTime, 10) / parseInt(props.averageLeadTime, 10)*100).toFixed(1)
    }%)`;
    const employeesInvolvedProcess = `${props.employeesInvolvedProcess} ${declOfNum(props.employeesInvolvedProcess, ['сотрудник', 'сотрудника', 'сотрудников'])}`;
    const numberOfScenarios = `${props.numberOfScenarios} ${declOfNum(props.numberOfScenarios, ['сценарий', 'сценария', 'сценариев'])}`

    const start = moment.unix(parseInt(props.start, 10)).format("D MMMM YYYY");
    const end = moment.unix(parseInt(props.end, 10)).format("D MMMM YYYY");
    const loading = moment.unix(parseInt(props.loading, 10)).format("D MMMM YYYY");

    return ( 
        <div className="processItem">
                <div className="processItem__header">
                    <h1 className="processItem__headerCaption">{name}</h1>
                    <Link to={"/processes"} className="processItem__link processItem__link_disabled">На карту процесса</Link>
                </div>
                <div className="processItem__content">

                    <div className="processItem__flexColumn">
                        <div className="processItem__contentBlock repeatsIcon processItem__contentBlock_big">
                            <span className="processItem__contentBlockData processItem__contentBlockData_big">{numberOfExecutions}</span>
                            <span className="processItem__contentBlockHint">выполнено раз</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn">
                        <div className="processItem__contentBlock clockIcon">
                            <span className="processItem__contentBlockData">{ averageLeadTime }</span>
                            <span className="processItem__contentBlockHint">среднее время выполнения</span>
                        </div>
                        <div className="processItem__contentBlock activeClockIcon">
                            <span className="processItem__contentBlockData">{ averageActiveTime }</span>
                            <span className="processItem__contentBlockHint">среднее активное время</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn">    
                        <div className="processItem__contentBlock employeesIcon">
                            <span className="processItem__contentBlockData">{ employeesInvolvedProcess }</span>
                            <span className="processItem__contentBlockHint">участвует в процессе</span>
                        </div>
                        <div className="processItem__contentBlock scenarioIcon">
                            <span className="processItem__contentBlockData">{ numberOfScenarios }</span>
                            <span className="processItem__contentBlockHint">в процессе</span>
                        </div>
                    </div>

                    <div className="processItem__flexColumn processItem__flexColumn_time">
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Начало</span>
                            <span className="processItem__timeBlockItemData">{start}</span>
                        </div>
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Окончание</span>
                            <span className="processItem__timeBlockItemData">{end}</span>
                        </div>
                        <div className="processItem__timeBlockItem">
                            <span className="processItem__timeBlockItemHint">Загрузка</span>
                            <span className="processItem__timeBlockItemData">{loading}</span>
                        </div>
                    </div>

                </div>
            </div>
     );
}

export default ProcessItem;