import React from 'react';
import '../media/styles/SliderContainer.css';
import image1 from '../media/images/landscape_4.jpg';
import image2 from '../media/images/landscape_1.jpg';
import image3 from '../media/images/landscape_2.jpg';
import image4 from '../media/images/landscape_3.jpg';

class SliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTransition: 0 };
        let wheelTimer;
    }
    handleWheel(e) {
        const sliderContainer = document.querySelector('.slider-container');
        if (this.wheelTimer) {
            clearTimeout(this.wheelTimer);
        }
        this.wheelTimer = setTimeout(() => {
            if (e.deltaY > 0) {
                if (sliderContainer.scrollHeight > Math.abs(this.state.currentTransition - window.innerHeight)) {
                    this.setState(state => ({currentTransition: state.currentTransition - window.innerHeight}));
                    sliderContainer.style.transform = `translateY(${this.state.currentTransition}px)`;
                }
            } else if (e.deltaY < 0) {
                if (this.state.currentTransition + window.innerHeight <= 0) {
                    this.setState(state => ({currentTransition: state.currentTransition + window.innerHeight}));
                    sliderContainer.style.transform = `translateY(${this.state.currentTransition}px)`;
                }
            }
        }, 200);
    }
    componentDidMount() {
        window.addEventListener('wheel', this.handleWheel.bind(this));
    }
    render() {
        return (
            <div className="slider">
                <ul className="slider-container">
                    <li>
                        <img src={image1} alt="image"/>
                        <img src={image2} alt="image"/>
                        <img src={image3} alt="image"/>
                        <img src={image4} alt="image"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SliderContainer;