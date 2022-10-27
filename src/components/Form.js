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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    console.log(hasTrunfo);

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
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            id="description"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>

        <div>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              id="attr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              id="attr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
        </div>

        <p placeholder="Pontos restantes = 000" />

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="option">
          Raridade
          <select
            id="option"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
            <p>Total de pontos = 000</p>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
