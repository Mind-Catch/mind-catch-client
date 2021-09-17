import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.gray[1]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  .red {
    background-color: ${({ theme }) => theme.color.red[9]};
  }
  
  .orange {
    background-color: ${({ theme }) => theme.color.orange[9]};
  }
  
  .yellow {
    background-color: ${({ theme }) => theme.color.yellow[9]};
  }

  .green {
    background-color: ${({ theme }) => theme.color.green[9]};
  }

  .blue {
    background-color: ${({ theme }) => theme.color.blue[9]};
  }

  .teal {
    background-color: ${({ theme }) => theme.color.teal[9]};
  }

  .purple {
    background-color: ${({ theme }) => theme.color.violet[9]};
  }

  .black {
    background-color: black;
  }

  .white {
    background-color: white;
  }

`;

export default GlobalStyle;
