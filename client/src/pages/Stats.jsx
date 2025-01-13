/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { StatsContainer, ChartsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const loader = async (req, res) => {
  return null;
  // const response = await customFetch.get("/jobs/stats");
  // return response.data;
};

const Stats = () => {
  // @ts-ignore
  // const { defaultStats, monthlyApplications } = useLoaderData();

  const response = useQuery({
    queryKey: ["stats"], //identifier
    queryFn: () => customFetch.get("/jobs/stats"), //returns a promise
  });

  if (response.isLoading) return <h4>Loading...</h4>;
  if (response.isError) return <h4>Error...</h4>;

  const { defaultStats, monthlyApplications } = response.data.data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications}/>
      )}
    </>
  )
};

export default Stats;
