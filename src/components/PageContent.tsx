import { Outlet } from 'react-router-dom';
import { Header } from "./Header/Header";

export const PageContent = () => {
  return (
    <>
      <Header />

      <div className="main">
        <Outlet />
      </div>
    </>
  );
}