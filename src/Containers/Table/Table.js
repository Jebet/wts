import React from "react";
import { Button, Modal } from "react-bootstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import Axios from "axios";
import "../Table/Table.css";

console.clear();

class FormTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      perro: "form-control",
      input: "Submit",
      name: "",
      telephone: "",
      amount: "",
      department: "",
      lgshow: false,
      users: []
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.submitInput.value === "Submit") {
      const obj = {
        name: this.state.name,
        telephone: this.state.telephone,
        amount: this.state.amount,
        department: this.state.department
      };

      this.setState({
        users: [...this.state.users, obj],
        name: "",
        telephone: "",
        amount: "",
        department: ""
      });
    } else if (this.submitInput.value === "Edit") {
      const pos = Number(this.rowRef.value);
      this.state.users[pos].name = this.inputName.value;
      this.state.users[pos].telephone = this.inputtelephone.value;
      this.state.users[pos].amount = this.inputamount.value;
      this.state.users[pos].department = this.inputdepartment.value;
      this.submitInput.value = "Submit";
      this.clearInputs();

      this.forceUpdate();
    }
  }

  clearInputs() {
    this.inputName.value = "";
    this.inputTelephone.value = "";
    this.inputAmount.value = "";
    this.inputDepartment.value = "";
    this.state.name = "";
    this.state.telephone = "";
    this.state.amount = "";
    this.state.department = "";
  }
  deleteRow(row) {
    var pos = this.state.users.indexOf(row);
    this.setState({ users: this.state.users.slice(0, pos) });
    this.clearInputs();
  }
  editRow(row) {
    var pos = this.state.users.indexOf(row);
    this.inputName.value = this.state.users[row].name;
    this.state.name = this.state.users[row].name;
    this.inputTelephone.value = this.state.users[row].telephone;
    this.state.telephone = this.state.users[row].telephone;
    this.inputDepartment.value = this.state.users[row].Department;
    this.state.department = this.state.users[row].department;
    this.inputAmount.value = this.state.users[row].amount;
    this.state.amount = this.state.users[row].amount;
    this.inputDepartment.value = this.state.users[row].department;
    this.state.department = this.state.users[row].department;
    this.rowRef.value = row;
    this.state.input = "Edit";
    this.forceUpdate();
  }

  handleClose() {
    this.setState({ lgshow: false });
  }

  handleShow() {
    this.setState({ lgshow: true });
  }

  getUsers() {
    axios
      .get("https://api.myjson.com/bins/i7ka2")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first}`,
          username: `${user.login.username}`,
          telephone: `${user.telephone}`,
          amount: `${user.amount}`,
          department: `${user.department}`
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    // const index = this.props.index;
    const { data } = this.state;
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Phone Number",
        accessor: "telephone"
      },
      {
        Header: "Department",
        accessor: "department"
      },
      {
        Header: "Amount",
        accessor: "amount"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ];

    return (
      <div className="wrapper">
        <>
          <Modal
            show={this.state.lgshow}
            onHide={this.handleClose}
            style={"width: 1250px"}
          >
            <Modal.Header closeButton>
              <Modal.Title>Shujaaz Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className="form-horizontal"
                role="form"
                onSubmit={this.onSubmit.bind(this)}
              >
                <div className="input-group">
                  <div class="col-md-6">
                    <label className="name">
                      <i class="glyphicon glyphicon-user" />
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      ref={ref => (this.inputName = ref)}
                      onChange={event =>
                        this.setState({ name: event.target.value })
                      }
                      value={this.state.name}
                      className={this.state.perro}
                      placeholder="Full Name"
                      arial-describedby="basic-addon1"
                      id="input1"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="phone">Telephone</label>
                    <input
                      type="numeric"
                      required
                      ref={ref => (this.inputTelephone = ref)}
                      onChange={event =>
                        this.setState({ telephone: event.target.value })
                      }
                      value={this.state.telephone}
                      className="form-control"
                      placeholder="Phone Number"
                      arial-describedby="basic-addon1"
                      id="input2"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="department" style={{ color: "black" }}>
                      Department
                    </label>
                    <select
                      class="custom-select"
                      input
                      type="text"
                      required
                      ref={ref => (this.inputDepartment = ref)}
                      onChange={event =>
                        this.setState({ department: event.target.value })
                      }
                      value={this.state.department}
                      className="form-control"
                      placeholder="departments"
                      aria-describedby="basic-addon1"
                      id="input3"
                    >
                      <option value="">Department</option>
                      <option value="K 'n' L"> K 'n' L</option>
                      <option value="Distribution">Distribution</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Finance">Finance</option>
                      <option value="Networks">Networks</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="amount">Amount</label>
                    <input
                      type="numeric"
                      required
                      ref={ref => (this.inputAmount = ref)}
                      onChange={event =>
                        this.setState({ amount: event.target.value })
                      }
                      value={this.state.amount}
                      className="form-control"
                      placeholder="Enter Amount"
                      id="input4"
                      style={{}}
                    />
                  </div>
                </div>
                <button className="upload" id="file">
                  <i class="fas fa-file-upload" />
                  <h6 className="contentName">file</h6>
                </button>
                <div className="form-group">
                  <div class="col-md-6">
                    <button
                      type="submit"
                      ref={ref => (this.submitInput = ref)}
                      value={this.state.input}
                      className="btn btn-default"
                      id="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <input
                  type="hidden"
                  className="row-ref"
                  value=""
                  ref={ref => (this.rowRef = ref)}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <div className="container">
          <ReactTable
            data={this.state.users}
            defaultPageSize={10}
            columns={columns}
            filterable={true}
            onFetchData={this.fetchData}
            manual // informs React Table that you'll be handling sorting and pagination server-side
            onFetchData={(state, instance) => {
              // show the loading overlay
              this.setState({ loading: true });
              // fetch your data
              Axios.post("https://api.myjson.com/bins/1573y2", {
                page: state.page,
                pageSize: state.pageSize,
                sorted: state.sorted,
                filtered: state.filtered
              }).then(res => {
                // Update react-table
                this.setState({
                  data: res.data.rows,
                  pages: res.data.pages,
                  loading: false
                });
              });
            }}
          />

          {!this.state.show && (
            <Button variant="primary" onClick={this.handleShow} id="addUser">
              Add User
            </Button>
          )}

          {this.state.users.map((data, index) => {
            return (
              <div />
              // <Row
              //   editRow={this.editRow.bind(this)}
              //   users={this.state.users}
              //   data={data}
              //   key={index}
              //   row={index}
              //   deleteRow={this.deleteRow.bind(this)}
              // />
            );
          })}
        </div>
      </div>
    );
  }
}
// class Row extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <tr>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.telephone}</td>
//         <td>{this.props.data.amount}</td>
//         <td>{this.props.data.department}</td>

//         <td
//           className="fa fa-trash-o"
//           onClick={() => {
//             this.props.deleteRow(this.props.row);
//           }}
//         />
//         <td
//           className="fa fa-pencil-square"
//           onClick={() => {
//             this.props.editRow(this.props.row);
//           }}
//         />
//       </tr>
//     );
//   }
// }
export default FormTable;
