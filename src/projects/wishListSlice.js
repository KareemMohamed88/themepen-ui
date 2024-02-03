import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  wishListItems: localStorage.getItem("wishListItems")
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [],
  cartTotalAmount: 0,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.wishListItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.wishListItems[itemIndex].cartQuantity += 1;
        toast.error("project already in wish list");
      } else {
        const tempProject = { ...action.payload, cartQuantity: 1 };
        state.wishListItems.push(tempProject);
        toast.success("project add to wish list successfully");
      }
      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },
    addToWishListSpecificProject(state, action) {
      state.wishListItems.push(action.payload);
      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },
    deleteFromWishList(state, action) {
      const nextCartItem = state.wishListItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );

      state.wishListItems = nextCartItem;

      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },
    getTotal(state, action) {
      let { total } = state.wishListItems.reduce(
        (cartTotal, cartItem) => {
          const { price } = cartItem;
          const itemTotal = price;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  deleteFromWishList,
  getTotal,
  addToWishListSpecificProject,
} = wishListSlice.actions;

export default wishListSlice.reducer;
