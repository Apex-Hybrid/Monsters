
import './card-list.css'
import Card from "../card/card.component";


const Cardlist = ({ monsters }) => (

    <div className='card-list'>
        {monsters.map((monster) => {
            return
            <Card monster={monster} />;
        })}
    </div>
);

export default Cardlist;