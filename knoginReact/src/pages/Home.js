import Charts from "../components/Charts";
import IpTable from "../components/table";
import {makeStyles} from '@material-ui/core';

import {useState, useEffect} from 'react';
import axios from 'axios';


const useStyles = makeStyles({
    wrapper: {
        display: 'flex'
    }
})


function Home() {

    const classes = useStyles();

    const [list, setList] = useState([]);
    let ips = [];
    useEffect(() => {
        axios.get('https://localhost:44318/api/logs').then(result => {
            setList(result.data);
        })  
    }, []);


    return(
        <div className={classes.wrapper}>
            <Charts ips = {list}> </Charts>
            <IpTable ips = {list}> </IpTable>
        </div>
    )
}

export default Home;