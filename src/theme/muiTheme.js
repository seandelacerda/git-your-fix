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
            main: '#9E1CB5',
        },
        background: {
            main: '#DEDEDE',
        }
    },
});

export default muiTheme;
