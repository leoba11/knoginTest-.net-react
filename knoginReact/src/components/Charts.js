import Chart from "react-google-charts";
import {makeStyles} from '@material-ui/core';
import _ from 'underscore';

const useStyles = makeStyles({
    card: {
        border: '1px solid #F2F2F2',
        borderRadius: '15px',
        height: '150px',
        width: '500px',
        marginRight: '40px', 
    },
    wrapper: {
        textAlign: 'left',
        marginLeft: '56px'
    },
    title: {
        marginTop:'66px',
        marginBottom: '48px'
    },
    chartCard: {
        border: '1px solid #F2F2F2',
        borderRadius: '15px',
        marginTop: '40px',
        width: '500px',
        marginRight: '40px'
    },

    wrapCharts: {
        display: 'flex'
    }
})

function Charts(ips) {

    const classes = useStyles();
    const y = ips.ips;
    const unique = _.keys(_.countBy(y, function(y){ return y.clientip }))

    return(
        <div className={classes.wrapper}> 
            <h1 className={classes.title}>Events Log Summary</h1>

            <div className={classes.wrapCharts}>
                <div className={classes.card}>
                    <img src='Events.svg'></img>
                    <p style={{fontSize: "32px"}} >{ips.ips.length}</p>
                    <p style={{fontSize: "16px"}}> Total Events</p>
                </div>

                <div className={classes.card}>
                    <img src='Sources.svg'></img>
                    <p style={{fontSize: "32px"}} >{unique.length}</p>
                    <p style={{fontSize: "16px"}}> Unique IPs</p>
                </div>

            </div>

            <div className={classes.wrapCharts}>
            <div className={classes.chartCard}>
                <Chart
                    width={'490px'}
                    height={'800px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Severity'],
                        ['Low', 2],
                        ['Medium', 2],
                        ['High', 2],
                        ['Critical', 7],
                    ]}
                    options={{
                        title: 'Severity Count',
                        // Just add this option
                        legend: { 
                            position: "bottom",
                        },
                        colors: ["#005989", "#0095C7", "#00BEDB", "#06D6A0", "#09E0D3", "#2D3B64",
                        "#7AD980", "#D6D961", "#FFD166"],
                        pieHole: 0.4,
                    }}

                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
           
            <div className={classes.chartCard}>
                <Chart
                    width={'490px'}
                    height={'800px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Canada', 2],
                        ['Ireland', 2],
                        ['China', 2],
                        ['Costa Rica', 7],
                    ]}
                    options={{
                        title: 'IPs per Country',
                        legend: {
                            position: "bottom"
                        },
                        colors: ["#005989", "#0095C7", "#00BEDB", "#06D6A0", "#09E0D3", "#2D3B64",
                        "#7AD980", "#D6D961", "#FFD166"],
                        pieHole: 0.4,
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
            </div>
        </div>
    )
}


export default Charts;