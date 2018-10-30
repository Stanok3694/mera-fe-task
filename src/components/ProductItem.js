import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // should be stateless or not?
        }
    }

    render() {
        return (
            <div>
                <img 
                    src = {this.props.data.images.cropped_image} 
                    alt = "product (cropped)" 
                />
            </div>
        );
    }
}

ProductItem.propTypes = {
    data: PropTypes.object,
}

export default ProductItem;