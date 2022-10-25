import type , {GetStaticProps, NextPage} from "next"
import Head from "next/head"
import About from "../components/About"
import Header from "../components/Header"
import Hero from "../components/Hero"
import WorkExperience from "../components/WorkExperience"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocial } from "../utils/fetchSocials"



type Props = {
	pageInfo : PageInfo;
	experiences: Experience[];
	skills : Skill[] ;
	projects : Project[];
	socials: Social[];
}


const Home  = ({projects, skills, socials , experiences, pageInfo} : Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Head>
				<title>Demola</title>
			</Head>

			<Header />

			{/* Hero */}
			<section id = "hero" className="snap-start">
              <Hero />
			</section>

			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>

			{/* Experience */}
			<section id = "experience" className="snap-center">
               <WorkExperience />
			</section>

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	)
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async() => {

	const pageInfo: PageInfo= await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocial();

return {
  props : {
	pageInfo,
	experiences,
	skills,
	projects,
	socials

  },

  revalidate: 10,
}

}