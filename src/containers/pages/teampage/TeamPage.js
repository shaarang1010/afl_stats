import axios from "axios";
import React, { useEffect, useState } from "react";
import HOC from "../../hoc/Hoc";
import { Grid, Image, Icon, Header } from "semantic-ui-react";
import Navbar from "../../../components/Menu/Navbar";

import TableComponent from "../../../components/Table/Table";

const TeamPage = (props) => {
  const BASE_IMG_URL =
    process.env.REACT_APP_IMAGE_BASE_URL +
    "/wp-content/themes/squiggle/assets/images";

  const [teamID, setTeamID] = useState(null);

  const [teamName, setTeamName] = useState(null);

  const [games, setGames] = useState(null);

  useEffect(() => {
    const {
      match: { params },
    } = props;
    const BASE_URL = process.env.REACT_APP_API_URL;
    setTeamID(Number(params.id));
    setTeamName(params.teamName.replace("%20", " "));
    axios
      .get(`${BASE_URL}/?q=games;year=${props.year};complete=100`, {})
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

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Games", link: "/games" },
    { name: "Tips", link: "/tips" },
  ];

  return (
    <HOC>
      <Grid.Row>
        <Grid.Column width={12}>
          <Navbar menuItems={menuItems} team={teamName} />
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

export default TeamPage;
