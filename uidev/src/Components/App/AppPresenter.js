import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Button, Card, Key, KeyName, Notification } from 'Components/Shared';

const Header = styled.div`
	margin: 50px 0;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AppContainer = styled.div`
	background-color: #f2f6fa;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const AppPresenter = ({ isLoading, address = '', balance = '', mineBlock, isMining }) => (
	<AppContainer>
		<Header>
			<Title>{isLoading ? 'Loading...' : 'Nomadcoin Wallet'}</Title>
			<Button onclick={mineBlock}>{isMining ? 'Mining' : 'Mine'}</Button>
		</Header>
		<Card>
			<Key>
				<KeyName>your address:</KeyName>
				<KeyName>{address}</KeyName>
			</Key>
			<Key>
				<KeyName>your balance:</KeyName> {balance} NMD
			</Key>
		</Card>
	</AppContainer>
);

AppPresenter.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	address: PropTypes.string,
	balance: PropTypes.number,
	mineBlock: PropTypes.func.isRequired,
	isMining: PropTypes.bool.isRequired,
};

export default AppPresenter;
