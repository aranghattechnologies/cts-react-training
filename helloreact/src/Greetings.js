export default function Greetings(
            {Text
            , Code
            ,Version
            , Sample = [0,0,0]
            ,onChangeData}
            ){

     let r = Math.floor(Math.random() * 1000);

    function generateGreetings(){
        let hour = new Date().getHours();
        let greetings = "";
        

        if(hour >= 0 && hour < 12)
            greetings = "Good Morning";
        else if(hour >= 12 && hour < 17)
            greetings = "Good Afternoon";
        else
            greetings = "Good Evening";

        return greetings;
    }

    return(
        <>
           {r}
            <h1>{generateGreetings()} {Text} 
            {Code}</h1>
            <p>
                {Sample}
                {Version?.Major}.{Version?.Minor}.{Version?.Revision}
            </p>
            <button onClick={() => onChangeData(r)}
            >Change Data</button>
        </>
    )
}