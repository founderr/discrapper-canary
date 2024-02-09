"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("627445"),
  i = n.n(l),
  a = n("446674"),
  s = n("913144"),
  r = n("816454");
let u = new Map;

function o(e) {
  let t = u.get(e);
  return null == t ? (console.warn("Window state not initialized", e), {
    isElementFullscreen: !1,
    focused: !1,
    windowSize: {
      width: 0,
      height: 0
    },
    visible: !1
  }) : t
}
class d extends a.default.Store {
  isFocused() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
    return o(e).focused
  }
  isVisible() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
    return o(e).visible
  }
  getFocusedWindowId() {
    let e = null;
    return u.forEach((t, n) => {
      t.focused && (e = n)
    }), e
  }
  isElementFullScreen() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
    return o(e).isElementFullscreen
  }
  windowSize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getMainWindowId)();
    return o(e).windowSize
  }
}
d.displayName = "WindowStore";
let c = new d(s.default, {
  WINDOW_INIT: function(e) {
    i(!u.has(e.windowId), "Window initialized multiple times");
    let {
      width: t,
      height: n,
      isElementFullscreen: l,
      focused: a,
      visible: s
    } = e;
    return u.set(e.windowId, {
      windowSize: {
        width: t,
        height: n
      },
      isElementFullscreen: l,
      focused: a,
      visible: s
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(e) {
    let t = o(e.windowId);
    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
      ...t,
      isElementFullscreen: e.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(e) {
    let t = o(e.windowId);
    return t.focused !== e.focused && (u.set(e.windowId, {
      ...t,
      focused: e.focused
    }), !0)
  },
  WINDOW_RESIZED: function(e) {
    let t = o(e.windowId);
    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
      ...t,
      windowSize: {
        width: e.width,
        height: e.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(e) {
    return u.delete(e.windowId), !0
  },
  WINDOW_VISIBILITY_CHANGE: function(e) {
    let t = o(e.windowId);
    return t.visible !== e.visible && (u.set(e.windowId, {
      ...t,
      visible: e.visible
    }), !0)
  }
});
n.el("599110").then(n.bind(n, "599110")).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
  })
});
var f = c