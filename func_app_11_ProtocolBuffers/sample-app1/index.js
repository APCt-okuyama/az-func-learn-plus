console.log('test start...');

var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var requestSettings = {
    method: 'GET',
    //url: 'URL OF YOUR GTFS-REALTIME SOURCE GOES HERE',
    //url: 'https://funcstorage0001.z11.web.core.windows.net/agency.txt',
    //url: 'https://funcstorage0001.z11.web.core.windows.net/GTFS-JP.zip',
    //
    // (宇野バス) GTFS  Realtimeデータのサンプル 
    // http://www3.unobus.co.jp/opendata/
    //url: 'http://www3.unobus.co.jp/GTFS/GTFS_RT-VP.bin',
    //
    // (北海道拓殖バス オープンデータ（GTFS）)
    // https://www.takubus.com/オープンデータ
    //url: 'http://takubus.bustei.net/TripUpdate.pb',
    url: 'http://takubus.bustei.net/VehiclePosition.pb',
    encoding: null
};

request(requestSettings, function (error, response, body) {
    console.log('request start');
    if (!error && response.statusCode == 200) {
        console.log('response.statusCode 200');
        var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);

        console.log(JSON.stringify(feed, null, "\t"));
        // feed.entity.forEach(function (entity) {
        //     if (entity.trip_update) {
        //     console.log(entity.trip_update);
        //     }
        // });
    }
    console.log('request end response.statusCode :' + response.statusCode);
});

console.log('end.');