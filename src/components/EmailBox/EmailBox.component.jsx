import React from "react";
import './EmailBox.styles.scss';

import { addDocument } from "../../Firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignUpEmail extends React.Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        addDocument(this.state.email);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        // addDocument('evansmarkus91@gmail.com');
        const { email } = this.state;
        return(
            <div className="sign-up-email">
                <h2 className="title">If you wish to be notified whenever a new post drops.</h2>
                <span className="sub-title">{'(And only then.)'}</span>
                <form className='email' onSubmit={this.handleSubmit}>
                    <FormInput 
                        onChange={this.handleChange}
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        required
                    />
                </form>
            </div>
        )
    }
}

export default SignUpEmail;