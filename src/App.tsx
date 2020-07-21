import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import TreeViz from './pages/TreeViz/TreeViz'
import { StyledAppLayout } from './StyledApp'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <StyledAppLayout>
                <HashRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tree-viz" component={TreeViz} />
                </HashRouter>
            </StyledAppLayout>
        </Provider>
    )
}
export default App
