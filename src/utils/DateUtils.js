import { formatToTimeZone } from 'date-fns-timezone'
import { isToday } from 'date-fns'
//import { distanceInWords } from 'date-fns'

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ldays = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const ends = { nd: [2,22], rd: [3,23],st:[1,21,31] };
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

const DAYS = [ 'SUN','MON','TUE','WED','THU','FRI','SAT' ];
const MTHS = [ 'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const formatDate = ( date, timeZone = 'Europe/London' ) => {
    if ( !new Date(date).getDate() ) { return '' }
    if ( isToday(date) ) {
        return distanceInWordsStrict(Date.now(),date)+' ago'
    } else {
        return formatToTimeZone(date,'Do MMM YYYY',{ timeZone });
    }
}

const formatTimeDate = ( date, timeZone = 'Europe/London' ) => {
    if ( !new Date(date).getDate() ) { return '' }
    if ( isToday(date) ) {
        return distanceInWordsStrict(Date.now(),date)+' ago'
    } else {
        return formatToTimeZone(date,'h.mma Do MMM YYYY',{ timeZone });
    }
}


const zeroHr = (date) => ["setHours", "setMinutes", "setSeconds", "setMilliseconds"].reduce((prev,f) => { date[f](0); return date; },date);

const friday = (date) => { 
    if ( date.getDay() > 4 ) { date.setDate(date.getDate() - date.getDay() + 5); } else { date.setDate(date.getDate() - date.getDay() - 2); }
    return zeroHr(date);
}

const makeMonth = (start) => {
  var today = zeroHr(new Date());
  var date = zeroHr(new Date(start)); 
    
  var first = new Date(date);
      first.setDate(1);
      first.setDate(first.getDate()-first.getDay());  

  var thisMonth = date.getMonth();

  var weeks = [], week, allDays = [], day;

  while ( (first.getMonth() <= date.getMonth() && first.getFullYear() == start.getFullYear()) || ( first.getMonth() == 11 && date.getMonth() == 0 ) ) {
      weeks.push(week = { days: [] });
      while ( week.days.length < 7 ) {
          var month = first.getMonth();
          allDays.push(day = { day: first.getDate(), Month: thisMonth, month: (month == thisMonth ? 1 : 0.3), date: first.valueOf(), today: today.valueOf() == first.valueOf() })
          week.days.push(day);
          first.setDate(first.getDate()+1);
      }
  }
  return { month: months[date.getMonth()], Month: thisMonth, weeks: weeks, days: days, year: date.getFullYear(), selectedDate: date, allDays: allDays }
}

const makeWeek = (start) => {

    var Week = friday(new Date(parseInt(start))).valueOf();
    var End = new Date(Week); End.setDate(End.getDate() +7);
    var Day = new Date(Week);
    var week = [];
    for ( var i = 0; i < 7; i++ ) {
        week.push({ Day: Day.getDay(), m_date: Day.valueOf(), day: DAYS[Day.getDay()], date: Day.getDate()+'-'+MTHS[Day.getMonth()]+'-'+Day.getFullYear(), screens: [], events: [] });
        Day.setDate(Day.getDate() + 1);
    }
    return { days: week, Week: Week, End: End.valueOf() };
}

const _date = (date) => {
    if ( !(date instanceof Date) ) { date = new Date(parseInt(date)); };
    if ( isNaN(date) ) { false; }
    if ( !days[date.getDay()] ) { return {} }

        var m_Date = date.getDate(),
            j_Date = date.getDate(),
            min = date.getMinutes(),
            hr = date.getHours();
    
        var suffix = hr < 12 ? 'am' : 'pm';
           
            if ( hr == 12 ) { suffix = '(noon)';     }
            if ( hr == 0  ) { suffix = '(midnight)'; }

        var t_time = ((hr%12)||12)+'.'+( min < 10 ? '0'+min : min )+suffix;    
            
            for ( var a in ends ) { if ( ends[a].indexOf(m_Date) > -1 ) { m_Date = m_Date + a; break; } }
            if ( typeof m_Date == 'number' ) { m_Date = m_Date +'th'; }

            var time = ( hr < 10 ? '0'+hr : hr )+":"+( min < 10 ? '0'+min : min );

            var v_date = ( j_Date < 10 ? '0'+j_Date : j_Date)+'-'+MTHS[date.getMonth()]+'-'+date.getFullYear();
            
            var s_date = DAYS[date.getDay()]+'-'+v_date;
            
            var p_date = m_Date+' '+months[date.getMonth()]+' '+date.getFullYear();

            var day = ldays[date.getDay()];

            return {    time: time,
                        t_time: t_time, 
                        l_date: t_time+' '+day+' '+p_date,
                        p_date: p_date, 
                        s_date: s_date,
                        v_date: v_date,
                        day: day,
                        value: date.valueOf(),
                        time_date: time+'-'+s_date,
                        hr: hr,
                        min: min
                }   
}

const parseTime = ( u_time ) => {
    var hhmm, am, pm;
    u_time = u_time.replace(/ /g,'');
    if ( u_time.indexOf('am') > -1 ) { am = true; u_time = u_time.replace('am','') }
    if ( u_time.indexOf('pm') > -1 ) { pm = true; u_time = u_time.replace('pm','') }
    if ( u_time.indexOf('AM') > -1 ) { am = true; u_time = u_time.replace('AM','') }
    if ( u_time.indexOf('PM') > -1 ) { pm = true; u_time = u_time.replace('PM','') }
    if ( u_time.indexOf('.') > -1 ) hhmm = u_time.split('.');
    else if ( u_time.indexOf(':') > -1 ) hhmm = u_time.split(':');
    else if ( u_time.indexOf(',') > -1 ) hhmm = u_time.split(',');
    else if ( u_time.indexOf(';') > -1 ) hhmm = u_time.split(';');
    else if ( u_time.length == 4 ) hhmm = [ u_time.substring(0,2), u_time.substring(2,4) ];
    else if ( u_time.length < 3 ) hhmm = [ u_time.substring(0,2), '00' ]

    else { return { error: 'Invaid time '+u_time } }
    var time = { 
        hour: parseInt(hhmm[0]),
        min: parseInt(hhmm[1])
    };
    if ( isNaN(time.hour) || isNaN(time.min) ) return { error: 'Invalid time '+u_time }
    if ( pm && time.hour < 12 ) { time.hour += 12 }
    return time;

}

const distanceDate = date => {
    return isToday(date) ? distanceInWords(Date.now(),date) : _date(date).time_date
}

export { distanceDate, zeroHr, days, months, makeMonth, makeWeek, _date, parseTime, formatDate, formatTimeDate };