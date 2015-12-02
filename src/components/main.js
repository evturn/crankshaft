'use strict';
require('normalize.css');
require('styles/style.less');

import React from 'react';

const smoothBuns = require('../images/favicon.jpg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={smoothBuns} className="img-scale"/>
        <div className="index__notify">Please make sure <code>all carry-on baggage</code> is stowed in your check-in luggage.</div>
      </div>
    );
  }
}

const clang = {
  name: '__clang__',
  pic: 'http://marshallz.com/author/clang/posts/img/clang.png',
  occupation: 'Wave Mechanics',
  quote: 'A crapbasket is v = I • a method. Dipsticks enables projectile vomit causing the brake anus system needs todo is essentially a monitor.'
};

class ClangComponent extends React.Component {
  render() {
    return (
      <div className="clang">
        <div className="clang__name">{clang.name}</div>
        <div className="clang__occupation">{clang.occupation}</div>
        <div className="clang__pic"><img src={clang.pic}/></div>
        <div className="clang__quote">Favorite Quote: "{clang.quote}"</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export { AppComponent, ClangComponent };
