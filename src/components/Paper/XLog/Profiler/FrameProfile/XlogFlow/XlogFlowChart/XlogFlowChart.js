import React from 'react'
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

function XlogFlowChart({ width, height, children }) {
    return (
        <svg className="xlog-flow-chart" width={width} height={height}>
            {
                children
            }
        </svg>
    )
}

// XlogFlowChart.propTypes = {
//     // width: PropTypes.number.isRequired,
//     // height: PropTypes.number.isRequired,
//     // children: PropTypes.node,
// };

const mapStateToProps = (state) => {
    return {
        config: state.config
    };
};

XlogFlowChart = connect(mapStateToProps, undefined)(XlogFlowChart);
export default withRouter(XlogFlowChart);