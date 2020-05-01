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
        loading: true,
        search: "",
    }

    async componentDidMount() {

        await axios.get("https://corona.lmao.ninja/v2/all").then((response)=>{
            this.setState({cases: response.data.cases});
            this.setState({active: response.data.active});
            this.setState({deaths: response.data.deaths});
            this.setState({recovered: response.data.recovered});
        })
        await axios.get("https://corona.lmao.ninja/v2/countries?sort=country").then((response)=>{
            this.setState({countries: response.data});
            this.setState({loading: false});
        })

    }



    onchange = e => {
        if(e.target.value.length > 2){
            this.setState({ search : e.target.value });
        }else{
            this.setState({ search : "" });
        }
        
        
        if(this.state.search != ""){
            
            let url = "https://corona.lmao.ninja/v2/countries/"+this.state.search;   
            axios.get(url).then((response) => {
                console.log(response)
                
                this.setState({countries: [response.data]});
                
                this.setState({loading: false});
    
                const contry = (response.data);
                console.log("searched country is: ",contry)
            }).catch((error)=>{
                console.log('error',error)
            });
        }else{
            axios.get("https://corona.lmao.ninja/v2/countries?sort=country").then((response)=>{
                this.setState({countries: response.data});
                this.setState({loading: false});
            })
        }
        
    }


    render() {

        if(this.state.loading) {
            return <h1 className="loading">Loading...</h1>
        }

        const {search} = this.state;


        return (
            <div>
                <Summary Cases = {this.state.cases} Active = {this.state.active} Deaths = {this.state.deaths} Recovered = {this.state.recovered}/>
                <div className="container">
                    <div className="liveSearch">
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Filter By Country Name" className="form-control" onChange={this.onchange}></input>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Country</th>
                                <th scope="col">Total Cases</th>
                                <th scope="col">New Confirmed(24H)</th>
                                <th scope="col" className="recLine">Total Recovered</th>
                                <th scope="col" className="deathLine">Total Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.countries.map(country => (
                                <Countries countries = {country.country} cases={country.cases} todayCases= {country.todayCases} 
                                recovered={country.recovered} deaths={country.deaths} key={country.countryInfo.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Results;