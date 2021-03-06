import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomerList from './views/CutomersList';

const Scroll = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location]);

    return props.children;
};

Scroll.propTypes = {
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

const ScrollToTop = withRouter(Scroll);

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/" component={CustomerList} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default App;
