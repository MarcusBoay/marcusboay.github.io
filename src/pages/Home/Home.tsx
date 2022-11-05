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
    StyledHomeSubTitle,
    StyledHomeSectionRoleAndYear,
    StyledHomeSectionRole,
    StyledHomeSectionYear,
    StyledHomeSecondSectionTextContainer,
    StyledHomeLink,
    StyledHomeHeroContainer,
} from './StyledHome'
import { SectionInfoModel, SectionLinkModel } from '../../models/Home'
import kontrolImage from '../../images/kontrol.png'
import treeVizImage from '../../images/tree-viz.png'
import hackedImage from '../../images/hacked.jpg'

const firstSectionTextFull = 'Marcus Boay'
const secondSectionTextFull = 'Software Engineer'
const thirdSectionTextFull =
    'Crafting quality code with excellent user experience'
const personLinks = [
    {
        title: 'LinkedIn',
        url: 'https://ca.linkedin.com/in/marcus-boay',
    },
    {
        title: 'GitHub',
        url: 'https://github.com/MarcusBoay',
    },
] as Array<SectionLinkModel>
const projects = [
    {
        title: 'Tree Visualizer',
        year: 2019,
        role: 'Developer',
        description: [
            'Web-based visualizer to show classic tree traversal algorithms.',
            "As Marcus is a tech advocate and a Computer Science student, he understands and empathizes with other students who struggle with algorithms and data structures even though he has been a finalist in Communitech's Code to Win challenge in 2018 and 2019. He wants to help other people learn and get better at algorithms and data structures.",
            'As a result, in order to aid other students, he created this tree traversal visualizer that has classic tree traversal algorithms such as pre-order, in-order, post-order and level-order.',
        ],
        links: [{ title: 'Website', url: '/#/tree-viz' }],
        image: treeVizImage,
        imageAlt: 'tree visualizer image',
    },
    {
        title: 'Kontrol',
        year: 2017,
        role: 'Producer, Developer, Designer',
        description: [
            'A twin-stick shooter made using Unity and C# over 9 months while balancing internship and school work.',
            "When Marcus was a teenager, he adored old-school bullet hell games such as Gradius and R-Type. He found that these games aren't as popular as they used to be. He decided to set a goal to create such a game which involved self-studying game design, game programming, art and project management.",
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
        imageAlt: 'kontrol gameplay image',
    },
] as Array<SectionInfoModel>
const Home: React.FunctionComponent<{}> = () => {
    const [firstSectionText, setFirstSectionText] = useState<string>('')
    const [secondSectionText, setSecondSectionText] = useState<string>('')
    const [thirdSectionText, setThirdSectionText] = useState<string>('')
    const [showLinks, setShowLinks] = useState<boolean>(false)
    let firstSectionTextPointer = 0
    let secondSectionTextPointer = 0
    let thirdSectionTextPointer = 0

    // title text animation
    useEffect(() => {
        const interval = setInterval(() => {
            if (firstSectionTextPointer < firstSectionTextFull.length) {
                setFirstSectionText(
                    firstSectionText =>
                        firstSectionText +
                        firstSectionTextFull[firstSectionTextPointer]
                )
                firstSectionTextPointer++
            } else if (
                firstSectionTextPointer >= firstSectionTextFull.length &&
                secondSectionTextPointer < secondSectionTextFull.length
            ) {
                setSecondSectionText(
                    secondSectionText =>
                        secondSectionText +
                        secondSectionTextFull[secondSectionTextPointer]
                )
                secondSectionTextPointer++
            } else if (
                secondSectionTextPointer >= secondSectionTextFull.length &&
                thirdSectionTextPointer < thirdSectionTextFull.length
            ) {
                setThirdSectionText(
                    thirdSectionText =>
                        thirdSectionText +
                        thirdSectionTextFull[thirdSectionTextPointer]
                )
                thirdSectionTextPointer++
            } else {
                clearInterval(interval)
                setShowLinks(true)
            }
        }, 35)

        return () => {
            clearInterval(interval)
            setShowLinks(true)
        }
    }, [])

    return (
        <StyledHomePageLayout>
            <StyledHomeFirstSection>
                <StyledHomeFirstSectionTextContainer>
                    <StyledHomeHeroContainer>
                        <StyledHomeTitle>{firstSectionText}</StyledHomeTitle>
                        <StyledHomeSubTitle>
                            {secondSectionText}
                        </StyledHomeSubTitle>
                    </StyledHomeHeroContainer>
                    <StyledHomeSubTitle>{thirdSectionText}</StyledHomeSubTitle>
                </StyledHomeFirstSectionTextContainer>
                <StyledHomeSecondSectionTextContainer>
                    {personLinks.map(link => (
                        <StyledHomeLink href={link.url} showLink={showLinks}>
                            {link.title}
                        </StyledHomeLink>
                    ))}
                </StyledHomeSecondSectionTextContainer>
            </StyledHomeFirstSection>
            {projects
                .sort((p1, p2) => (p1.year < p2.year ? 1 : -1))
                .map(project => (
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
                <StyledHomeSectionRoleAndYear>
                    <StyledHomeSectionRole>
                        {project.role}
                    </StyledHomeSectionRole>
                    <StyledHomeSectionYear>
                        {project.year}
                    </StyledHomeSectionYear>
                </StyledHomeSectionRoleAndYear>
                {project.description &&
                    project.description.map(d => (
                        <StyledHomeSectionText>{d}</StyledHomeSectionText>
                    ))}
                <StyledHomeSectionLinksContainer>
                    {generateLinks()}
                </StyledHomeSectionLinksContainer>
            </StyledHomeSectionInner>
            <StyledHomeSectionInner right>
                <img src={project.image} alt={project.imageAlt} />
            </StyledHomeSectionInner>
        </StyledHomeSection>
    )
}
