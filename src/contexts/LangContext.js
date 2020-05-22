import React, { createContext, Component, Children } from 'react';

export const LangContext = createContext();

class LangContextProvider extends Component {
    state = {
        language: "ENG"
    }
    changeLang = () => {
        {
            this.state === "ENG"
                ? this.setState({ language: "FR" })
                : this.setState({ language: "ENG" })
        }
    }
    render() {
        return (
            <LangContext.Provider value={{ ...this.state, changeLang: this.changeLang }}>
                {this.props.children}
            </LangContext.Provider>
        );
    }
}

export default LangContextProvider;