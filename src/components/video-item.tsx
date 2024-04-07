import { Button, Col, Image, Row } from "react-bootstrap";
import { Video } from "../interfaces/video";

interface VideoItemProps {
  video: Video;
  add: boolean;
  onClick: () => void;
}

export default function VideoItem(props: VideoItemProps) {
  const { video, add, onClick } = props;

  return (
    <Row>
      <Col xs="12" md="3" className="mb-3">
        <Image
          fluid
          rounded
          src={`${video.thumbnail}?size=small`}
          alt={video.name}
          className="w-100"
        />
      </Col>
      <Col xs="12" md="8" className="mb-3">
        <h2 className="h4">{video.name}</h2>
        <p>{video.description}</p>
      </Col>

      {add ? (
        <Col xs="12" md="1" className="mb-3">
          <Button onClick={onClick} variant="outline-primary" size="sm">Add to Playlist</Button>
        </Col>
      ) : (
        <Col xs="12" md="1" className="mb-3">
          <Button onClick={onClick} variant="outline-danger">Remove</Button>
        </Col>
      )}
    </Row>
  );
}
