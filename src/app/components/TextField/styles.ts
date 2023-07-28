import { FieldErrors } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";

export const TextFieldContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isInlineFlex"].includes(prop),
})<{ isInlineFlex: boolean | undefined }>`
  ${({ isInlineFlex, theme }) =>
    isInlineFlex
      ? "display: flex; align-items: center; justify-content: space-between;"
      : theme.mixins.flexColumn};

  gap: 0.4rem;
`;

export const TextFieldLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !["labelTheme"].includes(prop),
})<{ labelTheme: "primary" | "secondary" | undefined }>`
  ${({ labelTheme }) =>
    labelTheme === "primary"
      ? "font-size: 1.4rem; font-weight: 400; line-height: 2.4rem; color: var(--grey-800);"
      : "font-size: 1.6rem; font-weight: 400; line-height: 2.4rem; color: var(--grey);"}
`;

export const TextFieldWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isFocused", "maxWidth", "error"].includes(prop),
})<{ isFocused: boolean; maxWidth: number | undefined; error?: FieldErrors }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}%;
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: var(--rounded-sm);
  ${({ error, isFocused }) =>
    error
      ? null
      : isFocused && "box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);"};
  background-color: var(--white);
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  transition: all 0.2s ease-in-out;
  cursor: text;

  border: ${({ error, isFocused }) =>
    error
      ? "0.1rem solid var(--red)"
      : isFocused
      ? "0.1rem solid var(--purple)"
      : "0.1rem solid var(--grey-500)"};
`;

export const TextFieldIcon = styled(Image)``;

export const TextFieldInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--grey-800);
  border: none;

  &:focus {
    outline: none;
  }
`;

export const TextFieldError = styled.p`
  width: 100%;
  text-align: right;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--red);
`;
