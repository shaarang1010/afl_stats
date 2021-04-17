import axios from "axios";
import React, { useEffect, useState } from "react";
import HOC from "../../hoc/Hoc";
import { Grid, Image } from "semantic-ui-react";
import SideNav from "../../../components/Menu/SideNav";

import TableComponent from "../../../components/Table/Table";

const TeamPage = (props) => {

    const BASE_IMG_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  const [teamID, setTeamID] = useState(null);

  const [games, setGames] = useState(null);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const {
      match: { params },
    } = props;
    const BASE_URL = process.env.REACT_APP_API_URL;
    setTeamID(Number(params.id));
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
            <Image src={`${BASE_IMG_URL}/wp-content/themes/squiggle/assets/images/${game.hteam}.jpg`} avatar />
            <span>{game.hteam}</span>
            </div>,
            <div>
            <Image src={`${BASE_IMG_URL}/wp-content/themes/squiggle/assets/images/${game.ateam}.jpg`} avatar />
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
          <SideNav hide={() => setShow(false)} visible={show}>
            <TableComponent
              headers={headers}
              tableData={teamGamesData}
            ></TableComponent>
          </SideNav>
        </Grid.Column>
      </Grid.Row>
    </HOC>
  );
};

export default TeamPage;
