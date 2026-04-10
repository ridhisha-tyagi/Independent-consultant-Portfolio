import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'

import Hero from './sections/Hero'
import WhatIDo from './sections/WhatIDo'
import Services from './sections/Services'
import Approach from './sections/Approach'
import CaseStudies from './sections/CaseStudies'
import Process from './sections/Process'
import Diagnostic from './sections/Diagnostic'
import Blogs from './sections/Blogs'
import About from './sections/About'
import FinalCTA from './sections/FinalCTA'

import Profile from './pages/Profile'
import CaseStudy from "./pages/CaseStudy";
import AllCaseStudies from "./pages/AllCaseStudies";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";

function App() {

  // ✅ SCROLL REVEAL LOGIC (CORRECT PLACEMENT)
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))
  }, [])

  return (
    <Routes>

  {/* HOME */}
	  <Route
		path="/"
		element={
		  <Layout>
			<Hero />
			<WhatIDo />
			<Services />
			<Diagnostic />
			<Approach />
			<CaseStudies />
			<Process />
			<About />
			<FinalCTA />
		  </Layout>
		}
	  />

	  {/* PROFILE */}
	  <Route
		path="/profile"
		element={
		  <Layout>
			<Profile />
		  </Layout>
		}
	  />

	  {/* CASE STUDY */}
	  <Route
		path="/case/:slug"
		element={
		  <Layout>
			<CaseStudy />
		  </Layout>
		}
	  />

	  {/* ALL CASE STUDIES */}
	  <Route
		path="/case-studies"
		element={
		  <Layout>
			<AllCaseStudies />
		  </Layout>
		}
	  />
	  
		<Route
		  path="/contact"
		  element={
			<Layout>
			  <Contact />
			</Layout>
		  }
		/>

	</Routes>
  )
}

export default App