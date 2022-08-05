let http = require('http');
let fs = require("fs");
let fileName = "index.html";

http.createServer(function (request, response) {

    var baseUrl = "http://" + request.headers.host + request.url;
    var url = new URL(request.url, baseUrl);
    let path = url.pathname;
    console.log(baseUrl);
    console.log(path);

    switch (path) {
        case "/":
            fileName ="index.html";
            break;
        case "/assessments":
            fileName = "Assessments.html";
            break;
        case "/topics":
            fileName = "Topics.html";
            break;
        case "/whichweek/":
            let d = url.searchParams.get("d");
            let m = url.searchParams.get("m");
            let y = url.searchParams.get("y");
            response.write(getDaysDiff(d,m,y));
            response.end();
            break;
        case "/details":
            fileName = "Details.html";
            break;
        default:
            fileName = "404.html";
            break;
    }

    fs.readFile(fileName, function (error, content){
        response.writeHead(200, {
            "Content-Type": "text/html",
        });
        response.end(content, "utf-8");
    });

}).listen(8080);
console.log('Server running at http://localhost:8080/');

/**
 * FUNCTION HAS BEEN MODIFIED
 * 
 * @param {day} d 
 * @param {month} m 
 * @param {year} y 
 * @returns string which tells which week and invalid inputs
 */

 function getDaysDiff(d, m, y) {
    let returnValue = -1;
    let currentDay = new Date();
    currentDay.setDate(parseInt(d));
    currentDay.setMonth(parseInt(m) - 1); // months start from 0
    currentDay.setYear(parseInt(y));

    let firstDay = new Date(2022,6,25); // first day in semester 2

    if (currentDay >= firstDay) {
        var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
        returnValue = (Math.floor(diffDays / 7) + 1);
    };

    if (returnValue == -1) {
        return("Input date is before first day of the semester!");
    }
    else if (returnValue > 14) {
        return("Wrong date! Last day in semester 2  is the 21st of October 2022");
    }
    else {
        return('We are in Week ' + returnValue);
    };
};