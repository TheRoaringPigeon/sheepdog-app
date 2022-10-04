import Card from "react-bootstrap/Card";

const ImageCap = (props) => {
  return (
    <>
      {props.top && (
        <Card>
          <Card.Img style={{height: '250px'}} variant="top" src={props.pic.url} alt={props.pic.caption}/>
          <Card.Body>
            <Card.Text>
              {props.pic.text}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      {!props.top && (
        <Card>
          <Card.Body>
            <Card.Text>
              {props.pic.text}
            </Card.Text>
          </Card.Body>
          <Card.Img style={{height: '250px'}} variant="bottom" src={props.pic.url} alt={props.pic.caption}/>
        </Card>
      )}
    </>
  );
};

export default ImageCap;