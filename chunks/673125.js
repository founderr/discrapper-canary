n(653041), n(47120);
var l, i, s, a, r = n(442837),
  o = n(570140),
  c = n(633302),
  u = n(594174),
  d = n(176354),
  h = n(292793),
  m = n(88315),
  E = n(813900);
let p = {},
  g = {},
  f = {},
  C = !0,
  _ = null;

function I(e) {
  if (null == g[e]) {
    let t = u.default.getUser(e);
    if (null == t) return;
    let n = t.getAvatarURL(null, E.Ks),
      l = new Image;
    l.src = n, g[e] = l
  }
}
class x extends(l = r.ZP.Store) {
  get visibleOverlayCanvas() {
    return C
  }
  getDrawables(e) {
    return null != p[e] ? p[e] : []
  }
  getAvatarImage(e) {
    return g[e]
  }
  getEmojiImage(e) {
    return f[e]
  }
  getDrawMode() {
    return _
  }
}
a = "SharedCanvasStore", (s = "displayName") in(i = x) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a;
let T = new x(o.Z, {
  SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
    let {
      lineId: t,
      newPoints: n,
      userId: l,
      streamerId: i
    } = e, s = p[i];
    if (null == s) p[i] = [{
      type: h.W.LINE,
      id: t,
      userId: l,
      points: n
    }];
    else {
      let e = s.find(e => e.id === t);
      null == e ? s.push({
        type: h.W.LINE,
        id: t,
        userId: l,
        points: n
      }) : (0, m.P7)(e) && e.points.push(...n)
    }
    I(l)
  },
  SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
    var t, n, l;
    let {
      emojiHose: i,
      streamerId: s,
      userId: a
    } = e, r = {
      ...i,
      type: h.W.EMOJI_HOSE
    };
    if (null == p[s]) p[s] = [r];
    else {
      let e = p[s].findIndex(e => e.id === i.id);
      e >= 0 ? p[s][e] = {
        ...p[s][e],
        ...r
      } : p[s].push(r)
    }
    let o = null !== (n = null !== (t = i.emojiId) && void 0 !== t ? t : i.emojiName) && void 0 !== n ? n : "";
    if (null == f[o]) {
      let e = null != i.emojiName ? c.ZP.convertNameToSurrogate(i.emojiName) : null;
      f[o] = new Image, f[o].src = (0, d.qc)({
        id: i.emojiId,
        name: null !== (l = null != e ? e : i.emojiName) && void 0 !== l ? l : "",
        animated: !1
      }, E.qh)
    }
    I(a)
  },
  SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
    let {
      drawables: t,
      streamerId: n
    } = e;
    if (null != p[n]) {
      let e = new Set;
      t.forEach(t => e.add(t.id)), p[n] = p[n].filter(t => !e.has(t.id))
    }
  },
  SHARED_CANVAS_SET_DRAW_MODE: function(e) {
    let {
      drawMode: t
    } = e;
    _ = t
  },
  TOGGLE_OVERLAY_CANVAS: function(e) {
    let {} = e;
    C = !C
  }
});
t.Z = T