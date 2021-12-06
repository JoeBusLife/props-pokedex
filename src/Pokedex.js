import Pokecard from './Pokecard'
import './Pokedex.css'

function Pokedex({pokemon}){
	return (
		<div className="Pokedex">
			<h2 className="Pokedex-title">Pokedex</h2>
			{pokemon.map(p => <Pokecard className="Pokedex-cards" key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)}
		</div>
	)
}

export default Pokedex;