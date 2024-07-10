import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "./team-card";
import teamImage1 from "../../assets/images/team/team-1-1.jpeg";
import teamImage2 from "../../assets/images/team/team-1-2.jpeg";
import teamImage3 from "../../assets/images/team/team-1-3.jpeg";
import teamImage4 from "../../assets/images/team/team-4.jpeg";
import teamImage5 from "../../assets/images/team/team-image-5-resize.jpeg";
import teamImage6 from "../../assets/images/team/team-image-6-resize.jpeg";
import teamImage7 from "../../assets/images/team/team-image-7-resize.jpeg";
import vicePresident from "../../assets/images/team/team-1-5.jpg";
import exdirectoroffinance from "../../assets/images/team/team-1-6.jpg";
import exDirecCopSev from "../../assets/images/team/team-1-7.jpg";
import auditorGen from "../../assets/images/team/team-1-8.jpg";
import directorHumanResources from "../../assets/images/team/team-1-9.jpg";
import ictDirec from "../../assets/images/team/team-2-0.jpg";
import dirWomenAffairs from "../../assets/images/team/ddwomaffairs.jpg";
import genSecWomAff from "../../assets/images/team/gensecwomaffairs.jpg";
import ddResearchDoc from "../../assets/images/team/ddreasearch.jpg";
import ddWomenAff from "../../assets/images/team/ddwomaffairs.jpg";
import dRuralDev from "../../assets/images/team/dofruraldev.jpg";
import dHealthSafe from "../../assets/images/team/dofhealthsafeenv.jpg";
import dProjects from "../../assets/images/team/dprojects.jpg";
import dprocurements from "../../assets/images/team/dprocurements.jpg";
import dWelfaremgt from "../../assets/images/team/dwelfaremmt.jpg";
import dPRO from "../../assets/images/team/dpubreloff.jpg";
import deconomicdev from "../../assets/images/team/deconomicdev.jpg";
import dInfrDev from "../../assets/images/team/dinfrasdev.jpg";
import dEducation from "../../assets/images/team/deduc.jpg";
import chiefMedDoc from "../../assets/images/team/chiefmeddoc.jpg";
import natChiefSecOff from "../../assets/images/team/natchiefsecoff.jpg";
import dResearch from "../../assets/images/team/dreasearch.jpg";
import dMonitorEval from "../../assets/images/team/team-1-4.jpg";
import dBudgetsPlan from "../../assets/images/team/dbudgetsplan.jpg";
import dMediaPub from "../../assets/images/team/dmediapub.jpg";
import chiefProtOff from "../../assets/images/team/chiefprotoff.png";
import dPlanning from "../../assets/images/team/dplanning.jpg";
import dTrainingOrient from "../../assets/images/team/dtrainingorient.jpg";
import dAgric from "../../assets/images/team/dagric.jpg";
import ddAgric from "../../assets/images/team/ddagric.jpg";
import chiefNursingOff from "../../assets/images/team/chiefnursingoff.jpg";
import chiefConsult from "../../assets/images/team/chiefconsultant.jpg";
import ric from "../../assets/images/team/ric.png";
import ncir from "../../assets/images/team/ncrc.png";
import nerc from "../../assets/images/team/nerc.png";
import nwrc from "../../assets/images/team/nwrc.png";
import swrc from "../../assets/images/team/swrc.png";
import ssrc from "../../assets/images/team/ssrc.png";
import serc from "../../assets/images/team/serc.png";
import swrwl from "../../assets/images/team/swrwl.png";
import ssrwl from "../../assets/images/team/ssrwl.png";
import nrwl from "../../assets/images/team/nrwl.png";
import dohs from "../../assets/images/team/dohs.png";
import dfid from "../../assets/images/team/dfid.png";

const TEAM_DATA = [
  {
    extraClass: "content-bg-1",
    name: "Ekwere Ralph Angel",
    position: "African President",
    designation: "Divine Era Foundation",
    image: teamImage1,
  },
  {
    extraClass: "content-bg-2",
    name: "Ifedayo Oloruntoba Buoro",
    position: "African Vice President",
    designation: "Divine Era Foundation",
    image: teamImage6,
  },
  {
    extraClass: "content-bg-3",
    name: "Caroline Ndifon Lifu",
    position: "National Director of Programmes (DEF)",
    designation: "Divine Era Foundation",
    image: teamImage2,
  },
  {
    extraClass: "content-bg-4",
    name: "Princewill Awah",
    position: "Secretary General (DEF)",
    designation: "Divine Era Foundation",
    image: teamImage3,
  },
  {
    extraClass: "content-bg-5",
    name: "Mary Foluke Oloruntoba",
    position: "National Director of Women's Affairs",
    designation: "Divine Era Foundation",
    image: teamImage5,
  },
  {
    extraClass: "content-bg-6",
    name: "Patrick Anidi",
    position: "Chief Consultant",
    designation: "Divine Era Foundation",
    image: teamImage7,
  },
];

