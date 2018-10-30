import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // should be stateless or not?
        }
    }

    prepareSizePriceList(sizeList) {
        return sizeList.map(elem => {
            return {
                size: elem.size,
                price: elem.price_sell.toFixed(2)
            }
        });
    }

    renderPrices(priceSizeList) {
        return (
            <div>
                {
                    priceSizeList.map((e, i) => {
                        return (
                            <div key={i}>
                                <p>${e.price}</p>
                                <p>/{e.size}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                <img
                    src={data.images.cropped_image}
                    alt="product (cropped)"
                />
                <p>{data.product_name}</p>
                <p>{data.brand}</p>
                <p>{data.type}</p>
                <p>{data.attributes.thc_percentage}</p> {/* it should be preprocessed - "-.-" */}
                <div>
                    {
                        data.classifications.map((c, i) => {
                            return <p key={i}>{c}</p>
                        })
                    }
                </div>
                <div>
                    {
                        this.renderPrices(this.prepareSizePriceList(data.size_list))
                    }
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    data: PropTypes.object,
}

export default ProductItem;