var ShopItem = React.createClass({

    displayName: 'ShopItem',

    propTypes: {
        itemName: React.PropTypes.string,
        itemCost: React.PropTypes.number,
        itemPhotoURL: React.PropTypes.string,
        itemRest: React.PropTypes.number,
        itemNumber: React.PropTypes.number,
        cbClicked: React.PropTypes.func.isRequired,
        isClicked: React.PropTypes.bool.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
    },

    getInitialState: function () {
        return { trItemDisplay: "table-row" };
    },

    recItemClicked: function (EO) {
        this.props.cbClicked(this.props.itemNumber);
    },

    deleteItem: function (EO) {
        if (confirm("Удалить товар?")) {
            this.props.cbDeleted(this.props.itemNumber);
        }
        EO.stopPropagation();
    },

    refItemPhoto: function (EO) {
        EO.stopPropagation();
    },

    render: function () {
        return React.DOM.tr({ className: 'Good', onClick: this.recItemClicked, style: { backgroundColor: this.props.isClicked ? "orange" : "#F0F0F0" } },
            React.DOM.td({ className: 'GoodName' }, this.props.itemName),
            React.DOM.td({ className: 'GoodCost' }, this.props.itemCost),
            React.DOM.td({ className: 'GoodPhotoURL' },
                React.DOM.a({ href: this.props.itemPhotoURL, onClick: this.refItemPhoto }, this.props.itemName)
            ),
            React.DOM.td({ className: 'GoodRest' }, this.props.itemRest),
            React.DOM.td({},
                React.DOM.input({ type: 'button', value: 'Удалить', onClick: this.deleteItem })
            )
        )
    }
});