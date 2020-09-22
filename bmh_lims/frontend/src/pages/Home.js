import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { IconButton } from 'components'
import { Logo, SampleIcon, StatusIcon, WorkflowsIcon } from 'icons'

// will worry about more responsiveness another time

const ButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 25px; 
`

const Page = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`

// keeping this here for now since it's just one animation
const appear = keyframes`
    from{
        transform: translate(0px, 5px);
        opacity: 0;
    }
    to{
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

const buttonAnimation = css`
    animation: ${appear} 0.5s linear 1;
    &:hover {
        transition: transform 0.5s;
        transform: scale(1.2);
    }
    &:active {
        transition: transform 0s;
        transform: scale(1);
    }
`

// style props are kept as strings to retain both unit measures and quantity
const HomePage = () => {
    return (
        <Page>
            <h2>Welcome to</h2>
            <Logo fill='#00AAB2' height='15em' width='15em' />
            <h1>BMH LIMS</h1>
            <p>What would you like to do?</p>
            <ButtonBar>
                <IconButton
                    animation={buttonAnimation}
                    text='Submit Samples'
                    IconSVG={SampleIcon}
                    iconProps={{
                        height: '10em',
                        width: '10em'
                    }}
                    onClickHandler={(e) => e.preventDefault() || console.log('redirect to submit samples page')} />
                <IconButton
                    animation={buttonAnimation}
                    text='View Status'
                    iconProps={{
                        height: '10em',
                        width: '10em'
                    }}
                    IconSVG={StatusIcon}
                    onClickHandler={(e) => e.preventDefault() || console.log('redirect to view status page')} />
                <IconButton
                    animation={buttonAnimation}
                    text='Workflows'
                    iconProps={{
                        height: '10em',
                        width: '10em'
                    }}
                    IconSVG={WorkflowsIcon}
                    onClickHandler={(e) => e.preventDefault() || console.log('redirect to workflows page')} />
            </ButtonBar>
        </Page>
    )
}

export default HomePage