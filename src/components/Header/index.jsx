import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

export default class Index extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }


  render () {
    return (
      <div className={style.wrap}>
        {this.props.title}
      </div>
    )
  }
}