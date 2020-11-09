import React from 'react';
import './style.css';
const Header = () => {
    return (
        <thead>
            <th>
                Name
        </th>
            <th>
                Job
        </th>
            <th>
                Remove
        </th>
        </thead>

    )
};
const Body = (props) => {
    //   let {propsremoveCharacter} = props.removeCharacter;
    // const removeCharacter = (index) => {
    //     //console.log(index)
    //     onClick()
    // }
    // const removeCharacter = (index) => {
    //     // const { characters } = this.state;
    //     // this.setState({
    //     //     characters: characters.filter((object, i) => {
    //     //         return i != index
    //     //     })
    //     // })
    //  //   alert('item is removed' + index)
    // }
    const rows = props.data && props.data.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                {/* <td onClick={() => props.removeCharacter(index)}>Delete</td> */}
                <td
                    onClick={() => props.removeCharacter(index)}
                >Delete</td>

            </tr>
        )
    })
    return (


        <tbody>
            {rows}

        </tbody>



    )
}
const Form = (props) => {
    const handleChange = (e) => {
        //    console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let item = {
            name: e.target.elements.name.value,
            job: e.target.elements.job.value
        }
        props.handleAddItem(item);
    }
    return (
        <div>
            {/* <form onSubmit={props.handleAddItem}> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                //   onChange={handleChange}
                //  value={name} 
                ></input>
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                //  onChange={handleChange} 
                ></input>
                {/* <input type="button" value="Submit" /> */}
                <button>Submit</button>
            </form >
        </div >
    )
}
class ReactComponent extends React.Component {
    render() {
        //   const { data, removeCharacter } = this.props;
        //  const data = this.props.data;
        return (
            <div>
                <table border="1">
                    <Header />
                    <Body data={this.props.data}
                        removeCharacter={this.props.removeCharacter}
                    />

                </table>
                <Form handleAddItem={this.props.handleAddItem} />
                {/* <form
                // onSubmit={this.props.handleAddItem}
                >
                <input type="text" name="item" />
                <input type="button" value="Add Item"
                    onClick={this.props.handleAddItem}
                />
                </form> */}

            </div >
        )
    }

}

export default ReactComponent;