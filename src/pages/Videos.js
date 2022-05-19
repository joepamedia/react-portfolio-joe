import VideoCarousel from "../components/VideoCarousel";

function Videos(props) {
  return (
    <>
      <div className="flex-container">
        <div className="box">
          <h2>Videos</h2>
          <p className="ta">
            Below are some videos that I have done for previous clients! Use the arrows below to see
            more videos!
          </p>
          <VideoCarousel />
        </div>
      </div>
    </>
  );
}

export default Videos;
