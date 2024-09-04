import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Quiz from './pages/Quiz';


test('teste die beantwortung der ersten frage (richtig)', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)

  // ASSERT

  expect(screen.getByText('\'8\' ist Richtig')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})


test('teste die funktion des next question buttons', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const nextButton = screen.getByText('Next Question')
  fireEvent.click(nextButton)

  // ASSERT

  expect(screen.getByText('36')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
  expect(screen.getByText('40'))
  expect(screen.getByText('38'))
})


test('teste die beantwortung der zweiten frage (falsch)', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const nextButton = screen.getByText('Next Question')
  fireEvent.click(nextButton)
  const buttonFrage2 = screen.getByText('40')
  fireEvent.click(buttonFrage2)

  // ASSERT

  expect(screen.getByText('\'40\' ist Falsch')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})


test('teste den view score button', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const nextButton = screen.getByText('Next Question')
  fireEvent.click(nextButton)
  const buttonFrage2 = screen.getByText('36')
  fireEvent.click(buttonFrage2)
  const nextButton2 = screen.getByText('Next Question')
  fireEvent.click(nextButton2)
  const buttonFrage3 = screen.getByText('94')
  fireEvent.click(buttonFrage3)
  const buttonScore = screen.getByText('View Score')
  fireEvent.click(buttonScore)

  // ASSERT

  expect(screen.getByText('Du hast 3 von 3 Fragen richtig beantwortet.')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})


test('teste den score bei zwei richtigen und 1 falschen antwort', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const nextButton = screen.getByText('Next Question')
  fireEvent.click(nextButton)
  const buttonFrage2 = screen.getByText('36')
  fireEvent.click(buttonFrage2)
  const nextButton2 = screen.getByText('Next Question')
  fireEvent.click(nextButton2)
  const buttonFrage3 = screen.getByText('45')
  fireEvent.click(buttonFrage3)
  const buttonScore = screen.getByText('View Score')
  fireEvent.click(buttonScore)

  // ASSERT

  expect(screen.getByText('Du hast 2 von 3 Fragen richtig beantwortet.')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
})


test('teste den try again button', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const nextButton = screen.getByText('Next Question')
  fireEvent.click(nextButton)
  const buttonFrage2 = screen.getByText('36')
  fireEvent.click(buttonFrage2)
  const nextButton2 = screen.getByText('Next Question')
  fireEvent.click(nextButton2)
  const buttonFrage3 = screen.getByText('94')
  fireEvent.click(buttonFrage3)
  const buttonScore = screen.getByText('View Score')
  fireEvent.click(buttonScore)
  const buttonRetry = screen.getAllByText('Try again')
  fireEvent.click(buttonRetry[1])

  // ASSERT

  expect(screen.getByText('Score: 0 von 3')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
  expect(screen.getByText('3'))
  expect(screen.getByText('5'))
  expect(screen.getByText('8'))
})


test('teste den zweiten try again button', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonFrage1 = screen.getByText('8')
  fireEvent.click(buttonFrage1)
  const buttonRetry = screen.getByText('Try again')
  fireEvent.click(buttonRetry)

  // ASSERT

  expect(screen.getByText('Score: 0 von 3')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
  expect(screen.getByText('3'))
  expect(screen.getByText('5'))
  expect(screen.getByText('8'))
})


test('teste den change category button', () => {

  // ARRANGE

  // ACT
  const { container } = render(<Quiz />) // Komponente auf deren Inhalt man zugreifen möchte

  const buttonCategory = screen.getByText('Category 1') // der Knopf muss eindeutig identifizierbar sein
  fireEvent.click(buttonCategory) //wichtig, via fireEvent statt direkt object.click
  const buttonChangeCategory = screen.getByText('Change Category')
  fireEvent.click(buttonChangeCategory)

  // ASSERT

  expect(screen.getByText('Category 1')) // Regex für Textinhalt, der erst bei Knopfdruck erscheint
  expect(screen.getByText('Category 2'))
  expect(screen.getByText('Category 3'))
  expect(screen.getByText('Category 4'))
})
