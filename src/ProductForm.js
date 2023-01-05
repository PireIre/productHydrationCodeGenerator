import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProductForm({ setProductInfo, setShowProductSetupCanva, setShowProductSetupEditCanva, update, productWeWantToEdit }) {


  const handleSubmit = (e) => {
    if (update) {
      e.preventDefault();
      console.log(e.target[0].id)
      productWeWantToEdit.title = e.target[0].value
      productWeWantToEdit.brand = e.target[1].value
      productWeWantToEdit.description = e.target[2].value
      productWeWantToEdit.price = e.target[3].value
      productWeWantToEdit.discountedPrice = e.target[4].value
      productWeWantToEdit.currency = e.target[5].value
      productWeWantToEdit.colors[0].name = e.target[6].value
      productWeWantToEdit.colors[0].colorHexCode = e.target[7].value
      productWeWantToEdit.colors[0].images[0] = e.target[8].value
      productWeWantToEdit.colors[0].images[1] = e.target[9].value
      productWeWantToEdit.colors[0].images[2] = e.target[10].value
      productWeWantToEdit.colors[0].sizes[0].name = e.target[11].value
      productWeWantToEdit.colors[0].sizes[1].name = e.target[12].value
      productWeWantToEdit.colors[1].name = e.target[13].value
      productWeWantToEdit.colors[1].colorHexCode = e.target[14].value
      productWeWantToEdit.colors[1].images[0] = e.target[15].value
      productWeWantToEdit.colors[1].images[1] = e.target[16].value
      productWeWantToEdit.colors[1].images[2] = e.target[17].value
      productWeWantToEdit.colors[1].sizes[0].name = e.target[18].value
      productWeWantToEdit.colors[1].sizes[1].name = e.target[19].value

      setShowProductSetupEditCanva(false);
    }
    else {
      e.preventDefault();
      console.log(e)

      let productInfo = {
        title: e.target[0].value,
        brand: e.target[1].value,
        description: e.target[2].value,
        price: e.target[3].value,
        discountedPrice: e.target[4].value,
        currency: e.target[5].value,
        colors: [{
          name: e.target[6].value,
          colorHexCode: e.target[7].value,
          images: [
            e.target[8].value,
            e.target[9].value,
            e.target[10].value,
          ],
          sizes: [{
            name: e.target[11].value,
            quantityInStock: 10,
          },
          {
            name: e.target[12].value,
            quantityInStock: 10,
          }]
        },
        {
          name: e.target[13].value,
          colorHexCode: e.target[14].value,
          images: [
            e.target[15].value,
            e.target[16].value,
            e.target[17].value,
          ],
          sizes: [{
            name: e.target[18].value,
            quantityInStock: 9,
          },
          {
            name: e.target[19].value,
            quantityInStock: 0,
          }]
        }]
      }

      setProductInfo(productArray => [...productArray, productInfo]);
      setShowProductSetupCanva(false);

    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Title</Form.Label>
        <Form.Control defaultValue={productWeWantToEdit ? productWeWantToEdit.title : ""} required placeholder="Enter product title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Brand</Form.Label>
        <Form.Control defaultValue={productWeWantToEdit ? productWeWantToEdit.brand : ""} required placeholder="Enter product brand" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Product Description</Form.Label>
        <Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.description : ""} as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.price : ""} placeholder="Enter product price" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Discounted Price</Form.Label>
        <Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.discountedPrice : ""} placeholder="Enter discounted price" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Currency</Form.Label>
        <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.currency : "USD"}>
          <option value="USD">USD</option>
          <option value="SEK">SEK</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>1. First Variant</Form.Label>
        <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].name : "Black"}>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Brown">Brown</option>
          <option value="Orange">Orange</option>
        </Form.Select>

      </Form.Group>
      <div className="subform">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="exampleColorInput">First Variant Color</Form.Label>
          <Form.Control
            type="color"
            id="firstColorInput"
            defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].colorHexCode : "#000"}
            title="Choose your color"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>First Variant Image URLS</Form.Label>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].images[0] : ""} placeholder="First product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[0].images[0] : ""}></img></Col>
          </Row>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].images[1] : ""} placeholder="Second product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[0].images[1] : ""}></img></Col>
          </Row>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].images[2] : ""} placeholder="Third product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[0].images[2] : ""}></img></Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Size</Form.Label>
          <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].sizes[0].name : "XL"}>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="30ml">30ml</option>
            <option value="50ml">50ml</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Second Size</Form.Label>
          <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[0].sizes[1].name : "L"}>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="30ml">30ml</option>
            <option value="50ml">50ml</option>
          </Form.Select>
        </Form.Group>
      </div>

      <Form.Group className="mb-3" >
        <Form.Label>2. Second Variant</Form.Label>
        <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].name : "White"}>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Brown">Brown</option>
          <option value="Orange">Orange</option>
        </Form.Select>

      </Form.Group>

      <div className="subform">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="exampleColorInput">First Variant Color</Form.Label>
          <Form.Control
            type="color"
            id="secondColorInput"
            defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].colorHexCode : "#ffffff"}
            title="Choose your color"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>First Variant Image URLS</Form.Label>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].images[0] : ""} placeholder="First product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[1].images[0] : ""}></img></Col>
          </Row>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].images[1] : ""} placeholder="Second product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[1].images[1] : ""}></img></Col>
          </Row>
          <Row>
            <Col xs={9} ><Form.Control required defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].images[2] : ""} placeholder="Second product image URL" /></Col>
            <Col><img style={{ width: '2rem' }} src={productWeWantToEdit ? productWeWantToEdit.colors[1].images[2] : ""}></img></Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Size</Form.Label>
          <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].sizes[0].name : "XL"}>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="30ml">30ml</option>
            <option value="50ml">50ml</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Second Size (Out of Stock)</Form.Label>
          <Form.Select defaultValue={productWeWantToEdit ? productWeWantToEdit.colors[1].sizes[1].name : "L"}>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="30ml">30ml</option>
            <option value="50ml">50ml</option>
          </Form.Select>
        </Form.Group>
      </div>

      <Form.Group className="mb-3">
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" >
          {update ? "Update Product" : "Submit"}
        </Button>
      </div>
    </Form>
  );
}

export default ProductForm;