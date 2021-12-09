import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { autoPlayGif } from '../initial_state';

export default class AvatarOverlay extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    friend: ImmutablePropTypes.map.isRequired,
    animate: PropTypes.bool,
  };

  static defaultProps = {
    animate: autoPlayGif,
  };

  render() {
    const { account, friend, animate } = this.props;

    let baseClassName = 'account__avatar-overlay-base-wrapper';
    let overlayClassName = 'account__avatar-overlay-overlay-wrapper';

    if (account.get('cat')) {
      baseClassName = baseClassName + ' account__avatar-overlay-base-wrapper-cat';
    }

    if (friend.get('cat')) {
      overlayClassName = overlayClassName + ' account__avatar-overlay-overlay-wrapper-cat';
    }

    return (
      <div className='account__avatar-overlay'>
        <div className={baseClassName}>
          <img className='account__avatar-overlay-base' src={account.get(animate ? 'avatar' : 'avatar_static')} />
        </div>
        <div className={overlayClassName}>
          <img className='account__avatar-overlay-overlay' src={friend.get(animate ? 'avatar' : 'avatar_static')} />
        </div>
      </div>
    );
  }

}
