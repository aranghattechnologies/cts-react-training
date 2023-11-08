

export default function NewsType({title,isSubscribed,children}) 
{
    const subStyle = {
        color : "green"
    }

    const unsubStyle = {
        color : "red"
    }

    function checkIsUserSubscribed(){
        return isSubscribed;
    }

    return (
        <>
         {/* { isSubscribed &&
                <div style={{border : "1px solid blue", margin : "10px"}}>
                        <h1>{title}</h1>
                        {children}
                </div>
         }
         {
            !isSubscribed && 
             <>
                <h1>{title}</h1>
                <p>Please subscribe to read this section</p>
             </>
         } */}
         {/* <h1 style={isSubscribed ? subStyle : unsubStyle}>{title}</h1> */}
         <h1 className={'header ' + (isSubscribed ? 'sub' : 'unsub')}>{title}</h1>
         { checkIsUserSubscribed() ?
             <div style={{color : 'gray', fontStyle : (isSubscribed ? "bold" : "normal")}}>
           
                    {children}
            </div>

            :
            <>
                <p>Please subscribe to read this section</p>
            </>
        }
        </>
    )

 }
