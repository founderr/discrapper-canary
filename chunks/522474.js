"use strict";
n(47120), n(411104);
var i, r = n(512722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(202226),
  u = n(442837),
  _ = n(570140),
  c = n(710845),
  d = n(358085),
  E = n(998502),
  I = n(228488),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = {},
  S = {},
  A = {},
  N = {},
  m = {},
  O = new Set,
  p = () => M.emitChange(),
  R = a().debounce(p, 150);

function g(e) {
  let t = A[e];
  null != t && !t.closed && (f[e] = {
    x: t.screenX,
    y: t.screenY,
    width: t.innerWidth,
    height: t.innerHeight,
    alwaysOnTop: !!d.isPlatformEmbedded && S[e]
  })
}

function C(e) {
  let t = A[e];
  null != t && (!t.closed && g(e), t.close(), ! function(e) {
    let t = A[e];
    s()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", p), t.removeEventListener("blur", p), t.removeEventListener("resize", R);
    let n = N[e];
    s()(null != n, "Window root was null while unmounting"), n.unmount(), delete A[e], delete S[e], delete m[e], delete N[e]
  }(e), M.emitChange())
}

function v(e) {
  let {
    data: t
  } = e;
  if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
  let n = t.discordPopoutEvent;
  if (null != n.key) switch (n.type) {
    case T.l9w.LOADED:
      var i;
      return i = n.key, void(O.has(i) && (! function(e) {
        let t = A[e],
          n = m[e];
        if (null == t) {
          new c.Z("PopoutWindowStore").warn("Failed to open window", e);
          return
        }
        let i = t.document;
        (0, I.uF)(i, p), t.addEventListener("focus", p), t.addEventListener("blur", p), t.addEventListener("resize", R), ! function(e, t) {
          let n = t.document,
            i = document.querySelectorAll('link[rel="stylesheet"]'),
            r = "".concat(window.location.protocol, "//").concat(window.location.host);
          for (let e of i) {
            if (!e.href.startsWith(r)) continue;
            let t = n.createElement("link");
            t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, s()(null != n.head, "Document head was null"), n.head.appendChild(t)
          }
        }(0, t);
        let r = (0, l.createRoot)(i.getElementById("app-mount"));
        s()(null != r, "No render target for popout!"), N[e] = r, r.render(n(e))
      }(i), O.delete(i), M.emitChange()));
    case T.l9w.UNLOADED:
      return C(n.key)
  }
}

function L() {
  for (let e of Object.keys(A)) {
    let t = A[e];
    null != t && t.close()
  }
}
class D extends(i = u.ZP.PersistedStore) {
  initialize(e) {
    window.addEventListener("message", v), window.addEventListener("beforeunload", L), f = null != e ? e : {}
  }
  getWindow(e) {
    return A[e]
  }
  getWindowState(e) {
    return f[e]
  }
  getWindowKeys() {
    return Object.keys(A)
  }
  getWindowOpen(e) {
    let t = A[e];
    return null != t && !t.closed
  }
  getIsAlwaysOnTop(e) {
    return !!S[e]
  }
  getWindowFocused(e) {
    var t, n;
    let i = A[e];
    return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
  }
  getWindowVisible(e) {
    var t;
    let n = A[e];
    return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
  }
  getState() {
    return f
  }
  unmountWindow(e) {
    return C(e)
  }
}
h(D, "displayName", "PopoutWindowStore"), h(D, "persistKey", "PopoutWindowStore");
let M = new D(_.Z, {
  POPOUT_WINDOW_OPEN: function(e) {
    let {
      key: t,
      features: n,
      render: i
    } = e;
    if (d.isPlatformEmbedded && !E.ZP.supportsFeature(T.eRX.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
    let r = A[t];
    if (null != r && !r.closed) return d.isPlatformEmbedded ? E.ZP.focus(t) : r.focus(), !1;
    let {
      defaultWidth: s,
      defaultHeight: o,
      defaultAlwaysOnTop: a = !1,
      ...l
    } = n, u = l, _ = a, c = f[t];
    if (null != c) {
      let {
        width: e,
        height: t,
        x: n,
        y: i,
        alwaysOnTop: r
      } = c;
      _ = null != r ? r : a, u = {
        width: null != e && 0 !== e ? e : s,
        height: null != t && 0 !== t ? t : o,
        left: n,
        top: i,
        ...u
      }
    }
    let I = window.open(T.Z5c.POPOUT_WINDOW, t, function(e) {
      let t = "";
      for (let n of Object.keys(e)) {
        let i = e[n];
        void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), t += "".concat(n, "=").concat(i, ","))
      }
      return t
    }(u));
    I.windowKey = t, null == I || I.focus(), A[t] = I, m[t] = i, d.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, _), S[t] = _, E.ZP.isAlwaysOnTop(t).then(e => S[t] = e)), O.add(t)
  },
  POPOUT_WINDOW_CLOSE: function(e) {
    let {
      key: t
    } = e, n = A[t];
    null != n && !n.closed && (g(t), n.close())
  },
  POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
    let {
      key: t,
      alwaysOnTop: n
    } = e;
    d.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, n), S[t] = n, E.ZP.isAlwaysOnTop(t).then(e => S[t] = e))
  },
  LOGOUT: L
});
t.Z = M