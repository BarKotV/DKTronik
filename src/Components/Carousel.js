import React, {Component} from 'react';
import ReactSiema from 'react-siema'

class Carousel extends Component {

    render() {
        return <div className="container">
            <div className="boxcarousel">
                <CarouselBox/>
            </div>
        </div>
    }
}




const CarouselBox = () => {

    const Slide = (props) => <img {...props}  />;

    const options = {
        resizeDebounce: 250,
        duration: 2000,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: false
    };

    let slider;

    setInterval(() =>{
    slider.next();
}, 15000);

    setInterval(() => {
        slider.goTo(0);
    }, 180000);

    return (
        <div>
        <ReactSiema {...options} ref={siema => slider = siema}>
            <Slide  className="image1" />
            <Slide  className="image2" />
            <Slide  className="image3" />
            <Slide  className="image1" />
            <Slide  className="image2" />
            <Slide  className="image3" />
        </ReactSiema>
        </div>
        )

};


export default Carousel