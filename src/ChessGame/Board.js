import React from 'react';
import './Board.css';

class Square extends React.Component {
  render() {
    return (
      <div className="square">
        {this.props.position}
      </div>
    )
  }
}

class Row extends React.component {
  renderSquare(i) {
    return <Square position={i} />;
  };
  render() {
    return (
      <div className="row">
        {this.props.rowNumber}
        <div>{this.renderSquare(1)}</div>
        <div>{this.renderSquare(2)}</div>
        <div>{this.renderSquare(3)}</div>
        <div>{this.renderSquare(4)}</div>
        <div>{this.renderSquare(5)}</div>
        <div>{this.renderSquare(6)}</div>
        <div>{this.renderSquare(7)}</div>
        <div>{this.renderSquare(8)}</div>
      </div>
    )
  };
};

class Board extends React.Component {
  renderRow(i) {
    return <Row rowNumber={i} />;
  };
  render() {
    return (
      <div>{this.renderRow("A")}</div>
      <div>{this.renderRow("B")}</div>
      <div>{this.renderRow("C")}</div>
      <div>{this.renderRow("D")}</div>
      <div>{this.renderRow("E")}</div>
      <div>{this.renderRow("F")}</div>
      <div>{this.renderRow("G")}</div>
      <div>{this.renderRow("H")}</div>
    )
  };
};
