import React, { Component } from 'react';
class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    console.log('this is running')
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url).then((result) => result.json()).then((result) => {
      console.log(result);
      this.setState({
        data: result,
      })
    })
    console.log(this.state.data)
  }
  render() {
    const { data } = this.state;
    const result = this.state.data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
    // return null;
  }
}

export default App;

// import React, { Component } from 'react';
// import ReactComponent from './react-docs/react'
// class App extends Component {
//   state = {
//     characters: [

//       //   {
//       //   name: 'Madhavi',
//       //   job: "Investor/Trader"
//       // },
//       // {
//       //   name: "Vivek",
//       //   job: "Software Engineer"
//       // },
//       // {
//       //   name: "Akshay",
//       //   job: "IPS"
//       // }
//     ]
//   }
//   removeCharacter = (index) => {
//     const { characters } = this.state;
//     this.setState({
//       characters: characters.filter((object, i) => {
//         return i != index
//       })
//     })
//   }
//   handleAddItem = (item) => {
//     // this.setState({
//     //   characters: [...this.state.characters, item]
//     // })
//     // this.setState({
//     //   characters: this.state.characters.push(item)
//     // })
//     this.setState((prevState) => {
//       return {
//         //characters: prevState.characters.concat(item)
//         characters: [...prevState.characters, item]
//       }
//     })
//     // this.setState((prevState) => ({ options: prevState.options.concat(option) }));
//   }

//   render() {
//     const { characters } = this.state;
//     return (
//       <div>
//         <ReactComponent
//           data={characters} removeCharacter={this.removeCharacter}
//           handleAddItem={this.handleAddItem} />

//       </div>
//     )
//   }
// }

// export default App

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">

//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );













// import React from 'react'
// import Form from '../src/dist/form _validation/Form';
// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App






// import React from 'react';
// //import DataGrid from 'react-data-grid';
// import { DataGrid, RowsProp, ColDef } from '@material-ui/core';
// //import data from './data.json';
// import Table from '@material-ui/core/Table';
// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'XGrid', col2: "is Awesome" },
//   { id: 3, col1: 'Yeah..', col2: 'Really' },
//   { id: 3, col1: 'Yeah..', col2: 'Really' }
// ];
// const cols = [
//   { filed: 'col1', headerName: 'Column1', width: 150 },
//   { filed: 'col2', headerName: 'Column2', width: 100 }

// ]

// const App = () => {
//   return (
//     <div style={{ height: 350, width: '100%' }}>
//       <Table
//         columns={cols}
//         rows={rows}

//       />
//     </div>
//   )
// }

// export default App




// const App = () => {
//   return (
//     <div>
//       <table border="1">
//         <thead>
//           <th>Emp id</th>
//           <th>Emp Name</th>
//           <th>Roll No</th>

//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Madhu</td>
//             <td>12345</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Madu</td>
//             <td>12345</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Madhavi</td>
//             <td>12345</td>
//           </tr>
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       language: '',
//       output: ''
//     }
//   }

//   onChange = (e) => {
//     this.setState({ input: e.target.value })
//   }
//   onSelectLanguage = (e) => {
//     // if(e.target.value)
//     // this.setState({ language: e.target.value })
//     console.log(e.target.value)
//     if (e.target.value == 'r') {
//       this.setState({ output: `${this.state.input}` });
//       console.log(this.state.output)
//     }
//     else if (e.target.value == 'c') {
//       this.setState({ output: `${this.state.input}` })
//     }
//   }

//   render() {
//     return (
//       <div>

//         <label>Enter English </label><br />
//         <input type="text" id="input" onChange={this.onChange} />
//         <h3>Select language</h3>
//         <select
//           // defaultValue={"select language"}
//           id="language"
//           onChange={this.onSelectLanguage}
//         >
//           <option selected disabled hidden>Select language</option>
//           <option value="c">Canadian</option>
//           <option value="r">Russian</option>
//         </select>
//         <hr></hr>
//         <h3>Output</h3>
//         <input type="text" id="output" value={`${this.state.output}`}></input>
//         {/* <p>{this.state.input}</p> */}
//       </div>
//     )

//   }
// }


// export default App;

