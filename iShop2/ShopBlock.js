var ShopBlock = React.createClass({

  displayName: 'ShopBlock',

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired,
        photoURL: React.PropTypes.string,
        rest: React.PropTypes.number.isRequired,
        itemNumber: React.PropTypes.number.isRequired,
      })
    )
  },

  getDefaultProps: function () {
    return { shopName: "Магазин 'Without Name'" }
  },

  render: function () {

    var itemsArr = this.props.items.map(item =>
      React.createElement(ShopItem, { key: item.itemNumber, itemName: item.name, itemCost: item.cost, itemRest: item.rest, itemPhotoURL: item.photoURL })
    );

    return React.DOM.div({ className: 'ShopBlock' },
      React.DOM.div({ className: 'ShopName' }, this.props.shopName),
      React.DOM.table({ className: 'ShopTable' },
        React.DOM.tbody({},
          React.DOM.tr({ className: 'ShopTableHeader' },
            React.DOM.td({}, 'Наименование товара'),
            React.DOM.td({}, 'Стоимость товара'),
            React.DOM.td({}, 'Ссылка на фото товара'),
            React.DOM.td({}, 'Наличие на складе'),
            React.DOM.td({}, 'Кнопка'),
          ),
          ({}, itemsArr)
        ),
      ),
    )
  }

});