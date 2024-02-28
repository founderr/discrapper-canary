"use strict";
n.r(t), n.d(t, {
  useEmojiHoseStore: function() {
    return m
  },
  default: function() {
    return E
  }
}), n("424973");
var l = n("917351"),
  a = n.n(l),
  s = n("748820"),
  i = n("308503"),
  r = n("760679"),
  u = n("242260"),
  o = n("315841"),
  d = n("52477"),
  c = n("357304"),
  f = n("827520");
let h = {
    X_OFFSET: 2 * f.EMOJI_HOSE_EMOJI_SIZE,
    Y_OFFSET: 25,
    X_SPEED: .5,
    Y_SPEED_MIN: -1,
    Y_SPEED_MAX: -5,
    OPACITY: 1,
    OPACITY_SPEED_MIN: .01,
    OPACITY_SPEED_MAX: .05,
    SIZE_MIN: f.EMOJI_HOSE_EMOJI_SIZE / 2,
    SIZE_MAX: f.EMOJI_HOSE_EMOJI_SIZE
  },
  m = (0, i.default)(() => ({
    particles: {},
    lastSpawned: {}
  }));

function p(e, t) {
  var n;
  a(null !== (n = m.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t)
}

function E(e) {
  var t, n, l, i;
  let {
    emojiHose: E,
    context: g,
    canvasWidth: C,
    canvasHeight: S,
    fallbackColor: _,
    outlineColorDark: I,
    outlineColorLight: T,
    streamerId: v,
    deadDrawables: x
  } = e;
  g.save();
  let N = u.default.getEmojiImage(null !== (n = null !== (t = E.emojiId) && void 0 !== t ? t : E.emojiName) && void 0 !== n ? n : ""),
    A = (0, d.normalizeCoordinate)(E.x, C),
    M = (0, d.normalizeCoordinate)(E.y, S),
    {
      outlineColor: R
    } = (0, d.getUserColors)(E.userId, I, T, _);
  if (p(E, e => {
      var t, n;
      return t = E, n = e, void(n.x += n.xSpeed * window.devicePixelRatio, n.y += n.ySpeed * window.devicePixelRatio, n.opacity -= n.opacitySpeed, n.opacity <= 0 && m.setState(e => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e)))
    }), ! function(e, t, n) {
      var l;
      let i = null !== (l = m.getState().lastSpawned[e.id]) && void 0 !== l ? l : 0,
        r = Date.now();
      if (!(i + 100 > r) && e.state !== o.EmojiHoseState.STOP)(.8 >= Math.random() || i + 300 < r) && m.setState(l => {
        var i, r, u;
        let o = null !== (i = l.particles[e.id]) && void 0 !== i ? i : {},
          d = a.random(1, 2);
        for (let e = 0; e < d; e++) {
          ;
          let e = (r = t, u = n, {
            id: (0, s.v4)(),
            x: r + a.random(-h.X_OFFSET, h.X_OFFSET),
            y: u + a.random(-h.Y_OFFSET, h.Y_OFFSET),
            xSpeed: a.random(-h.X_SPEED, h.X_SPEED),
            ySpeed: a.random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
            opacity: h.OPACITY,
            opacitySpeed: a.random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
            size: a.random(h.SIZE_MIN, h.SIZE_MAX)
          });
          o[e.id] = e
        }
        return l.particles[e.id] = o, l.lastSpawned[e.id] = Date.now(), l
      })
    }(E, A, M), (0, c.renderAvatarCursorOutline)(g, A, M, R, f.OUTLINE_WIDTH), (0, c.renderAvatarCursor)(g, A, M, E.userId), p(E, e => (function(e, t, n) {
      if (null == t) return;
      let l = n.size * window.devicePixelRatio,
        a = n.x - l / 2 * window.devicePixelRatio,
        s = n.y - 1.2 * l * window.devicePixelRatio;
      e.globalAlpha = n.opacity, e.drawImage(t, l / 2 + a, l / 2 + s, l, l)
    })(g, N, e)), E.lastUpdatedAt + f.EMOJI_HOSE_PING_DELAY < Date.now() && (0, r.stopRenderedEmojiHose)(v, E), E.state === o.EmojiHoseState.STOP && (l = E, !(Object.keys(null !== (i = m.getState().particles[l.id]) && void 0 !== i ? i : {}).length > 0))) x.push(E);
  g.restore()
}