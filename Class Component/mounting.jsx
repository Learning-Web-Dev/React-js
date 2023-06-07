/* 
Constructor() - If there is a constructor() function in your component, this function will be called when the component gets initiated.
The constructor function is where you initiate the component's properties.

Super() - For the inheritance of parent component by including the super() statement, which executes the parent component's constructor function,
 and your component has access to all the functions of the parent component

Props - If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method. 

State - The state object is where you store property values that belongs to the component.When the state object changes, the component re-renders.

getDerivedStateFromProps() - method is called right before the render method.

render() - method is required and is the method that actually outputs the HTML to the DOM.

componentDidMount() - method is called after the component is rendered.

*/

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      favoritecolor: "blue",
    };
  }

  //Called before render method
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  //after the component is rendered
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  //functions
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  //outputs the HTML to the DOM
  render() {
    return (
      <>
        <h2>I am a {this.state.color} color Car!</h2>
        <h2>I am a {this.props.model}!</h2>;
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car model="Mustang" />);
