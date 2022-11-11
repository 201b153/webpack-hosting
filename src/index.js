import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
class App extends React.Component{
    render(){
        return(
            <div>
                Hello World !
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));
// ReactDOM.render(
//       <App />,
//     document.getElementById('root')
// );