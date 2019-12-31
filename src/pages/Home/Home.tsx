import React, { useState, useEffect } from 'react'
import {
    StyledHomeTitle,
    StyledHomePageLayout,
    StyledHomeFirstSection,
    StyledHomeFirstSectionTextContainer,
    StyledHomeSection,
    StyledHomeSectionInner,
    StyledHomeSectionTitle,
    StyledHomeSectionText,
    StyledHomeSectionLink,
    StyledHomeSectionLinksContainer,
    StyledHomeSectionLinkContainer,
} from './StyledHome'
import { SectionInfoModel } from '../../models/Home'

/**
 * projects to showcase:
 *
 * kontrol,
 * tree viz?,
 * maybe the thing from work????,
 * 379 assignment?,
 * advent of code?????????????,
 * this website???????????????????
 *
 *
 * how to showcase???
 * probably CtCI method...
 */
const projects = [
    {
        title: 'Kontrol',
        description: 'Lorem ipsum bacon ipsum',
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/MarcusBoay/Kontrol',
            },
            {
                title: 'NewGrounds',
                url: 'https://www.newgrounds.com/portal/view/704281',
            },
        ],
    },
] as Array<SectionInfoModel>
const Home: React.FunctionComponent<{}> = () => {
    const [firstSectionText, setFirstSectionText] = useState<string>('')
    let firstSectionTextPointer = 0
    const firstSectionTextFull = "Hi. I'm Marcus Boay."

    // title text animation
    useEffect(() => {
        const interval = setInterval(() => {
            setFirstSectionText(
                firstSectionText =>
                    firstSectionText +
                    firstSectionTextFull[firstSectionTextPointer]
            )
            firstSectionTextPointer++
            if (firstSectionTextPointer >= firstSectionTextFull.length) {
                clearInterval(interval)
            }
        }, 35)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <StyledHomePageLayout>
            <StyledHomeFirstSection>
                <StyledHomeFirstSectionTextContainer>
                    <StyledHomeTitle>{firstSectionText}</StyledHomeTitle>
                </StyledHomeFirstSectionTextContainer>
            </StyledHomeFirstSection>
            {projects.map(project => (
                <Section project={project} />
            ))}
        </StyledHomePageLayout>
    )
}
export default Home

interface SectionProps {
    project: SectionInfoModel
}
const Section: React.FunctionComponent<SectionProps> = ({ project }) => {
    const generateLinks = () => {
        return project.links.map(link => (
            <StyledHomeSectionLinkContainer>
                <StyledHomeSectionLink href={link.url}>
                    {link.title}
                </StyledHomeSectionLink>
            </StyledHomeSectionLinkContainer>
        ))
    }

    return (
        <StyledHomeSection>
            <StyledHomeSectionInner>
                <StyledHomeSectionTitle>{project.title}</StyledHomeSectionTitle>
                <StyledHomeSectionText>
                    {project.description}
                </StyledHomeSectionText>
                <StyledHomeSectionLinksContainer>
                    {generateLinks()}
                </StyledHomeSectionLinksContainer>
            </StyledHomeSectionInner>
            <StyledHomeSectionInner right>
                image goes here
            </StyledHomeSectionInner>
        </StyledHomeSection>
    )
}
