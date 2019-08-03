import React, { useState, useEffect } from 'react';
import {fade, makeStyles, withStyles} from '@material-ui/core/styles';
import createChartParams from '../utils/createChartParams';
import PropTypes from 'prop-types';
import PolarAreaChart from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

const PieChart = ({ langData, repoData }) => {
    const classes = useStyles();
    console.log(langData)
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
        if (langData.length) {
            initLangChart();
        }
    }, []);

    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);

    return (
        <div className={classes.root}>
            <PolarAreaChart data={langChartData}/>
        </div>
    );
};

PieChart.propTypes = {
    langData: PropTypes.array.isRequired,
    repoData: PropTypes.array.isRequired,
};

export default PieChart;
