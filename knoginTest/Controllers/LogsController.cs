using GrokNet;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace knoginTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogsController : ControllerBase
    {
        [HttpGet]
        public ActionResult readLogs()
        {
            ObjectResult responseMessage;

            try
            {
                responseMessage = new OkObjectResult(readLogFile());
            } 
            catch(Exception e)
            {
                responseMessage = new ObjectResult(e.Message);
                responseMessage.StatusCode = 500;
            }

            return responseMessage;
        }

        public List<Dictionary<string, string>> readLogFile()
        {
            List<Dictionary<string, string>> dicArray = new List<Dictionary<string, string>>();

            string text = System.IO.File.ReadAllText(@".\Files\apache_logs.txt");
            string[] array = text.Split(new char[] { '\n' });

            Grok grok = new Grok("%{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] \"%{WORD:verb} %{DATA:request}HTTP/%{NUMBER:httpversion}\" %{NUMBER:response:int} (?:-|%{NUMBER:bytes:int}) %{QS:referrer} %{QS:agent}");

            foreach (var line in array)
            {
                var response = grok.Parse(line);

                Dictionary<string, string> dic = new Dictionary<string, string>();

                foreach(var match in response)
                {
                    dic.Add(match.Key, match.Value?.ToString());
                }

                dicArray.Add(dic);
            }

            return dicArray;
        }

    }
}
