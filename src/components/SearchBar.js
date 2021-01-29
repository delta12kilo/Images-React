import React from 'react';

class SearchCar extends React.Component{

    // onInputChange(event) {           1- event handler way 1
    //     console.log(event.target.value);

    // }

    onFormsubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    state = { term: '' };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormsubmit} className="ui form">
                    <div className="field">
                        <input 
                            type="text"
                            placeholder="Search Image"
                            value={this.state.term}
                            onChange={ (e) => this.setState({term: e.target.value })}   //2-event handler way 2
                        />
                    </div>
                    {/* {this.state.term.length < 4 ? 'more than 4':''} */}
                </form>
            </div>
        )
    }
}

export default SearchCar;