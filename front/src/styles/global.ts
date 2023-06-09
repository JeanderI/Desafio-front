import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

 
 
    :root{
        --Color-primary: #FF577F;
        --Color-primary-focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;
        --Sucess: #3FE864;
        --Negative: #E83F5B;
        --background: #000000;
      }
      
      @media screen and (max-width: 900px) {
        *{
            h1 {
                    font-size: 22px;
                }

                h2 {
                    font-size: 16px;
                }

                h3 {
                    font-size: 14px;
                }

        }}
`;
