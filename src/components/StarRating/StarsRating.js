import React, { Component } from 'react';
import styles from './StarRating.module.css';
import StarRating from 'react-svg-star-rating'

class StarsRating extends Component {

    state = {
        ratings: 0
    }

    handleOnClick = (rating) => {
        this.setState({
            ratings: rating
        })
    }
    render() {
        const { ratings } = this.state;
        return (
            <div className={styles.star} >

                <StarRating handleOnClick={this.handleOnClick} initialRating={ratings} />

            </div>
        )
    }
}



export default StarsRating;