"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
}), n("222007");
var r = n("627445"),
  i = n.n(r),
  u = n("446674"),
  o = n("913144"),
  a = n("816454");
let l = new Map;

function s(t) {
  let e = l.get(t);
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
class c extends u.default.Store {
  isFocused() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(t).focused
  }
  isVisible() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(t).visible
  }
  getFocusedWindowId() {
    let t = null;
    return l.forEach((e, n) => {
      e.focused && (t = n)
    }), t
  }
  isElementFullScreen() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(t).isElementFullscreen
  }
  windowSize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
    return s(t).windowSize
  }
}
c.displayName = "WindowStore";
let d = new c(o.default, {
  WINDOW_INIT: function(t) {
    i(!l.has(t.windowId), "Window initialized multiple times");
    let {
      width: e,
      height: n,
      isElementFullscreen: r,
      focused: u,
      visible: o
    } = t;
    return l.set(t.windowId, {
      windowSize: {
        width: e,
        height: n
      },
      isElementFullscreen: r,
      focused: u,
      visible: o
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(t) {
    let e = s(t.windowId);
    return e.isElementFullscreen !== t.isElementFullscreen && (l.set(t.windowId, {
      ...e,
      isElementFullscreen: t.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(t) {
    let e = s(t.windowId);
    return e.focused !== t.focused && (l.set(t.windowId, {
      ...e,
      focused: t.focused
    }), !0)
  },
  WINDOW_RESIZED: function(t) {
    let e = s(t.windowId);
    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (l.set(t.windowId, {
      ...e,
      windowSize: {
        width: t.width,
        height: t.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(t) {
    return l.delete(t.windowId), !0
  },
  WINDOW_VISIBILITY_CHANGE: function(t) {
    let e = s(t.windowId);
    return e.visible !== t.visible && (l.set(t.windowId, {
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