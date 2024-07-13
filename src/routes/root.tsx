import { Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div>
      <header>
        <h1>LOGO</h1>
      </header>

      <Outlet />

      <footer>
        <p>COPYRIGHT</p>
      </footer>
    </div>
  );
}
