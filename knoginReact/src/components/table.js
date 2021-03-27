import {makeStyles} from '@material-ui/core';
import _ from 'underscore';

// import {useState, useEffect} from 'react';

let data = [
    {
        "ipAddress": "83.149.9.216",
        "abuseConfidenceScore": "0",
        "countryName": "Russian Federation",
        "date": null,
        "domain": "megafon.ru",
        "isp": "PJSC MegaFon",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "45.142.120.192",
        "abuseConfidenceScore": "21",
        "countryName": "Russian Federation",
        "date": "03/25/2021 19:06:39",
        "domain": "ntx.ru",
        "isp": "NTX Technologies S.R.O.",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "24.236.252.67",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "spectrum.com",
        "isp": "Charter Communications Inc",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "93.114.45.13",
        "abuseConfidenceScore": "0",
        "countryName": "Romania",
        "date": null,
        "domain": "voxility.com",
        "isp": "Voxility SRL in the datacenter located in",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "66.249.73.135",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": "01/31/2021 05:24:15",
        "domain": "google.com",
        "isp": "Google LLC",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "50.16.19.13",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "amazon.com",
        "isp": "Amazon Data Services NoVa",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "66.249.73.185",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": "02/09/2021 23:13:37",
        "domain": "google.com",
        "isp": "Google LLC",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "110.136.166.128",
        "abuseConfidenceScore": "0",
        "countryName": "Indonesia",
        "date": null,
        "domain": "telkom.co.id",
        "isp": "PT Telkom Indonesia",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "46.105.14.53",
        "abuseConfidenceScore": "0",
        "countryName": "France",
        "date": null,
        "domain": "ovh.com",
        "isp": "OVH SAS",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "123.125.71.35",
        "abuseConfidenceScore": "0",
        "countryName": "China",
        "date": null,
        "domain": "baidu.com",
        "isp": "Beijing Baidu Netcom Science and Technology Co. Ltd.",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "50.150.204.184",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "comcast.net",
        "isp": "Comcast Cable Communications LLC",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "207.241.237.225",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "archive.org",
        "isp": "Internet Archive",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "200.49.190.101",
        "abuseConfidenceScore": "0",
        "countryName": "Guatemala",
        "date": null,
        "domain": "tigo.net.gt",
        "isp": "NAT Red Movil 3G",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "200.49.190.100",
        "abuseConfidenceScore": "0",
        "countryName": "Guatemala",
        "date": null,
        "domain": "tigo.net.gt",
        "isp": "NAT Red Movil 3G",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "67.214.178.190",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "colostore.com",
        "isp": "Colostore.com",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "207.241.237.220",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "archive.org",
        "isp": "Internet Archive",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "207.241.237.227",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "archive.org",
        "isp": "Internet Archive",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "91.177.205.119",
        "abuseConfidenceScore": "0",
        "countryName": "Belgium",
        "date": null,
        "domain": "belgacom.be",
        "isp": "Proximus NV",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "207.241.237.228",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "archive.org",
        "isp": "Internet Archive",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "207.241.237.101",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "archive.org",
        "isp": "Internet Archive",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "87.169.99.232",
        "abuseConfidenceScore": "0",
        "countryName": "Germany",
        "date": null,
        "domain": "telekom.de",
        "isp": "Deutsche Telekom AG",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "209.85.238.199",
        "abuseConfidenceScore": "0",
        "countryName": "United States of America",
        "date": null,
        "domain": "google.com",
        "isp": "Google LLC",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "81.220.24.207",
        "abuseConfidenceScore": "0",
        "countryName": "France",
        "date": null,
        "domain": "sfr.net",
        "isp": "SFR SA",
        "ipRisk": "Low"
    },
    {
        "ipAddress": "218.30.103.62",
        "abuseConfidenceScore": "0",
        "countryName": "China",
        "date": null,
        "domain": "bjtelecom.net",
        "isp": "ChinaNet IDC Center",
        "ipRisk": "Low"
    }
]

const useStyles = makeStyles({
    card: {
        border: '1px solid #F2F2F2',
        borderRadius: '15px',
        padding: '1.5em',
        marginRight: '56px'
    },

    wrapper: {
        textAlign: 'left'
    },

    title: {
        marginTop:'66px',
        marginBottom: '48px'
    }
});

function IpTable(ips) {

    const classes = useStyles();

    // const [ipInfo, setIpInfo] = useState([]);

    const y = ips.ips;
    const unique = _.keys(_.countBy(y, function(y){ return y.clientip }));

    // useEffect(() => {
    //     axios.post("https://localhost:44318/api/checkip", {"data": unique}).then(result => {
    //         setIpInfo(result.data);
    //     })  
    // }, []);

    return (
        <div className={classes.wrapper}>
            {console.log(unique)}
            <h1 className={classes.title}>Events Log Table</h1>
            <div className={classes.card}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Total Events</th>
                        <th scope="col">Source IP</th>
                        <th scope="col">Country</th>
                        <th scope="col">Domain</th>
                        <th scope="col">ISP</th>
                        <th scope="col">Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => { 
                            return(
                                <tr key={row.ipAddress}>
                                    <th scope="row">{row.date}</th>
                                    <td>100</td>
                                    <td>{row.ipAddress}</td>
                                    <td>{row.countryName}</td>
                                    <td>{row.domain}</td>
                                    <td>{row.isp}</td>
                                    <td>{row.ipRisk}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IpTable;