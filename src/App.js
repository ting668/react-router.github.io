import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

class Logo extends Component {

  render() {
    return (<div className="logo">
      <a href="http://train.new.hpay.saas.hand-china.com/"> <img src="http://train.new.hpay.saas.hand-china.com/img/nav/choerodon_logo_fixed.svg" alt="猪齿鱼" />
      </a> </div>)
  }
}

class Nav extends Component {

  render() {
    return (
      <Router>
        <div>
          <Logo />
          <div className="nav">

            <ul>

              <li><Link to="/DocCode">文档</Link></li>
              <li><Link to="/DocNote">每日总结</Link></li>
            </ul>
          </div>
          <div className="main">
            <Switch>
              <Route path="/DocCode" component={DocCode} />
              <Route path="/DocNote" component={DocNote} />

              <Route component={DocCode} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}
class DocCode extends Component {

  render() {
    return (
      <div>
        <div className="left">

          <ul> <h3>编码规范</h3>
            <li><Link to="/DocCode/Code0801">SQL规范</Link></li>
            <li><Link to="/DocCode/Code0802">Java基础开发规范</Link></li>
            <li><Link to="/DocCode/Code0802">Java后端服务开发规范</Link></li>
            <li><Link to="/DocCode/Code0801">Rest api 规范</Link></li>
            <li><Link to="/DocCode/Code0801">前端服务开发规范</Link></li>
            <li><Link to="/DocCode/Code0801">Git 提交规范</Link></li>
            <li><Link to="/DocCode/Code0802">Gitlab CI规范</Link></li>
          </ul>
        </div>
        <div className="right">
          <Switch>
            <Route path="/DocCode/Code0801" component={Code0801} />
            <Route path="/DocCode/Code0802" component={Code0802} />
            <Route component={Code0801} />
          </Switch>
        </div>
      </div>

    )
  }
}
class Code0801 extends Component {

  render() {
    return (
      <div >
        <h2>建表规约</h2>

        <p>强制要求</p>
        <ol>
          <li>表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint （1 表示是， 0 表示否）。</li>
          <ul>
            <li>说明： 任何字段如果为非负数，必须是 unsigned。</li>
            <li> 正例： 表达逻辑删除的字段名 is_deleted， 1 表示删除， 0 表示未删除。</li>
          </ul>
          <li>表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。</li>
        </ol>


      </div>
    )
  }
}
class Code0802 extends Component {

  render() {
    return (
      <div>
        <p>Code0802</p>
      </div>)
  }
}

class DocNote extends Component {

  render() {
    return (
      <div>
        <div className="left">
          <ul>
            <li><Link to="/DocNote/Note0801">日记1</Link></li>
            <li><Link to="/DocNote/Note0802">日记2</Link></li>
          </ul>
        </div>
        <div className="right">
          <Switch>
            <Route path="/DocNote/Note0801" component={Note0801} />
            <Route path="/DocNote/Note0802" component={Note0802} />
            <Route component={Note0801} />
          </Switch>
        </div>
      </div>

    )
  }
}
class Note0801 extends Component {

  render() {
    return (
      <div>
        <p>Note0801</p>
      </div>
    )
  }
}
class Note0802 extends Component {

  render() {
    return (
      <div>
        <p>Note0802</p>
      </div>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />
      </div>
    );
  }
}

export default App;
