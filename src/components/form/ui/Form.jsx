import React from 'react';
import Header from '../components/Header';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";

const Form = () => {
  return (
    <>
    
    <form className="p-4 bg-[#0a66c2] exclude-print md:max-w-[60%] md:h-screen md:overflow-y-scroll">
      <Header/>
      <LoadUnload/>
      <PersonalInformation/>
      <SocialMedias/>
      <Summary/>
      <Educations/>
      <WorkExperiences/>
      <Projects/>
      <Skills/>
      <Languages/>
      <TestsAndCertifications/>
    </form>
    </>
  );
};

export default Form;
