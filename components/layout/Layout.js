import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer class='py-5 my-2 bg-dark'>
        <Container className='px-4'>
          <p class='text-center text-white'>Copyright &copy; Sheepog Project LLC 2022</p>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
