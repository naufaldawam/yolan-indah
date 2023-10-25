import Client from "../Components/Home/Clients/Client";
import Counters from "../Components/Home/CounterStats/Counters";
import CallToHeros from "../Components/Home/CallToHeros/CallToHero";
import Heros from "../Components/Home/Heros/Hero";
import About from "../Components/Home/About/AboutUs";
// import KontenSatu from "../Components/KontenSatu"

const Home = () => {
    return(
        <div>
            <Heros/>
            <About/>
            <Client/>
            <Counters/>
            <CallToHeros/>
        </div>
    )
};

export default Home;