import React from "react";

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acquired: false,
      hover: false,
    };
  }

  onListItemClick() {
    this.setState({
      acquired: !this.state.acquired,
    });
  }

  onListItemMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  render() {
    var style = {
      textDecoration: this.state.acquired ? "line-through" : "none",
      fontWeight: this.state.hover ? "bold" : "normal",
      
    };

    return (
      <li style={style}  onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

export default GroceryList;
