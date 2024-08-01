n.d(t, {
  U: function() {
return p;
  },
  Z: function() {
return f;
  }
}), n(653041);
var i = n(392711),
  a = n.n(i),
  s = n(772848),
  l = n(652874),
  r = n(125268),
  o = n(673125),
  c = n(292793),
  u = n(88315),
  d = n(199766),
  h = n(813900);
let m = {
X_OFFSET: 2 * h.qh,
Y_OFFSET: 25,
X_SPEED: 0.5,
Y_SPEED_MIN: -1,
Y_SPEED_MAX: -5,
OPACITY: 1,
OPACITY_SPEED_MIN: 0.01,
OPACITY_SPEED_MAX: 0.05,
SIZE_MIN: h.qh / 2,
SIZE_MAX: h.qh
  },
  p = (0, l.Z)(() => ({
particles: {},
lastSpawned: {}
  }));

function _(e, t) {
  var n;
  a()(null !== (n = p.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}

function f(e) {
  var t, n, i, l;
  let {
emojiHose: f,
context: E,
canvasWidth: C,
canvasHeight: g,
fallbackColor: I,
outlineColorDark: x,
outlineColorLight: T,
streamerId: v,
deadDrawables: N
  } = e;
  E.save();
  let S = o.Z.getEmojiImage(null !== (n = null !== (t = f.emojiId) && void 0 !== t ? t : f.emojiName) && void 0 !== n ? n : ''),
Z = (0, u.np)(f.x, C),
A = (0, u.np)(f.y, g),
{
  outlineColor: M
} = (0, u.bg)(f.userId, x, T, I);
  if (_(f, e => {
  var t, n;
  return t = f, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && p.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e)));
}), ! function(e, t, n) {
  var i;
  let l = null !== (i = p.getState().lastSpawned[e.id]) && void 0 !== i ? i : 0,
    r = Date.now();
  if (!(l + 100 > r) && e.state !== c.f.STOP && !!(0.8 >= Math.random() || l + 300 < r))
    p.setState(i => {
      var l, r, o;
      let c = null !== (l = i.particles[e.id]) && void 0 !== l ? l : {},
        u = a().random(1, 2);
      for (let e = 0; e < u; e++) {
        ;
        let e = (r = t, o = n, {
          id: (0, s.Z)(),
          x: r + a().random(-m.X_OFFSET, m.X_OFFSET),
          y: o + a().random(-m.Y_OFFSET, m.Y_OFFSET),
          xSpeed: a().random(-m.X_SPEED, m.X_SPEED),
          ySpeed: a().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
          opacity: m.OPACITY,
          opacitySpeed: a().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
          size: a().random(m.SIZE_MIN, m.SIZE_MAX)
        });
        c[e.id] = e;
      }
      return i.particles[e.id] = c, i.lastSpawned[e.id] = Date.now(), i;
    });
}(f, Z, A), (0, d.I)(E, Z, A, M, h.q2), (0, d.T)(E, Z, A, f.userId), _(f, e => function(e, t, n) {
  if (null == t)
    return;
  let i = n.size * window.devicePixelRatio,
    a = n.x - i / 2 * window.devicePixelRatio,
    s = n.y - 1.2 * i * window.devicePixelRatio;
  e.globalAlpha = n.opacity, e.drawImage(t, i / 2 + a, i / 2 + s, i, i);
}(E, S, e)), f.lastUpdatedAt + h.FO < Date.now() && (0, r.ZZ)(v, f), f.state === c.f.STOP && (i = f, !(Object.keys(null !== (l = p.getState().particles[i.id]) && void 0 !== l ? l : {}).length > 0)))
N.push(f);
  E.restore();
}