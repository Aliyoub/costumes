import { configureStore, createSlice } from "@reduxjs/toolkit";
import UseFetch from "./hooks/UseFetch";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  // initialState: [amzDataConst],
  reducers: {
    // addProduct: (state, action) => {
    //   if (state.length === 0) {
    //     const newProduct = {
    //       id: 1,
    //       text: action.payload,
    //       comment: "",
    //       status: "notDone",
    //       notification: {},
    //       highlightedStatus:false
    //     };
    //     state.push(newProduct);
    //   } else {
    //     const id = state.length + 1;
    //     const newProduct = {
    //       id,
    //       text: action.payload,
    //       comment: "",
    //       status: "notDone",
    //       notification: {},
    //       highlightedStatus: false
    //     };
    //     state.push(newProduct);
    //   }
    // },
    // updateProduct: (state, action) => {
    //   const product = state.find((t) => t.id === action.payload.id);
    //   product.text = action.payload.text
    //   product.status = action.payload.taskStatus
    //   product.highlightedStatus = action.payload.highlightedStatus
    //   console.log('product!!!!', action)
    // },
    // deleteProduct: (state, action) => {
    //   return state.filter((t) => t.id !== action.payload);
    // },

    getProducts: (state, action) => {
      const [amzData, loading, error] = UseFetch({
        method: "get",
        url: "https://aliyoub.github.io/costumes/amzData.json",
         headers: {
           Authorization: "Bearer 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",
         },
      });

      let amzDataConst;
      amzData ? (amzDataConst = Object.values(amzData)) : (amzDataConst = []);

      amzDataConst.map((item, i) => {
        return state.push(item)
      })

      console.log("amzData", state);
      loading && <div>Loading...</div>;
      error && <div>Oops, une erreur est survenue :(</div>;

      // let amzDataConst;
      // amzData ? (amzDataConst = Object.values(amzData)) : (amzDataConst = []);
      // return state;
    },
  },
});

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
