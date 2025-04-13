<?php
header('Content-Type: application/json');

$curl = curl_init();


$lat = '30.0444'; // Latitude of Cairo
$lon = '31.2357'; // Longitude of Cairo
$start_date = '2025-04-07';
$end_date = '2025-04-14';


curl_setopt_array($curl, [
    CURLOPT_URL => "https://meteostat.p.rapidapi.com/point/daily?lat=$lat&lon=$lon&start=$start_date&end=$end_date",
    // CURLOPT_URL => "https://api.opencagedata.com/geocode/v1/json?q=Berlin&key=219a711761dc4cf1afe5fbd7d07944bf",

    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "x-rapidapi-host: meteostat.p.rapidapi.com",
        "x-rapidapi-key: 5e82e7d630msh66565de4429c392p1a2b21jsnbb38fe28d1aa",
        "Accept: application/json"

    ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo ($response);
