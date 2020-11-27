import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 35px;
`

const Search = styled.input`
    width: 550px;
    height: 30px;
`

const SongSearch = (props) => {
    return (
        <Container>
            <Search type="text" placeholder="Search for a Song"/>
        </Container>
    )

}

export default SongSearch;
