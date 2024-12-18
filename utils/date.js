const toToday = function( date1 ) {
    //Get 1 day in milliseconds
    var one_year = 1000*60*60*24*30*12;
    var one_month = 1000*60*60*24*30;
    var one_day=1000*60*60*24;
    var one_hour = 1000*60*60;
    var one_minute = 1000*60;
  
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = new Date().getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    const difference_year = difference_ms/one_year
    const difference_month = difference_ms/one_month
    const difference_day = difference_ms/one_day
    const difference_hour = difference_ms/one_hour
    const difference_minute = difference_ms/one_minute

    if(difference_year >= 1) return Math.round(difference_year) + " سال قبل";
    if(difference_month >= 1) return Math.round(difference_month) + " ماه قبل";
    if(difference_day >= 1) return Math.round(difference_day) + " روز قبل";
    if(difference_hour >= 1) return Math.round(difference_hour) + " ساعت قبل";
    if(difference_minute >= 1) return Math.round(difference_minute) + " دقیقه قبل";
    return 'به تازگی'
}

module.exports = {toToday}