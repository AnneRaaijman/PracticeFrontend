import React from "react";
import { selectUserSpace } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Story from "../../components/MySpaceStories";
import { deleteStory } from "../../store/user/actions";

export default function MySpace() {
  const dispatch = useDispatch();
  const space = useSelector(selectUserSpace);
  console.log("data", space?.stories);
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
