import {useState,useEffect} from 'react';

export default function useCurrentDateTime({defaultFormat}){

   let [currentDateTime,setCurrentDateTime] = 
                    useState(new Date().toLocaleTimeString());
    let [dateTimeFormat,setDateTimeFormat] = useState(defaultFormat);

    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentDateTime(formatTime(new Date()));
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[]);

    function formatTime(date) {
        var date = new Date(date);
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        if(dateTimeFormat == 1)
            return "" + hr + ":" + min + ":" + sec;
        else
            return "" + hr + ":" + min;
    }

    function updateDateTimeFormat(format)
    {
        setDateTimeFormat(format);
    }

    function showDateAndtime(){
        setCurrentDateTime(new Date().toLocaleString());
    }

    return [currentDateTime,updateDateTimeFormat,showDateAndtime];

}