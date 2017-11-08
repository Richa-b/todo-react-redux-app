import {selectFilterOption} from "../redux/actions/index";
import {connect} from "react-redux";
import FilterList from "../components/FilterList";

const mapStateToProps = (state) => {
    return {filterOption: state.filterOption}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectFilterOption: (filterOption) => {
            dispatch(selectFilterOption(filterOption))
        }
    }
}


const FilterListContainer = connect(mapStateToProps, mapDispatchToProps)(FilterList);
export default FilterListContainer