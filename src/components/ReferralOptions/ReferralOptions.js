import React, { Component } from 'react';
import ReferralOption from '../ReferralOption/ReferralOption';
import './referral-options.scss';

class ReferralOptions extends Component {

    render() {
        const {optionContent} = this.props;

        return(
            <div className="referral-options-container">
                {optionContent.map((singleOption) => (<ReferralOption key={singleOption.id} referral_option={singleOption} />))}
            </div>
        )
    }
}

export default ReferralOptions;