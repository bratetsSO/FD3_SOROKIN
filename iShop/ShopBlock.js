var ShopBlock = React.createClass({

  displayName: 'ShopBlock',

  getDefaultProps: function () {
    return { shopNameText: "Магазин 'Without Name'" }
  },

  render: function () {

    var goodsCode = [];
    this.props.goods.forEach(element => {
      var goodCode =
        React.DOM.tr({ key: element.itemNumber, className: 'Good' },
          React.DOM.td({ className: 'GoodName' }, element.name),
          React.DOM.td({ className: 'GoodCost' }, element.cost),
          React.DOM.td({ className: 'GoodPhotoURL' },
            React.DOM.a({ href: element.photoURL }, element.name)
          ),
          React.DOM.td({ className: 'GoodRest' }, element.rest),
        )
      goodsCode.push(goodCode);
    });

    return React.DOM.div({ className: 'ShopBlock' },
      React.DOM.div({ className: 'ShopName' }, this.props.shopName),
      React.DOM.table({ className: 'ShopTable' },
        React.DOM.tbody({},
          React.DOM.tr({ className: 'ShopTableHeader' },
            React.DOM.td({}, 'Наименование товара'),
            React.DOM.td({}, 'Стоимость товара'),
            React.DOM.td({}, 'Ссылка на фото товара'),
            React.DOM.td({}, 'Наличие на складе')
          ),
          ({}, goodsCode)
        ),
      ),
    )
  }

});