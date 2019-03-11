import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../landing'
import ApplicationForm from '../application-form'
import Confirmation from '../confirmation';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Landing} />
      <Route exact path="/application/:jobId" component={ApplicationForm} />
      <Route exact path="/confirmation/:applicationId" component={Confirmation} />
    </main>
  </div>
)

export default App
