import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { API } from 'aws-amplify';
import BillingForm from '../components/BillingForm';
import config from '../config';
import './Settings.css';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  billUser(details) {
    return API.post('notes', '/billing', {
      body: details
    });
  }

  handleFormSubmit = async (storage, { token, error }) => {
    if (error) {
      alert(error);
      return;
    }

    this.setState({ isLoading: true });
    try {
      await this.billUser({ storage, source: token.id });
      alert('Your card has been charged successfully!');
      this.props.history.push('/');
    } catch (ex) {
      alert(ex);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="Settings">
        <StripeProvider apiKey={config.stripeKey}>
          <Elements>
            <BillingForm loading={this.state.isLoading} onSubmit={this.handleFormSubmit} />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}