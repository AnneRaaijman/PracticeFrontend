import React, { useState } from "react";
import { selectUserSpace } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Story from "../../components/MySpaceStories";
import { deleteStory } from "../../store/user/actions";
import MyStoryForm from "../../components/MySpaceStories/StoryForm";

export default function MySpace() {
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  console.log("data", space?.stories);
  const [formButton, setFormButton] = useState(false);
  return !space ? (
    "...Loading"
  ) : (
    <Jumbotron
      style={{
        backgroundColor: space.backgroundColor,
        color: space.color,
      }}
    >
      <h1>{space.title}</h1>
      <p>{space.description}</p>

      <Container>
        {formButton ? (
          <Card>
            <MyStoryForm />
          </Card>
        ) : null}
        <button
          onClick={() =>
            formButton ? setFormButton(false) : setFormButton(true)
          }
        >
          Post
        </button>
      </Container>

      {space.stories.map((story) => {
        return (
          <div>
            <Story
              key={story.id}
              id={story.id}
              name={story.name}
              content={story.content}
              imageurl={story.imageurl}
            />
            <button onClick={() => dispatch(deleteStory(story.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </Jumbotron>
  );
}
