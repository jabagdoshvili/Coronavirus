import React from "react";


class Countries extends React.Component {

    render() {
        const nm = new Intl.NumberFormat();
        const {countries,cases,todayCases,recovered,deaths} = this.props;
        return (
            <tr>
                <td>{countries}</td>
                <td>{nm.format(cases)}</td>
                <td>{nm.format(todayCases)}</td>
                <td className="recLine">{nm.format(recovered)}</td>
                <td className="deathLine">{nm.format(deaths)}</td>
            </tr>
        )
    }

}

export default Countries;