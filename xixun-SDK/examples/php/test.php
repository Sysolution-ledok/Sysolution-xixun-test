<?php
$data = json_encode(array(
	'type' => 'loadUrl',
    'url' => 'http://192.168.8.99:8080/demo.html'
));

$response = Request::post("http://localhost:8080/command/y10-215-00159",$data);

echo $response;

class Request
{
    public static function post($url, $data)
    {
        $postdata = $data;
		
        $opts = array('http' =>

            array(

                'method' => 'POST',

                'header' => 'Content-type: application/json; charset=utf-8',

                'content' => $postdata

            )

        );

        $context = stream_context_create($opts);

        $result = file_get_contents($url, false, $context);

        return $result;
    }
}
?>