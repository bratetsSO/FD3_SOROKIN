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
    return { options: optionsArr };
  },

  optionsToArray: function (optColl) {
    //let optionColl = selElem.options;
    let tmpArr = [];
    for (let i = 0; i < optColl.length; i++) {
      tmpArr[i] = [];
      tmpArr[i][0] = optColl[i].text;
      tmpArr[i][1] = optColl[i].value;
    };
    return tmpArr;
  },

  arrayToOption: function (arrOptions) {
    arrOptions.forEach((element, i) => {
      let op = new Option(element[i][0], element[i][1]);
      let optColl;
      optColl.add(op,i);
    });
    return optColl;
  },

  checkboxValueChange: function (EO) {
    console.log('runSort: значене изменилось на - ' + EO.target.checked);
    let selElem = document.getElementById("wordList");
    let optColl = selElem.options;
    let optArr = this.optionsToArray(optColl);//options to array
    //var optArr = Array.from(optColl).map(option => option.value); 
    
    if (EO.target.checked) {
      optArr.sort();
    } else {
      optArr.sort();
    }
    //чистим options
    while (optColl.length > 0) {
      selElem.options[0] = null;
    }

    //this.arrayToOption(optArr);

    this.setState({ options: this.arrayToOption(optArr) });
  },

  render: function () {
    return React.DOM.div({ className: 'FilterBlock' },
      React.DOM.form({ name: 'FilterForm' },
        React.DOM.input({ type: 'checkbox', name: 'runSort', defaultChecked: false, onChange: this.checkboxValueChange }),
        React.DOM.input({ type: 'text', className: 'inputText', placeholder: 'Напишите сюда буквы..', onChange: this.inputtextValueChange }),
        React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.getInitialState }),
        React.DOM.select({ id: 'wordList', size: 5 },
          ({}, this.state.options)
        ),
      ),
    )
  }
});