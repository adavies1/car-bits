import React, { Component } from 'react';

import ProgressBar from '../../components/ProgressBar/ProgressBar';

type CheckoutProps = {

};

type CheckoutState = {
    progressBar: {
        steps: { text: string }[]
    }
};

class Checkout extends Component<CheckoutProps, CheckoutState> {
    state = {
        progressBar: {
            steps: [
                { text: "Your details", status: 2 },
                { text: "Addresses", status: 1 },
                { text: "Terms & conditions", status: 0 },
                { text: "Confirm and pay", status: 0 }
            ]
        }
    }

    render() {
        return (
            <>
                <ProgressBar steps={this.state.progressBar.steps}/>
                <div className="grid grid--checkout">
                    <div>
                        <h1>Checkout</h1>
                    </div>

                    <aside>
                        <h2>Your basket</h2>
                    </aside>
                </div>
            </>
        );
    }
};

export default Checkout;