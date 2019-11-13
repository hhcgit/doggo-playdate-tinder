import React from 'react';
import { reset as resetStyles } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${resetStyles}
    body {
    }
    .App {
    text-align: center;
    }

    .Mudkip {
      height: 30vmin;
      margin:5vh auto;
    }

    .App-header {
      background-color: ${props => props.theme.bgColor};
      min-height: 96vh;
      margin:2vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: ${props => props.theme.textColor};
      padding:5vh auto;
    }

    .App-link {
      color: #09d3ac;
    }
`;

const theme = {
  bgColor: '#282c34',
  textColor: 'white'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <header className="App-header">
          <h1>HELLO DOGE</h1>
          <img
            alt="Mudkip standing and waving"
            className="Mudkip"
            src="http://4.bp.blogspot.com/_9bqiDkaYkPQ/TIcJ7aptcEI/AAAAAAAAAAo/11dfODb3I4g/s320/mudkip.gif"
          />
          <h1>herd u liek mudkipz</h1>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
