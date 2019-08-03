import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const styles = theme => ({
    root: {
        padding: 24,
        display: 'flex',
        justifyContent: 'center',
    },
    svg: {
        width: 300,
        height: 300,
    },
    g: {
        transform: 'translate(50%, 50%)',
    },
});

const colors = ['#9f15b6', '#add24c', '#36c9d4'];
const radiuses = [1, 0.5, 0.75];

class PieChart extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const { classes, label: chartLabel, data } = this.props;
        const radius = 120;
        const pie = d3
            .pie()
            .sort(d => d.index)
            .padAngle(0.005 * Math.PI)
            .value(d => d.value)(data);
        const outerRadius = d => radius * (0.5 + radiuses[d.index] * 0.5);
        const arc = d3
            .arc()
            .outerRadius(outerRadius)
            .innerRadius(radius * 0.5);
        const svg = d3.select(`.${classes.g}`);
        const g = svg
            .selectAll()
            .data(pie)
            .enter()
            .append('g');
        g.append('path')
            .attr('d', arc)
            .style('fill', d => colors[d.index]);
        const labelArc = d3
            .arc()
            .outerRadius(outerRadius)
            .innerRadius(outerRadius);
        const label = g
            .append('g')
            .attr('transform', d => `translate(${labelArc.centroid(d)})`);
        label
            .append('circle')
            .attr('r', 20)
            .attr('stroke', d => colors[d.index])
            .attr('stroke-width', 2)
            .attr('fill', '#fff');
        label
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .text(d => d.data.label)
            .style('fill', '#646B80');
        svg
            .append('foreignObject')
            .attr('width', 100)
            .attr('height', 60)
            .style('transform', 'translate(-50px, -30px)')
            .append('xhtml:div')
            .style('display', 'flex')
            .style('align-items', 'center')
            .style('justify-content', 'center')
            .style('height', '100%')
            .style('font-size', '18px')
            .style('color', '#646B80')
            .style('font-weight', 600)
            .style('text-align', 'center')
            .text(chartLabel);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <svg className={classes.svg}>
                    <g className={classes.g} />
                </svg>
            </div>
        );
    }
}

export default withStyles(styles)(PieChart);
