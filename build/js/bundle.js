"use strict";var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}$("#myModal").modal("show");var Enemy=function(){function e(n,t){_classCallCheck(this,e),this.x=n,this.y=t,this.speed=Math.floor(5*Math.random()+10),this.sprite="images/enemy-bug.png"}return _createClass(e,[{key:"update",value:function(e){this.speed}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"checkCollisions",value:function(){this.x>player.x-65&&this.x<player.x+80&&this.y>=player.y-70&&this.y<player.y+65&&player.resetPlayer()}},{key:"reset",value:function(){this.x>515&&(this.x=-200)}},{key:"moveEnemy",value:function(e){var n=setInterval(function(){!0===player.winGame&&clearInterval(n),e.checkCollisions(),e.update(),e.reset(),e.x+=e.speed},75)}}]),e}(),Player=function(){function e(){_classCallCheck(this,e),this.x=200,this.y=380,this.speed=30,this.sprite,this.winGame=!1}return _createClass(e,[{key:"update",value:function(e){this.speed}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"resetPlayer",value:function(){this.x=200,this.y=420}},{key:"win",value:function(){var e=this;this.winGame=!0;var n=document.querySelector(".win-message");n.innerHTML="You Win!!!",star.y=-200,setTimeout(function(){e.resetPlayer(),startEnemies(),n.innerHTML="",star.y=-5,e.winGame=!1},3e3)}},{key:"handleInput",value:function(e){if(!0!==player.winGame)switch(this.x>star.x-70&&this.x<star.x+60&&this.y>=star.y-50&&this.y<star.y+50&&this.win(),this.update(),e){case"up":this.y>-10&&(this.y-=this.speed);break;case"down":this.y<canvas.height-170&&(this.y+=this.speed);break;case"right":this.x<canvas.width-100&&(this.x+=this.speed);break;case"left":this.x>-10&&(this.x-=this.speed)}}}]),e}(),Star=function(){function e(){_classCallCheck(this,e),this.x=205,this.y=-5,this.sprite="images/star.png"}return _createClass(e,[{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}}]),e}(),selectGirl=document.querySelector("#girl"),selectBoy=document.querySelector("#boy"),sprite=void 0,setPlayerGirl=function(e){player.sprite="images/char-cat-girl.png",$("#myModal").modal("hide"),Engine(void 0)},setPlayerBoy=function(e){player.sprite="images/char-boy.png",$("#myModal").modal("hide"),Engine(void 0)};selectGirl.addEventListener("click",setPlayerGirl),selectBoy.addEventListener("click",setPlayerBoy);var player=new Player,star=new Star,enemy1=new Enemy(-10,60),enemy2=new Enemy(-10,140),enemy3=new Enemy(-10,220),enemy4=new Enemy(-500,60),enemy5=new Enemy(-500,140),enemy6=new Enemy(-500,220),allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5,enemy6],startEnemies=function(){var e=!0,n=!1,t=void 0;try{for(var a,i=allEnemies[Symbol.iterator]();!(e=(a=i.next()).done);e=!0)enemy=a.value,enemy.moveEnemy(enemy)}catch(e){n=!0,t=e}finally{try{!e&&i.return&&i.return()}finally{if(n)throw t}}};startEnemies(),document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var n,t=e.document,a=e.window,i=t.createElement("canvas"),s=i.getContext("2d");function r(){var e,t=Date.now();e=(t-n)/1e3,allEnemies.forEach(function(n){n.update(e)}),player.update(),function(){var e,n,t=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(s.clearRect(0,0,i.width,i.height),e=0;e<6;e++)for(n=0;n<5;n++)s.drawImage(Resources.get(t[e]),101*n,83*e);allEnemies.forEach(function(e){e.render()}),player.render(),star.render()}(),n=t,a.requestAnimationFrame(r)}i.width=505,i.height=606,t.body.appendChild(i),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png","images/star.png"]),Resources.onReady(function(){n=Date.now(),r()}),e.ctx=s,e.canvas=i};!function(){var e={},n=[];function t(t){if(e[t])return e[t];var i=new Image;i.onload=function(){e[t]=i,a()&&n.forEach(function(e){e()})},e[t]=!1,i.src=t}function a(){var n=!0;for(var t in e)e.hasOwnProperty(t)&&!e[t]&&(n=!1);return n}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){t(e)}):t(e)},get:function(n){return e[n]},onReady:function(e){n.push(e)},isReady:a}}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImVuZ2luZS5qcyIsInJlc291cmNlcy5qcyJdLCJuYW1lcyI6WyIkIiwibW9kYWwiLCJFbmVteSIsIngiLCJ5IiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInNwZWVkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3ByaXRlIiwiZHQiLCJjdHgiLCJkcmF3SW1hZ2UiLCJSZXNvdXJjZXMiLCJnZXQiLCJwbGF5ZXIiLCJyZXNldFBsYXllciIsImVuZW15IiwiZW5lbXlJbnRlcnZhbCIsInNldEludGVydmFsIiwid2luR2FtZSIsImNsZWFySW50ZXJ2YWwiLCJjaGVja0NvbGxpc2lvbnMiLCJ1cGRhdGUiLCJyZXNldCIsIlBsYXllciIsIl90aGlzIiwid2luTWVzc2FnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInN0YXIiLCJzZXRUaW1lb3V0Iiwic3RhcnRFbmVtaWVzIiwia2V5Y29kZSIsIndpbiIsImNhbnZhcyIsImhlaWdodCIsIndpZHRoIiwiU3RhciIsInNlbGVjdEdpcmwiLCJzZWxlY3RCb3kiLCJzZXRQbGF5ZXJHaXJsIiwiRW5naW5lIiwic2V0UGxheWVyQm95IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZW15MSIsImVuZW15MiIsImVuZW15MyIsImVuZW15NCIsImVuZW15NSIsImVuZW15NiIsImFsbEVuZW1pZXMiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwibW92ZUVuZW15IiwiZXJyIiwicmV0dXJuIiwiZSIsImhhbmRsZUlucHV0IiwiMzciLCIzOCIsIjM5IiwiNDAiLCJrZXlDb2RlIiwiZ2xvYmFsIiwibGFzdFRpbWUiLCJkb2MiLCJ3aW5kb3ciLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsIm1haW4iLCJub3ciLCJEYXRlIiwiZm9yRWFjaCIsInJvdyIsImNvbCIsInJvd0ltYWdlcyIsImNsZWFyUmVjdCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJvblJlYWR5IiwicmVzb3VyY2VDYWNoZSIsInJlYWR5Q2FsbGJhY2tzIiwiX2xvYWQiLCJ1cmwiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImlzUmVhZHkiLCJmdW5jIiwic3JjIiwicmVhZHkiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJ1cmxPckFyciIsIkFycmF5IiwicHVzaCJdLCJtYXBwaW5ncyI6IjZYQUNBQSxFQUFFLFlBQVlDLE1BQU0sWUFHZEMsaUJBQ0osU0FBQUEsRUFBWUMsRUFBR0MsR0FBR0MsZ0JBQUFDLEtBQUFKLEdBQ2hCSSxLQUFLSCxFQUFJQSxFQUNURyxLQUFLRixFQUFJQSxFQUNURSxLQUFLQyxNQUFRQyxLQUFLQyxNQUFNLEVBQUFELEtBQUtFLFNBQXVCLElBQ3BESixLQUFLSyxPQUFTLDJFQUtUQyxHQUNMTixLQUFLQyx1Q0FLTE0sSUFBSUMsVUFBVUMsVUFBVUMsSUFBSVYsS0FBS0ssUUFBU0wsS0FBS0gsRUFBR0csS0FBS0YsNkNBS25ERSxLQUFLSCxFQUFLYyxPQUFPZCxFQUFJLElBQU9HLEtBQUtILEVBQUljLE9BQU9kLEVBQUksSUFBTUcsS0FBS0YsR0FBTWEsT0FBT2IsRUFBSSxJQUFPRSxLQUFLRixFQUFJYSxPQUFPYixFQUFJLElBQzNHYSxPQUFPQyw4Q0FNSFosS0FBS0gsRUFBSSxNQUNYRyxLQUFLSCxHQUFLLHVDQUlKZ0IsR0FDUixJQUFNQyxFQUFnQkMsWUFBWSxZQUVULElBQW5CSixPQUFPSyxTQUNUQyxjQUFjSCxHQUVoQkQsRUFBTUssa0JBQ05MLEVBQU1NLFNBRU5OLEVBQU1PLFFBQ05QLEVBQU1oQixHQUFLZ0IsRUFBTVosT0FDZCxhQUdIb0Isa0JBQ0osU0FBQUEsSUFBY3RCLGdCQUFBQyxLQUFBcUIsR0FD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QXFISk4sRUFBTy9ELElBQU1BLEVBQ2IrRCxFQUFPdEMsT0FBU0EsSUNuTHBCLFdBQ0ksSUFBSTBELEtBRUFDLEtBMkJKLFNBQVNDLEVBQU1DLEdBQ1gsR0FBR0gsRUFBY0csR0FLYixPQUFPSCxFQUFjRyxHQUtyQixJQUFJQyxFQUFNLElBQUlDLE1BQ2RELEVBQUlFLE9BQVMsV0FLVE4sRUFBY0csR0FBT0MsRUFLbEJHLEtBQ0NOLEVBQWVaLFFBQVEsU0FBU21CLEdBQVFBLE9BUWhEUixFQUFjRyxJQUFPLEVBQ3JCQyxFQUFJSyxJQUFNTixFQWVsQixTQUFTSSxJQUNMLElBQUlHLEdBQVEsRUFDWixJQUFJLElBQUlDLEtBQUtYLEVBQ05BLEVBQWNZLGVBQWVELEtBQzVCWCxFQUFjVyxLQUNkRCxHQUFRLEdBR2hCLE9BQU9BLEVBYVgzQixPQUFPaEUsV0FDSCtFLEtBMUZKLFNBQWNlLEdBQ1BBLGFBQW9CQyxNQUtuQkQsRUFBU3hCLFFBQVEsU0FBU2MsR0FDdEJELEVBQU1DLEtBT1ZELEVBQU1XLElBNkVWN0YsSUE5QkosU0FBYW1GLEdBQ1QsT0FBT0gsRUFBY0csSUE4QnJCSixRQVZKLFNBQWlCUyxHQUNiUCxFQUFlYyxLQUFLUCxJQVVwQkQsUUFBU0EsR0F0R2pCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE9wZW4gY2hhcmFjdGVyIHNlbGVjdCBtb2RhbCBvbiBsb2FkXG4kKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93JylcblxuLy8gRW5lbWllcyBvdXIgcGxheWVyIG11c3QgYXZvaWRcbmNsYXNzIEVuZW15IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDE1IC0gMTApICsgMTApOyAvLyBHaXZlIGVhY2ggZW5lbXkgYSByYW5kb20gc3BlZWRcbiAgICB0aGlzLnNwcml0ZSA9ICdpbWFnZXMvZW5lbXktYnVnLnBuZyc7XG4gIH1cblxuICAvLyBNdWx0aXBseSBhbnkgbW92ZW1lbnQgYnkgdGhlIGR0IHBhcmFtZXRlciB0byBlbnN1cmUgdGhlIGdhbWUgcnVucyBhdCB0aGUgc2FtZSBzcGVlZCBmb3JcbiAgLy8gYWxsIGNvbXB1dGVycy5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5zcGVlZCAqIGR0O1xuICB9XG5cbiAgLy8gRHJhdyBlbmVteSBvbiB0aGUgc2NyZWVuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICAvLyBDaGVjayBmb3IgZW5lbXkgcGxheWVyIGNvbGxpc2lvbnMgYW5kIHJlc3RhcnQgcGxheWVyIG9uIGNvbGxpc2lvblxuICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgaWYgKHRoaXMueCA+IChwbGF5ZXIueCAtIDY1KSAmJiB0aGlzLnggPCBwbGF5ZXIueCArIDgwICYmIHRoaXMueSA+PSAocGxheWVyLnkgLSA3MCkgJiYgdGhpcy55IDwgcGxheWVyLnkgKyA2NSkge1xuICAgIHBsYXllci5yZXNldFBsYXllcigpO1xuICAgICB9XG4gICB9XG5cbiAgLy8gSWYgZW5lbXkgb2ZmIHNjcmVlbiByZXNldCBwb3NpdGlvblxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy54ID4gNTE1KSB7XG4gICAgICB0aGlzLnggPSAtMjAwO31cbiAgfVxuXG4gIC8vIE1vdmUgZW5lbXkgYWNyb3NzIHNjcmVlblxuICBtb3ZlRW5lbXkoZW5lbXkpIHtcbiAgICBjb25zdCBlbmVteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gU3RvcCBlbmVtaWVzIG9uIGdhbWUgd2luXG4gICAgICBpZiAocGxheWVyLndpbkdhbWUgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteUludGVydmFsKTtcbiAgICAgIH1cbiAgICAgIGVuZW15LmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgZW5lbXkudXBkYXRlKCk7XG4gICAgICAvLyBSZXNldCBlbmVteSBpZiBpdCByZWFjaGVzIGVuZCBvZiBzY3JlZW5cbiAgICAgIGVuZW15LnJlc2V0KCk7IFxuICAgICAgZW5lbXkueCArPSBlbmVteS5zcGVlZDtcbiAgICAgIH0sIDc1KX07XG59IC8vIEVuZCBvZiBFbmVteSBjbGFzc1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSAyMDA7XG4gICAgdGhpcy55ID0gMzgwO1xuICAgIHRoaXMuc3BlZWQgPSAzMDtcbiAgICB0aGlzLnNwcml0ZTtcbiAgICB0aGlzLndpbkdhbWUgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIE11bHRpcGx5IGFueSBtb3ZlbWVudCBieSB0aGUgZHQgcGFyYW1ldGVyIHRvIGVuc3VyZSB0aGUgZ2FtZSBydW5zIGF0IHRoZSBzYW1lIHNwZWVkIGZvclxuICAvLyBhbGwgY29tcHV0ZXJzLlxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnNwZWVkICogZHQ7XG4gIH1cblxuICAvLyBMb2FkIHBsYXllciBvbiBzY3JlZW5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoUmVzb3VyY2VzLmdldCh0aGlzLnNwcml0ZSksIHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIC8vIFJlc2V0IHBsYXllciB0byBzdGFydCBwb3NpdGlvblxuICByZXNldFBsYXllcigpIHtcbiAgICB0aGlzLnggPSAyMDA7XG4gICAgdGhpcy55ID0gNDIwO1xuICB9XG5cbiAgLy8gSGFuZGxlIGdhbWUgd2luXG4gIHdpbigpIHtcbiAgICB0aGlzLndpbkdhbWUgPSB0cnVlO1xuICAgIGNvbnN0IHdpbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLW1lc3NhZ2UnKTsgLy8gRGlzcGxheSB3aW4gbWVzc2FnZVxuICAgIHdpbk1lc3NhZ2UuaW5uZXJIVE1MID0gJ1lvdSBXaW4hISEnXG4gICAgLy8gTW92ZSBzdGFyIG9mZiBzY3JlZW5cbiAgICBzdGFyLnkgPSAtMjAwO1xuXG4gICAgLy8gUmVzZW50IGdhbWUgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFBsYXllcigpXG4gICAgICAgIHN0YXJ0RW5lbWllcygpO1xuICAgICAgICB3aW5NZXNzYWdlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzdGFyLnkgPSAtNTtcbiAgICAgICAgdGhpcy53aW5HYW1lID0gZmFsc2U7XG4gICAgICB9LCAzMDAwKVxuICAgIH1cblxuICAvLyBFbmFibGUgcGxheWVyIG1vdmVtZW50IG9uIGtleXByZXNzXG4gIGhhbmRsZUlucHV0KGtleWNvZGUpIHtcbiAgICAvLyBTdG9wIHBsYXllciBpZiBnYW1lIGhhcyBiZWVuIHdvblxuICAgIGlmIChwbGF5ZXIud2luR2FtZSA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgLy8gUnVuIHdpbiBtZXRob2QgaWYgcGxheWVyIHJlYWNoZXMgc3RhclxuICAgIGlmICh0aGlzLnggPiAoc3Rhci54IC0gNzApICYmIHRoaXMueCA8IHN0YXIueCArIDYwICYmIHRoaXMueSA+PSAoc3Rhci55IC0gNTApICYmIHRoaXMueSA8IHN0YXIueSArIDUwKSB7XG4gICAgICB0aGlzLndpbigpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgLy8gQ2hlY2sga2V5Y29kZS4gTW92ZSBwbGF5ZXIgdGhlIGNvcnJlY3QgZGlyZWN0aW9uLiBTdG9wIG1vdmVtZW50IGlmIHBsYXllciByZWFjaGVzIGVkZ2Ugb2Ygc2NyZWVuLlxuICAgIHN3aXRjaCAoa2V5Y29kZSkge1xuICAgICAgY2FzZSAndXAnOlxuICAgICAgICBpZiAodGhpcy55ID4gLTEwKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkO31cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgaWYgKHRoaXMueSA8IGNhbnZhcy5oZWlnaHQgLSAxNzApIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7fVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgaWYgKHRoaXMueCA8IGNhbnZhcy53aWR0aCAtIDEwMCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBpZiAodGhpcy54ID4gLTEwKSB7XG4gICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO31cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRW5kIG9mIFBsYXllciBjbGFzc1xuXG4gIGNsYXNzIFN0YXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy54ID0gMjA1O1xuICAgICAgdGhpcy55ID0gLTU7XG4gICAgICB0aGlzLnNwcml0ZSA9ICdpbWFnZXMvc3Rhci5wbmcnO1xuICAgIH1cblxuICAgIC8vIExvYWQgc3RhciBvbiBzY3JlZW5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICB9IC8vIEVuZCBvZiBTdGFyIGNsYXNzXG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIHBsYXllciBzZWxlY3Rpb24uIFN0YXJ0IGdhbWUgb25jZSBwbGF5ZXIgc2VsZWN0ZWQuXG5jb25zdCBzZWxlY3RHaXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpcmwnKTtcbmNvbnN0IHNlbGVjdEJveSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3knKTtcblxubGV0IHNwcml0ZTtcblxuY29uc3Qgc2V0UGxheWVyR2lybCA9IHNwcml0ZSA9PiB7XG4gICAgcGxheWVyLnNwcml0ZSA9ICdpbWFnZXMvY2hhci1jYXQtZ2lybC5wbmcnO1xuICAgICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICBFbmdpbmUodGhpcyk7XG4gIH1cblxuY29uc3Qgc2V0UGxheWVyQm95ID0gc3ByaXRlID0+IHtcbiAgICBwbGF5ZXIuc3ByaXRlID0gJ2ltYWdlcy9jaGFyLWJveS5wbmcnO1xuICAgICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICBFbmdpbmUodGhpcyk7XG4gIH1cblxuc2VsZWN0R2lybC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFBsYXllckdpcmwpO1xuc2VsZWN0Qm95LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0UGxheWVyQm95KTtcblxuLy8gaW5zdGFudGlhdGUgYWxsIGVuZW15LCBwbGF5ZXIsIGFuZCBzdGFyIG9iamVjdHMsIGFuZCBwbGFjZSBhbGwgZW5lbWllcyBpbiBhcnJheSBjYWxsZWQgYWxsRW5lbWllc1xuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3Qgc3RhciA9IG5ldyBTdGFyKCk7XG5jb25zdCBlbmVteTEgPSBuZXcgRW5lbXkoLTEwLCA2MCk7XG5jb25zdCBlbmVteTIgPSBuZXcgRW5lbXkoLTEwLCAxNDApO1xuY29uc3QgZW5lbXkzID0gbmV3IEVuZW15KC0xMCwgMjIwKTtcbmNvbnN0IGVuZW15NCA9IG5ldyBFbmVteSgtNTAwLCA2MCk7XG5jb25zdCBlbmVteTUgPSBuZXcgRW5lbXkoLTUwMCwgMTQwKTtcbmNvbnN0IGVuZW15NiA9IG5ldyBFbmVteSgtNTAwLCAyMjApO1xuY29uc3QgYWxsRW5lbWllcyA9IFtlbmVteTEsIGVuZW15MiwgZW5lbXkzLCBlbmVteTQsIGVuZW15NSwgZW5lbXk2XTtcblxuLy8gTW92ZSBlbmVtaWVzIGF0IHZhcnlpbmcgc3BlZWQgYWNjcm9zcyBzY3JlZW5cbmNvbnN0IHN0YXJ0RW5lbWllcyA9ICgpID0+IHtcbiAgZm9yIChlbmVteSBvZiBhbGxFbmVtaWVzKSB7XG4gICAgZW5lbXkubW92ZUVuZW15KGVuZW15KTtcbiAgfTtcbn1cbnN0YXJ0RW5lbWllcygpO1xuXG4vLyBMaXN0ZW4gZm9yIGtleSBwcmVzc2VzIGFuZCBzZW5kIHRoZSBrZXlzIHRvIFBsYXllci5oYW5kbGVJbnB1dCgpIG1ldGhvZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgdmFyIGFsbG93ZWRLZXlzID0ge1xuICAgIDM3OiBcImxlZnRcIixcbiAgICAzODogXCJ1cFwiLFxuICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgNDA6IFwiZG93blwiXG4gIH07XG5cbiAgcGxheWVyLmhhbmRsZUlucHV0KGFsbG93ZWRLZXlzW2Uua2V5Q29kZV0pO1xufSk7XG4iLCIvKiBFbmdpbmUuanNcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyB0aGUgZ2FtZSBsb29wIGZ1bmN0aW9uYWxpdHkgKHVwZGF0ZSBlbnRpdGllcyBhbmQgcmVuZGVyKSxcbiAqIGRyYXdzIHRoZSBpbml0aWFsIGdhbWUgYm9hcmQgb24gdGhlIHNjcmVlbiwgYW5kIHRoZW4gY2FsbHMgdGhlIHVwZGF0ZSBhbmRcbiAqIHJlbmRlciBtZXRob2RzIG9uIHlvdXIgcGxheWVyIGFuZCBlbmVteSBvYmplY3RzIChkZWZpbmVkIGluIHlvdXIgYXBwLmpzKS5cbiAqXG4gKiBBIGdhbWUgZW5naW5lIHdvcmtzIGJ5IGRyYXdpbmcgdGhlIGVudGlyZSBnYW1lIHNjcmVlbiBvdmVyIGFuZCBvdmVyLCBraW5kIG9mXG4gKiBsaWtlIGEgZmxpcGJvb2sgeW91IG1heSBoYXZlIGNyZWF0ZWQgYXMgYSBraWQuIFdoZW4geW91ciBwbGF5ZXIgbW92ZXMgYWNyb3NzXG4gKiB0aGUgc2NyZWVuLCBpdCBtYXkgbG9vayBsaWtlIGp1c3QgdGhhdCBpbWFnZS9jaGFyYWN0ZXIgaXMgbW92aW5nIG9yIGJlaW5nXG4gKiBkcmF3biBidXQgdGhhdCBpcyBub3QgdGhlIGNhc2UuIFdoYXQncyByZWFsbHkgaGFwcGVuaW5nIGlzIHRoZSBlbnRpcmUgXCJzY2VuZVwiXG4gKiBpcyBiZWluZyBkcmF3biBvdmVyIGFuZCBvdmVyLCBwcmVzZW50aW5nIHRoZSBpbGx1c2lvbiBvZiBhbmltYXRpb24uXG4gKlxuICogVGhpcyBlbmdpbmUgbWFrZXMgdGhlIGNhbnZhcycgY29udGV4dCAoY3R4KSBvYmplY3QgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIG1ha2VcbiAqIHdyaXRpbmcgYXBwLmpzIGEgbGl0dGxlIHNpbXBsZXIgdG8gd29yayB3aXRoLlxuICovXG5cbnZhciBFbmdpbmUgPSAoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgLyogUHJlZGVmaW5lIHRoZSB2YXJpYWJsZXMgd2UnbGwgYmUgdXNpbmcgd2l0aGluIHRoaXMgc2NvcGUsXG4gICAgICogY3JlYXRlIHRoZSBjYW52YXMgZWxlbWVudCwgZ3JhYiB0aGUgMkQgY29udGV4dCBmb3IgdGhhdCBjYW52YXNcbiAgICAgKiBzZXQgdGhlIGNhbnZhcyBlbGVtZW50cyBoZWlnaHQvd2lkdGggYW5kIGFkZCBpdCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQsXG4gICAgICAgIHdpbiA9IGdsb2JhbC53aW5kb3csXG4gICAgICAgIGNhbnZhcyA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICAgIGxhc3RUaW1lO1xuXG4gICAgY2FudmFzLndpZHRoID0gNTA1O1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDY7XG4gICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIC8qIFRoaXMgZnVuY3Rpb24gc2VydmVzIGFzIHRoZSBraWNrb2ZmIHBvaW50IGZvciB0aGUgZ2FtZSBsb29wIGl0c2VsZlxuICAgICAqIGFuZCBoYW5kbGVzIHByb3Blcmx5IGNhbGxpbmcgdGhlIHVwZGF0ZSBhbmQgcmVuZGVyIG1ldGhvZHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFpbigpIHtcbiAgICAgICAgLyogR2V0IG91ciB0aW1lIGRlbHRhIGluZm9ybWF0aW9uIHdoaWNoIGlzIHJlcXVpcmVkIGlmIHlvdXIgZ2FtZVxuICAgICAgICAgKiByZXF1aXJlcyBzbW9vdGggYW5pbWF0aW9uLiBCZWNhdXNlIGV2ZXJ5b25lJ3MgY29tcHV0ZXIgcHJvY2Vzc2VzXG4gICAgICAgICAqIGluc3RydWN0aW9ucyBhdCBkaWZmZXJlbnQgc3BlZWRzIHdlIG5lZWQgYSBjb25zdGFudCB2YWx1ZSB0aGF0XG4gICAgICAgICAqIHdvdWxkIGJlIHRoZSBzYW1lIGZvciBldmVyeW9uZSAocmVnYXJkbGVzcyBvZiBob3cgZmFzdCB0aGVpclxuICAgICAgICAgKiBjb21wdXRlciBpcykgLSBodXJyYXkgdGltZSFcbiAgICAgICAgICovXG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpLFxuICAgICAgICAgICAgZHQgPSAobm93IC0gbGFzdFRpbWUpIC8gMTAwMC4wO1xuXG4gICAgICAgIC8qIENhbGwgb3VyIHVwZGF0ZS9yZW5kZXIgZnVuY3Rpb25zLCBwYXNzIGFsb25nIHRoZSB0aW1lIGRlbHRhIHRvXG4gICAgICAgICAqIG91ciB1cGRhdGUgZnVuY3Rpb24gc2luY2UgaXQgbWF5IGJlIHVzZWQgZm9yIHNtb290aCBhbmltYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGUoZHQpO1xuICAgICAgICByZW5kZXIoKTtcblxuICAgICAgICAvKiBTZXQgb3VyIGxhc3RUaW1lIHZhcmlhYmxlIHdoaWNoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0aW1lIGRlbHRhXG4gICAgICAgICAqIGZvciB0aGUgbmV4dCB0aW1lIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdFRpbWUgPSBub3c7XG5cbiAgICAgICAgLyogVXNlIHRoZSBicm93c2VyJ3MgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uIHRvIGNhbGwgdGhpc1xuICAgICAgICAgKiBmdW5jdGlvbiBhZ2FpbiBhcyBzb29uIGFzIHRoZSBicm93c2VyIGlzIGFibGUgdG8gZHJhdyBhbm90aGVyIGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZSBpbml0aWFsIHNldHVwIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgb25jZSxcbiAgICAgKiBwYXJ0aWN1bGFybHkgc2V0dGluZyB0aGUgbGFzdFRpbWUgdmFyaWFibGUgdGhhdCBpcyByZXF1aXJlZCBmb3IgdGhlXG4gICAgICogZ2FtZSBsb29wLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbWFpbigpO1xuICAgIH1cblxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IG1haW4gKG91ciBnYW1lIGxvb3ApIGFuZCBpdHNlbGYgY2FsbHMgYWxsXG4gICAgICogb2YgdGhlIGZ1bmN0aW9ucyB3aGljaCBtYXkgbmVlZCB0byB1cGRhdGUgZW50aXR5J3MgZGF0YS4gQmFzZWQgb24gaG93XG4gICAgICogeW91IGltcGxlbWVudCB5b3VyIGNvbGxpc2lvbiBkZXRlY3Rpb24gKHdoZW4gdHdvIGVudGl0aWVzIG9jY3VweSB0aGVcbiAgICAgKiBzYW1lIHNwYWNlLCBmb3IgaW5zdGFuY2Ugd2hlbiB5b3VyIGNoYXJhY3RlciBzaG91bGQgZGllKSwgeW91IG1heSBmaW5kXG4gICAgICogdGhlIG5lZWQgdG8gYWRkIGFuIGFkZGl0aW9uYWwgZnVuY3Rpb24gY2FsbCBoZXJlLiBGb3Igbm93LCB3ZSd2ZSBsZWZ0XG4gICAgICogaXQgY29tbWVudGVkIG91dCAtIHlvdSBtYXkgb3IgbWF5IG5vdCB3YW50IHRvIGltcGxlbWVudCB0aGlzXG4gICAgICogZnVuY3Rpb25hbGl0eSB0aGlzIHdheSAoeW91IGNvdWxkIGp1c3QgaW1wbGVtZW50IGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAgKiBvbiB0aGUgZW50aXRpZXMgdGhlbXNlbHZlcyB3aXRoaW4geW91ciBhcHAuanMgZmlsZSkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlKGR0LCBlbmVteSkge1xuICAgICAgICB1cGRhdGVFbnRpdGllcyhkdCk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIHVwZGF0ZSBmdW5jdGlvbiBhbmQgbG9vcHMgdGhyb3VnaCBhbGwgb2YgdGhlXG4gICAgICogb2JqZWN0cyB3aXRoaW4geW91ciBhbGxFbmVtaWVzIGFycmF5IGFzIGRlZmluZWQgaW4gYXBwLmpzIGFuZCBjYWxsc1xuICAgICAqIHRoZWlyIHVwZGF0ZSgpIG1ldGhvZHMuIEl0IHdpbGwgdGhlbiBjYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gZm9yIHlvdXJcbiAgICAgKiBwbGF5ZXIgb2JqZWN0LiBUaGVzZSB1cGRhdGUgbWV0aG9kcyBzaG91bGQgZm9jdXMgcHVyZWx5IG9uIHVwZGF0aW5nXG4gICAgICogdGhlIGRhdGEvcHJvcGVydGllcyByZWxhdGVkIHRvIHRoZSBvYmplY3QuIERvIHlvdXIgZHJhd2luZyBpbiB5b3VyXG4gICAgICogcmVuZGVyIG1ldGhvZHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlRW50aXRpZXMoZHQpIHtcbiAgICAgICAgYWxsRW5lbWllcy5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICAgICAgICBlbmVteS51cGRhdGUoZHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGx5IGRyYXdzIHRoZSBcImdhbWUgbGV2ZWxcIiwgaXQgd2lsbCB0aGVuIGNhbGxcbiAgICAgKiB0aGUgcmVuZGVyRW50aXRpZXMgZnVuY3Rpb24uIFJlbWVtYmVyLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBldmVyeVxuICAgICAqIGdhbWUgdGljayAob3IgbG9vcCBvZiB0aGUgZ2FtZSBlbmdpbmUpIGJlY2F1c2UgdGhhdCdzIGhvdyBnYW1lcyB3b3JrIC1cbiAgICAgKiB0aGV5IGFyZSBmbGlwYm9va3MgY3JlYXRpbmcgdGhlIGlsbHVzaW9uIG9mIGFuaW1hdGlvbiBidXQgaW4gcmVhbGl0eVxuICAgICAqIHRoZXkgYXJlIGp1c3QgZHJhd2luZyB0aGUgZW50aXJlIHNjcmVlbiBvdmVyIGFuZCBvdmVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgLyogVGhpcyBhcnJheSBob2xkcyB0aGUgcmVsYXRpdmUgVVJMIHRvIHRoZSBpbWFnZSB1c2VkXG4gICAgICAgICAqIGZvciB0aGF0IHBhcnRpY3VsYXIgcm93IG9mIHRoZSBnYW1lIGxldmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHJvd0ltYWdlcyA9IFtcbiAgICAgICAgICAgICAgICAnaW1hZ2VzL3dhdGVyLWJsb2NrLnBuZycsICAgLy8gVG9wIHJvdyBpcyB3YXRlclxuICAgICAgICAgICAgICAgICdpbWFnZXMvc3RvbmUtYmxvY2sucG5nJywgICAvLyBSb3cgMSBvZiAzIG9mIHN0b25lXG4gICAgICAgICAgICAgICAgJ2ltYWdlcy9zdG9uZS1ibG9jay5wbmcnLCAgIC8vIFJvdyAyIG9mIDMgb2Ygc3RvbmVcbiAgICAgICAgICAgICAgICAnaW1hZ2VzL3N0b25lLWJsb2NrLnBuZycsICAgLy8gUm93IDMgb2YgMyBvZiBzdG9uZVxuICAgICAgICAgICAgICAgICdpbWFnZXMvZ3Jhc3MtYmxvY2sucG5nJywgICAvLyBSb3cgMSBvZiAyIG9mIGdyYXNzXG4gICAgICAgICAgICAgICAgJ2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnICAgIC8vIFJvdyAyIG9mIDIgb2YgZ3Jhc3NcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBudW1Sb3dzID0gNixcbiAgICAgICAgICAgIG51bUNvbHMgPSA1LFxuICAgICAgICAgICAgcm93LCBjb2w7XG5cbiAgICAgICAgLy8gQmVmb3JlIGRyYXdpbmcsIGNsZWFyIGV4aXN0aW5nIGNhbnZhc1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodClcblxuICAgICAgICAvKiBMb29wIHRocm91Z2ggdGhlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zIHdlJ3ZlIGRlZmluZWQgYWJvdmVcbiAgICAgICAgICogYW5kLCB1c2luZyB0aGUgcm93SW1hZ2VzIGFycmF5LCBkcmF3IHRoZSBjb3JyZWN0IGltYWdlIGZvciB0aGF0XG4gICAgICAgICAqIHBvcnRpb24gb2YgdGhlIFwiZ3JpZFwiXG4gICAgICAgICAqL1xuICAgICAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IG51bVJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IG51bUNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgLyogVGhlIGRyYXdJbWFnZSBmdW5jdGlvbiBvZiB0aGUgY2FudmFzJyBjb250ZXh0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgKiByZXF1aXJlcyAzIHBhcmFtZXRlcnM6IHRoZSBpbWFnZSB0byBkcmF3LCB0aGUgeCBjb29yZGluYXRlXG4gICAgICAgICAgICAgICAgICogdG8gc3RhcnQgZHJhd2luZyBhbmQgdGhlIHkgY29vcmRpbmF0ZSB0byBzdGFydCBkcmF3aW5nLlxuICAgICAgICAgICAgICAgICAqIFdlJ3JlIHVzaW5nIG91ciBSZXNvdXJjZXMgaGVscGVycyB0byByZWZlciB0byBvdXIgaW1hZ2VzXG4gICAgICAgICAgICAgICAgICogc28gdGhhdCB3ZSBnZXQgdGhlIGJlbmVmaXRzIG9mIGNhY2hpbmcgdGhlc2UgaW1hZ2VzLCBzaW5jZVxuICAgICAgICAgICAgICAgICAqIHdlJ3JlIHVzaW5nIHRoZW0gb3ZlciBhbmQgb3Zlci5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQocm93SW1hZ2VzW3Jvd10pLCBjb2wgKiAxMDEsIHJvdyAqIDgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlckVudGl0aWVzKCk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgdGhlIHJlbmRlciBmdW5jdGlvbiBhbmQgaXMgY2FsbGVkIG9uIGVhY2ggZ2FtZVxuICAgICAqIHRpY2suIEl0cyBwdXJwb3NlIGlzIHRvIHRoZW4gY2FsbCB0aGUgcmVuZGVyIGZ1bmN0aW9ucyB5b3UgaGF2ZSBkZWZpbmVkXG4gICAgICogb24geW91ciBlbmVteSBhbmQgcGxheWVyIGVudGl0aWVzIHdpdGhpbiBhcHAuanNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW5kZXJFbnRpdGllcygpIHtcbiAgICAgICAgLyogTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgb2JqZWN0cyB3aXRoaW4gdGhlIGFsbEVuZW1pZXMgYXJyYXkgYW5kIGNhbGxcbiAgICAgICAgICogdGhlIHJlbmRlciBmdW5jdGlvbiB5b3UgaGF2ZSBkZWZpbmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgYWxsRW5lbWllcy5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICAgICAgICBlbmVteS5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGxheWVyLnJlbmRlcigpO1xuICAgICAgICBzdGFyLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qIFRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nIGJ1dCBpdCBjb3VsZCBoYXZlIGJlZW4gYSBnb29kIHBsYWNlIHRvXG4gICAgICogaGFuZGxlIGdhbWUgcmVzZXQgc3RhdGVzIC0gbWF5YmUgYSBuZXcgZ2FtZSBtZW51IG9yIGEgZ2FtZSBvdmVyIHNjcmVlblxuICAgICAqIHRob3NlIHNvcnRzIG9mIHRoaW5ncy4gSXQncyBvbmx5IGNhbGxlZCBvbmNlIGJ5IHRoZSBpbml0KCkgbWV0aG9kLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIH1cblxuICAgIC8qIEdvIGFoZWFkIGFuZCBsb2FkIGFsbCBvZiB0aGUgaW1hZ2VzIHdlIGtub3cgd2UncmUgZ29pbmcgdG8gbmVlZCB0b1xuICAgICAqIGRyYXcgb3VyIGdhbWUgbGV2ZWwuIFRoZW4gc2V0IGluaXQgYXMgdGhlIGNhbGxiYWNrIG1ldGhvZCwgc28gdGhhdCB3aGVuXG4gICAgICogYWxsIG9mIHRoZXNlIGltYWdlcyBhcmUgcHJvcGVybHkgbG9hZGVkIG91ciBnYW1lIHdpbGwgc3RhcnQuXG4gICAgICovXG4gICAgUmVzb3VyY2VzLmxvYWQoW1xuICAgICAgICAnaW1hZ2VzL3N0b25lLWJsb2NrLnBuZycsXG4gICAgICAgICdpbWFnZXMvd2F0ZXItYmxvY2sucG5nJyxcbiAgICAgICAgJ2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnLFxuICAgICAgICAnaW1hZ2VzL2VuZW15LWJ1Zy5wbmcnLFxuICAgICAgICAnaW1hZ2VzL2NoYXItYm95LnBuZycsXG4gICAgICAgICdpbWFnZXMvY2hhci1jYXQtZ2lybC5wbmcnLFxuICAgICAgICAnaW1hZ2VzL3N0YXIucG5nJ1xuICAgIF0pO1xuICAgIFJlc291cmNlcy5vblJlYWR5KGluaXQpO1xuXG4gICAgLyogQXNzaWduIHRoZSBjYW52YXMnIGNvbnRleHQgb2JqZWN0IHRvIHRoZSBnbG9iYWwgdmFyaWFibGUgKHRoZSB3aW5kb3dcbiAgICAgKiBvYmplY3Qgd2hlbiBydW4gaW4gYSBicm93c2VyKSBzbyB0aGF0IGRldmVsb3BlcnMgY2FuIHVzZSBpdCBtb3JlIGVhc2lseVxuICAgICAqIGZyb20gd2l0aGluIHRoZWlyIGFwcC5qcyBmaWxlcy5cbiAgICAgKi9cbiAgICBnbG9iYWwuY3R4ID0gY3R4O1xuICAgIGdsb2JhbC5jYW52YXMgPSBjYW52YXM7XG59KTtcbiIsIi8qIFJlc291cmNlcy5qc1xuICogVGhpcyBpcyBzaW1wbHkgYW4gaW1hZ2UgbG9hZGluZyB1dGlsaXR5LiBJdCBlYXNlcyB0aGUgcHJvY2VzcyBvZiBsb2FkaW5nXG4gKiBpbWFnZSBmaWxlcyBzbyB0aGF0IHRoZXkgY2FuIGJlIHVzZWQgd2l0aGluIHlvdXIgZ2FtZS4gSXQgYWxzbyBpbmNsdWRlc1xuICogYSBzaW1wbGUgXCJjYWNoaW5nXCIgbGF5ZXIgc28gaXQgd2lsbCByZXVzZSBjYWNoZWQgaW1hZ2VzIGlmIHlvdSBhdHRlbXB0XG4gKiB0byBsb2FkIHRoZSBzYW1lIGltYWdlIG11bHRpcGxlIHRpbWVzLlxuICovXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc291cmNlQ2FjaGUgPSB7fTtcbiAgICB2YXIgbG9hZGluZyA9IFtdO1xuICAgIHZhciByZWFkeUNhbGxiYWNrcyA9IFtdO1xuXG4gICAgLyogVGhpcyBpcyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBpbWFnZSBsb2FkaW5nIGZ1bmN0aW9uLiBJdCBhY2NlcHRzXG4gICAgICogYW4gYXJyYXkgb2Ygc3RyaW5ncyBwb2ludGluZyB0byBpbWFnZSBmaWxlcyBvciBhIHN0cmluZyBmb3IgYSBzaW5nbGVcbiAgICAgKiBpbWFnZS4gSXQgd2lsbCB0aGVuIGNhbGwgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGluZyBmdW5jdGlvbiBhY2NvcmRpbmdseS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb2FkKHVybE9yQXJyKSB7XG4gICAgICAgIGlmKHVybE9yQXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIC8qIElmIHRoZSBkZXZlbG9wZXIgcGFzc2VkIGluIGFuIGFycmF5IG9mIGltYWdlc1xuICAgICAgICAgICAgICogbG9vcCB0aHJvdWdoIGVhY2ggdmFsdWUgYW5kIGNhbGwgb3VyIGltYWdlXG4gICAgICAgICAgICAgKiBsb2FkZXIgb24gdGhhdCBpbWFnZSBmaWxlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVybE9yQXJyLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgX2xvYWQodXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogVGhlIGRldmVsb3BlciBkaWQgbm90IHBhc3MgYW4gYXJyYXkgdG8gdGhpcyBmdW5jdGlvbixcbiAgICAgICAgICAgICAqIGFzc3VtZSB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgYW5kIGNhbGwgb3VyIGltYWdlIGxvYWRlclxuICAgICAgICAgICAgICogZGlyZWN0bHkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF9sb2FkKHVybE9yQXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIFRoaXMgaXMgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGVyIGZ1bmN0aW9uLCBpdCBpc1xuICAgICAqIGNhbGxlZCBieSB0aGUgcHVibGljIGltYWdlIGxvYWRlciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbG9hZCh1cmwpIHtcbiAgICAgICAgaWYocmVzb3VyY2VDYWNoZVt1cmxdKSB7XG4gICAgICAgICAgICAvKiBJZiB0aGlzIFVSTCBoYXMgYmVlbiBwcmV2aW91c2x5IGxvYWRlZCBpdCB3aWxsIGV4aXN0IHdpdGhpblxuICAgICAgICAgICAgICogb3VyIHJlc291cmNlQ2FjaGUgYXJyYXkuIEp1c3QgcmV0dXJuIHRoYXQgaW1hZ2UgcmF0aGVyXG4gICAgICAgICAgICAgKiByZS1sb2FkaW5nIHRoZSBpbWFnZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlQ2FjaGVbdXJsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIFRoaXMgVVJMIGhhcyBub3QgYmVlbiBwcmV2aW91c2x5IGxvYWRlZCBhbmQgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAqIHdpdGhpbiBvdXIgY2FjaGU7IHdlJ2xsIG5lZWQgdG8gbG9hZCB0aGlzIGltYWdlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLyogT25jZSBvdXIgaW1hZ2UgaGFzIHByb3Blcmx5IGxvYWRlZCwgYWRkIGl0IHRvIG91ciBjYWNoZVxuICAgICAgICAgICAgICAgICAqIHNvIHRoYXQgd2UgY2FuIHNpbXBseSByZXR1cm4gdGhpcyBpbWFnZSBpZiB0aGUgZGV2ZWxvcGVyXG4gICAgICAgICAgICAgICAgICogYXR0ZW1wdHMgdG8gbG9hZCB0aGlzIGZpbGUgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXNvdXJjZUNhY2hlW3VybF0gPSBpbWc7XG5cbiAgICAgICAgICAgICAgICAvKiBPbmNlIHRoZSBpbWFnZSBpcyBhY3R1YWxseSBsb2FkZWQgYW5kIHByb3Blcmx5IGNhY2hlZCxcbiAgICAgICAgICAgICAgICAgKiBjYWxsIGFsbCBvZiB0aGUgb25SZWFkeSgpIGNhbGxiYWNrcyB3ZSBoYXZlIGRlZmluZWQuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYoaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oZnVuYykgeyBmdW5jKCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qIFNldCB0aGUgaW5pdGlhbCBjYWNoZSB2YWx1ZSB0byBmYWxzZSwgdGhpcyB3aWxsIGNoYW5nZSB3aGVuXG4gICAgICAgICAgICAgKiB0aGUgaW1hZ2UncyBvbmxvYWQgZXZlbnQgaGFuZGxlciBpcyBjYWxsZWQuIEZpbmFsbHksIHBvaW50XG4gICAgICAgICAgICAgKiB0aGUgaW1hZ2UncyBzcmMgYXR0cmlidXRlIHRvIHRoZSBwYXNzZWQgaW4gVVJMLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXNvdXJjZUNhY2hlW3VybF0gPSBmYWxzZTtcbiAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBUaGlzIGlzIHVzZWQgYnkgZGV2ZWxvcGVycyB0byBncmFiIHJlZmVyZW5jZXMgdG8gaW1hZ2VzIHRoZXkga25vd1xuICAgICAqIGhhdmUgYmVlbiBwcmV2aW91c2x5IGxvYWRlZC4gSWYgYW4gaW1hZ2UgaXMgY2FjaGVkLCB0aGlzIGZ1bmN0aW9uc1xuICAgICAqIHRoZSBzYW1lIGFzIGNhbGxpbmcgbG9hZCgpIG9uIHRoYXQgVVJMLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlQ2FjaGVbdXJsXTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgYWxsIG9mIHRoZSBpbWFnZXMgdGhhdCBoYXZlIGJlZW4gcmVxdWVzdGVkXG4gICAgICogZm9yIGxvYWRpbmcgaGF2ZSBpbiBmYWN0IGJlZW4gcHJvcGVybHkgbG9hZGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gICAgICAgIHZhciByZWFkeSA9IHRydWU7XG4gICAgICAgIGZvcih2YXIgayBpbiByZXNvdXJjZUNhY2hlKSB7XG4gICAgICAgICAgICBpZihyZXNvdXJjZUNhY2hlLmhhc093blByb3BlcnR5KGspICYmXG4gICAgICAgICAgICAgICAhcmVzb3VyY2VDYWNoZVtrXSkge1xuICAgICAgICAgICAgICAgIHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH1cblxuICAgIC8qIFRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgYSBmdW5jdGlvbiB0byB0aGUgY2FsbGJhY2sgc3RhY2sgdGhhdCBpcyBjYWxsZWRcbiAgICAgKiB3aGVuIGFsbCByZXF1ZXN0ZWQgaW1hZ2VzIGFyZSBwcm9wZXJseSBsb2FkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25SZWFkeShmdW5jKSB7XG4gICAgICAgIHJlYWR5Q2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBvYmplY3QgZGVmaW5lcyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvXG4gICAgICogZGV2ZWxvcGVycyBieSBjcmVhdGluZyBhIGdsb2JhbCBSZXNvdXJjZXMgb2JqZWN0LlxuICAgICAqL1xuICAgIHdpbmRvdy5SZXNvdXJjZXMgPSB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIGdldDogZ2V0LFxuICAgICAgICBvblJlYWR5OiBvblJlYWR5LFxuICAgICAgICBpc1JlYWR5OiBpc1JlYWR5XG4gICAgfTtcbn0pKCk7XG4iXX0=