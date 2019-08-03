const createChartParams = config => {
    const { labels, data, backgroundColor, borderColor } = config;

    return {
            labels,
            datasets: [
                {
                    data,
                    backgroundColor,
                    borderColor,
                    borderWidth: 1,
                },
            ],
    }
};

export default createChartParams;
