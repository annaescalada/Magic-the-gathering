import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import magicService from '../services/magicService'

class CardDetails extends Component {
  state = {
    card: null,
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    magicService.getOneCard(id)
      .then((response) => {
        const cardFromApi = response.data.card;
        this.setState({
          card: cardFromApi,
        })
        console.log(this.state.card)
      })
  }
  goToPreviousPage = () => {
    this.props.history.goBack();
  }
  render() {
    const { card } = this.state;
    return (
      <>
        <h2>Card Details</h2>
        <button onClick={this.goToPreviousPage}>Go back</button>
        <Link to={'/'}>
          <p>Back to home</p>
        </Link>
        {card ?
          <section className='card-details'>
            <img src={card.imageUrl} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.type}</p>
            <p>{card.originalText}</p>
          </section>
          : <p>Loading...</p>
        }
      </>
    )
  }
}

export default CardDetails;