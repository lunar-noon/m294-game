import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// Testing importieren
import Home from './pages/Home'



test('teste click knopf in increment function', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Home />) // Komponente auf deren Inhalt man zugreifen möchte

  const button = screen.getByText('0') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(button) //wichtig, via fireEvent statt direkt object.click

  // ASSERT

  expect(screen.getByText('1')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})


test('teste mehrfach click knopf in increment function', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Home />) // Komponente auf deren Inhalt man zugreifen möchte

  const button = screen.getByText('0') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(button) //wichtig, via fireEvent statt direkt object.click
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  
  // ASSERT

  expect(screen.getByText('6')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})






/*
test('home jsx korrekt?', () => {

  // Arrange - Testvorbereitungen erstellen
  render(<Home />)

  // ACT - potentielle user action

  // Assert - prüfe nachbedingungen

  expect(screen.queryByText("Homepage")).toBeInTheDocument()
})
  */
