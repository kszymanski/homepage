import React, { Component } from "react";
import GrubaEvent from "../components/GrubaEvent";
import Section from "./Section";
import Tiles from "grommet/components/Tiles";
import Box from "grommet/components/Box";
import grubaEventsProvider from "../services/gruba-events-provider";
class GrubaEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    grubaEventsProvider.fetchEventsFromEventbrite().then(events => this.setState({events}))
  }

  render() {
    return (
      <Section color="white" title="Nasze wydarzenia" className='section-events'>
        <Box
          className="footer-cards-container"
          pad={{ vertical: "medium" }}
          size={{ width: "xxlarge" }}
          direction="row"
        >
          <Tiles fill>
            {
              this.state.events.map(event => {
                return <GrubaEvent event={event} />
              })
            }
          </Tiles>
        </Box>
      </Section>
    )
  }
}


export default GrubaEvents;
