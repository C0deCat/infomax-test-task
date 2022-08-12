import '../css/Processes.css';
import ProcessItem from "./processItem";
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import Message from './Message';

function Processes() {
    const token = useSelector(state => state.currentUser.token);
    const [processList, setProcessList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(token),
            },
            body: JSON.stringify({
                query: `
                query {
                    processList {
                        id
                        name
                        numberOfExecutions
                        averageLeadTime
                        averageActiveTime
                        employeesInvolvedProcess
                        numberOfScenarios
                        start
                        end
                        loading
                    }
                }
                `,
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            setProcessList(result.data.processList)
        })
        .catch(() => {
            setErrorMessage("Нет соединения с сервером!")
        });
    }, [token]);

    const processListItems = processList.map((process) => 
        <ProcessItem 
        key={process.id} 
        name={process.name}
        numberOfExecutions={process.numberOfExecutions}
        averageLeadTime={process.averageLeadTime}
        averageActiveTime={process.averageActiveTime}
        employeesInvolvedProcess={process.employeesInvolvedProcess}
        numberOfScenarios={process.numberOfScenarios}
        start={process.start}
        end={process.end}
        loading={process.loading}
        />
    
    )

    const messageElem = errorMessage !== '' ? <Message containerClasses="messageContainer_processes" message={errorMessage} isError={true} /> : '';

    return ( 
        <div className="processList">
            {messageElem}
            {processListItems}
        </div>
     );
}

export default Processes;