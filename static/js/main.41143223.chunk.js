(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=(a(15),a(1)),c=a(2),u=a(4),l=a(3),h=a(5),m=(a(17),a(18),a(8));function p(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={position:4,history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleKeydown",value:function(e){var t;switch(e.key){case"ArrowUp":t=this.state.position-3>0?this.state.position-3:0,this.setState({position:t});break;case"ArrowDown":t=this.state.position+3>8?this.state.position+3:8,this.setState({position:t});break;case"ArrowRight":t=this.state.position+1>8?this.state.position+1:8,this.setState({position:t});break;case"ArrowLeft":t=this.state.position-1>0?this.state.position-1:0,this.setState({position:t})}}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();b(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],s=b(n.squares),i=a.map(function(e,a){var n=a?"Go to move #"+a:"Go to game start";return r.a.createElement("li",{key:a},r.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))});return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(d,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",null,this.state.position),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,i)))}}]),t}(r.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null}var f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.41143223.chunk.js.map