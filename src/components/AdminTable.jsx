import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../contexts/AdminProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AdminTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);
  React.useEffect(() => {
    getProducts();
  }, []);
  if (!products) {
    return <h2>Loading ....</h2>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Название животного</TableCell>
            <TableCell align="right">Изоброжение</TableCell>
            <TableCell align="right">Порода</TableCell>
            <TableCell align="right">Цена</TableCell>

            <TableCell align="right">Описание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Button
                  onClick={() => deleteProduct(item.id)}
                  color="error"
                  variant="contained"
                >
                  Удалить
                </Button>
              </TableCell>
              <TableCell>
                <Link to={`/admin/add/${item.id}`}>
                  <Button color="warning" variant="contained">
                    Изменить
                  </Button>
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">
                {<img width={80} src={item.image} alt="products-img" />}
              </TableCell>
              <TableCell align="right">{item.breed}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.descr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
