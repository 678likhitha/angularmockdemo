import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const EmployeeList = (props) => { 
  useEffect(() => {
  }, [props]);
return(
    <div>
    <table className = "table table-striped table-bordered">
<thead>
<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Gender</th>
  <th>Email</th>
</tr>
</thead>
<tbody>
  {props.users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
    </tr>
))}
</tbody>
</table>
</div>
);
}
function mapStateToProps(state) {
    return {
      users: state.users
    };
  }
export default connect(mapStateToProps)(EmployeeList);
