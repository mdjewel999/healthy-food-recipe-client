import React, { useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Image,
  ListGroup,
  Modal,
  Nav,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "./RecipeCard.css";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const {
    _id,
    numbers_recipes,
    details,
    image_url,
    author,
    rating,
    experience,
    thumbnail_url,
    img,
  } = recipe;

  const [showAuthorName, setShowAuthorName] = useState(false);
  const handleMouseEnter = () => setShowAuthorName(true);
  const handleMouseLeave = () => setShowAuthorName(false);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    // <Row xs={2} md={2} className="g-4 m-4">
    //   <Col>
    //     <Card>
    //       <Card.Header className="d-flex align-items-center">
    //         <div
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <Image
    //             style={{ height: "40px" }}
    //             src={author.img}
    //             roundedCircle
    //           />
    //           {showAuthorName && (
    //             <div className="author-name-overlay">
    //               <p>{author?.name}</p>
    //             </div>
    //           )}
    //         </div>
    //         <div className="ps-2 d-flex">
    //           <div>
    //             <p className="mb-0 ps-2">{author?.name}</p>
    //           </div>
    //           <div>
    //             <p className="mx-4 ">
    //               <small>
    //                 {moment(author?.published_date).format("MM-DD-YYYY")}
    //               </small>
    //             </p>
    //           </div>
    //         </div>
    //         <div>{/* icons */}</div>
    //       </Card.Header>
    //       <Card.Img variant="top" src={image_url} />
    //       <Card.Body>
    //         <Card.Title>{title}</Card.Title>
    //         <Card.Text>
    //           {details.length < 150 ? (
    //             <>{details}</>
    //           ) : (
    //             <>
    //               {details.slice(0, 150)}.....{" "}
    //               <Link to={`/recipe/${_id}`}>Read More</Link>
    //             </>
    //           )}
    //         </Card.Text>

    //         <Card.Footer className="text-muted d-flex">
    //           <div className="flex-grow-1 d-flex align-items-center">
    //             <Rating
    //               style={{ maxWidth: 150 }}
    //               value={Math.round(rating?.number || 0)}
    //               readOnly
    //             />
    //             <span className="ms-2">{rating?.number}</span>
    //           </div>
    //           <div>
    //             <Button variant="primary">View Recipes</Button>
    //           </div>
    //         </Card.Footer>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>
    <Card>
      <Card.Header className="d-flex align-items-center">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          {showAuthorName && (
            <div className="author-name-overlay">
              <p>{author?.name}</p>
            </div>
          )}
        </div>
        <div className="ps-2 d-flex">
          <div>
            <p className="mb-0 ps-2">{author?.name}</p>
          </div>
          
        </div>
        <div>{/* icons */}</div>
      </Card.Header>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Name: {author?.name}</Card.Title>
        <Card.Title>Years of experience: {experience}</Card.Title>
        <h6>Numbers of recipes: {numbers_recipes}</h6>
        <Card.Text>
          <h4>Recipe Details: </h4>{" "}
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
              value={rating?.number}
              readOnly
            />
            <span className="ms-2">{rating?.number}</span>
          </div>
            <div>

            </div>
          <div>
            <Button
              variant="primary"
              className="btn-view"
              onClick={handleShowModal}
            >
              View Recipes
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Name: {author?.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CardGroup>
                  <Card>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Body>
                      <Card.Title>Burger Items</Card.Title>
                      <Card.Text>
                        <ListGroup>
                          <ListGroup.Item>1.Cheeseburge </ListGroup.Item>
                          <ListGroup.Item>2.Hamburger</ListGroup.Item>
                          <ListGroup.Item>3.Bacon Cheeseburger</ListGroup.Item>
                          <ListGroup.Item>4.Mushroom Burger</ListGroup.Item>
                          <ListGroup.Item>5.Hawaiian Burger</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
