import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { fetchProducts } from "./slice";
import { sagaActions } from "./sagaActions";

export function* fetchDataSaga() {
  try {
    let res = yield call(() =>
      axios.get("http://localhost:8001/books").then((res) => res.data)
    );

    // let res = fetch("https://dummyjson.com/products").then(res=>res.json());
    yield put(fetchProducts(res));
  } catch (e) {
    yield put({ type: "PRODUCT_FETCH_FAILED" });
  }
}

// const iterator = fetchDataSaga();

// assert.deepEqual(iterator.next().value,
//   call(()=>axios.get("http://localhost:8001/books").then((res) => res.data)),
//   "fetchData should yield an Effect call()"
// );

// it('apiSideEffect - fetches data from API and dispatches a success action', ()=>{
//   const generator = fetchDataSaga();

//   expect(generator.next().value)
//     .toEqual(call(()=>axios.get("https://dummyjson.com/products").then((res) => res.data)));
// })

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
