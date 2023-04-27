import { useState } from "react"
import Carousel from "./Carousel"


const Main = () => {
    const images = ["who_am_i.jpg", "who_am_i_2.jpg", "who_am_i_3.jpg",]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index, images) => {
        let next = true
        const condition = next ? selectedIndex < images.length : selectedIndex > 0;
        const nextIndex =
            next ? condition ? selectedIndex + 1 : 0
                : condition ? selectedIndex - 1 : images.length - 1;
    }
    const previous = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const next = () => {
        const condition = selectedIndex < images.length;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(images[nextIndex]);
        setSelectedImage(nextIndex);
    }
    return (
        <>
            <Carousel />
        </>
    )
}

export default Main