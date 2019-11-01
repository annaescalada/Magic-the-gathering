import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import magicService from '../services/magicService'

class CardList extends Component {
  state = {
    cards: [],
  }
  componentDidMount() {
    magicService.getAllCards()
    .then((response) => {
      const cardsFromApi = response.data.cards;
      this.setState({
        cards: cardsFromApi,
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const {cards} = this.state;
    return (
    <>
    <h2>Cards List</h2>
    <Link to={'/'}>
      <p>Back to home</p>
    </Link>
    <section className='container'>
      {cards.length > 0? 
      this.state.cards.map((card, index) => {
        return (
          <article key={card.id}>
            <h3>{card.name}</h3>
            <p>{card.type}</p>
            <Link to={`/cards/${card.id}`}>
              <img src={card.imageUrl} alt={card.name}/>
            </Link>
          </article>
        )
      }) :
      <p>Loading...</p>
    }
    </section>
    </>
    )
  }
}

export default CardList;