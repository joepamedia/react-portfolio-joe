import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header className="d-f"></Header>
      <main className="mw">{props.children}</main>
      <Footer className="d-f"></Footer>
    </>
  );
}

export default Layout;
