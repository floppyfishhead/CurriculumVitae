import profilePhoto from "./Images/LinkIn.png";

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Professional photo placeholder">
      <div className="avatar-placeholder">
        <image
          className="bi bi-person-fill"
          src={profilePhoto}
          alt="Professional photo"
        />
      </div>
      <span className="photo-note">Engineer Life</span>
    </div>
  );
}

export default Avatar;
