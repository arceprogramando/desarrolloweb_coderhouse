import { promociones, promociones2 } from "../assets";
import { useState } from "react"

const Carousel = () => {
    const images = [promociones, promociones2, promociones]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (nextValidation) => {


        let condition;
        if (nextValidation) {
            condition = selectedIndex < images.length - 1;
        } else {
            condition = selectedIndex > 0;
        }

        let nextIndex;
        if (condition) {
            if (nextValidation) {
                nextIndex = selectedIndex + 1;
            } else {
                nextIndex = selectedIndex - 1;
            }
        } else {
            if (nextValidation) {
                nextIndex = 0;
            } else {
                nextIndex = images.length - 1;
            }
        }
        setSelectedIndex(nextIndex)
        setSelectedImage(images[nextIndex])
    }

    const previous = () => {
        selectNewImage(false)
    }

    const next = () => {
        selectNewImage(true)
    }

    return (
        <>
            <div className=" ">
                <img src={selectedImage} alt={`Image ${selectedIndex}`} />
                <p>
                    {selectedIndex + 1} of {images.length}
                </p>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}

export default Carousel