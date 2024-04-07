"use client";
import React, { FormEvent, useState } from "react";
import { usePlaylists, usePlaylistsDispatch } from "../Context";
import { PlaylistItem } from "@/components/playlist-item";
import { useRouter } from "next/navigation";
import { Button, Form, Modal } from "react-bootstrap";

export default function PlaylistsPage() {
  const playlists = usePlaylists();
  const router = useRouter();

  const dispatch = usePlaylistsDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const description = formData.get("desc") as string;
    dispatch({ kind: "Addp", name, description });
    handleClose();
  };

  return (
    <>
      {playlists.map((p) => (
        <PlaylistItem
          playlist={p}
          key={p.id}
          onClickOuter={() => {
            router.push(`playlists/${p.id}`);
          }}
          onClickInner={() => {
            dispatch({ kind: "removeP", id: p.id });
          }}
        />
      ))}

      <Button variant="primary" onClick={handleShow}>
        Add playlist
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Playlist name: </Form.Label>
              <Form.Control placeholder="name" name="name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description: </Form.Label>
              <Form.Control as="textarea" placeholder="Fun videos" rows={5} name="desc" />
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
