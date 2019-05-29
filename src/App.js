import React from "react";
import "./App.css";
import TodoItems from "./components/TodoItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }

    e.preventDefault();
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoList">
        <header className="header">
          <h1>Todo</h1>

          <form className="form" onSubmit={this.addItem}>
            <input
              className="input"
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button className="button" type="submit">
              add
            </button>
          </form>
        </header>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
