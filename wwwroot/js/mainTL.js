var audio = new Audio("../video/bgmusic.mp3");
audio.play();

var tl = new TimelineLite()

// var tt = document.getElementsByClassName('.first')
// tt = tt.getElementsByTagName('h1')
// console.log('asdfasdf::',tt)

// TweenMax.from('#video#bgvid', 50.0, {'margin-top': '-100px'});
tl
.from('.first h1', 1.0, {y: -120, scale : 0.3, ease: Elastic.easeOut, })
.from('.first h2', 0.5, {opacity:0, y: 300}, 'main1')
.to('.first', 0.5, {opacity:0.25, y: -150}, '+=1','main2')

.from('.second h2', 0.5, {opacity:0, y: 200}, 'main3', '-=1.5')
.to('.first', 0.5, {opacity: 0.1}, 'main4')
.to('.second h2', 0.5, {top: '-50px'}, 'main5', '-=0.5')
.to('.first', 0.5, {opacity: 0}, '-= 0.5')


.to('.second', 0.5, {opacity:0.5}) // 顶部改革开放40年

.from('.third h2', 0.5, {opacity:0, x: -500}, 'third1', '-=0.5')
.from('.third h4', 1, {opacity:0, x: 500}, 'third2')
.from('.third h1', 0.5, {opacity:0, y: 200, scale:0.2}, 'third3')
.to('.third', 0.5, {opacity:0, y: 100, scale:0.85}, '+=2')

.from('.fourth h2', 0.5, {opacity:0, x: -500}, 'fourth1', '-=0.5')
.from('.fourth h4', 1, {opacity:0, x: 500}, 'fourth2')
// .from('.fourth h1', 0.5, {opacity:0, y: 20, scale:0.1, drawSVG:0}, 'fourth3')
  .staggerFrom('.fourth h1 b', 0.5, {opacity:0.01, scale:2}, 0.3, 'fourth3')

.to('.fourth', 0.5, {opacity:0, y: 100, scale:0.85}, '+=2')


.from('.fifth h2', 0.5, {opacity:0, x: 500}, 'fifth1')
.from('.fifth h4', 1, {opacity:0, y: -100}, 'fifth2')
.from('.fifth h1', 0.5, {opacity:0, y: 200, scale:0.2}, 'fifth3')
.to('.fifth', 0.5, {opacity:0, y: 100, scale:0.85}, '+=2')


.staggerFrom(['.sixth h2', '.sixth h4', '.sixth h1'], 0.5, {opacity:0, scale:0.1}, 0.5, 'sixth')
.to('.sixth', 0.5, {opacity:0, y: 100, scale:0.85}, '+=3')

.staggerFrom(['.sixth2 h2', '.sixth2 h4', '.sixth2 h1'], 0.5, {opacity:0, scale:3}, 0.5)
.to('.sixth2', 0.5, {opacity:0, y: 100, scale:0.85}, '+=3')

.staggerFrom(['.sixth3 h2', '.sixth3 h4', '.sixth3 h1'], 0.5, {opacity:0, scale:3}, 0.5)
.to('.sixth3', 0.5, {opacity:0, y: 100, scale:0.85}, '+=3')

.staggerFrom(['.sixth4 h2', '.sixth4 h4', '.sixth4 h1'], 0.5, {opacity:0, scale:3}, 0.5)
.to('.sixth4', 0.5, {opacity:0.2, y: 0, scale:0.75}, '+=3')

//全球第二大经济体
.from('.seventh h1', 0.5, {opacity:0, y: 200, scale:5}, 'seventh')
.to('.seventh h1', 0.5, {opacity:0.25, y: 0, scale:0.75}, '+=2')

.staggerTo(['.sixth4', '.seventh h1'], 0.2, {opacity:0, scale:0.5}, 0.2)

.staggerFrom('.seventh h2', 0.5, {opacity:0, y: 200, scale:5}, 0.5, 'seventh2')


//全部消失
  .to('.second h2', 0.5, {opacity:0, scale:0.5}, '+=3')
.staggerTo('.seventh h2', 0.3, {opacity:0, scale:0.5}, 0.2, '-= 0.5')


.from('.eighth h4', 1, {opacity:0, scale:5}, 'eighth')
.from('.eighth h5', 3, {opacity:0}, 'eighth2', '+=2.5')
.to('.eighth h5', 0.5, {opacity:0.8})
// .to('.first', 0.5, {opacity:0, y: -100}, 'main3')
// .to('.second', 0.5, {top: '300px'}, 'h2TOPos');

// tl.seek('third3')