import ExampleClass from '../ExampleClass';

const exampleClass = new ExampleClass();

describe('ExampleClass', () => {
  test('should be the same text', () => {
    exampleClass.render();

    const input = 'example text - es6 Boilerplate';
    const expected = document.getElementById('testing').innerHTML;

    expect(input).toBe(expected);
  });
});