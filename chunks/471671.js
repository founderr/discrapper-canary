"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("627445"),
  r = n.n(i),
  l = n("446674"),
  a = n("913144"),
  s = n("816454");
let o = new Map;

function u(e) {
  let t = o.get(e);
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
class c extends l.default.Store {
  isFocused() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
    return u(e).focused
  }
  isVisible() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
    return u(e).visible
  }
  getFocusedWindowId() {
    let e = null;
    return o.forEach((t, n) => {
      t.focused && (e = n)
    }), e
  }
  isElementFullScreen() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
    return u(e).isElementFullscreen
  }
  windowSize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
    return u(e).windowSize
  }
}
c.displayName = "WindowStore";
let d = new c(a.default, {
  WINDOW_INIT: function(e) {
    r(!o.has(e.windowId), "Window initialized multiple times");
    let {
      width: t,
      height: n,
      isElementFullscreen: i,
      focused: l,
      visible: a
    } = e;
    return o.set(e.windowId, {
      windowSize: {
        width: t,
        height: n
      },
      isElementFullscreen: i,
      focused: l,
      visible: a
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(e) {
    let t = u(e.windowId);
    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
      ...t,
      isElementFullscreen: e.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(e) {
    let t = u(e.windowId);
    return t.focused !== e.focused && (o.set(e.windowId, {
      ...t,
      focused: e.focused
    }), !0)
  },
  WINDOW_RESIZED: function(e) {
    let t = u(e.windowId);
    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
      ...t,
      windowSize: {
        width: e.width,
        height: e.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(e) {
    return o.delete(e.windowId), !0
  },
  WINDOW_VISIBILITY_CHANGE: function(e) {
    let t = u(e.windowId);
    return t.visible !== e.visible && (o.set(e.windowId, {
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
    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
  })
});
var f = d