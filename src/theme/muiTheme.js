import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    typography: {
        fontFamily: ['proxima-nova'].join(','),
    },
    palette: {
        primary: {
            main: '#4568F9',
        },
        secondary: {
            main: '#FFF',
        },
        background: {
            main: '#24292E',
        }
    },
});

export default muiTheme;
