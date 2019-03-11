import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as api from '../../api';
import styles from './Application.module.scss';

const ApplicationForm = ({ match, changePage }) => (
  <div className={styles.ApplicationForm}>
    <h2>Fill in about yourself</h2>
    
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', mobilephone: '' }}
      onSubmit={async (values, { setError }) => {
        try {
          const application = await api.SubmitApplication(match.params.jobId, values);
          changePage(application.data.id);
        } catch(err) {
          setError(err);
        }
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        mobilephone: Yup.string().required('Required')
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <input
              id="firstname"
              placeholder="Enter your first name"
              type="text"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.firstname && touched.firstname ? `${styles.Input} ${styles.error}` : styles.Input
              }
            />
            {errors.firstname &&
              touched.firstname && <div className={styles.InputFeedback}>{errors.firstname}</div>}

            <input
              id="lastname"
              placeholder="Enter your last name"
              type="text"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.lastname && touched.lastname ? `${styles.Input} ${styles.error}` : styles.Input
              }
            />
            {errors.lastname &&
              touched.lastname && <div className={styles.InputFeedback}>{errors.lastname}</div>}

            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? `${styles.Input} ${styles.error}` : styles.Input
              }
            />
            {errors.email &&
              touched.email && <div className={styles.InputFeedback}>{errors.email}</div>}

            <input
              id="mobilephone"
              placeholder="Enter your mobile phone"
              type="text"
              value={values.mobilephone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.mobilephone && touched.mobilephone ? `${styles.Input} ${styles.error}` : styles.Input
              }
            />
            {errors.mobilephone &&
              touched.mobilephone && <div className={styles.InputFeedback}>{errors.mobilephone}</div>}

            <p>
              <button type="submit" disabled={isSubmitting} className={styles.ContinueBtn}>
                Continue
              </button>
            </p>
            
          </form>
        );
      }}
    </Formik>
  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changePage: id => push(`/confirmation/${id}`) },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(ApplicationForm)
