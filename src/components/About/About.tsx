import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { SiteSiteMetadataAuthor } from "graphql-types";
import { rhythm } from "../../utils/typography";
import { yearsSince } from "../../utils/timeSince";
import { device } from "../../styles/constants";
import { useAvatar } from "../../hooks";

interface AboutProps {
  author: SiteSiteMetadataAuthor;
}

const About: React.FunctionComponent<AboutProps> = ({
  author,
}): React.ReactElement => {
  const avatar = useAvatar({ width: 200, height: 200 });

  return (
    <Root>
      <Avatar fixed={avatar.childImageSharp.fixed as FixedObject} />

      <Description>
        <h4>Hello!</h4>
        <p>
          I'm {author.name}, {yearsSince(author.birthDate)} years old. I've been programming since last century when spend hours staring at terminals with letters was just nerd (and it wasn't that cool). 
          I've started to be paid to program in the late ages of 2002 - when Javascript was a mess, and we call it DHTML 😜.
        </p>

        <p>
          After almost two decades, I think it's about time to start giving back to the software community that gave me so much for free over this time.
        </p>
                          
      </Description>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-gap: ${rhythm(2)};
  margin-top: ${rhythm(0.5)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;
  align-self: flex-start;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

const Description = styled.section`
  h4 {
    margin-top: ${rhythm(0.5)};
  }
`;

export default About;
