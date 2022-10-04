import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WithHeaderStyledExample() {
  function onClickHandler(event) {
    document.getElementById('schedulerLink').click();
  }

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
          <Button onClick={onClickHandler} variant="light">
            Sign Me Up
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithHeaderStyledExample;
