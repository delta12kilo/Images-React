import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        // console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        // console.log(this);
        this.setState({ images: response.data.results });
    }

    render(){   
        return(
            <div>
                <div className="ui heading" style={{margin:'20px'}} >
                    <h1>
                        PicsArt
                    </h1>
                </div>
                <div className="ui container" style={{margin:'10px'}}>                
                    <SearchBar 
                        onSubmit={this.onSearchSubmit}    
                    />
                    {/* <p>Found: {this.state.images.length} images.</p> */}
                </div>

                <ImageList 
                    images ={this.state.images}
                />
            </div>              
        );
    }
}

export default App;