import React from "react"
import {
  MdClose,
  MdPictureAsPdf,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiGit,
} from "react-icons/di"
import resume from "../assets/images/KKelso-Resume.png"
import resumePDF from "../assets/docs/KKelso.Resume.pdf"
import pollsterFront from "../assets/images/Pollster - Frontpage.png"
import warblerFront from "../assets/images/Warbler - Frontpage.png"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.projects = [
      {
        href: "http://voter.kyle-kelso.com",
        hrefText: "Visit Pollster",
        description:
          "Pollster is a website dedicated to creating polls and voting. Includes signup and login authentication and settings to customize each poll.",
        img: pollsterFront,
      },
      {
        href: "http://warbler.kyle-kelso.com",
        hrefText: "Visit Warbler",
        description: "Warbler can be described as a Twitter clone.",
        img: warblerFront,
      },
    ]
  }

  createCloseButton() {
    return (
      <button className="close-btn" onClick={this.props.pageClose}>
        <MdClose size="45" />
      </button>
    )
  }

  render() {
    let { pageType, timers } = this.props
    return (
      <div id="main" className={timers.header ? "transitioned" : ""}>
        <div
          id="resume"
          className={
            "modal " +
            `${pageType === "resume" ? "active" : ""} ${
              timers.page ? "transitioned" : ""
            }`
          }
        >
          <a className="download-btn" href={resumePDF}>
            <MdPictureAsPdf size="35" />
          </a>
          {this.createCloseButton()}
          <h2>Resume</h2>
          <section>
            <img src={resume} alt="" />
          </section>
        </div>
        <div
          id="projects"
          className={
            "modal " +
            `${pageType === "projects" ? "active" : ""} ${
              timers.page ? "transitioned" : ""
            }`
          }
        >
          {this.createCloseButton()}

          {/* multiple sections for each project. Show technology used in each one. */}
          <section>
            <a className="github-btn" href="">
              <DiGithubBadge size="65" />
            </a>
            <h2>Projects</h2>
          </section>
          <section>
            <h3>Pollster -&nbsp;</h3>
            <h3 className="subTitle">MERN Stack with D3</h3>
            <p>
              A website dedicated to creating polls and voting. Started this
              project as a way to get practice in data-driven modules like D3
              and experiment with some front-end component libaries like
              Bootstrap and Ant Design. As the project progressed I learned
              about unit testing with Chai Mocha libaries.
            </p>
            <a className="link-btn" href="http://voter.kyle-kelso.com">
              Site
            </a>
            <a
              className="link-btn"
              href="https://github.com/kylekelso/pollster"
            >
              Code
            </a>
            <h3>Warbler -&nbsp;</h3>
            <h3 className="subTitle">MERN Stack</h3>
            <p>
              Can be described as a Twitter clone. The beginning of this project
              was created alongside a Udemy course by Colt Steele. I've done
              some changes and improvement to expand my repertoire. Building my
              understanding of RESTful practices when building APIs has been a
              focus throughout this project.
            </p>
            <a className="link-btn" href="http://warbler.kyle-kelso.com">
              Site
            </a>
            <a className="link-btn" href="https://github.com/kylekelso/warbler">
              Code
            </a>
          </section>
        </div>
        <div
          id="about"
          className={
            "modal " +
            `${pageType === "about" ? "active" : ""} ${
              timers.page ? "transitioned" : ""
            }`
          }
        >
          {this.createCloseButton()}
          <h2>About</h2>
          <section>
            <p>Hello!</p>
            <p>
              My name is Kyle. I am a self taught Web Developer with a heavy
              background in IT. Web development has given me a chance to really
              tap into my desire of solving problems while also letting me be
              creative. Whenever I'm creating projects on my own free time, I
              frequently browse for different libaries that could be included
              just for experimentation and getting use to learning new
              technologies quickly. I hope to keep learning throughout this
              career.
            </p>
            <p>
              I am currently open for new opportunities. The best way to reach
              me is through email at Kyle.Kelso@Outlook.com
            </p>
          </section>
        </div>
        <div
          id="contact"
          className={
            "modal " +
            `${pageType === "contact" ? "active" : ""} ${
              timers.page ? "transitioned" : ""
            }`
          }
        >
          {this.createCloseButton()}
          <h2>Contact</h2>
          <section>
            <ul>
              <li>
                <h3>Email -</h3>&nbsp;
                <h4>Kyle.Kelso@Outlook.com</h4>
              </li>
              <li>
                <h3>Github -</h3>&nbsp;
                <h4>https://github.com/kylekelso</h4>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default Main
