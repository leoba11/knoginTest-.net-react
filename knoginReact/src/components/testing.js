import React, {useState, useEffect} from 'react';
import axios from 'axios';
import _ from 'underscore';


function Logs() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44318/api/logs').then(result => {
            setList(result.data);
        })  
    }, []);

    return <div> { console.log(_.countBy(list, function(list){ return list.clientip })) } </div>
}

export default Logs;