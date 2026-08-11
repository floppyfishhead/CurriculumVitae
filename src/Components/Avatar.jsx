import image from "../Images/LinkedIn.png";

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Professional photo placeholder">
      <div className="avatar-placeholder">
        <img
          src={image}
          width={170}
          height={190}
          className="bi bi-person-fill"
          alt="Professional photo"
        />
      </div>
      <span className="photo-note">Engineer Life</span>
    </div>
  );
}

export default Avatar;
