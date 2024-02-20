var n;
e = r.nmd(e), r("424973"), n = function() {
  "use strict";
  var e, t, n, i, o = "undefined" != typeof window ? window : r.g,
    s = o.cancelRequestAnimationFrame && o.requestAnimationFrame || setTimeout,
    a = o.cancelRequestAnimationFrame || clearTimeout,
    u = [],
    c = 0,
    f = !1,
    l = 7,
    h = 35,
    d = 125,
    p = 0,
    v = 0,
    g = 0,
    IdleDeadline = {
      get didTimeout() {
        return !1
      },
      timeRemaining: function() {
        var e = l - (Date.now() - v);
        return e < 0 ? 0 : e
      }
    },
    b = function(e) {
      var t, r, n = function() {
        var i = Date.now() - r;
        i < 99 ? t = setTimeout(n, 99 - i) : (t = null, e())
      };
      return function() {
        r = Date.now(), !t && (t = setTimeout(n, 99))
      }
    }(function() {
      l = 22, d = 66, h = 0
    });

  function m() {
    125 != d && (l = 7, d = 125, h = 35, f && (f && (i && a(i), n && clearTimeout(n), f = !1), O())), b()
  }

  function y() {
    i = null, n = setTimeout(x, 0)
  }

  function T() {
    n = null, s(y)
  }

  function O() {
    !f && (t = d - (Date.now() - v), e = Date.now(), f = !0, h && t < h && (t = h), t > 9 ? n = setTimeout(T, t) : (t = 0, T()))
  }

  function x() {
    var r, i, o, s = l > 9 ? 9 : 1;
    if (v = Date.now(), f = !1, n = null, c > 2 || v - t - 50 < e)
      for (i = 0, o = u.length; i < o && IdleDeadline.timeRemaining() > s; i++) r = u.shift(), g++, r && r(IdleDeadline);
    u.length ? O() : c = 0
  }

  function E(e) {
    return p++, u.push(e), O(), p
  }

  function w(e) {
    var t = e - 1 - g;
    u[t] && (u[t] = null)
  }
  if (o.requestIdleCallback && o.cancelIdleCallback) try {
    o.requestIdleCallback(function() {}, {
      timeout: 0
    })
  } catch (e) {
    ! function(e) {
      var t, r;
      if (o.requestIdleCallback = function(t, r) {
          return r && "number" == typeof r.timeout ? e(t, r.timeout) : e(t)
        }, o.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype)) {
        if (!(r = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !r.configurable || !r.get) return;
        Object.defineProperty(t, "timeRemaining", {
          value: function() {
            return r.get.call(this)
          },
          enumerable: !0,
          configurable: !0
        })
      }
    }(o.requestIdleCallback)
  } else o.requestIdleCallback = E, o.cancelIdleCallback = w, o.document && document.addEventListener && (o.addEventListener("scroll", m, !0), o.addEventListener("resize", m), document.addEventListener("focus", m, !0), document.addEventListener("mouseover", m, !0), ["click", "keypress", "touchstart", "mousedown"].forEach(function(e) {
    document.addEventListener(e, m, {
      capture: !0,
      passive: !0
    })
  }), o.MutationObserver && new MutationObserver(m).observe(document.documentElement, {
    childList: !0,
    subtree: !0,
    attributes: !0
  }));
  return {
    request: E,
    cancel: w
  }
}, "function" == typeof define && define.amd ? define([], n) : "object" == typeof e && e.exports ? e.exports = n() : window.idleCallbackShim = n()