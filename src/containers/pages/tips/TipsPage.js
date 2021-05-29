import React, { useEffect, useState } from "react";

import CardComponent from "../../../components/Card/Card";

import Hoc from "../../hoc/Hoc";

import axios from "axios";
import { Grid, List, Image, Card } from "semantic-ui-react";

import { useSelector } from 'react-redux';

const TipsPage = (props) => {
 
  const BASE_IMG_URL =
    process.env.REACT_APP_IMAGE_BASE_URL +
    "/wp-content/themes/squiggle/assets/images";

  const [tips, setTips] = useState(null);

  const favTeamID = useSelector(state => state.team.teamId );


  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    let favTeam = favTeamID;
    axios
      .get(`${API_URL}/?q=tips;year=2021;source=1;complete=!100`)
      .then((res) => {
        let tipsData = res.data.tips;
        setTips(
          tipsData.filter(
            (team) => team.ateamid === favTeam || team.hteamid === favTeam
          )
        );
      });
  }, [tips]);

  let favTeamTips = tips
    ? tips.map((game, index) => {
        return (
          <Card.Group>
            <CardComponent
              header={` Round ${game.round}`}
              meta={game.hteamid === favTeamID ? "Home Game" : "Away Game"}
              extra={game.date}
              key={index}
            >
              <List>
                <List.Item>
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
                  </List.Item>
                  <List.Item>
                      <span>
                          VS
                      </span>
                  </List.Item>
                  <List.Item>
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
                </List.Item>
                <List.Item>{`Venue - ${game.venue}`}</List.Item>
                <List.Item>
                  {`Tip - ${game.tip} `}
                </List.Item>
                <List.Item>
                  {`By Confidence - ${game.confidence} %`}
                </List.Item>
              </List>
            </CardComponent>
          </Card.Group>
        );
      })
    : null;
  return (
    <Hoc>
      <Grid style={{ marginTop: "20px" }} textAlign="center">
        {favTeamTips}
      </Grid>
    </Hoc>
  );
};

export default TipsPage;
