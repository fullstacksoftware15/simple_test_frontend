import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GetJobs } from '../../modules/jobs'
import Job from './Job';
import styles from './Landing.module.scss';

const Landing = props => {
  useEffect(() => {
    props.GetJobs();
  }, [])


  if(props.fetching || !props.jobs) return 'Loading...';
  if(props.error) return `Something's wrong, please refresh`;
  return (
    <div className={styles.Landing}>
      {props.jobs.data.map(job => {
        return (
          <div key={job.id}>
            <Job  {...job} />
            <hr></hr>
          </div >
        )
      })}
    </div>
  )
}

const mapStateToProps = ({ jobs : { jobs, fetching, fetched, error } }) => ({
  jobs, fetching, fetched, error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { GetJobs },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
