const { createSlice } = require("@reduxjs/toolkit")

const initialState = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state) => {
      for (const key in localStorage) {
        if (key.startsWith('cart_')) {
          const keyCutted = key.slice(5)
          state[keyCutted] = +localStorage[key]
        }
      }
    },
    deleteCartItem: (state, { payload }) => {
      if (`cart_${payload}` in localStorage) {
        delete state[payload]
        localStorage.removeItem(`cart_${payload}`)
      }
    },
    increment: (state, { payload }) => {
      const count = state[payload] || 0
      if (count === 30) return
      state[payload] = count + 1
      localStorage.setItem(`cart_${payload}`, state[payload])
    },
    decrement: (state, { payload }) => {
      const count = state[payload]
      if (!count) return
      if (count === 1) {
        delete state[payload]
        localStorage.removeItem(`cart_${payload}`)
        return
      }
      state[payload] = count - 1
      localStorage.setItem(`cart_${payload}`, state[payload])
    }
  },
  reset: () => initialState
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions

export const selectCart = (state) => state.cart
export const selectCartProduct = (state, id) => selectCart(state)[id] || 0

export const selectCartQty = (state) => {
  const cart = selectCart(state)
  let qty = 0
  for (const key in cart) {
    qty += cart[key]
  }
  return qty
}
