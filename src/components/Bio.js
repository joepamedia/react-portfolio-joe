import heroImg from "../assets/images/DoubleExposurePalmisano_Joe lowres.jpg";
// import resume from "../pdf/Joe Palmisano Resume (1).pdf";

function Bio() {
  return (
    <>
      <div>
        <img src={heroImg} class="img img-border" alt="home-hero-img" />
      </div>
      <div class="box">
        <h3>
          My name is Joseph Palmisano, and I am a freelance photographer and videographer based in
          Norridge, Illinois. In my years of working in this industry, I have traveled domestically
          and internationally on jobs with clients to meet their needs. Currently, I am enrolled at
          the Northwestern Full Stack Flex coding bootcamp, where I am learning HTML, CSS, and
          Javascript!
        </h3>
      </div>
    </>
  );
}

export default Bio;
