import './Pokecard.css'

function Pokecard(props){

	let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

	return (
		<div className="Pokecard">
			<div className="Pokecard-name">{props.name}</div>
			<img className="Pokecard-image" src={img} alt=""/>
			<div className="Pokecard-data">Type: {props.type}</div>
			<div className="Pokecard-data">EXP: {props.base_experience}</div>
		</div>
	);
}

export default Pokecard