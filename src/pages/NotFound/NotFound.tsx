import React from 'react'
import { StyledNotFoundTitle } from './StyledNotFound'

interface NotFound {}

const NotFound: React.FunctionComponent<NotFound> = () => {
    return <StyledNotFoundTitle>you have found nothing</StyledNotFoundTitle>
}
export default NotFound
