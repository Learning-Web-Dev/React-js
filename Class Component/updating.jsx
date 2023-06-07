/* 
shouldComponentUpdate() - method you can return a Boolean value that specifies whether React should continue with the rendering or not.
The default value is true.

render() - method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

getSnapshotBeforeUpdate() - method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

componentDidUpdate() - method is called after the component is updated in the DOM.

*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  //decides whether React should continue with the rendering or not
  shouldComponentUpdate() {
    return false;
  }

  //can check what the values were before the update.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }

  //called after the component is updated in the DOM.
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  //funtions
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <div id="div1"></div>
        <div id="mydiv"></div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
