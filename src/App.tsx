import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { StyledAppLayout } from './StyledApp'

const App: React.FunctionComponent<{}> = () => {
    return (
        <StyledAppLayout>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </StyledAppLayout>
    )
}
export default App
