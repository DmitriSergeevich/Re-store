import React, { Component } from 'react';
import { BookListItem } from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc/with-bookstore-service';
import booksFetch, { bookAddedToCard } from '../../actions/actions'
import compose from '../../utils/utils';
import './book-list.css'
import { Spinner } from '../spinner/spinner';
import { ErrorIndicator } from '../error-indicator/error-indicator';
import { bindActionCreators } from 'redux'

const BookList = ({ books, onAddedToCard }) => {  
  return (
    <ul className='book-list'>
      {
        books.map((book)=>{
          return (
            <li key={book.id}><BookListItem
            onAddedToCard={()=>onAddedToCard(book.id)}
            book={book}/> </li>
          )
        })
      }
    </ul>
  )
}

class BookListContainer extends Component {

  componentDidMount() {    
    this.props.fetchBooks()
  }

  render() {
    
    const {books, loading, error, onAddedToCard} = this.props;

    if(loading) {
      return  <Spinner/>
    }

    if(error) {
      return <ErrorIndicator/>
    }
    
    return <BookList
      onAddedToCard={onAddedToCard}
      books={books}/>
  }
}

const mapStateToProps= ({ bookList: {books, loading, error} }) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators(
    {
    fetchBooks: booksFetch(bookstoreService),
    onAddedToCard: bookAddedToCard,
    }, dispatch
  )
    
    
  
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);