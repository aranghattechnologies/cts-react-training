import { memo, useEffect, useState } from "react";

const MessageComponent2 = memo((props) => {

    useEffect(() => console.log("Component mounted or updated"));
    useEffect(() => console.log("Component updated! and props changes"),[props]);

    return(
        <div>
            <h1>{props.message}</h1>
        </div>
    );
});

export default MessageComponent2;