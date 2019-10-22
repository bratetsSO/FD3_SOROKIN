var ShopItem = React.createClass({

    displayName: 'ShopItem',

    propTypes: {
        itemName: React.PropTypes.string,
        itemCost: React.PropTypes.number,
        itemPhotoURL: React.PropTypes.string,
        itemRest: React.PropTypes.number,
        itemNumber: React.PropTypes.number,
    },

    getInitialState: function () {
        return { trItemColor: "#F0F0F0", trItemDisplay: "table-row" };
    },

    changeBackgroundColor: function (EO) {
        console.log("Меняем цвет - " + EO.currentTarget.value);
        //EO.currentTarget.bgColor = "orange"; // first variant
        if (this.state.trItemColor != "orange") {
            this.setState({ trItemColor: "orange" });
        } else {
            this.setState({ trItemColor: "#F0F0F0" });
        }
    },

    deleteItem: function (EO) {
        if (confirm("Удалить товар?")) {
            //EO.target.parentElement.parentElement.style.display = "none"; //first variant
            this.setState({ trItemDisplay: "none" });
            EO.stopPropagation();
        }
    },
    refItemPhoto: function (EO) {
        EO.stopPropagation();
    },

    render: function () {
        return React.DOM.tr({ className: 'Good', onClick: this.changeBackgroundColor, style: { backgroundColor: this.state.trItemColor, display: this.state.trItemDisplay } },
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