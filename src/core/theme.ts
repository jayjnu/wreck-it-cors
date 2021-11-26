import { createTheme } from '@mui/material';
import ShareTechMonoRegularTtf from '../assets/fonts/ShareTechMono-Regular.ttf';
import WreckItRalphEot from '../assets/fonts/wreck-it-ralph.eot';
import WreckItRalphSvg from '../assets/fonts/wreck-it-ralph.svg';
import WreckItRalphTtf from '../assets/fonts/wreck-it-ralph.ttf';
import WreckItRalphWoff from '../assets/fonts/wreck-it-ralph.woff';

export const theme = createTheme({
  typography: {
    fontFamily: ['Share Tech Mono', 'Roboto'].join(','),
    fontSize: 20
  },
  palette: {
    mode: 'dark'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Wreck It';
        src: url(${WreckItRalphEot});
        src: local('☺'), 
          url(${WreckItRalphWoff}) format('woff'),
          url(${WreckItRalphTtf}) format('truetype'),
          url(${WreckItRalphSvg}) format('svg');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Share Tech Mono';
        src: url();
        src: local('☺'), 
          url(${ShareTechMonoRegularTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      `
    }
  }
});
