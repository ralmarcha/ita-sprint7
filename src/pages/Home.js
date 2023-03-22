import { Link } from "react-router-dom";

const Home = () =>
    
    <div className="home">
        <h1 className="title">BudgetApp</h1>
        <h2>Tria entre les diferents opcions per calcular el teu pressupost</h2> 
        <Link to="/budgets/" className="link"> Pressupost </Link>
    </div>
export default Home;