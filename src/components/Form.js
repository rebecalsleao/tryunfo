import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>ADICIONE NOVA CARTA</h1>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            id="description"
            data-testid="description-input"
          />
        </label>

        <div>
          <label htmlFor="attr1">
            Attr01
            <input type="number" value="" id="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input type="number" value="" id="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input type="number" value="" id="attr3" data-testid="attr3-input" />
          </label>
        </div>

        <p placeholder="Pontos restantes = 000" />

        <label htmlFor="image">
          Imagem
          <input type="text" id="image" data-testid="image-input" />
        </label>

        <label htmlFor="option">
          Raridade
          <select id="option" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
            <p>Total de pontos = 000</p>
          </select>
        </label>

        <label htmlFor="checkbox">
          Super Trybe Trunfo
          <input type="checkbox" id="checkbox" data-testid="trunfo-input" />
        </label>

        <button id="save" type="button" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
