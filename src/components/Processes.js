import '../css/Processes.css';
import ProcessItem from "./processItem";
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';

function Processes() {
    const token = useSelector(state => state.currentUser.token);
    const [processList, setProcessList] = useState([]);

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
        });
    }, []);

    const processListItems = processList.map((process) => 
        <ProcessItem key={process.id} />
    )

    return ( 
        <div className="processList">
            {processListItems}
        </div>
     );
}

export default Processes;