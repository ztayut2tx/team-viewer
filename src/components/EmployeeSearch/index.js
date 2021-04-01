import React, { Component } from "react";
import API from "../../utils/API";
import Form from "../Form";

class TeamSearch extends Component {
    state = {
        search: "",
        results: [],
        endResults: [],
    };
//renders data for effiecency
    componentDidMount() {
        API.getEmployees()
       .then((res) => {
           console.log("res.data.results", res.data.results);
           this.setState({
               results: res.data.results,
               endResults: res.data.results,
           });
       })
       .then(() => {
           console.log("this.state.results",this.state.results);
       })
       .catch((err) => console.log(err));
    };
// Render the search result here using idx key for react mapping over array.
    showResults = () => {
        return this.state.endResults.map((results, idx) => {
            return (
                <div className="row" key={idx}>
                   <img src={results.picture.thumbnail} alt= "image"></img>
                   <div className="col-sm">
                       {results.name.first}
                       {results.name.last}
                       </div>
                    <div className="col-sm">{results.cell}</div>
                    <div className="col-sm">{results.location.state}</div>
                    <div className="col-sm">{results.email}</div> 
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <Form />
                {this.showResults()}
            </div>
        );
    }
}
export default TeamSearch;