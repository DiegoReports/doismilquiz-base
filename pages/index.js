import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>DoisMilQuiz - Modelo Base</title>

        <meta name="title" content="Curiosidades Ano 2000" />
        <meta name="description" content="Teste seus conhecimentos nesse AppQuiz! Perguntas sobre assuntos nostálgicos." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doismilquiz-base.diegoreports.vercel.app/" />
        <meta property="og:title" content="Curiosidades Ano 2000" />
        <meta property="og:description" content="Teste seus conhecimentos nesse AppQuiz! Perguntas sobre assuntos nostálgicos." />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://doismilquiz-base.diegoreports.vercel.app/" />
        <meta property="twitter:title" content="Curiosidades Ano 2000" />
        <meta property="twitter:description" content="Teste seus conhecimentos nesse AppQuiz! Perguntas sobre assuntos nostálgicos." />
        <meta property="twitter:image" content="" />
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Curiosidades Ano 2000</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do React');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Descrição aleatorio sobre oque se trata esse quiz.</p>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DiegoReports" />
    </QuizBackground>
  );
}
