import axios from 'axios';

class MagicService {
  constructor() {
    this.magic = axios.create({
      baseURL: 'https://api.magicthegathering.io/v1/',
    })
  }

  getAllCards() {
    return this.magic.get('cards')
      .then(response => response);
  }

  getOneCard(id) {
    return this.magic.get(`cards/${id}`)
      .then(response => response)
  }

}

const magicService = new MagicService();

export default magicService;