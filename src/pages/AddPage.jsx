import { Button, Container, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import { AdminContext } from "../contexts/AdminProvider";

const AddPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    breed: "",
    price: "",
    descr: "",
    image: "",
  });

  const { addProduct } = React.useContext(AdminContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните поля");
        return;
      }
    }
    addProduct(newProduct);
    setNewProduct({
      name: "",
      breed: "",
      price: "",
      descr: "",
      image: "",
    });
  };

  return (
    <div className="add-edit-page">
      <Container>
        <h2>Add Page</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            label="Введите название"
            variant="standard"
            value={newProduct.name}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, breed: e.target.value })
            }
            label="Введите породу"
            variant="standard"
            value={newProduct.breed}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            label="Введите цену"
            variant="standard"
            type="number"
            value={newProduct.price}
          />
          <TextareaAutosize
            onChange={(e) =>
              setNewProduct({ ...newProduct, descr: e.target.value })
            }
            minRows={4}
            placeholder="Введите описание"
            value={newProduct.descr}
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            label="Введите фото"
            variant="standard"
            value={newProduct.image}
          />
          <Button type="submit" variant="contained" color="success">
            Добавить
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddPage;
