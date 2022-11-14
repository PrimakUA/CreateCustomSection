define([
    'uiComponent',
    'ko',
    'Magento_Customer/js/customer-data'
], function (Component, ko, customerData) {
    'use strict';
    return Component.extend({
        config: '',

        initialize: function (config) {

            this._super();
            this.cart = customerData.get('cart');
            this.config = config;
            this.cartData = ko.computed(function () {

                let items = [];
                if (this.cart().items) {

                    this.total = this.cart().subtotal;

                    Object.values(this.cart().items).forEach(val => {
                        items.push(val['product_name'] + ' - ' + val['qty'] + ' qty');
                    });

                    items.push('-');
                    items.push('Summary items in cart - ' + this.cart().summary_count + ' pcs');
                    items.push('Cart price is - ' + this.cart().subtotalAmount.slice(0, -2) + ' ' + this.config.currency);
                }
                return items;
            }, this, {pure: true});
        },
    });
});
