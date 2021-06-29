import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        ARTICLES
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        ESPORTS
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        COURTS
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        SUMMER LEAGUE
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        HOOPERS TV
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        PODCAST
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        NFT
        </a>
        <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        SHOP
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;