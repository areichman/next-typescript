import React from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

type PageProps = {
  results: Launch[];
}

type Launch = {
  id: string;
  mission_name: string;
}

function Launches({
  results = []
}: PageProps) {

  return (
    <div>
      <h1>Recent SpaceX Launches</h1>

      {results.map(result => (
        <div key={result.id}>
          <p>{result.mission_name}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10, sort: "launch_date_utc", order: "desc") {
          id
          mission_name
          launch_date_utc
          launch_site {
            site_name_long
          }
          links {
            video_link
            mission_patch_small
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  return {
    props: {
      results: data.launchesPast
    }
  };
}

export default Launches;
