import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/* カテゴリ */}
        {/*
        <div class="row">
          <div class="col p-4 mb-3 text-white rounded">
            <div class="col-md-6 px-0">
              <a class="p-2 text-muted" href="#">Siv3d</a>
              <a class="p-2 text-muted" href="#">Unity</a>
              <a class="p-2 text-muted" href="#">AWS</a>
            </div>
          </div>
        </div>
        */}
  
        <div class="row">
          <ul class="list-group w-100">
            <li class="list-group-item">
              <span class="list-date">2021年 1月1日</span>
              <div>
                <Link to='/siv3d/1'>
                  <a class="list-title m-0">スプライトシート作成アプリ</a>
                </Link>
              </div>
            </li>
            <li class="list-group-item">
              <span class="list-date">2021年 1月1日</span>
              <div>
              <Link to='/article'>
                <a class="list-title m-0">スプライトシート作成アプリ2</a>
              </Link>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
