import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import classNames from 'classnames';


const styles = {

    container: {
        position: 'relative'
    },

    refresh: {
        position: 'relative',
        display: 'inline-block',
        // left: '700',
        // top: '350',
        // zIndex: 999,
        // opacity: '1'
    },
}


class Refresh extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: null,
        };
    }

    render() {

        return (

            <div className='col-md-12 refresh-container'>
                <RefreshIndicator
                    size={50}
                    status="loading"
                    top={0}
                    left={0}
                    style={styles.refresh}
                />
            </div>

        );
    }

}

export default Refresh;