import axios from "axios";
import { useEffect, useState } from "react";
export default function DemoComponent(props) {

    let [heading, setHeading] = useState("Hello Demo Component");
    let [color, setColor] = useState("red");
    let [file, setFile] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5084/api/test")
        .then((d) => setHeading(d.data))
        .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        if(heading === "Hello World")
         setColor("green");
    }, [heading]);

    function onUploadFileToTheServer(){
        if(file)
        {
            var formData = new FormData();
            formData.append("file",file);
            axios.post("http://localhost:5084/api/test",formData)
                 .then(d => console.log(d))
                    .catch(e => console.log(e));
        }
        else
            alert("Please select the file");
    }

    return(<>
        <h1 style={{color : color}}>{heading}</h1>
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="button" onClick={onUploadFileToTheServer}>Upload</button>
        <button onClick={() => setHeading("Hello World")}>Change Heading</button>
    </>);
}

