import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductForm from "./ProductForm.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "./ProductCard.js"
import GeneratedCode from "./GeneratedCode.js"
import ShowIdForm from "./ShowIdForm.js"
import CheckoutUrlForm from "./CheckoutUrlForm.js"

function ProductSetupLayout() {
  const [showProductSetupCanva, setShowProductSetupCanva] = useState(false);
  const [showProductSetupEditCanva, setShowProductSetupEditCanva] = useState(false);
  const [showGeneratedCodeCanva, setCloseGeneratedCodeCanva] = useState(false);
  const [showShowIdCanva, setShowShowIdCanva] = useState(false);
  const [showId, setShowId] = useState("");
  const [checkoutUrlCanva, setCheckoutUrlCanva] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");


  const [productInfo, setProductInfo] = useState([])
  const [editedProduct, setEditedProduct] = useState("")

  const [variationImages, setVariationImages] = useState([{ "id": 0, "url": "" }, { "id": 1, "url": "" }, { "id": 2, "url": "" }]);
  const [variationImages1, setVariationImages1] = useState([{ "id": 0, "url": "" }, { "id": 1, "url": "" }, { "id": 2, "url": "" }]);

  // ADD PRODUCT CANVA
  const handleCloseProductSetup = () => setShowProductSetupCanva(false);
  const handleShowProductSetup = () => setShowProductSetupCanva(true);

  // GENERATED CODE CANVA
  const handleCloseGeneratedCodeCanva = () => setCloseGeneratedCodeCanva(false);
  const handleShowGeneratedCodeCanva = () => setCloseGeneratedCodeCanva(true);

  // PRODUCT EDIT CANVA
  const handleCloseProductSetupEdit = () => setShowProductSetupEditCanva(false);

  // SHOW ID CANVAS
  const handleShowShowIdCanva = () => setShowShowIdCanva(true);
  const handleCloseShowIdCanva = () => setShowShowIdCanva(false);

  // Checkout Url CANVAS
  const handleShowCheckoutUrlCanva = () => setCheckoutUrlCanva(true);
  const handleCloseCheckoutUrlCanva = () => setCheckoutUrlCanva(false);


  console.log(productInfo);

  const productWeWantToEdit = () => {
    return productInfo[editedProduct]
  }


  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center" xs={5}>
            <Button size="lg" style={{ width: '14rem', margin: "30px" }} variant="primary" onClick={handleShowShowIdCanva}>
              {(showId == "") ? "1. Enter Show ID" : "1. Update Show ID"}
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center" xs={5}>
            <Button disabled={showId == ""} size="lg" style={{ width: '14rem', margin: "30px" }} variant="primary" onClick={handleShowProductSetup}>
              {productInfo.length == 0 ? "2. Add product" : "2. Add another product "}
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center" xs={5}>
            {productInfo && productInfo.map((productData, i) =>
              <ProductCard setEditedProduct={setEditedProduct} setShowProductSetupEditCanva={setShowProductSetupEditCanva} key={i} productId={i} productInfo={productData} />
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center" xs={5}>
            <Button disabled={!!productInfo.length == 0} size="lg" style={{ width: '14rem', margin: "30px" }} variant="primary" onClick={handleShowCheckoutUrlCanva}>
              {(checkoutUrl == "") ? "3. Enter Checkout URL" : "3. Update Checkout URL"}
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center" xs={5}>
            <Button size="lg" disabled={checkoutUrl == ""} style={{ width: '14rem', margin: "30px" }} variant="primary" onClick={handleShowGeneratedCodeCanva}>
              4. Generate Code
          </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* SHOW ID canva */}
      <Offcanvas placement="bottom" show={showShowIdCanva} onHide={handleCloseShowIdCanva} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{(showId == "") ? "Enter Show Id" : "Update Show Id"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ShowIdForm showId={showId} setShowId={setShowId} setShowShowIdCanva={setShowShowIdCanva} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Product ID canva */}
      <Offcanvas show={showProductSetupCanva} onHide={handleCloseProductSetup} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Product setup</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ProductForm 
          setProductInfo={setProductInfo} 
          setShowProductSetupCanva={setShowProductSetupCanva} 
          setShowProductSetupEditCanva={setShowProductSetupEditCanva}
          setVariationImages={setVariationImages}
          variationImages={variationImages}
          setVariationImages1={setVariationImages1}
          variationImages1={variationImages1}
          />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Checkout URL canva */}
      <Offcanvas placement="bottom" show={checkoutUrlCanva} onHide={handleCloseCheckoutUrlCanva} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{(checkoutUrl == "") ? "Enter Checkout URL" : "Update Checkout URL"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CheckoutUrlForm checkoutUrl={checkoutUrl} setCheckoutUrl={setCheckoutUrl} setCheckoutUrlCanva={setCheckoutUrlCanva} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* EDIT Product ID canva */}
      <Offcanvas show={showProductSetupEditCanva} onHide={handleCloseProductSetupEdit} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ProductForm 
            productWeWantToEdit={productWeWantToEdit()} 
            setProductInfo={setProductInfo} 
            setShowProductSetupEditCanva={setShowProductSetupEditCanva} 
            setVariationImages={setVariationImages}
            variationImages={variationImages}
            setVariationImages1={setVariationImages1}
            variationImages1={variationImages1}
            update={true} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* GENERATED CODE canva */}
      <Offcanvas placement="end" show={showGeneratedCodeCanva} onHide={handleCloseGeneratedCodeCanva}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Code</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <GeneratedCode showId={showId} checkoutUrl={checkoutUrl} productInfo={productInfo} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProductSetupLayout;

