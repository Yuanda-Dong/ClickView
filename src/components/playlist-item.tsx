import { Button, Col, Row } from "react-bootstrap";
import { Playlist } from "../interfaces/playlist";

interface PlaylistItemProps {
  playlist: Playlist;
  onClickOuter: () => void;
  onClickInner: () => void;
}

export function PlaylistItem(props: PlaylistItemProps) {
  const { playlist, onClickOuter, onClickInner } = props;

  const videoCount =
    playlist.videoIds.length === 1 ? "1 video" : `${playlist.videoIds.length} videos`;

  return (
    <Row className="border rounded p-2 mb-2 hover" onClick={onClickOuter}>
      <Col xs="12" md="3">
        <h2 className="h5">{playlist.name}</h2>
        <p className="mb-0">{videoCount}</p>
      </Col>
      <Col xs="12" md="8">
        <p className="mb-0">{playlist.description}</p>
      </Col>
      <Col xs="12" md="1" className="mb-3">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClickInner();
          }}
        >
          Remove playlist
        </Button>
      </Col>
    </Row>
  );
}
