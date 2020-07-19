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
import kontrolImage from '../../images/kontrol.png'

const projects = [
    {
        title: 'Kontrol',
        description: [
            'A twin-stick shooter I made using Unity and C# over 9 months while balancing internship and school work.',
            "When I was a teenager, I adored old-school bullet hell games such as Gradius and R-Type. I found that these games aren't as popular as they used to be. I decided to set a goal to create such a game which involved self-studying game design, game programming, art and project management. ",
            'The game has 3 hand-crafted levels with various enemies and bosses.',
            'Kontrol has been front-paged on both Newgrounds and Kongregate and has garnered over 22,000 plays.',
        ],
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
        image: kontrolImage,
    },
] as Array<SectionInfoModel>
const Home: React.FunctionComponent<{}> = () => {
    const [firstSectionText, setFirstSectionText] = useState<string>('')
    const [secondSectionText, setSecondSectionText] = useState<string>('')
    let firstSectionTextPointer = 0
    let secondSectionTextPointer = 0
    const firstSectionTextFull = "Hi. I'm Marcus Boay."
    const secondSectionTextFull =
        'Delivering quality code with excellent user experience.'

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
                {project.description &&
                    project.description.map(d => (
                        <StyledHomeSectionText>{d}</StyledHomeSectionText>
                    ))}
                <StyledHomeSectionLinksContainer>
                    {generateLinks()}
                </StyledHomeSectionLinksContainer>
            </StyledHomeSectionInner>
            <StyledHomeSectionInner right>
                <img src={project.image} alt="image for kontrol" />
            </StyledHomeSectionInner>
        </StyledHomeSection>
    )
}
