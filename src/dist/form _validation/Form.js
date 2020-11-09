import React, { useState } from 'react'
const Form = () => {
    const [state, setState] = useState({
        count: 0
    })
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('this is runnign')


    }
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <p>{state.count}</p>
                <button>+1</button>
            </form>
        </div>
    )
}


// class Form extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     handleOnclick = (e) => {
//         e.preventDefault();
//         // console.log(this.state.count + 1)
//         // console.log(this.state.count)
//         // this.setState((prevState) => {
//         //     count: prevState.count + 1;
//         // })
//         // this.setState({
//         //     count: this.state.count + 1
//         // })
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleOnclick}>
//                     <p>{this.state.count}</p>
//                     <button >+1</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default Form
