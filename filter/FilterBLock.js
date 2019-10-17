var FilterBlock = React.createClass({

  displayName: 'FilterBlock',

  propTypes: {
    strArray: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getInitialState: function () {
    var optionsArr = [];
    var i = 0;
    var optionRec;
    this.props.strArray.forEach(element => {
      i++;
      optionRec =
        React.DOM.option({ key: i, value: i }, element
        )
        optionsArr.push(optionRec);
    });
    return{options: optionsArr};
  },

  render: function () {
    return React.DOM.div({ className: 'FilterBlock' },
      React.DOM.form({ name: 'FilterForm' },
        React.DOM.input({ type: 'checkbox', name: 'runSort', defaultChecked: false, onChange: this.checkboxValueChange }),
        React.DOM.input({ type: 'text', className: 'inputText', placeholder: 'Напишите сюда буквы..', onChange: this.inputtextValueChange }),
        React.DOM.input({ type: 'button', value: 'Сброс' }),
        React.DOM.select({ className: 'wordList', size: 5 },
          ({}, this.state.options)
        ),
      ),
    )
  }
});