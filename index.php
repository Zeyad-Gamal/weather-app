<?php
header('Content-Type: application/json');

$curl = curl_init();


$lat = '26.2540493'; // Latitude of Cairo
$lon = '29.2675469'; // Longitude of Cairo
$start_date = '2025-03-07';
$end_date = '2025-04-15';


curl_setopt_array($curl, [
    CURLOPT_URL => "https://meteostat.p.rapidapi.com/stations/daily?station=62432&start=2024-03-01&end=2024-04-25",
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
