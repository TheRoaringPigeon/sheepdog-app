import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./PageFocalPoint.module.css";

function WithHeaderStyledExample() {
  return (
    <div className="sticky-top">
      <Card className="text-center w-100" bg="dark" text="light">
        <Card.Header as="h5">Bringing the Best Our of You</Card.Header>
        <Card.Body>
          <Card.Title>
            Sign Up for Leasons on Gun Safetey and Proper Gun Use
          </Card.Title>
          <Card.Text>
            There are group and private leasons available! Find a date and time
            that work for you.
          </Card.Text>
          <Button variant="light">Sign Me Up</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithHeaderStyledExample;
