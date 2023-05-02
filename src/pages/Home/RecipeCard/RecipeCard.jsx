import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import Rating from "react-rating";
// import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { _id, title, details, image_url, author, rating, total_view } = recipe;

  return (
    <Row xs={1} md={2} className="g-4 m-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Header className="d-flex align-items-center">
              <Image
                style={{ height: "40px" }}
                src={author.img}
                roundedCircle
              />
              <div className="ps-2 d-flex ">
                <div>
                  <p className="mb-0 ps-2">{author?.name}</p>
                </div>
                <div>
                  <p className="mx-4 ">
                    <small>
                      {moment(author?.published_date).format("MM-DD-YYYY")}
                    </small>
                  </p>
                </div>
              </div>
              <div>
                {/* <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt> */}
              </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {details.length < 150 ? (
                  <>{details}</>
                ) : (
                  <>
                    {details.slice(0, 150)}.....{" "}
                    <Link to={`/recipe/${_id}`}>Read More</Link>
                  </>
                )}
              </Card.Text>

              <Card.Footer className="text-muted d-flex">
                <div className="flex-grow-1 d-flex align-items-center">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={Math.round(rating?.number || 0)}
                    readOnly
                  />
                  <span className="ms-2">{rating?.number}</span>
                </div>
                <div>
                  <Button variant="primary">View Details</Button>
                </div>
              </Card.Footer>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RecipeCard;
