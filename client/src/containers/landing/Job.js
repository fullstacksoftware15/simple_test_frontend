import React from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './Job.module.scss';

const Job = ({ id, position, company, location, type, description, benefits, changePage }) => {

  return (
    <div>
      <h2 className={styles.Position}>{position}</h2>
      <div className={styles.Meta}>
        <p>{company}</p>
        <p>{location}</p>
        <p>{type}</p>
      </div>

      <h3>Role description</h3>
      <p className={styles.Description}>{description}</p>

      <h3>Benefits</h3>
      <ul style={{paddingLeft: '15px'}}>
        {benefits.map((benefit, index) => <li className={styles.Benefit} key={index}>{benefit}</li>)}
      </ul>

      <p style={{textAlign: 'center'}}>
        <button onClick={() => changePage(id)} className={styles.ApplyBtn}>
          Apply now
        </button>
      </p>
      
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changePage: id => push(`/application/${id}`) },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(Job)
