import React from 'react';
import SliderContainer from './SliderContainer'
import { FunctionalPart } from './FunctionalPart'
import '../media/styles/Wrapper.css';

export const Wrapper = () => (
    <div className="wrapper">
        <FunctionalPart></FunctionalPart>
        <SliderContainer></SliderContainer>
    </div>
)
