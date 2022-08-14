function Landing(props) {
  return (
    <div className="LandingBackground">
      <div className="Landing-moto">Where the best packs are made</div>
      <div className="Landing-nextBtn" onClick={props.continue}>
        Continue
      </div>
    </div>
  );
}

export default Landing;
