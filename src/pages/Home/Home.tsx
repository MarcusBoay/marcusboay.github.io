import React, { Fragment } from 'react'
import {
    StyledHomeTitle,
    StyledHomeSubtitle,
    StyledHomeText,
} from './StyledHome'

const Home: React.FunctionComponent<{}> = () => {
    return (
        <Fragment>
            <StyledHomeTitle>hi</StyledHomeTitle>
            <StyledHomeSubtitle>i'm marcus boay</StyledHomeSubtitle>
            <StyledHomeText>this website is a work in progress</StyledHomeText>
        </Fragment>
    )
}
export default Home
