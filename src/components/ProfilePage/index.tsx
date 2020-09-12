import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Diego Ferreira</h1>
        <h2>@diego_ferreira</h2>

        <p>
          Analista de desenvolvimento at <a href="https://missoesmundiais.com.br/">@missoesmundiaisoficial</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de dezembro de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>80</strong>
          </span>
          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
