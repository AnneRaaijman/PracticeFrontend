import React from "react";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function Story(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <strong>{props.name}</strong>
      </h2>
      <p>{props.content}</p>
      <img
        src={props.imageurl}
        alt={props.name}
        style={{ display: "block,", maxWidth: "100%" }}
      />
      {/* <button
        onClick={() => dispatch(deleteStory(props.id))}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Remove story
      </button> */}
    </div>
  );
}
