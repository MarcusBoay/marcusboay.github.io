import React, { Fragment } from 'react'
import {
    StyledHomeTitle,
    StyledHomeSubtitle,
    StyledHomeText,
} from './StyledHome'

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <Fragment>
            <StyledHomeTitle>hi</StyledHomeTitle>
            <StyledHomeSubtitle>i'm marcus boay</StyledHomeSubtitle>
            <StyledHomeText>this website is a work in progress</StyledHomeText>
        </Fragment>
    )
}
export default Home
