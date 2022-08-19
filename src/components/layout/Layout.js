import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
