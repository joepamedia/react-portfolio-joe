import heroImg from "../assets/images/DoubleExposurePalmisano_Joe lowres.jpg";
// import resume from "../pdf/Joe Palmisano Resume (1).pdf";

function Bio() {
  return (
    <div className="flexwrapper">
      <div class="box">
        <h2>About Me</h2>
        <h3 class="ta">
          My name is Joseph Palmisano, and I am a freelance visual artist based in Norridge,
          Illinois. In my years of working in this industry, I have traveled domestically and
          internationally on jobs with clients to meet their needs. In addition to visual arts, I am
          a Full Stack Web Developer, and have been in training since November of 2021, when I began
          the Northwestern Full Stack Flex coding bootcamp. I currently am exploring job
          opportunities for Web Development as well as Visual Arts! Contact me today!
        </h3>
      </div>
      <div className="img-border">
        <img src={heroImg} class="img " alt="home-hero-img" />
      </div>
    </div>
  );
}

export default Bio;
