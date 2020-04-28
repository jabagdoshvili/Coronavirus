import React from "react";


class Summary extends React.Component {

    render() {
        const nm = new Intl.NumberFormat();
        const {Cases, Active, Deaths, Recovered} = this.props;
        return(
            <div className="container">
                <div className="main-title">
                    <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
                </div>
                <div className="row stats-box">
                    <div className="col-xl-3">
                        <h1>Coronavirus Cases:</h1>
                        <h2 className="total">{nm.format(Cases)}</h2>
                    </div>
                    <div className="col-xl-3">
                        <h1>Active Cases</h1>
                        <h2 className="active">{nm.format(Active)}</h2>
                    </div>
                    <div className="col-xl-3">
                        <h1>Deaths:</h1>
                        <h2 className="death">{nm.format(Deaths)}</h2>
                    </div>
                    <div className="col-xl-3">
                        <h1>Recovered:</h1>
                        <h2 className="recovered">{nm.format(Recovered)}</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default Summary;