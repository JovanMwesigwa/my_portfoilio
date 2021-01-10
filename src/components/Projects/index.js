import React from 'react';
import { ProjectsContainer, ProjectCard, CardImage, ProjectHeader, ProjectCardContainer } from './projects.elements';
import imageBg from '../../assets/pic.PNG';
import pizzaImg from '../../assets/pizza.PNG';
import rolexImg from '../../assets/rolexguy.PNG';



// Dark, lightText

function Projects({ item }) {

    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectHeader>my Projects</ProjectHeader>
                        <ProjectCardContainer>
                                <ProjectCard>
                                <a href="https://pizzafreak.netlify.app/">
                                    <CardImage src={pizzaImg} alt="Image" />
                                </a>
                                </ProjectCard>
                            <ProjectCard>
                                <a href="https://therolexguy.netlify.app/">
                                    <CardImage src={rolexImg} alt="Image" />
                                </a>
                            </ProjectCard>
                            <ProjectCard >
                                <a href="https://jovanmwesigwa.netlify.app/">
                                    <CardImage src={imageBg} alt="Image" />
                                </a>
                            </ProjectCard>
                        </ProjectCardContainer>
            </ProjectsContainer>
        </>
    )
}

export default Projects;