import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/app/styles/breakpoints";

export const AuthFormWrapper = styled.div`
  width: 100%;
  max-width: 476px;
  ${({ theme }) => theme.mixins.flexColumnItems};
  gap: 5.1rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    gap: 7.1rem;
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: var(--rounded);
  padding: 4rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
    padding: 0;
  }
`;

export const AuthCardHeader = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 0.8rem;
`;

export const AuthCardTitle = styled.h1`
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 700;
  color: var(--grey-800);
`;

export const AuthCardText = styled.p`
  color: var(--grey);
`;

export const AuthCardForm = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 2.4rem;
  margin: 4rem 0 2.4rem 0;
`;

export const AuthCardFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AuthCardLink = styled(Link)`
  text-decoration: none;
  color: var(--purple);

  @media screen and (max-width: ${breakpoints.mobile}) {
    line-height: 2.4rem;
  }
`;

export const PasswordInformations = styled.p.withConfig({
  shouldForwardProp: (prop) => !["isError"].includes(prop),
})<{ isError?: string }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ isError }) =>
    isError === "minLength" ? "var(--red)" : "var(--grey)"};
`;

export const AuthCardError = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--red);
`;
