import React from "react";

class Header extends React.Component {
    state = {
        products: {},
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/articles')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState(()=>({products: json}))
            })
            .catch(e=>{console.log(e)})
    }

    render(){
        const items = [];

        for (let item in this.state.products['hydra:member']) {
            console.log(item);
            items[items.length] = <p key={items.length} >Hello</p>
        }

        return (
            <div>{items}</div>
        );
    }
}

export default Header;
