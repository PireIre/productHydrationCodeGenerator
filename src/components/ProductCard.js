import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard({ productInfo, productId, setShowProductSetupEditCanva, setEditedProduct}) {

  const handleUpdate = (event, id) => {
    setShowProductSetupEditCanva(true)

    setEditedProduct(productId)
  }
  
  return (
    <Card style={{ width: '12rem',  margin:"20px 10px" }}>
      <Card.Img variant="top" src={productInfo.colors[0].images[0] ? productInfo.colors[0].images[0] : "https://lightwidget.com/wp-content/uploads/local-file-not-found.png"} />
      <Card.Body>
        <Card.Title>{productInfo.title}</Card.Title>
        <Card.Text>{productInfo.brand}</Card.Text>
        <Card.Text> SKU: {productId}</Card.Text>
        <div className="d-grid gap-2">
         <Button onClick={handleUpdate} variant="primary">Edit</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;