import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h1>ADICIONE NOVA CARTA</h1>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            value={ cardName }
            name="cardName"
            id="name"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição
          <input
            type="textarea"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>

        <br />
        <div>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              id="attr2"
              name="cardAttr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              id="attr3"
              name="cardAttr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>

        <p>Pontos restantes = 000</p>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <br />

        <label htmlFor="option">
          Raridade
          <select
            type="select"
            id="option"
            name="cardRare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
            <p>Total de pontos = 000</p>
          </select>
        </label>

        <br />
        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>

        <br />
        <button
          id="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
