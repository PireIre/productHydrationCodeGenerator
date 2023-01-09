import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ShowIdForm({ showId, setShowId, setShowShowIdCanva }) {
  const handleSubmit = (e) => {
      e.preventDefault();
      setShowId(e.target[0].value)

      setShowShowIdCanva(false)
  }
  
  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Show ID</Form.Label>
        <Form.Control defaultValue={showId ? showId : ""} required placeholder="Enter Show ID" />
        <Form.Text className="text-muted">
          This is the Show ID you will use to demo the product
        </Form.Text>
      </Form.Group>

      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        {(showId == "") ? "Enter" : "Update"}
      </Button>
      </div>
    </Form>
  );
}

export default ShowIdForm;