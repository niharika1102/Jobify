/* eslint-disable no-unused-vars */
import React from 'react'
import Wrapper from "../assets/wrappers/JobsContainer"
import Job from './Job'
import { useAllJobsContext } from '../pages/AllJobs'

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display. Start by adding one.</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer