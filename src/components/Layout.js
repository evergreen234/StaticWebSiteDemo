import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div class="container-fluid">
        {/* ヘッダー */}
        <div class="row flex-nowrap justify-content-between align-items-center p-4">
          <div class="col text-center">
            <Link to='/' style={{textDecoration:'none'}}>
              <span class="header-title" href="#">ミィプログラミング</span>
            </Link>
          </div>
        </div>
    
        <div class="container">
          {/* カテゴリ */}
          <div class="row">
            <ul class='category col p-3 mb-3 rounded'>
              <li>
                <Link to='/'>
                  <a class="">Siv3d</a>
                </Link>
              </li>
            </ul>
          </div>

          {this.props.children}
        </div>
    
        {/* フッター */}
        <div class="row flex-nowrap justify-content-between align-items-center p-2 mt-3" style={{background: '#111111'}}>
          <div class="col text-center">
            <span class='copyright'>© 2020 ミィプログラミング</span>
          </div>
        </div>
      </div>
    );
  }
}
