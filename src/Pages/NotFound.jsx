import PageHeader from "../Components/PageHeader";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <PageHeader eyebrow="404" title="That page took a detour.">
      <NavLink to="/">Return home</NavLink>
    </PageHeader>
  );
}

export default NotFound;
