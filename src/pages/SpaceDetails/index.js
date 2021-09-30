import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchedDetails } from "../../store/spaces/actions";
import { selectFetchedDetails } from "../../store/spaces/selectors";
import Stories from "../../components/Stories";
import { Container, Jumbotron } from "react-bootstrap";

export default function SpaceDetails(props) {
  const stories = useSelector(selectFetchedDetails);
  const { id } = useParams();
  const dispatch = useDispatch();

  // console.log("space data", stories);

  useEffect(() => {
    dispatch(fetchedDetails(id));
  }, []);

  return (
    <div>
      <Container>
        <h1>Space Details</h1>
        {!stories ? (
          "...Loading"
        ) : (
          <Jumbotron
            style={{
              backgroundColor: stories.backgroundColor,
              color: stories.color,
            }}
          >
            <div>
              <h2>{stories.title}</h2>
              <p>{stories.description}</p>
            </div>
          </Jumbotron>
        )}
        {!stories ? (
          "...Loading"
        ) : (
          <Jumbotron
            style={{
              backgroundColor: stories.backgroundColor,
              color: stories.color,
            }}
          >
            {stories.stories
              .sort((a, b) => {
                return b.createdAt.localeCompare(a.createdAt);
              })
              .map((story) => {
                return (
                  <Stories
                    key={story.id}
                    id={story.id}
                    name={story.name}
                    content={story.content}
                    imageurl={story.imageurl}
                  />
                );
              })}
          </Jumbotron>
        )}
      </Container>
    </div>
  );
}
