"use client";

import VideoItem from "@/components/video-item";
import { usePlaylists, usePlaylistsDispatch, useVideos } from "../Context";
import { FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function VideosPage() {
  const videos = useVideos();
  const playlists = usePlaylists();
  const dispatch = usePlaylistsDispatch();

  const [show, setShow] = useState(false);
  const [vidClicked, setVidClicked] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const id = Number(formData.get("name"));
    dispatch({ kind: "addV", id, vid: vidClicked });
    handleClose();
  };

  return (
    <>
      {videos.map((v) => (
        <VideoItem
          video={v}
          key={v.id}
          add
          onClick={() => {
            setVidClicked(v.id);
            handleShow();
          }}
        />
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Playlist name: </Form.Label>
              <Form.Select name="name">
                {playlists.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
