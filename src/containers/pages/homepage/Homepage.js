import React, { useEffect, useState } from "react";

import { Grid, Image, Popup } from "semantic-ui-react";
import ModalWindow from "../../../components/Modal/Modal";
import { Link } from 'react-router-dom';
import HOC from '../../hoc/Hoc';

import axios from "axios";

const Homepage = (props) => {
  const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const [open, setOpen] = useState(true);

  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    axios
      .get(`${BASE_URL}/?q=teams`, {})
      .then((res) => {
        setTeams(res.data.teams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const teamGrid =
    teams !== null
      ? teams.map((team, index) => {
          return (
            <Grid.Column size="tiny" width={3} key={index}>
              <Popup
                key={team.name}
                header={team.name}
                trigger={
                  <Link to={`/team/${team.name}/${team.id}`}> 
                  <Image
                    as='a'
                    src={`${BASE_URL}` + team.logo}
                    size="tiny"
                    key={team.id}
                    rounded={true}
                  />
                  </Link>
                }
              />
            </Grid.Column>
          );
        })
      : null;
  return (
    <HOC>
      <Grid.Row>
        <Grid.Column width={12}>
          <ModalWindow
            header="Choose your team"
            description="Pick your favourite team from the list"
            close={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
          >
            <Grid style={{ marginTop: "20px" }} textAlign="center">
              {teamGrid}
            </Grid>
          </ModalWindow>
        </Grid.Column>
      </Grid.Row>
    </HOC>
  );
};

export default Homepage;
