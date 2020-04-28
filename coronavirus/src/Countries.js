import React from "react";


class Countries extends React.Component {

    render() {
        const {countries} = this.props;
        return (
            <tr>
                <td>{countries.country}</td>
            </tr>
        )
    }

}

export default Countries;