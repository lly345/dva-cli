import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

const Maproute = props => {
    return (
        <Router history={props.history}>
            <Switch>
                {props.routes.map(item =>
                    item.path ? (
                        item.children ? (
                            <Route
                                key={item.path}
                                path={item.path}
                                component={props => (
                                    <item.component {...props}>
                                        <Maproute
                                            routes={item.children}
                                            history={props.history}
                                        />
                                    </item.component>
                                )}
                            />
                        ) : (
                            <Route
                                key={item.path}
                                path={item.path}
                                component={props => (
                                    <item.component {...props} />
                                )}
                            />
                        )
                    ) : (
                        <Redirect key={item.from} {...item} />
                    )
                )}
            </Switch>
        </Router>
    );
};

export default Maproute;
