// data
import data from './data';

// components
import SoleMaterials from './components/SoleMaterials/SoleMaterials';
import ShoeZises from './components/ShoeSizes';
import ShoesPeculiarities from './components/ShoesPeculiarities'
import SoleVariants from './components/SoleVariants'

// general styles
import './app.css';

function App() {
	return (
		<div>
			<ShoesPeculiarities data={data.shoesPeculiarities}/>
			<SoleMaterials data={data.soleMaterials}/>
			<ShoeZises data={data.shoesSizes}/>
			<SoleVariants data={data.soleVariants}/>
		</div>
	);
}

export default App;