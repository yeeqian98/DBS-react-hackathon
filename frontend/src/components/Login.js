import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    }

    handleChange = (event, statename) => {
        if (statename === "username") {
            this.setState((prevState) => ({
                ... prevState,
                username: event.target.value
            }));
        } else {
            this.setState((prevState) => ({
                ... prevState,
                password: event.target.value
            }));
        }
    }

    handleSubmit = (event) => {
        this.props.history.push('/');
        // not sure if it will work yet
        // var url = "http://127.0.0.1:XXX/xxx";
        // fetch(url, {
		// 	method: "POST",
		// 	body: JSON.stringify({
		// 		username: this.state.username,
		// 		password: this.state.password,
		// 	}),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		window.sessionStorage.setItem("username", data['username']);
		// 		console.log(data);
		// 		this.props.history.push('/');
		// 	})
        //     .catch((error) => {
        //         this.setState((prevState) => ({
        //             ... prevState,
        //             error: error
        //         }))
        //     });
    }

    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Card bg="light" style={{height: "25em", width: "25%"}}>
                    <Card.Body style={{paddingTop: "50px"}}>
                        <Card.Title>Login</Card.Title>
                        <div style={{height: "20px"}}/>
                        <Form style={{textAlign: "left"}}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username"
                                onChange={e => {
                                    this.handleChange(e, "username");
                                }}
                                value={this.state.username}
                            />
                            <div style={{height: "20px"}}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                onChange={e => {
                                    this.handleChange(e, "password");
                                }}
                                value={this.state.password}
                            />
                        </Form>
                        <label style={{'color': 'red'}}>
                                {this.state.error}
                        </label>
                        <br/>
                        <div style={{height: "20px"}}/>
                        <Button className="Button" style={{backgroundColor: "red", width: "75%"}} onClick={this.handleSubmit}>
                            Login
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login);
