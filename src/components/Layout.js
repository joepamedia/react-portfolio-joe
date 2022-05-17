import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header></Header>
      <main className="mw1280">{props.children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
