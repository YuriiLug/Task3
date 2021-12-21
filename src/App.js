import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

class GridComponent extends React.Component {
  render() {
    return (
<form>
    <input placeholder="Filter By..." type="text" name="Filter By" />
        <table  className="table table-condensed">
                    <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Active</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
              <input type="checkbox" />
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
              <input type="checkbox" />
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
              <input checked={true} type="checkbox" />
          </tr>
          </tbody>
        </table>
</form>
    )
  }
}
function App() {
  return <GridComponent/>;
}

export default App;
