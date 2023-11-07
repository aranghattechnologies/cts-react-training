import Greetings from "./Greetings";

export function Home()
{
    let greetings = "Hello World";

    function createMessage(){
        return `${greetings} - Current Date is ${new Date().toString()}`;
    }

    //Step 1
    function changeData(d){
        alert(d);
        greetings = d;
    }

    return(
        <>
            <h1>{createMessage()}</h1>
            <Greetings Text="World" 
                onChangeData={changeData}
                Code="EARTH"
                Version={{Major:1,Minor:0,Revision:0}}
                Sample={[1,2,3,4,5]} />
            <Greetings Text="Universe" Code="MIKYWAY"
                onChangeData={changeData}
            />
            <Greetings Text="Multiverse" Code="XYZ"
                onChangeData={changeData}
            />
        </>
    )

}