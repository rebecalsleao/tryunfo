import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: false,
    saveCard: [],
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.SaveButtonDisabled();
    });
  };

  SaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const inputFilled = cardName.length
    && cardDescription.length && cardImage.length && cardRare.length !== 0;
    const maxPointAttr = 210;
    const menor210 = Number(cardAttr1) + Number(cardAttr2)
     + Number(cardAttr3) <= maxPointAttr;
    const onePointAttr = 90;
    const menor90 = Number(cardAttr1) <= onePointAttr
    && Number(cardAttr2) <= onePointAttr && Number(cardAttr3) <= onePointAttr;
    const maiorZero = Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0;
    const logicaDeMudanca = inputFilled && maiorZero && menor90 && menor210;
    this.setState({
      isSaveButtonDisabled: logicaDeMudanca,
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      saveCard,
    } = this.state;

    const saveButton = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };

    saveCard.push(saveButton);
    this.setState({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: true,
    }, (() => {
      this.setState({
        hasTrunfo: false,
      });
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
export default App;
