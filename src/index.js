import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello Hosted Page!
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElemnetById("root"));