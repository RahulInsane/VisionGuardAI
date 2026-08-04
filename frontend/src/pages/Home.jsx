import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

import UploadBox from "../components/prediction/UploadBox";
import ImagePreview from "../components/prediction/ImagePreview";
import PredictionCard from "../components/prediction/PredictionCard";
import Loader from "../components/common/Loader";

import { predictImage } from "../services/prediction";


function Home() {

    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    async function handleImage(file){

        setImage(file);

        setLoading(true);

        setResult(null);

        try{

            const response = await predictImage(file);

            setResult(response);

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    }

    return (
        <div>

            <Navbar />

            <Hero />

            <div className="dashboard">

            <div className="left-panel">

                <UploadBox
                onFileSelect={handleImage}
                />

                {image && (
                <ImagePreview image={image} />
                )}

            </div>

            <div className="right-panel">

                {loading && <Loader />}

                {result && (
                <>
                    <PredictionCard
                        prediction={result.prediction}
                        confidence={result.confidence}
                        inferenceTime={`${result.inference_time} ms`}
                        real={result.real_probability}
                        fake={result.fake_probability}
                    />

                  

                  
                </>
                )}

            </div>

            </div>

        </div>
    );

}

export default Home;