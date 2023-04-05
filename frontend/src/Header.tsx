import logo from './daley.png';
import Layout from './pages/Layout';

// function Header(props: any) {
function Header() {
  return (
    <header className="row">
      <Layout />
      <div className="col-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="col">
        {/* <h3>{props.slogan}</h3> */}
        <h3>Let's go baby! - header</h3>
      </div>
    </header>
  );
}

export default Header;
