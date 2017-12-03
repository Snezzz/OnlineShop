'use strict';

module.exports = (context, cb) => {
    var date=new Date();
    var day=date.getDay();
    var month=date.getMonth();
    var today;
    var realmonth;

    switch(day){
        case 1: today='Monday'; break;
        case 2: today='Tuesday'; break;
        case 3: today='Wednesday'; break;
        case 4: today='Thursday'; break;
        case 5: today='Friday'; break;
        case 6: today='Saturday'; break;
        case 0: today='Sunday'; break;

    }
    switch(month){
        case 0: realmonth='января'; break;
        case 1: realmonth='февраля'; break;
        case 2:realmonth='марта'; break;
        case 3: realmonth='апреля'; break;
        case 4: realmonth='мая'; break;
        case 5: realmonth='июня'; break;
        case 6: realmonth='июля'; break;
        case 7: realmonth='августа'; break;
        case 8: realmonth='сентября'; break;
        case 9: realmonth='октября'; break;
        case 10: realmonth='ноября'; break;
        case 11:realmonth='декабря'; break;

    }

    const message = 'You have connection with serverless. Date:'+today+","+date.getDate()+"e"+" "+realmonth+" "+date.getHours()+" часов "+date.getMinutes()+" минут "+date.getSeconds()+" секунд" ;
    cb(null, { message });
};
