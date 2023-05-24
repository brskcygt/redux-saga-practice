import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./Store/sagaActions";

function Products() {
  const dispatch = useDispatch();
  let data = useSelector((s) => s.products.books);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, [dispatch]);

  useEffect(() => {
    setBooks(data);
  }, [data]);

  return (
    <table>
      {books.map((book) => (
        <>
          <tr>
            <td>{book.title} </td>
            <td>{book.price} TL</td>
          </tr>
        </>
      ))}
    </table>
  );
}

export default Products;
