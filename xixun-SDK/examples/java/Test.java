import java.io.IOException;

import com.google.gson.Gson;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;


public class Test {
	
	public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	private OkHttpClient client = new OkHttpClient();
	
	public String post(String url, String json) throws IOException {
		  RequestBody body = RequestBody.create(JSON, json);
		  Request request = new Request.Builder()
		      .url(url)
		      .post(body)
		      .build();
		  Response response = client.newCall(request).execute();
		  return response.body().string();
		}
	
	public static void main(String[] args) {
		Gson gson = new Gson();
		RequestData data = new RequestData();
		String jsonData = gson.toJson(data);
		Test test = new Test();
		String url = "http://192.168.8.99:8080/command/y10-215-00159"; //check this
		String result;
		try {
			result = test.post(url, jsonData);
			System.out.print(result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	
	}
	
}
