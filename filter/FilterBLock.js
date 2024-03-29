﻿var FilterBlock = React.createClass({

  displayName: 'FilterBlock',

  propTypes: {
    strArray: React.PropTypes.arrayOf(React.PropTypes.string),
    checkboxValue: React.PropTypes.bool,
    inputtextValue: React.PropTypes.string
  },

  getInitialState: function () {
    return { options: this.props.strArray, checkboxValue: false, inputtextValue: '' };
  },

  changeCheckbox: function (EO) {
    this.setState({ checkboxValue: EO.target.checked }, this.updateWordList)
  },

  changeInputText: function (EO) {
    this.setState({ inputtextValue: EO.target.value }, this.updateWordList)
  },

  resetConditions: function (EO) {
    this.setState({ checkboxValue: false, inputtextValue: '' }, this.updateWordList)
  },

  updateWordList: function () {
    let wordArr = this.props.strArray.map(item => item); // исходный массив слов (если не "map", то сортируется и props.strArray )
    let checkboxValue = this.state.checkboxValue;
    let inputtextValue = this.state.inputtextValue;
    let optWordArr = [];
    //let newWordArr = [];

    //сортировка
    if (checkboxValue == true) {
      wordArr = wordArr.sort();
    };
    //фильтрация
    if (inputtextValue) {
      wordArr = wordArr.filter(item => item.indexOf(inputtextValue) != -1);
    };

    /*optWordArr = wordArr.map(
      (word, i) => React.DOM.option({ key: i, value: i }, word)
    );*/
    this.setState({ options: wordArr });
  },

  render: function() {
  var optWordArr = this.state.options.map(
    (word, i) => React.DOM.option({ key: i, value: i }, word)
    );

    return React.DOM.div({ className: 'FilterBlock' },
      React.DOM.form({ name: 'FilterForm' },
        React.DOM.input({ type: 'checkbox', name: 'runSort', onChange: this.changeCheckbox, checked: this.state.checkboxValue }),
        React.DOM.input({ type: 'text', name: 'inputFilter', className: 'inputText', placeholder: 'Напишите сюда буквы..', onChange: this.changeInputText, value: this.state.inputtextValue }),
        React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.resetConditions }),
        React.DOM.select({ id: 'wordList', size: 5 },
          ({}, optWordArr)
        ),
      ),
    )
  }
});