n.d(t, {
  AX: function() {
    return c
  },
  BR: function() {
    return d
  },
  Bo: function() {
    return g
  },
  Df: function() {
    return h
  },
  LT: function() {
    return f
  },
  ZZ: function() {
    return m
  },
  cV: function() {
    return u
  },
  fW: function() {
    return p
  },
  gr: function() {
    return E
  },
  oW: function() {
    return o
  }
});
var l = n(261470),
  i = n(544891),
  s = n(570140),
  a = n(292793),
  r = n(981631);

function o(e, t, n, l, i) {
  s.Z.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: l,
    point: i
  })
}

function c(e, t, n, l) {
  return i.tn.post({
    url: r.ANM.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: l
    }
  })
}

function u(e, t, n, l) {
  s.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: l,
    streamerId: n
  })
}

function d(e, t, n) {
  return i.tn.post({
    url: r.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    }
  })
}

function h(e, t, n) {
  i.tn.del({
    url: r.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new l.Z
  })
}

function m(e, t) {
  t.state = a.f.STOP, s.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function E(e, t, n) {
  s.Z.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function p(e, t) {
  s.Z.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function g(e) {
  s.Z.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function f() {
  s.Z.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}