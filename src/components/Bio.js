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
            Illinois. In my years of working in this industry, I've traveled domestically and
            internationally on jobs with clients to meet their needs from documentmenting sports,
            weddings, conferences, and more. Additionally, I am a Junior Full Stack Web Developer,
            certified from Northwestern University's Coding Bootcamp.
            <br />
            <br />
            Upon graduation, I plan to maintain freelance media work, and additionally I plan to
            continue practice web development and learn new languages like Python!
            <br />
            <br />
            In my freetime, I enjoy watching movies or TV shows, gaming, playing hockey, watching
            sports, photography, and being with family and friends.
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
