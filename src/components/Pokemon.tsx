import React from 'react';
import axios from 'axios';



interface State {
    damage_relations: DamageRelation;
};

interface DamageRelation {
    double_damage_from: {
        name: string,
        url: string
    }[]
}

interface Props { };


export default class Pokemon extends React.PureComponent<Props, State> {
    state: State = {
        damage_relations: {
            double_damage_from: []
        }
    }

    performGetRequest = () => {
        axios.get("https://pokeapi.co/api/v2/type/3/")
            .then(res => {
                const damage_relations = res.data.damage_relations;

                this.setState({ damage_relations });
            })
            .catch(error => {
                console.log(error)
            });

        }


        render(){
            return (
                <div>
                    <button className="btn" onClick={this.performGetRequest}>GET IT</button>
                    <ul>
                        {this.state.damage_relations.double_damage_from.map(i => (<li>
                            <h2>{i.name}</h2>
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

