import React, {
	Component
} from 'react';

import {
	Link
} from 'react-router';

import './header.sass';
export default class Header extends Component {
	render() {
		return (
			<div className="header">
			    <div className="header-center center">
			        <h1>Lyric 音乐场</h1>
			        <ul className="nav">
			            <li><Link to="/">发现音乐</Link></li>
			            <li><Link to="/users">我的音乐</Link></li>
			        </ul>
			        <div className="top-tool">
			            <div className="top-search">
			                <i className="icn-search"></i>
			                <input type="text" placeholder="单曲/歌手/专辑/歌单/用户" />
			                <ul className="result"></ul>
			            </div>
			        </div>
			    </div>
			    <div className="sub-list">
			        <div className="center">
			            <ul className="sub-nav">
			                <li><a className="active" href="javascript:;">推荐</a></li>
			                <li><a href="javascript:;">排行榜</a></li>
			                <li><a href="javascript:;">歌单</a></li>
			                <li><a href="javascript:;">主播电台</a></li>
			                <li><a href="javascript:;">歌手</a></li>
			                <li><a href="javascript:;">新碟上架</a></li>
			            </ul>
			        </div>
			    </div>
			</div>
		);
	}
}