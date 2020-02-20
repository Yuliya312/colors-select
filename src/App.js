import React, { Component } from 'react';
import './App.css';
import { DropDown } from './DropDown/DropDown';

const colors = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' },
];

export class App extends Component {
  state = {
    selectedColor: colors[0].id,
    colorsOptions: colors.map(({ id, name }) => ({
      value: id,
      label: name,
    })),
  };

  setBlue = () => {
    this.setSelectedColor(3);
  }

  setSelectedColor = (colorId) => {
    this.setState({ selectedColor: colorId });
  }

  render() {
    const { selectedColor, colorsOptions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Colors selector

          <DropDown
            value={selectedColor}
            onChange={this.setSelectedColor}
            options={colorsOptions}
          />

          {/* <DropDown
            value={1}
            onChange={event => console.log(event.target.value)}
            options={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]}
          /> */}

          <button
            type="button"
            onClick={this.setBlue}
          >
            Set blue
          </button>
        </header>
      </div>
    );
  }
}
