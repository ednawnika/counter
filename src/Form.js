import React, {Component} from 'react';






class Form extends Component {
    constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
        // objects that I can pull from with e.i(this.formValid)



    }

        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value)}
        );
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

    
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '':'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidationErrors.password = passwordValid ? '': 'is too short';
                break;
                default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid:passwordValid}, this.validateForm);
        

        }

        validateForm(){
            this.setState({formValid: this.state.emailValid && this.state.passwordValid});
        }
    

    





    render() {
        return (
            <form onSubmit={this.hookup} className="demoForm">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input onChange={(event) => this.handleUserInput(event)}value={this.state.email} className="form-control" type='email' name='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(event) => this.handleUserInput(event)}value={this.state.password} className="form-control" name='password' type='password' />
                </div>
                <button disabled={!this.state.formValid} type='submit' name="Submit" className="btn btn-primary">Sign up</button>
            </form>

        )
    }

}



export default Form;