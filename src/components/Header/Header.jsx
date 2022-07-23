import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchSVG from '../../assets/svg/search.svg';

export const Header = () => {
  const HeaderSection = styled.section`
		position: relative;
		height: 70px;
    margin: 0 40px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
		font-size: 22px;
  `;

  const HeaderTitle = styled(Link)`
    font-family: bebas-neue, sans-serif;
    font-weight: 400;
    font-style: normal;
    flex-grow: 1;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 26px;
		color: #fff;
    &:hover {
      color: red;
    }
  `;

	const HeaderSearchInputSection = styled.section`
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	`;

  const HeaderSearchInput = styled.input`
		background: transparent;
		text-transform: uppercase;
    font-size: 20px;
    color: #ced4da;
    outline: none;
    border: none;
		font-family: 'Carnas';
		&::placeholder {
			color: #ced4da;
		}
  `;

	const HeaderSearchSVG = styled.img`
		width: 20px;
		height: 20px;
		margin-right: 10px;
	`;

  const HeaderNavigation = styled.nav`
    flex-grow: 10;
		display: flex;
		flex-direction: row;
		justify-content: center;
  `;

  const HeaderNavigationItem = styled(Link)`
		margin: 0 40px;
    font-family: 'Carnas';
		font-size: 20px;
    text-decoration: none;
		text-transform: uppercase;
		color: #ced4da;
    &:hover {
      color: #fff;
    }
  `;

  const HeaderUserInfo = styled.div`
    flex-grow: 2;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;

  `;

  const HeaderUserName = styled(Link)`
		margin-right: 20px;
		font-family: 'Carnas';
		text-transform: uppercase;
    text-decoration: none;
		color: #ced4da;
    &:hover {
      color: #fff;
    }
	`;

  const HeaderUserAvatar = styled.img`
		width: 50px;
		height: auto;
	`;

  return (
    <HeaderSection>
      <HeaderTitle to="/">Kinolover</HeaderTitle>
      <HeaderSearchInputSection >
				<HeaderSearchSVG src={SearchSVG}></HeaderSearchSVG>
				<HeaderSearchInput type="text" placeholder="Search" />
			</HeaderSearchInputSection>
      <HeaderNavigation>
        <HeaderNavigationItem to="/">home</HeaderNavigationItem>
        <HeaderNavigationItem to="/">tv shows</HeaderNavigationItem>
        <HeaderNavigationItem to="/">movies</HeaderNavigationItem>
      </HeaderNavigation>
      <HeaderUserInfo>
        <HeaderUserName to="/">Profile</HeaderUserName>
        <HeaderUserAvatar src='https://i.pravatar.cc/300'/>
      </HeaderUserInfo>
    </HeaderSection>
  );
};
