import heroImg from "../assets/images/DoubleExposurePalmisano_Joe lowres.jpg";
// import resume from "../pdf/Joe Palmisano Resume (1).pdf";
import Helicopter from "../assets/images/IMG_9826.JPG";

function Bio() {
  return (
    <div>
      <div className="flexwrapper">
        <div class="box">
          <h2>About Me</h2>
          <p class="ta">
            My name is Joseph Palmisano, and I am a freelance visual artist based in Norridge,
            Illinois. In my years of working in this industry, I have traveled domestically and
            internationally on jobs with clients to meet their needs. In addition to visual arts, I
            am a Full Stack Web Developer, and have been in training since November of 2021, when I
            began the Northwestern Full Stack Flex coding bootcamp. My approximate graduation is May
            24th!
            <br />
            <br />
            Upon graduation, I plan to maintain freelance media work, and additionally I plan to
            continue practice web development and learn new languages like Python!
          </p>
        </div>
        <div className="img-border">
          <img src={heroImg} class="img " alt="home-hero-img" />
          <img src={Helicopter} class="img " alt="helicopter-img" />
        </div>
      </div>
    </div>
  );
}

export default Bio;
