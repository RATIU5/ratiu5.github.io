import Head from 'next/head'
import SectionHeader from './components/SectionHeader'
import TextLink from './components/TextLink'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Scroller from './components/Scroller'
import ContactForm from './components/ContactForm'
import ScrollerItem from './components/ScrollerItem'

import styles from '../styles/Home.module.css'

import { BsFillTerminalFill } from 'react-icons/bs';
import { SiGithub, SiGit, SiCss3, SiHtml5, SiJavascript, SiReact, SiSass, SiJava, SiOpengl, SiPython, SiVisualstudio, 
		SiVisualstudiocode, SiIntellijidea, SiCplusplus, SiCmake, SiBlender, SiFilezilla, SiNodeDotJs, SiNpm,
		SiAudacity, SiAdobephotoshop, SiAdobepremiere, SiMicrosoftpowerpoint, SiMicrosoftexcel, SiMicrosoftword,
		SiCsharp } from "react-icons/si";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>RATIU5</title>
				<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet"></link>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ff613d" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />

			</Head>


			<div className={styles.bounds}>

				<NavBar></NavBar>

				<div className={styles.space}></div>

				<div className={styles.openerSection}>
					<table className={styles.openerTable}>
						<tr>
							<th>
								<div className={styles.openerUpperContainer}>
									<div className={styles.imgCon1}>
										<div className={styles.imgCon2}>
											<img src="/avatar_rotate.png" className={styles.avatar}></img>
										</div>
									</div>
								</div>
							</th>
						</tr>
						<tr>
							<th>
								<div className={styles.openerLowerContainer}>
									<h2>
										Software Developer &#183; Web Programmer &#183; Music Producer
									</h2>
								</div>
							</th>
						</tr>
					</table>

					<div className={styles.space}></div>

					<div className={styles.detailsContainer}>
						<Scroller>
							<ScrollerItem><SiBlender /></ScrollerItem>
							<ScrollerItem><SiAudacity /></ScrollerItem>
							<ScrollerItem><SiGit /></ScrollerItem>
							<ScrollerItem><SiGithub /></ScrollerItem>
							<ScrollerItem><SiVisualstudio /></ScrollerItem>
							<ScrollerItem><SiCplusplus /></ScrollerItem>
							<ScrollerItem><SiOpengl /></ScrollerItem>
							<ScrollerItem><SiJava /></ScrollerItem>
							<ScrollerItem><SiIntellijidea /></ScrollerItem>
							<ScrollerItem><SiPython /></ScrollerItem>
							<ScrollerItem><SiCsharp /></ScrollerItem>
							<ScrollerItem><SiHtml5 /></ScrollerItem>
							<ScrollerItem><SiReact /></ScrollerItem>
							<ScrollerItem><SiJavascript /></ScrollerItem>
							<ScrollerItem><SiSass /></ScrollerItem>
							<ScrollerItem><SiCss3 /></ScrollerItem>
							<ScrollerItem><SiCmake /></ScrollerItem>
							<ScrollerItem><SiNodeDotJs /></ScrollerItem>
							<ScrollerItem><SiNpm /></ScrollerItem>
							<ScrollerItem><SiFilezilla /></ScrollerItem>
							<ScrollerItem><SiVisualstudiocode /></ScrollerItem>
							<ScrollerItem><BsFillTerminalFill /></ScrollerItem>
							<ScrollerItem><SiAdobephotoshop /></ScrollerItem>
							<ScrollerItem><SiAdobepremiere /></ScrollerItem>
							<ScrollerItem><SiMicrosoftexcel /></ScrollerItem>
							<ScrollerItem><SiMicrosoftpowerpoint /></ScrollerItem>
							<ScrollerItem><SiMicrosoftword /></ScrollerItem>
						</Scroller>
					</div>
					
				</div>

				<span id="linkProjects"></span>
				<SectionHeader id="linkProjects">Projects</SectionHeader>

				<div className={styles.projectsSection}>
					<div className={styles.projectsContainer}>
						<Project name="Hazel" url="https://github.com/RATIU5/Hazel" date="July 2020 - Current">
							Hazel is a full-featured game engine with tools to make video-games.
							This project is being done by following TheCherno's game engine series about
							developing an entire game engine from scratch.
						</Project>
						<Project name="RATIU5" url="https://github.com/RATIU5/ratiu5.github.io" img="/favicons/mstile-144x144.png" date="August 2020">
							This is the current website you are on. It was created using React, 
							specifically the <TextLink href="https://nextjs.org/">Next.js</TextLink> framework. Feel free to
							browse the source code.
						</Project>
						<Project name="Asteroids" url="https://github.com/RATIU5/asteroids" img="/projects/asteroids.png" date="November 2019">
							A recreation of Atari's Asteroids game from 1979. The player must avoid obsticles while shooting asteroids and alien
							spaceships to survive. This was programmed in C++ using the freeglut library.
						</Project>
						<Project name="Notesbook" url="https://github.com/RATIU5/notesbook-py" img="/projects/notesbook.png" date="May 2017">
							Notesbook is a very simple text/note editor build entirely with Python. The GUI library used 
							was Tkinter which helps with opening and saving text documents.
						</Project>
					</div>
				</div> 

				<span id="linkAbout"></span>
				<SectionHeader>About me</SectionHeader>

				<div className={styles.aboutSection}>
					<div className={styles.aboutContentContainer}>
						<div className={styles.aboutContentBox}>
							<p>
								My real name is John Memmott, but am referred to by my username 
								<span style={{color: "#33a194"}}> RATIU5</span>.
								I am a web and software developer who found a love for creating applications, websites
								and AI tools.
							</p>
						</div>
						<div className={styles.aboutContentBox}>
							<p>
								In my free time I love making <b>music</b>, making <b>art</b> in Blender, creating 
								new recipes to <b>cook or bake</b> and even just <b>learning</b>! New technologies 
								are always coming out and it's important for me to stay up-to-date with the latest 
								tools so I can better my programming experience. If I'm not programming, making beats, 
								cooking or learning, you can probably find me hiking and taking pictures in the mountains.
							</p>
						</div>
					</div>
				</div>

				<span id="linkContact"></span>
				<SectionHeader>Message me</SectionHeader>

				<div id="contact" className={styles.contactSection}>
					<ContactForm />
				</div>

				<div className={styles.space}></div>

				<div className={styles.footerSection}>
					&#169; Copyright 2020 | Made with ❤️<br></br>Source on <TextLink href="https://github.com/RATIU5/ratiu5.github.io">GitHub</TextLink>
				</div>

			</div>

		</div>
	)
}
