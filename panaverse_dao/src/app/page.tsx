import Header from './components/header';
import HomeIntro from './components/homeIntro';
import Footer from './components/footer';
import NavBar from './components/navbar';
import EligibilityCriteria from './components/eligibilitycriteria';
import CourseOutCome from './components/courseoutcome';
import HomeCourses from './components/homecourses';

export default function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <HomeIntro />

    <EligibilityCriteria />
    
    <HomeCourses />

    
    <CourseOutCome />
    <Footer />
    </>
  )
}
