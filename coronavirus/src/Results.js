import React from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries";

class Results extends React.Component {

    state = {
        cases: [],
        active: [],
        deaths: [],
        recovered: [],
        countries: [],
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get("https://corona.lmao.ninja/v2/all");
        const cntr = await axios.get("https://corona.lmao.ninja/v2/countries?sort=country");
        console.log(res);
        console.log(cntr);
        this.setState({cases: res.data.cases});
        this.setState({active: res.data.active});
        this.setState({deaths: res.data.deaths});
        this.setState({recovered: res.data.recovered});
        this.setState({countries: cntr.data.country});
        this.setState({loading: false});
    }

    render() {
        if(this.state.loading) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <Summary Cases = {this.state.cases} Active = {this.state.active} Deaths = {this.state.deaths} Recovered = {this.state.recovered}/>
                <div className="container">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Country</th>
                                <th scope="col">Total Cases</th>
                                <th scope="col">New Confirmed</th>
                                <th scope="col">Total Recovered</th>
                                <th scope="col">Total Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.state.countries.map(country => (
                                <Countries country = {country} key={country.country} />
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Results;