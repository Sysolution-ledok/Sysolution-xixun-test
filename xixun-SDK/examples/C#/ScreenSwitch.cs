using System;
using System.Web.Script.Serialization;
using System.Net;
using System.Text;
using System.IO;
 
namespace TestApplication
{ 
	public class ScreenSwitchCommand
	{
		public string type { get {return "callCardService";} }
		public string fn { get {return "setScreenOpen";}}
		public bool arg1 { get; set; }
	}
	
	public class Test
	{
	   public static void Main()
	   {
			ScreenSwitchCommand cmd = new ScreenSwitchCommand();
			cmd.arg1 = true;  //check this
			JavaScriptSerializer jsonSerializer = new JavaScriptSerializer();
			string json = jsonSerializer.Serialize(cmd);
			Console.WriteLine(json);
			var url = "http://192.168.8.99:8080/command/y10-412-00333";   //check this
			var resJSON = HttpPost(url,json);
			Console.WriteLine(resJSON);
			Console.ReadLine();
	   }
	   
	   public static string HttpPost(string url, string postDataStr)
		{
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
			request.Method = "POST";
			request.ContentType = "application/json";
			request.Timeout = 90000;
			using (var streamWriter = new StreamWriter(request.GetRequestStream()))
			{
				streamWriter.Write(postDataStr);
				streamWriter.Flush();
				streamWriter.Close();
			}
			var httpResponse = (HttpWebResponse)request.GetResponse();
			using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
			{
				var result = streamReader.ReadToEnd();
				return result;
			}			
		}
	}
		
}