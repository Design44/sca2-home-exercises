import styled from "styled-components"
import { Flex } from "@rebass/grid"

export const Text = styled(Flex)`
  color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 1.5em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.devLogo};
  height: 15em;
  width: 100vw;
  align-items: center;
  justify-content: center;
`
