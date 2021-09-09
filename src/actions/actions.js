const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksRequested = () => 'FETCH_BOOKS_REQUEST';  

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILUR',
    payload: error    
  };
};
export const bookAddedToCard = (bookId) => {
  return {
    type: 'BOOK_ADED_TO_CART',
    payload: bookId,
  }
}

export const increaseBookCount = (bookId) => {
  return {
    type: 'INCREASE_BOOK_COUNT',
    payload: bookId
  }
}
export const decreaseBookCount = (bookId) => {
  return {
    type: 'DECREASE_BOOK_COUNT',
    payload: bookId
  }
}
export const deleteBookFromCart = (bookId) => {
  return {
    type: 'DELETE_BOOK_FROM_CART',
    payload: bookId
  }
}

// const oldBooksFetch = (dispatch, bookstoreService) => () => {
//   dispatch(booksRequested());

//   bookstoreService.getBooks()
//   .then(data=>{
//     dispatch(booksLoaded(data))
//   })
//   .catch(err => {
//     dispatch(booksError(err))
//   });
// }

const booksFetch = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());

  bookstoreService.getBooks()
  .then(data=>{
    dispatch(booksLoaded(data))
  })
  .catch(err => {
    dispatch(booksError(err))
  });
}

export default booksFetch
