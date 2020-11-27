using System.Net.Http;
using Newtonsoft.Json;
using static System.Console;

const string ENDPOINT = "http://192.168.8.99:8080/command/y10-412-00333";

HttpClient httpClient = new();

var command = new 
{
    type = "callCardService",
    fn = "setScreenOpen",
    arg1 = true
};

var json = JsonConvert.SerializeObject(command);
var content = new StringContent(json);
WriteLine(json);

var response = await httpClient.PostAsync(ENDPOINT, content);
WriteLine($"Status code: {response.StatusCode}, content: {response.Content}");
