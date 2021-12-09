import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { autoPlayGif } from '../initial_state';

export default class Avatar extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
    size: PropTypes.number.isRequired,
    style: PropTypes.object,
    inline: PropTypes.bool,
    animate: PropTypes.bool,
  };

  static defaultProps = {
    animate: autoPlayGif,
    size: 20,
    inline: false,
  };

  state = {
    hovering: false,
  };

  handleMouseEnter = () => {
    if (this.props.animate) return;
    this.setState({ hovering: true });
  }

  handleMouseLeave = () => {
    if (this.props.animate) return;
    this.setState({ hovering: false });
  }

  render () {
    const { account, size, animate, inline } = this.props;
    const { hovering } = this.state;

    const src = account.get('avatar');
    const staticSrc = account.get('avatar_static');

    let className = 'account__avatar';
    let wrapperClassName = 'avatar__wrapper';

    if (account.get('cat')) {
      wrapperClassName = wrapperClassName + ' avatar__wrapper-cat';
    }

    if (inline) {
      className = className + ' account__avatar-inline';
    }

    const wrapperStyle = {
      ...this.props.style,
      width: `${size}px`,
      height: `${size}px`,
    };

    const style = {
      ...this.props.style,
      width: `${size}px`,
      height: `${size}px`,
      backgroundSize: `${size}px ${size}px`,
    };

    return (
      <div className={wrapperClassName} style={wrapperStyle}>
      　<img
          className={className}
          src={src}
          style={style}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </div>
    );
  }

}
