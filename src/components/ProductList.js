import React, { Component } from "react";
import PropTypes from "prop-types";

import { ProductItem } from "./";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // should be stateless or not?
        }
    }

    renderList(product_list) {
        return (
            <div>
                {
                    product_list.map((product, index) => {
                        if (product.active) {
                            return (
                                <ProductItem
                                    key={index}
                                    data={product}
                                />
                            )
                        }

                        return null;
                    })
                }
            </div>
        );
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                {
                    data.product_list.length > 0 && this.renderList(data.product_list)
                }
            </div>
        );
    }
}

ProductList.propTypes = {
    data: PropTypes.shape({
        product_list: PropTypes.arrayOf(PropTypes.object),
    }),
}

export default ProductList;