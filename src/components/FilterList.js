import React, {Component} from "react";

const filterOptionsList = {
    ALL: 'All', ACTIVE: 'Active',
    COMPLETED: 'Completed'
}
export default class FilterList extends Component {

    render() {
        const {filterOption, onSelectFilterOption} = this.props
        const filterKeys = Object.keys(filterOptionsList);
        return (<div>
            Show:
            {
                filterKeys.map((filterOptionValue, index) => {
                    if (filterOptionValue === filterOption) {

                        return(
                            <span key={filterOptionValue} onClick={() => onSelectFilterOption(filterOptionValue)}
                                     id={filterOptionValue}> {filterOptionsList[filterOptionValue]}
                                     {index === (filterKeys.length -1)? "" :", "} </span>
                              )

                    } else {
                        return ([<a key={filterOptionValue} href={'#'} onClick={() =>
                                onSelectFilterOption(filterOptionValue)}
                                id={filterOptionValue}> {filterOptionsList[filterOptionValue]} </a>,
                                <span key={filterOptionValue + "_span"}>{index === (filterKeys.length -1)? "" :", "}</span> ]

                        )
                    }
                })
            }
        </div>);
    }
}