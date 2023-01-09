import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CheckoutUrlForm({ checkoutUrl, setCheckoutUrl, setCheckoutUrlCanva }) {
  const handleSubmit = (e) => {
      e.preventDefault();
      setCheckoutUrl(e.target[0].value)

      setCheckoutUrlCanva(false)
  }
  
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Checkout URL</Form.Label>
        <Form.Control type="url" defaultValue={checkoutUrl ? checkoutUrl : ""} required placeholder="Enter Checkout URL" />
        <Form.Text className="text-muted">
          This is the checkout URL of the page you will demo the product on (make sure it is same locale)
        </Form.Text>
      </Form.Group>

      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        {(checkoutUrl == "") ? "Enter" : "Update"}
      </Button>
      </div>
    </Form>
  );
}

export default CheckoutUrlForm;