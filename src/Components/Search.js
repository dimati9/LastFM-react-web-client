import React from 'react';
import styles from './Search.css';

class Search extends React.Component {
    state = {
        artist: '',
    }
    artist = async (e) => {
        this.setState({
            artist: e.target.value,
        });
    }
    render() {
        return (

            <form onSubmit={this.props.getArtist} className="input-group mb-3 ">
                <span className="alert alert-primary mb-0">Поиск: </span>
                <input className={styles.input} type="text" onChange={this.artist} name="artist" placeholder="Исполнитель" />
                <button className="btn btn-success">Искать {this.state.artist}</button>
            </form>
        );
    }
}

export default Search;
