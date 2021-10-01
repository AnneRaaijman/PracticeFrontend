import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { postStory } from "../../store/user/actions";
import { selectUserSpace } from "../../store/user/selectors";
export default function MyStoryForm() {
  const dispatch = useDispatch();
  const spaceId = useSelector(selectUserSpace).id;
  const initialState = {
    name: "",
    content: "",
    imageurl: "https://source.unsplash.com/1600x900/?",
    spaceId: null,
  };

  const [newPost, setNewPost] = useState(initialState);
  console.log("The new post", newPost);
  function submitForm(event) {
    event.preventDefault();
    dispatch(postStory(newPost));
  }

  function onChangeHandler(event) {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
      spaceId,
    });
  }

  console.log("whats in here?", newPost);

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Post a cool story bro</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name={"name"}
          value={newPost.name}
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="Name of your story"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          name={"content"}
          value={newPost.content}
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="Tell us what happened"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          name={"imageurl"}
          value={newPost.imageurl}
          onChange={(event) => onChangeHandler(event)}
          type="text"
          placeholder="A picture says more than 1000 words"
        />
        {newPost.imageurl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={newPost.imageurl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}
//
