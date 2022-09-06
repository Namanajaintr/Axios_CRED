import React from "react";
import { Modal } from "react-bootstrap";
function AddProducts() {
  return (
    <div>
      AddProducts
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div>
              <label>Product Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Product Discription</label>
              <input type="text" />
            </div>
            <div>
              <label>Product Price</label>
              <input type="text" />
            </div>
            <div>
              <label>Product Image</label>
              <input type="text" />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button>Submit</button>
          <button>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProducts;
