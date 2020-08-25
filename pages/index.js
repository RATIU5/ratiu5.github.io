import Head from 'next/head'
import Background from './components/Background'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Scroller from './components/Scroller'
import ContactForm from './components/ContactForm'
import ScrollerItem from './components/ScrollerItem'

import styles from '../styles/Home.module.css'

import { BsFillTerminalFill } from 'react-icons/bs';
import { SiGithub, SiGit, SiCss3, SiHtml5, SiJavascript, SiReact, SiSass, SiJava, SiOpengl, SiPython, SiVisualstudio, 
		SiVisualstudiocode, SiIntellijidea, SiCplusplus, SiCmake, SiBlender, SiFilezilla, SiNodeDotJs, SiNpm,
		SiAudacity } from "react-icons/si";
import { RiFileExcel2Fill } from 'react-icons/ri';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>JON_RATIU5</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ff613d" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />

			</Head>

			<Background></Background>

			<NavBar></NavBar>

				<div className={styles.mainContainer}>

					<div className={styles.space}></div>
					<div className={styles.space}></div>

					<div className={styles.titleSection}>
						<div className={styles.titleContainer}>
							<img src="/avatar_op.png" className={styles.avatar}></img>
							<div className={styles.devider}></div>
							<h1 className={styles.title}>
								RATIU5
							</h1>
						</div>
					</div>

					<div className={styles.space}></div>
					<div className={styles.space}></div>

					<div id="about" className={styles.detailsSection}>
						<div className={styles.detailsHeader}>
							<h3>Skills & Experience</h3>
						</div>
						<div className={styles.detailsContainer}>
							<Scroller>
								<ScrollerItem info="Blender"><SiBlender /></ScrollerItem>
								<ScrollerItem info="Audacity"><SiAudacity /></ScrollerItem>
								<ScrollerItem info="Git"><SiGit /></ScrollerItem>
								<ScrollerItem info="Github"><SiGithub /></ScrollerItem>
								<ScrollerItem info="Visual Studio"><SiVisualstudio /></ScrollerItem>
								<ScrollerItem info="C++"><SiCplusplus /></ScrollerItem>
								<ScrollerItem info="OpenGL"><SiOpengl /></ScrollerItem>
								<ScrollerItem info="Java"><SiJava /></ScrollerItem>
								<ScrollerItem info="IntelliJ IDEA"><SiIntellijidea /></ScrollerItem>
								<ScrollerItem info="Python"><SiPython /></ScrollerItem>
								<ScrollerItem info="HTML5"><SiHtml5 /></ScrollerItem>
								<ScrollerItem info="React"><SiReact /></ScrollerItem>
								<ScrollerItem info="JavaScript"><SiJavascript /></ScrollerItem>
								<ScrollerItem info="SASS"><SiSass /></ScrollerItem>
								<ScrollerItem info="CSS"><SiCss3 /></ScrollerItem>
								<ScrollerItem info="CMake"><SiCmake /></ScrollerItem>
								<ScrollerItem info="Node.js"><SiNodeDotJs /></ScrollerItem>
								<ScrollerItem info="npm"><SiNpm /></ScrollerItem>
								<ScrollerItem info="FileZilla"><SiFilezilla /></ScrollerItem>
								<ScrollerItem info="VS Code"><SiVisualstudiocode /></ScrollerItem>
								<ScrollerItem info="Bash & Batch"><BsFillTerminalFill /></ScrollerItem>
								<ScrollerItem info="Excel"><RiFileExcel2Fill /></ScrollerItem>
							</Scroller>
						</div>
						<div className={styles.detailsTextMore}>& more!</div>
					</div> 

					<div className={styles.aboutSection}>
						<div className={styles.aboutHeader}>
							<h3>About me</h3>
						</div>

						<div className={styles.aboutContentContainer}>
							<div className={styles.aboutContentBox}>
								<p>
									My real name is John Memmott, but am refered to by my username 
									<span style={{color: "#FF613D"}}> RATIU5</span>.
									I am a programmer who found a love for creating applications, websites
									and AI tools. I created my first website when I was 13 and a year later, 
									built my first computer. Altough my website was terrible and my computer 
									was far from a luxurious gaming computer, I am still proud of my 
									accomplishments. : )
								</p>
							</div>
							<div className={styles.aboutContentBox}>
								<p>
									In my free time I love making <span style={{fontSize: "2.1rem"}}>music, </span> 
									3D <span style={{fontSize: "1.6rem"}}>sculpting</span> in Blender, creating new recipes
									to <span style={{fontSize: "1.8rem"}}>cook or bake</span> and even just
									<span style={{fontSize: "2.3rem"}}> learning!</span> New technologies are always coming
									out and it's important for me to stay up-to-date with the latest tools so I can better my 
									programming experience. If I'm not programming, making beats, cooking or learning, you
									can probably find me hiking and taking pictures in the mountains of the state of 
									Washington.
								</p>
							</div>
						</div>
					</div> 

					<div id="projects" className={styles.projectsSection}>
						<div className={styles.projectsHeader}>
							<h3>Projects</h3>
						</div>

						<div className={styles.projectsContainer}>
							<Project name="Hazel" url="https://github.com/RATIU5/Hazel" >
								Hazel is a full-featured game engine with tools to make video-games.
								I am learning howto do this by following along with Yan Chernikov (TheCherno) who has a
								YouTube series where he develops the Hazel game engine from scratch.
							</Project>
							<Project name="RATIU5" url="https://github.com/RATIU5/ratiu5.github.io">
								jonratiu5.github.io is my website, the one you are currently on! It was built with React using
								Next.js. Feel free to check out the source code!
							</Project>
							<Project name="Notesbook" url="https://github.com/RATIU5/notesbook-py">
								Notesbook is a very simple text editor, built 100% in Python! The GUI library used was Tkinter
								which helps with opening and saving text documents.
							</Project>
						</div>
					</div> 

					<div id="contact" className={styles.contactSection}>
						<ContactForm />
					</div>

					<div className={styles.footerSection}>
						&#169; Copyright 2020 | Made with ❤️<br></br>Source on <a href="https://github.com/RATIU5/ratiu5.github.io">GitHub</a>
					</div>

				</div>

		</div>
	)
}
