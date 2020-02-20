import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

export class DropDown extends Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    document.addEventListener('click', this.handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleGlobalClick);
  }

  handleGlobalClick = (event) => {
    if (event.target.closest('.select-container')) {
      return;
    }

    this.close();
  }

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  toggle = () => this.setState(prevState => ({
    isOpen: !prevState.isOpen,
  }));

  handleChange = (value) => {
    this.props.onChange(value)
    this.close();
  }

  render() {
    const { value, options } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="select-container">
        <div className="select-target">
          <button
            type="button"
            onClick={this.toggle}
          >
            {options.find((option) => value === option.value).label}
            ✅
          </button>
        </div>

        {isOpen && (
          <ul className="select-menu">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => this.handleChange(option.value)}
                >
                  {option.label}
                  {option.value === value && '🔥'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

DropDown.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    label: PropTypes.string,
  })),
};
