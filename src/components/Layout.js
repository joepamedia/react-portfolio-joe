import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header></Header>
      <main className="mw">{props.children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
