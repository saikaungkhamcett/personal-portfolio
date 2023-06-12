import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kaplan from "../assets/img/kaplan.jpg";
import usf from "../assets/img/usf.jpg";
import courserameta from "../assets/img/courserameta.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
      description: "Diploma in Info Tech",
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
                      <Nav.Link className="custom-cursor" eventKey="second">2017-2022</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="custom-cursor" eventKey="third">2023</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
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
                      <Row>                       
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
                      <p> adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>                       
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>                       
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
                      <p> adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>                       
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
