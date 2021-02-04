import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import ResultsPage from '../pages/ResultsPage'
import TeamPage from '../pages/TeamPage'
import SponsorsPage from '../pages/SponsorsPage'

import '../layout.css'

export default function Main() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage />} />
        <Route
          path="/contact"
          render={() => <ContactPage />} />
        <Route
          path="/palmares"
          render={() => <ResultsPage />} />
        <Route
          path="/team"
          render={() => <TeamPage />} />
        <Route
          path="/partenaires"
          render={() => <SponsorsPage />} />        
      </Switch>
      
    </main>
  )
}
