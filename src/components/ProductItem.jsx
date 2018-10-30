import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

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

    getThcPercentage(thc_percentage) {
        if (thc_percentage === '-.-') {
            return null;
        }

        return (
            <p>{thc_percentage}</p>
        )
    }

    getClassification(classifications) {
        return (
            <div>
                {
                    classifications.map((c, i) => {
                        return <p key={i}>{c}</p>
                    })
                }
            </div>
        );
    }

    render() {
        const { data } = this.props;

        return (
            <li className="flex-item">
                <img
                    src={data.images.cropped_image}
                    alt="product (cropped)"
                    className="image"
                />
                <p>{data.product_name}</p>
                <p>{data.brand}</p>
                <p>{data.type}</p>
                {this.getThcPercentage(data.attributes.thc_percentage)}
                {this.getClassification(data.classifications)}
                {
                    this.renderPrices(this.prepareSizePriceList(data.size_list))
                }

            </li>
        );
    }
}

ProductItem.propTypes = {
    data: PropTypes.object,
}

export default ProductItem;