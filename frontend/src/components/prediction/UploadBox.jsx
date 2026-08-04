import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

function UploadBox({ onFileSelect }) {

    const onDrop = useCallback((acceptedFiles)=>{

        if(acceptedFiles.length){

            onFileSelect(acceptedFiles[0]);

        }

    },[]);

    const {getRootProps,getInputProps,isDragActive}=useDropzone({

        onDrop,

        multiple:false,

        accept:{

            "image/*":[]

        }

    });

    return(

<div

{...getRootProps()}

className="upload-box"

>

<input {...getInputProps()}/>

<UploadCloud

size={65}

className="upload-icon"

/>

<h2>

{isDragActive?

"Drop Image Here"

:

"Upload Image"}

</h2>

<p>

Drag & Drop or Click

</p>

<small>

PNG • JPG • JPEG • WEBP

</small>

</div>

    )

}

export default UploadBox;