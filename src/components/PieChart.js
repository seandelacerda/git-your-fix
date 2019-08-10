import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createChartParams from '../utils/createChartParams';
import { Card, CardHeader, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types';
import Pie from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        margin: '-65px auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        padding: '40px 0'
    },
}));

const PieChart = ({ langData }) => {
    const classes = useStyles();
    const [langChartData, setLangChartData] = useState(null);
    const initLangChart = () => {
        const labels = langData.map(lang => lang.label);
        const data = langData.map(lang => lang.value);

        setLangChartData(data);

        if (data.length > 0) {
            const backgroundColor = langData.map(
                ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
            );
            const borderColor = langData.map(lang => `${lang.color}`);
            const config = { labels, data, backgroundColor, borderColor };
            setLangChartData(createChartParams(config));
        }
    };

    useEffect(() => {
        if (langData) {
            initLangChart();
        }
    }, [langData]);

    return (
        <Card className={classes.root}>
            <CardHeader title="Most used languages"/>
            <CardContent>
                {langChartData && <Pie data={langChartData}/>}
            </CardContent>
        </Card>
    );
};

PieChart.propTypes = {
    langData: PropTypes.array.isRequired,
};

export default PieChart;
