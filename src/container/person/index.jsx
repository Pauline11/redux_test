/*
 * @Author: pangyue
 * @Date: 2022-10-28
 * @Description: 
 */
import { connect } from "react-redux";
import PersonView from "../../components/person";
import { addPersonAction } from '../../redux/actions/personAction'

const mapStateToProps = (state) => ({
    personObj: state.personReducer
})

const mapDispatchToProps = {
    addPerson: addPersonAction
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonView)

