import React from 'react';
import { CENTER_VERTICALLY } from 'src/styles/utility';
import styled from 'styled-components';
import Link from 'next/link';
import { ICON_SIZES } from '../IconContainer/IconContainer';

type ButtonProps = {
  size?: ButtonSize;
  text?: string;
  name?: string;
  disabled?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
};

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

const BUTTON_SIZES = {
  small: {
    icon: ICON_SIZES.small,
    iconContainer: {
      width: 38,
      height: 38,
    },
  },
  medium: {
    icon: ICON_SIZES.medium,
    iconContainer: {
      width: 44,
      height: 44,
    },
  },
};

const Button = ({ size = ButtonSize.Medium, text, disabled, href, icon, onClick }: ButtonProps) => {
  return (
    <Container disabled={disabled} size={size} href={href} onClick={onClick}>
      {icon && <IconContainer size={size}>{icon}</IconContainer>}
      {text}
    </Container>
  );
};

const Container = ({ children, disabled, size, href, onClick }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledAnchor>
          <StyledContainer disabled={disabled} size={size}>
            {children}
          </StyledContainer>
        </StyledAnchor>
      </Link>
    );
  }

  return (
    <StyledContainer disabled={disabled} size={size} onClick={onClick}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadiuses.circle};
  border: none;
  height: ${(props) => BUTTON_SIZES[props.size].iconContainer.height}px;
  width: ${(props) => BUTTON_SIZES[props.size].iconContainer.width}px;
  padding: 0;
  display: inline-block;
  align-items: center;
  background: transparent;
  &:hover {
    background: ${(props) => props.theme.colors.background.fadedGreyScale};
  }
  ${(props) =>
    props.disabled &&
    `cursor: default;
  opacity: ${props.theme.opacity[50]};`};
`;

const IconContainer = styled.div<ButtonProps>`
  ${CENTER_VERTICALLY}

  > svg {
    margin: auto;
    height: ${(props) => BUTTON_SIZES[props.size].icon.height}px;
    width: ${(props) => BUTTON_SIZES[props.size].icon.width}px;
  }
`;
const StyledAnchor = styled.a`
  text-decoration: none;
`;

export default Button;
