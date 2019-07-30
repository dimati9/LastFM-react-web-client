import React from 'react';
import styles from './Search.css';

class Search extends React.Component {
    state = {
        artist: '',
        showResults: true,
    }
    Search = async (e) => {
        this.setState({
            artist: e.target.value,
            showResults: true,
        });

    }
    render() {
        return (
            <div>

            <form onSubmit={this.props.getArtist} className="input-group mb-3 ">
                <span className="alert alert-primary mb-0">Поиск: </span>
                <input className={styles.input} type="text" onChange={this.Search} name="artist"
                       placeholder="Исполнитель"/>
                <button className="btn btn-success">Искать {this.state.artist}</button>
            </form>

            </div>
        );
    }
}

export default Search;
