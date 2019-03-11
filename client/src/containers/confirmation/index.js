import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GetApplication } from '../../modules/application'
import styles from './Confirmation.module.scss';

const Confirmation = ({GetApplication, match, application, fetching, fetched, error}) => {
  useEffect(() => {
    GetApplication(match.params.applicationId)
  }, [])

  if(fetching || !application) return 'Loading...';
  if(error) return `Something's wrong, please refresh`;
  return (
    <div className={styles.Confirmation}>
      <h2 className={styles.Header}>You've applied for</h2>
      <hr/>
      <h3 className={styles.Position}>{application.data.job.position}</h3>
      <div className={styles.Meta}>
        <p>{application.data.job.company}</p>
        <p>{application.data.job.location}</p>
        <p>{application.data.job.type}</p>
      </div>

      <div className={styles.Application}>
        <h3>{`${application.data.firstname} ${application.data.lastname}`}</h3>
        <p>{application.data.email}</p>
        <p>{application.data.mobilephone}</p>
      </div>

    </div>
  )
};

const mapStateToProps = ({ application : { application, fetching, fetched, error } }) => ({
  application, fetching, fetched, error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { GetApplication },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirmation)