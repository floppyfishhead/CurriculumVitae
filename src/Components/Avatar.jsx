import image from "../Images/LinkdinAvatar.png";

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Professional photo placeholder">
      <div className="avatar-placeholder">
        <img
          src={image}
          width={170}
          height={210}
          className="bi bi-person-fill"
          alt="Professional photo"
        />
      </div>
      <span className="photo-note">An Engineering Life</span>
    </div>
  );
}

export default Avatar;
