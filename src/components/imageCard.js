import React from 'react';

export default class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state = { spans : 0 };
        this.imgref = React.createRef();
    }

    componentDidMount(){
        this.imgref.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imgref.current.clientHeight;

        const spans = Math.ceil(height/10 + 1);

        this.setState({ spans });

    }

    render() {

        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                     ref={this.imgref}
                     alt={description}
                     src={urls.regular}
                />
            </div>
        )
    }
}