const OTHER_TEAMS = [
  {
    image: exdirectoroffinance,
    title: "Executive Director of Finance and Operation",
    name: "Ogedengbe Joseph Friday",
  },
  {
    image: auditorGen,
    title: "Auditor General",
    name: "Francis O. Bassey",
  },
  {
    image: exDirecCopSev,
    title: "Executive Director Corporate Services",
    name: "Ajiloko Francis",
  },
  {
    image: directorHumanResources,
    title: "Director Human Resources",
    name: "Alfred Ajayi",
  },
  {
    image: ictDirec,
    title: "Director ICT",
    name: "Oseni Ahmed Oluwasina",
  },
  {
    image: genSecWomAff,
    title: "General Secretary for Women Affairs",
    name: "Grace Dio",
  },
  {
    image: ddResearchDoc,
    title: "Deputy Director for Research and Documentation",
    name: "AMB.DR. Ngofa Esther Opara",
  },
  {
    image: ddWomenAff,
    title: "Deputy Director for Women Affairs",
    name: "Helen Ekpe",
  },
  {
    image: dRuralDev,
    title: "Director for Rural Developments",
    name: "Samuel Ogunleye Olalekan",
  },
  {
    image: dohs,
    title: "Director for Health Safe Environment",
    name: "Anyanwu Mirabele Imabong",
  },
  {
    image: dProjects,
    title: "Director Projects",
    name: "Sunday Olushola Ebo",
  },
  {
    image: dprocurements,
    title: "Director Procurements",
    name: "Patience Effiong Joseph",
  },
  {
    image: dWelfaremgt,
    title: "Director for Welfare Management",
    name: "Florence Onwochi",
  },
  {
    image: dPRO,
    title: "Director Public Relations Officer",
    name: "Rasoul Abasiama Angel",
  },
  {
    image: deconomicdev,
    title: "Director for Economic Development and Management",
    name: "Nwankwo Patricia Uchenna",
  },
  {
    image: dfid,
    title: "Director for Infrasctructural Development",
    name: "Kenneth A Eze",
  },
  {
    image: dEducation,
    title: "Director for Education",
    name: "Eduum Enefiok Ekanem",
  },
  {
    image: chiefMedDoc,
    title: "CHief Medical Doctor",
    name: "DR. Bridget Omotoso",
  },
  {
    image: natChiefSecOff,
    title: "National Chief Security Officer",
    name: "Ezenwanko Jude Ifeanychukwu",
  },
  {
    image: dResearch,
    title: "Director for Research and Development",
    name: "Yakubu B Bulus",
  },
  {
    image: dMonitorEval,
    title: "Director for Monitoring and Evaluation",
    name: "Theophilus Ekun",
  },
  {
    image: dBudgetsPlan,
    title: "Director for Budgets and Plannings,",
    name: "Ezenwanko Jude Ifeanychukwu",
  },
  {
    image: dMediaPub,
    title: "Director for Media and Publicity",
    name: "Oluwasami Israel Obanijesu",
  },
  {
    image: chiefProtOff,
    title: "Chief Protocol Officer",
    name: "Ngozi Benedette Okafor",
  },
  {
    image: dPlanning,
    title: "Director of Planning",
    name: "Emmanuel Nse",
  },
  {
    image: dTrainingOrient,
    title: "Director for Training and Orientation",
    name: "Adebayo Clara Olabimpe",
  },
  {
    image: dAgric,
    title: "Director for Agriculture",
    name: "Ogundayomi Kayide John",
  },
  {
    image: ddAgric,
    title: "Deputy Director of Agriculture",
    name: "Dr Aliyu Umar",
  },
  {
    image: chiefNursingOff,
    title: "Chief Nursing Officer",
    name: "Aderinkola Margert Bose",
  },
];

const REGIONAL_COORDINATORS = [
  {
    image: ric,
    title: "Regional ICT Coordinator",
    name: "Ogedengbe Joseph Friday",
  },
  {
    image: ncir,
    title: "North Central Regional Coordinator",
    name: "Nuhu Andrew",
  },
  {
    image: nerc,
    title: "North East Regional Coordinator",
    name: "Shalgus Roland",
  },
  {
    image: nwrc,
    title: "North West Regional Coordinator",
    name: "Ahmed Yusuf Kangiwa",
  },
  {
    image: swrc,
    title: "South West Regional Coordinator",
    name: "Ajao Mercy Olubunmi",
  },
  {
    image: ssrc,
    title: "South South Regional Coordinator",
    name: "Enobong Paul Udo",
  },
  {
    image: serc,
    title: "South East Regional Coordinator",
    name: "Anedo Christopher Igboanugo",
  },
  {
    image: swrwl,
    title: "South West Regional Women Leader",
    name: "Dr Adetula Omoyemi Hellen",
  },
  {
    image: ssrwl,
    title: "South-South Regional Women Leader",
    name: "Lovina Emen Ben",
  },
  {
    image: nrwl,
    title: "Northern Regional Women Leader",
    name: "Hanna Emman Idoko",
  },
];

const TeamPage = () => {
  return (
    <section className="team-page pt-120 pb-120">
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "3rem",
          }}
        >
          Executives
        </h1>
        <div className="team-3-col">
          {TEAM_DATA.map(
            ({ extraClass, name, designation, image, position }, index) => (
              <TeamCard
                key={index}
                extraClass={extraClass}
                name={name}
                position={position}
                designation={designation}
                image={image}
              />
            )
          )}
        </div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "3rem",
            marginTop: "3rem",
          }}
        >
          Members
        </h1>
        <div className="other-teams">
          {OTHER_TEAMS.map((team, index) => (
            <div className="other_team-card" key={index}>
              <img src={team.image} alt={team.name} />
              <h3>{team.name}</h3>
              <p>{team.title}</p>
            </div>
          ))}
        </div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "3rem",
            marginTop: "3rem",
          }}
        >
          Regional Coordinators
        </h1>
        <div className="other-teams">
          {REGIONAL_COORDINATORS.map((team, index) => (
            <div className="other_team-card" key={index}>
              <img src={team.image} alt={team.name} />
              <h3>{team.name}</h3>
              <p>{team.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamPage;
