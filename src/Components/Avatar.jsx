import image from "../Images/LinkdinAvatar.png";

function Avatar() {
  return (
    <div className="avatar-wrap" aria-label="Professional photo placeholder">
      <img
        src={image}
        width="195"
        height="240"
        className="bi bi-person-fill"
        alt="Professional photo"
        class="rounded mx-auto d-block"
        alt="Professional photo"
      ></img>
      <span className="photo-note">Brian K Turner</span>
    </div>
  );
}

export default Avatar;
