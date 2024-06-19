n.d(t, {
  U: function() {
    return p
  },
  Z: function() {
    return g
  }
}), n(653041);
var l = n(392711),
  i = n.n(l),
  s = n(772848),
  a = n(652874),
  r = n(125268),
  o = n(673125),
  c = n(292793),
  u = n(88315),
  d = n(199766),
  h = n(813900);
let m = {
    X_OFFSET: 2 * h.qh,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: -1,
    Y_SPEED_MAX: -5,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: h.qh / 2,
    SIZE_MAX: h.qh
  },
  p = (0, a.Z)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function E(e, t) {
  var n;
  i()(null !== (n = p.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t)
}

function g(e) {
  var t, n, l, a;
  let {
    emojiHose: g,
    context: f,
    canvasWidth: C,
    canvasHeight: _,
    fallbackColor: I,
    outlineColorDark: x,
    outlineColorLight: T,
    streamerId: N,
    deadDrawables: Z
  } = e;
  f.save();
  let S = o.Z.getEmojiImage(null !== (n = null !== (t = g.emojiId) && void 0 !== t ? t : g.emojiName) && void 0 !== n ? n : ""),
    v = (0, u.np)(g.x, C),
    A = (0, u.np)(g.y, _),
    {
      outlineColor: M
    } = (0, u.bg)(g.userId, x, T, I);
  if (E(g, e => {
      var t, n;
      return t = g, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && p.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e)))
    }), ! function(e, t, n) {
      var l;
      let a = null !== (l = p.getState().lastSpawned[e.id]) && void 0 !== l ? l : 0,
        r = Date.now();
      if (!(a + 100 > r) && e.state !== c.f.STOP && !!(.8 >= Math.random() || a + 300 < r)) p.setState(l => {
        var a, r, o;
        let c = null !== (a = l.particles[e.id]) && void 0 !== a ? a : {},
          u = i().random(1, 2);
        for (let e = 0; e < u; e++) {
          ;
          let e = (r = t, o = n, {
            id: (0, s.Z)(),
            x: r + i().random(-m.X_OFFSET, m.X_OFFSET),
            y: o + i().random(-m.Y_OFFSET, m.Y_OFFSET),
            xSpeed: i().random(-m.X_SPEED, m.X_SPEED),
            ySpeed: i().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
            opacity: m.OPACITY,
            opacitySpeed: i().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
            size: i().random(m.SIZE_MIN, m.SIZE_MAX)
          });
          c[e.id] = e
        }
        return l.particles[e.id] = c, l.lastSpawned[e.id] = Date.now(), l
      })
    }(g, v, A), (0, d.I)(f, v, A, M, h.q2), (0, d.T)(f, v, A, g.userId), E(g, e => (function(e, t, n) {
      if (null == t) return;
      let l = n.size * window.devicePixelRatio,
        i = n.x - l / 2 * window.devicePixelRatio,
        s = n.y - 1.2 * l * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, l / 2 + i, l / 2 + s, l, l)
    })(f, S, e)), g.lastUpdatedAt + h.FO < Date.now() && (0, r.ZZ)(N, g), g.state === c.f.STOP && (l = g, !(Object.keys(null !== (a = p.getState().particles[l.id]) && void 0 !== a ? a : {}).length > 0))) Z.push(g);
  f.restore()
}