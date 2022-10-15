import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-card">
      <h4 className="feature-card-text heading4">{props.heading}</h4>
      <span className="feature-card-text1 content-Light">{props.text}</span>
      <svg viewBox="0 0 1024 1024" className="feature-card-icon">
        <path d="M768 598v-172h-170v-170h-172v170h-170v172h170v170h172v-170h170zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
      </svg>
      <span className="feature-card-text2">{props.text1}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text1: 'Get started >',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'Routes',
}

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCard
