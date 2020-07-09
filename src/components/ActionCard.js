import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Link from "./Link"

const Content = styled.div`
  padding: 1.5rem;
`

const Description = styled.p`
  opacity: 0.8;
`

const Image = styled(Img)`
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
  background: radial-gradient(
    46.28% 66.31% at 66.95% 58.35%,
    #e6e6f7 0%,
    #e7edfa 50%,
    #e9fbfa 100%
  );
  width: 100%;
  max-width: 372px;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: 311px;
  }
`

const Card = styled(Link)`
  flex: 0 1 372px;
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 14px 66px rgba(0, 0, 0, 0.07),
    0px 10px 17px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.05);
  margin: 1rem;

  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const ActionCard = ({ to, image, title, description, children, className }) => {
  return (
    <Card to={to} className={className}>
      <Image fixed={image} alt={`${title} image`} />
      <Content>
        <h3>{title}</h3>
        <Description>{description}</Description>
        {children}
      </Content>
    </Card>
  )
}

export default ActionCard