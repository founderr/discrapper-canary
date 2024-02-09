"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("627445"),
  r = n.n(i),
  l = n("446674"),
  s = n("913144"),
  a = n("816454");
let o = new Map;

function u(t) {
  let e = o.get(t);
  return null == e ? (console.warn("Window state not initialized", t), {
    isElementFullscreen: !1,
    focused: !1,
    windowSize: {
      width: 0,
      height: 0
    },
    visible: !1
  }) : e
}
class c extends l.default.Store {
  isFocused() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return u(t).focused
  }
  isVisible() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return u(t).visible
  }
  getFocusedWindowId() {
    let t = null;
    return o.forEach((e, n) => {
      e.focused && (t = n)
    }), t
  }
  isElementFullScreen() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return u(t).isElementFullscreen
  }
  windowSize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return u(t).windowSize
  }
}
c.displayName = "WindowStore";
let d = new c(s.default, {
  WINDOW_INIT: function(t) {
    r(!o.has(t.windowId), "Window initialized multiple times");
    let {
      width: e,
      height: n,
      isElementFullscreen: i,
      focused: l,
      visible: s
    } = t;
    return o.set(t.windowId, {
      windowSize: {
        width: e,
        height: n
      },
      isElementFullscreen: i,
      focused: l,
      visible: s
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(t) {
    let e = u(t.windowId);
    return e.isElementFullscreen !== t.isElementFullscreen && (o.set(t.windowId, {
      ...e,
      isElementFullscreen: t.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(t) {
    let e = u(t.windowId);
    return e.focused !== t.focused && (o.set(t.windowId, {
      ...e,
      focused: t.focused
    }), !0)
  },
  WINDOW_RESIZED: function(t) {
    let e = u(t.windowId);
    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (o.set(t.windowId, {
      ...e,
      windowSize: {
        width: t.width,
        height: t.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(t) {
    return o.delete(t.windowId), !0
  },
  WINDOW_VISIBILITY_CHANGE: function(t) {
    let e = u(t.windowId);
    return e.visible !== t.visible && (o.set(t.windowId, {
      ...e,
      visible: t.visible
    }), !0)
  }
});
n.el("599110").then(n.bind(n, "599110")).then(t => {
  let {
    addExtraAnalyticsDecorator: e
  } = t;
  e(t => {
    t.client_app_state = d.isFocused() ? "focused" : "unfocused"
  })
});
var f = d