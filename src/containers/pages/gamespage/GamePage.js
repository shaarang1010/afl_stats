import axios from "axios";
import React, { useEffect, useState } from "react";
import HOC from "../../hoc/Hoc";
import { Grid, Image, Icon, Header } from "semantic-ui-react";

import TableComponent from "../../../components/Table/Table";

import { useSelector } from 'react-redux';

const GamePage = (props) => {
  const BASE_IMG_URL =
    process.env.REACT_APP_IMAGE_BASE_URL +
    "/wp-content/themes/squiggle/assets/images";

  const [teamID, setTeamID] = useState(null);

  const [teamName, setTeamName] = useState(null);

  const [games, setGames] = useState(null);

  const teamId = useSelector( state => state.team.teamId );

  const teamname = useSelector( state => state.team.teamName);





  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    
    setTeamID(Number(teamId));

    setTeamName(teamname);
    axios
      .get(`${BASE_URL}/?q=games;year=2021;complete=100`, {})
      .then((res) => {
        let allCompletedGames = res.data.games;
        let teamGames = allCompletedGames.filter(
          (game) => game.ateamid === teamID || game.hteamid === teamID
        );
        setGames(teamGames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [teamID]);

  const headers = [
    { name: "Round" },
    { name: "Home Team" },
    { name: "Away Team" },
    { name: "Date" },
    { name: "Venue" },
    { name: "Winner" },
    { name: "Final Score" },
  ];

  let teamGamesData = games
    ? games.map((game) => {
        return {
          elements: [
            game.roundname,
            <div>
              <Image
                src={`${BASE_IMG_URL}/${
                  game.hteam === "Western Bulldogs"
                    ? "Bulldogs"
                    : game.hteam === "Brisbane Lions"
                    ? "Brisbane"
                    : game.hteam === "Greater Western Sydney"
                    ? "Giants"
                    : game.hteam.split(" ").join("")
                }.jpg`}
                avatar
              />
              <span>{game.hteam}</span>
            </div>,
            <div>
              <Image
                src={`${BASE_IMG_URL}/${
                  game.ateam === "Western Bulldogs"
                    ? "Bulldogs"
                    : game.ateam === "Brisbane Lions"
                    ? "Brisbane"
                    : game.ateam === "Greater Western Sydney"
                    ? "Giants"
                    : game.ateam.split(" ").join("")
                }.jpg`}
                avatar
              />
              <span>{game.ateam}</span>
            </div>,
            game.date,
            game.venue,
            game.winner,
            `${game.hscore} - ${game.ascore}`,
          ],
        };
      })
    : null;

  return (
    <HOC>
      <Grid.Row>
        <Grid.Column width={12}>
          <Header as="h2">
            <Icon name="football ball" />
            <Header.Content>Games Played</Header.Content>
          </Header>
          <TableComponent
            headers={headers}
            tableData={teamGamesData}
          ></TableComponent>
        </Grid.Column>
      </Grid.Row>
    </HOC>
  );
};

export default GamePage;
