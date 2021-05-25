import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Renders Button', () => {
  render(<Button data-testid="test-button" label="My Button" />);
  const element = screen.getByTestId("test-button"); 
  expect(element).toBeInTheDocument();
});

test('Renders Button with label', () => {
  render(<Button data-testid="test-button" label="My Button" />);
  const element = screen.getByTestId("test-button"); 
  expect(element).toHaveTextContent("My Button");
});

test('Renders Button with buttonRoot classname', () => {
  render(<Button data-testid="test-button" label="My Button" />);
  const element = screen.getByTestId("test-button"); 
  expect(element).toHaveClass("makeStyles-buttonRoot-11");
});

test('Renders Button with fullWidth classname', () => {
  render(<Button data-testid="test-button" label="My Button" fullWidth />);
  const element = screen.getByTestId("test-button"); 
  expect(element).toHaveClass("makeStyles-buttonFullWidth-17");
});
