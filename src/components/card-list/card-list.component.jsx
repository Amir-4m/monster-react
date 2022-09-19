import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';


class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const {name, email, id} = monster;
                    return (
                        <Card 
                        containerClassName="monster-card-container"
                        containerKey={id}
                        alt={`monster ${name}`}
                        src={`https://robohash.org/${id}/?set=set2&size=180x180`}
                        title={name}
                        description={email}
                        key={id}
                         />
                    )
                })}
            </div>
        )
    }
}
export default CardList;