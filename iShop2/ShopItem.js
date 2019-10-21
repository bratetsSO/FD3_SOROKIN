var ShopItem = React.createClass({

    displayName: 'ShopItem',

    propTypes: {
        itemName: React.PropTypes.string,
        itemCost: React.PropTypes.number,
        itemPhotoURL: React.PropTypes.string,
        itemRest: React.PropTypes.number,
        itemNumber: React.PropTypes.number,
    },

    render: function () {
        return React.DOM.tr({ className: 'Good' },
            React.DOM.td({ className: 'GoodName' }, this.props.itemName),
            React.DOM.td({ className: 'GoodCost' }, this.props.itemCost),
            React.DOM.td({ className: 'GoodPhotoURL' },
                React.DOM.a({ href: this.props.itemPhotoURL }, this.props.itemName)
            ),
            React.DOM.td({ className: 'GoodRest' }, this.props.itemRest),
            React.DOM.td({},
                React.DOM.input({ type: 'button', value: 'Удалить', onClick: this.deleteItem })
            )
        )
    }
});