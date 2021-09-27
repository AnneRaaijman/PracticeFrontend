import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/spaces/actions";
import { fetchedSpaces } from "../../store/spaces/selectors";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Space from "../../components/Space";

export default function Homepage() {
  const spaces = useSelector(fetchedSpaces);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <>
      <Jumbotron>
        <h1>Spaces</h1>
      </Jumbotron>
      <Container>
        {spaces.map((space) => {
          return (
            <Space
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </Container>
    </>
  );
}
