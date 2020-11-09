import React from "react";
import styled from "styled-components";

import SocialLink from "./SocialLink";
import { SocialStateProvider } from "./SocialState";

import { useSiteMetadata } from "../../hooks";
import { rhythm } from "../../utils/typography";

interface SocialProps {
  className?: string;
}

const Social: React.FunctionComponent<SocialProps> = ({
  className,
}): React.ReactElement => {
  const {
    author: { social, name, firstname },
  } = useSiteMetadata();

  return (
    <SocialStateProvider>
      <Root
        aria-label={`Socials networks ${name} is present on`}
        className={className}
      >        
        <SocialLink type="github" userId={social.github} />        
        <SocialLink type="twitter" userId={social.twitter} />        
        <SocialLink
          type="email"
          rootProps={{
            href: `mailto:${social.email}?subject=Olá, ${firstname}%21!`,
          }}
        />
      </Root>
    </SocialStateProvider>
  );
};

const Root = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, ${rhythm(1.25)});
  grid-gap: 10px;
`;

export default Social;
