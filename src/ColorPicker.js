import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import iro from '@jaames/iro';

const Container = styled.div`
    display: flex;
    margin: 35px;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin: 25px;
    padding: 12px;
    width: 200px;

    div {
        width: 100%;
        display: flex
        justify-content: space-between;
    }

    background-color: ${({color}) => color}
`
const ColorPicker = (props) => {
    const { onColorChange, colorState } = props;
    const colorPickerRef = useRef();
    let colorPicker;

    useEffect(() => {
        if (colorPickerRef.current && !colorPicker) {
            colorPicker = new iro.ColorPicker(colorPickerRef.current);
            colorPicker.on('color:change', (color) => {
                onColorChange(color);
            })
        }

        return () => {
            colorPicker = null;
            colorPickerRef.current = null;
        }
    }, [])

    const { rgba, hexString } = colorState;

    return (
        <Container>
            <div ref={colorPickerRef} />
            <Info color={colorState.hexString}>
                <div>Hex Code: {hexString}</div>
                {rgba && <div>RGB: {`${rgba.r}, ${rgba.g}, ${rgba.b}`}</div>}
            </Info>
        </Container>
    )

};

Container.propTypes = {
    onColorChange: PropTypes.func,
}

Container.defaultProps = {
    onColorChange: () => {},
}

export default ColorPicker;
