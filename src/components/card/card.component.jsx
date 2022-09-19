import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const {containerClassName,containerKey, alt, src, title, description} = this.props;
        return (
            <div className={`card-container ${containerClassName}`} key={containerKey}>
                <img alt={alt} src={src} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        )
    }
}

export default Card;