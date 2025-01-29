import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav className="rounded-md border-2">
      <ul className="flex flex-row justify-start">
        <li className="px-4">
          <a className="underline">
            <NavLink to={"/home"}>
              <i className="fa-solid fa-fw fa-home"></i>
              Home
            </NavLink>
          </a>
        </li>
        <li className="px-4">
          <a className="underline">
            <NavLink to={"/leet"}>
              <i className="fa-solid fa-fw fa-fire"></i>
              Leet
            </NavLink>
          </a>
        </li>
        {/* <li className="px-4">
          <a className="active">
            <i className="fa-solid fa-fw fa-tags"></i>
            Pricing
          </a>
        </li>
        <li className="px-4">
          <a>
            <i className="fa-solid fa-fw fa-blog"></i>
            Blog
          </a>
        </li>
        <li className="px-4">
          <a>
            <i className="fa-solid fa-fw fa-address-book"></i>
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
