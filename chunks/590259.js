t.d(s, {
  HV: function() {
return l;
  },
  Tp: function() {
return o;
  },
  Xv: function() {
return r;
  }
}), t(724458);
var n = t(392711),
  a = t(423891),
  i = t.n(a);
let r = async (e, s, t) => {
  var n;
  return {
src: e,
loop: !1,
loopDelay: 0,
duration: (n = await s.arrayBuffer(), i().decode(n).frames.reduce((e, s) => e + s.delay, 0)),
start: 0,
position: {
  x: 0,
  y: 0
},
zIndex: 100 + t,
height: 880,
width: 450,
name: s.name
  };
}, o = e => {
  let s = (0, n.cloneDeep)(e),
t = Math.floor(101 * Math.random()) + 150;
  return s.forEach(e => {
e.duration -= t;
  }), s;
}, l = function(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'json',
t = '\n[';
  return 'json' === s && e.forEach((e, s) => {
t += '\n              {\n                  "src": "file-'.concat(s, '.png",\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "height": ').concat(e.height, ',\n                  "width": ').concat(e.width, ',\n                  "zIndex": ').concat(e.zIndex, ',\n                  "loop": ').concat(e.loop, ',\n                  "loop_delay": ').concat(e.loopDelay, '\n              },\n          ');
  }), 'proto' === s && e.forEach((e, s) => {
t += '\n              ProfileEffectKeyFrame(\n                  src=\'file-'.concat(s, '.png\',\n                  loop=').concat(e.loop, ',\n                  width=').concat(e.width, ',\n                  height=').concat(e.height, ',\n                  duration=').concat(e.duration, ',\n                  start=').concat(e.start, ',\n                  loop_delay=').concat(e.loopDelay, ',\n                  position=Point(x=0, y=0),\n                  z_index=').concat(e.zIndex, ',\n              ),\n          ');
  }), t += '\n]';
};