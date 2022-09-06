import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios"; //axios is a default import

const ProductsApp = () => {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  const [showAddModel, setShowAddModel] = useState(false);

  const updateShowAddModel = () => {
    setShowAddModel(true);
  };

  useEffect(() => {
    appData();
  }, []);

  const appData = async () => {
    try {
      setLoading(true);
      const getData = await axios.get(
        "https://ty-shop.herokuapp.com/api/products"
      );
      setLoading(false);
      console.log(getData.data.products);
      if (getData.data.error) {
        console.log(getData.data.error);
      } else {
        setProduct(getData.data.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  {
    if (loading) {
      return <h1>Please Wait loading!!!</h1>;
    } else {
      return (
        <div>
          <h1>Buy Some Products</h1>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Discription</th>
                <th>Product Price</th>
                <th>Product Image</th>
                <th>
                  <button onClick={updateShowAddModel}>Add Product</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((val, ind) => {
                return (
                  <tr>
                    <td>{val._id}</td>
                    <td>{val.productName}</td>
                    <td>{val.productDescription}</td>
                    <td>{val.productPrice}</td>
                    <td>
                      <img
                        src={val.productImageURL}
                        width="150px"
                        height="150px"
                      />
                    </td>
                    <td>
                      <button>Edit Product</button>
                    </td>
                    <td>
                      <button>Delete Product</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
};

export default ProductsApp;
