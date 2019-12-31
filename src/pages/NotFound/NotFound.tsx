import React from 'react'
import {
    StyledNotFoundTitle,
    StyledNotFoundPageLayout,
    StyledNotFoundInner,
} from './StyledNotFound'

const NotFound: React.FunctionComponent<{}> = () => {
    return (
        <StyledNotFoundPageLayout>
            <StyledNotFoundInner>
                <StyledNotFoundTitle>
                    you have found nothing
                </StyledNotFoundTitle>
            </StyledNotFoundInner>
        </StyledNotFoundPageLayout>
    )
}
export default NotFound
