import React from 'react';
class ButtonComponent extends React.Component {
    render(){
        return <button className="normalBtn" >{this.props.content}</button>
    }

}

export default ButtonComponent