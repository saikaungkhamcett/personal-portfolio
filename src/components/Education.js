import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kaplan from "../assets/img/kaplan.jpg";
import usf from "../assets/img/usf.jpg";
import courserameta from "../assets/img/courserameta.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const kaplanCard = [
    {
      title: "Kaplan (Singapore)",
      description: "Diploma in Info Tech",
      imgUrl: kaplan,
    },
  ];

  const usfCard = [
    {
      title: "University of South Florida (US)",
      description: "Bachelor of General Studies (Computer Science concentration)",
      imgUrl: usf,
    },
  ];

  const metaCard = [
    {
      title: "Meta",
      description: "Meta Front-End Developer Professional Certificate",
      imgUrl: courserameta,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Education</h2>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link className="custom-cursor" eventKey="first">2015</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="custom-cursor" eventKey="third">2023</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row className="row-container">
                        {
                          kaplanCard.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p> Pursued a diploma in Information Technology at Kaplan Singapore, where I gained comprehensive knowledge and practical skills in the ever-evolving field of IT.</p>
                      </Row>                      
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row className="row-container">                       
                        {
                          usfCard.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      <p> Pursued a Bachelor's degree in General Studies, where I dedicated my studies to the field of Computer Science. Throughout my academic journey, I delved into a diverse range of subjects while focusing on various aspects of computer science, including programming, algorithms, data structures, and software development. </p>                       
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row className="row-container">                       
                        {
                          metaCard.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      <p>Pursued a certification in a specialized Meta Front End Development course with a specific focus on React. Through comprehensive lessons and practical projects, I gained a deep understanding of React's core concepts, component-based architecture, state management, and advanced techniques. </p>                       
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
