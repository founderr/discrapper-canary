"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("627445"),
  r = n.n(i),
  a = n("446674"),
  s = n("913144"),
  l = n("816454");
let u = new Map;

function o(t) {
  let e = u.get(t);
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
class c extends a.default.Store {
  isFocused() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
    return o(t).focused
  }
  isVisible() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
    return o(t).visible
  }
  getFocusedWindowId() {
    let t = null;
    return u.forEach((e, n) => {
      e.focused && (t = n)
    }), t
  }
  isElementFullScreen() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
    return o(t).isElementFullscreen
  }
  windowSize() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
    return o(t).windowSize
  }
}
c.displayName = "WindowStore";
let d = new c(s.default, {
  WINDOW_INIT: function(t) {
    r(!u.has(t.windowId), "Window initialized multiple times");
    let {
      width: e,
      height: n,
      isElementFullscreen: i,
      focused: a,
      visible: s
    } = t;
    return u.set(t.windowId, {
      windowSize: {
        width: e,
        height: n
      },
      isElementFullscreen: i,
      focused: a,
      visible: s
    }), !0
  },
  WINDOW_FULLSCREEN_CHANGE: function(t) {
    let e = o(t.windowId);
    return e.isElementFullscreen !== t.isElementFullscreen && (u.set(t.windowId, {
      ...e,
      isElementFullscreen: t.isElementFullscreen
    }), !0)
  },
  WINDOW_FOCUS: function(t) {
    let e = o(t.windowId);
    return e.focused !== t.focused && (u.set(t.windowId, {
      ...e,
      focused: t.focused
    }), !0)
  },
  WINDOW_RESIZED: function(t) {
    let e = o(t.windowId);
    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (u.set(t.windowId, {
      ...e,
      windowSize: {
        width: t.width,
        height: t.height
      }
    }), !0)
  },
  WINDOW_UNLOAD: function(t) {
    return u.delete(t.windowId), !0
  },
  WINDOW_VISIBILITY_CHANGE: function(t) {
    let e = o(t.windowId);
    return e.visible !== t.visible && (u.set(t.windowId, {
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