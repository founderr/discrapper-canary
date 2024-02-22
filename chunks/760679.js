"use strict";
n.r(t), n.d(t, {
  drawLinePoint: function() {
    return u
  },
  addLinePoints: function() {
    return o
  },
  updateLinePoints: function() {
    return d
  },
  startEmojiHose: function() {
    return c
  },
  stopEmojiHose: function() {
    return f
  },
  stopRenderedEmojiHose: function() {
    return h
  },
  updateEmojiHose: function() {
    return m
  },
  clearDrawables: function() {
    return p
  },
  setDrawMode: function() {
    return E
  },
  toggleOverlayCanvas: function() {
    return S
  }
});
var l = n("981980"),
  a = n("872717"),
  s = n("913144"),
  i = n("315841"),
  r = n("49111");

function u(e, t, n, l, a) {
  s.default.dispatch({
    type: "SHARED_CANVAS_DRAW_LINE_POINT",
    channelId: e,
    userId: n,
    lineId: t,
    streamerId: l,
    point: a
  })
}

function o(e, t, n, l) {
  return a.default.post({
    url: r.Endpoints.SHARED_CANVAS_LINES(e, n),
    body: {
      line_id: t,
      points: l
    }
  })
}

function d(e, t, n, l) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
    userId: t,
    lineId: e,
    newPoints: l,
    streamerId: n
  })
}

function c(e, t, n) {
  return a.default.post({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSES(e, t),
    body: {
      emoji_hose: n
    }
  })
}

function f(e, t, n) {
  a.default.delete({
    url: r.Endpoints.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
    backoff: new l.default
  })
}

function h(e, t) {
  t.state = i.EmojiHoseState.STOP, s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: t,
    userId: t.userId,
    streamerId: e
  })
}

function m(e, t, n) {
  s.default.dispatch({
    type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
    emojiHose: e,
    userId: t,
    streamerId: n
  })
}

function p(e, t) {
  s.default.dispatch({
    type: "SHARED_CANVAS_CLEAR_DRAWABLES",
    drawables: e,
    streamerId: t
  })
}

function E(e) {
  s.default.dispatch({
    type: "SHARED_CANVAS_SET_DRAW_MODE",
    drawMode: e
  })
}

function S() {
  s.default.dispatch({
    type: "TOGGLE_OVERLAY_CANVAS"
  })
}