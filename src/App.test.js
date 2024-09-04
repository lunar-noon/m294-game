import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';
import { MemoryRouter } from 'react-router-dom';

// Hier wird der Mock als JSX-Komponente
// mit Lambda-return-Funktion definiert
jest.mock("./pages/Home", () => () => <div>DOC</div> );

// hier kommt der eigentliche Test
test("App in default route contains Home", () => {
  
  // ARRANGE
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  // ACT

  // ASSERT

  expect(screen.getByText("DOC")).toBeInTheDocument()
})

jest.mock("./pages/Rules", () => () => <div>RULES-DOC</div> );

test("Teste die rules - Route der App.jsx", () => {
  
  // ARRANGE
  render(
    <MemoryRouter initialEntries={['/rules']}>
      <App />
    </MemoryRouter>
  )
  // ACT

  // ASSERT

  expect(screen.getByText("RULES-DOC")).toBeInTheDocument()
})