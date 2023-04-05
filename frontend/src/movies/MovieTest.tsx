import logo from '../daley.png';
import Layout from '../pages/Layout';

// function Header(props: any) {
function MovieTest() {
  return (
    <header className="row">
      <Layout />
      <div className="col-4">
        <img src={logo} alt="logo" />
      </div>
      <div className="col">
        {/* <h3>{props.slogan}</h3> */}
        <h3>Let's go baby! - movies</h3>
      </div>
    </header>
  );
}

export default MovieTest;
