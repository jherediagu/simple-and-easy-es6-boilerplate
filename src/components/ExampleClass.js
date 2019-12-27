class ExampleClass {
  constructor() {
    this.exampleText = 'example text - es6 Boilerplate';
  }

  render() {
    document.getElementById('testing').innerHTML = this.exampleText;
  }
}

export default ExampleClass;
