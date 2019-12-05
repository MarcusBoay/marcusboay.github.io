import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import TreeViz from './pages/TreeViz/TreeViz'
import NotFound from './pages/NotFound/NotFound'
import { StyledAppLayout } from './StyledApp'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        //fix this
        <Provider store={store}>
            <StyledAppLayout>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/tree-viz">
                            <TreeViz />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </StyledAppLayout>
        </Provider>
    )
}
export default App
