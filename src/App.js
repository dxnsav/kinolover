import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import styled from 'styled-components';

const imgUrl = 'https://www.themoviedb.org/t/p/original/wr4Sxvky6XzOE4KDj3UuEKgiSFj.jpg';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff url(${imgUrl}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.75);
  }
`;

export default function App() {
  return (
    <>
      <Container>
        <Header />
				<Main />
      </Container>
    </>
  );
}
rfsc
