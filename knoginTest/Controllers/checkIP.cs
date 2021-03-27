using Microsoft.AspNetCore.Mvc;
using RestSharp;
using Newtonsoft.Json;
using System;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;

namespace knoginTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class checkIP : Controller
    {
        [HttpPost]
        public ActionResult CheckIP(string[] ipList)
        {
            ObjectResult responseMessage;

            try
            {
                responseMessage = new OkObjectResult(readIPs(ipList));
            }
            catch(Exception e)
            {
                responseMessage = new ObjectResult(e.Message);
                responseMessage.StatusCode = 500;
            }
           
            return responseMessage;

        }


        public List<Dictionary<string, string>> readIPs(string[] ipList)
        {
            List<Dictionary<string, string>> dicArray = new List<Dictionary<string, string>>();

            foreach(var ip in ipList)
            {

                var client = new RestClient("https://api.abuseipdb.com/api/v2/check");
                var request = new RestRequest(Method.GET);
                request.AddHeader("Key", "bc7f42beeba6b703b9ac83f81f21748331c99bc24e8ecdfa8efd714a8d1003c05d0fd722b849f4df");
                request.AddHeader("Accept", "application/json");
                request.AddParameter("ipAddress", ip);
                request.AddParameter("maxAgeInDays", "90");
                request.AddParameter("verbose", "");

                IRestResponse response = client.Execute(request);

                dynamic parsedJson = JsonConvert.DeserializeObject(response.Content);

                string ipAddress = parsedJson.data.ipAddress;
                int abuseConfidenceScore = parsedJson.data.abuseConfidenceScore;
                string countryName = parsedJson.data.countryName;
                string lastReportedAt = parsedJson.data.lastReportedAt;
                string domain = parsedJson.data.domain;
                string isp = parsedJson.data.isp;
                string ipRisk = "";                

                if(abuseConfidenceScore >= 0 && abuseConfidenceScore <= 21)
                {
                    ipRisk = "Low";
                }
                if (abuseConfidenceScore > 23 && abuseConfidenceScore <= 47)
                {
                    ipRisk = "Medium";
                }
                if (abuseConfidenceScore > 47 && abuseConfidenceScore <= 73)
                {
                    ipRisk = "High";
                }
                if (abuseConfidenceScore > 73)
                {
                    ipRisk = "Critical";
                }

                Dictionary<string, string> dic = new Dictionary<string, string>();

                dic.Add("ipAddress", ipAddress);
                dic.Add("abuseConfidenceScore", abuseConfidenceScore.ToString());
                dic.Add("countryName", countryName);
                dic.Add("date", lastReportedAt);
                dic.Add("domain", domain);
                dic.Add("isp", isp);
                dic.Add("ipRisk", ipRisk);

                dicArray.Add(dic);
            }

            return dicArray;
        }
    }
}


