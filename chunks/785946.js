function r(n) {
  return n && "object" == typeof n && "default" in n ? n.default : n
}
var o, i = r(e(634450)),
  a = r(e(115953));
e(368040);
var c = r(e(765490));

function u() {
  return (u = Object.assign || function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
    }
    return n
  }).apply(this, arguments)
}

function s(n) {
  return "/" === n.charAt(0) ? n : "/" + n
}

function f(n) {
  return "/" === n.charAt(0) ? n.substr(1) : n
}

function l(n, t) {
  var e, r;
  return (e = n, r = t, 0 === e.toLowerCase().indexOf(r.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(r.length))) ? n.substr(t.length) : n
}

function h(n) {
  return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
}

function d(n) {
  var t = n || "/",
    e = "",
    r = "",
    o = t.indexOf("#"); - 1 !== o && (r = t.substr(o), t = t.substr(0, o));
  var i = t.indexOf("?");
  return -1 !== i && (e = t.substr(i), t = t.substr(0, i)), {
    pathname: t,
    search: "?" === e ? "" : e,
    hash: "#" === r ? "" : r
  }
}

function p(n) {
  var t = n.pathname,
    e = n.search,
    r = n.hash,
    o = t || "/";
  return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
}

function v(n, t, e, r) {
  var o;
  "string" == typeof n ? (o = d(n)).state = t : (void 0 === (o = u({}, n)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== t && void 0 === o.state && (o.state = t));
  try {
    o.pathname = decodeURI(o.pathname)
  } catch (n) {
    throw n instanceof URIError ? URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
  }
  return e && (o.key = e), r ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = i(o.pathname, r.pathname)) : o.pathname = r.pathname : o.pathname || (o.pathname = "/"), o
}

function m() {
  var n = null,
    t = [];
  return {
    setPrompt: function(t) {
      return n = t,
        function() {
          n === t && (n = null)
        }
    },
    confirmTransitionTo: function(t, e, r, o) {
      if (null != n) {
        var i = "function" == typeof n ? n(t, e) : n;
        "string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
      } else o(!0)
    },
    appendListener: function(n) {
      var e = !0;

      function r() {
        e && n.apply(void 0, arguments)
      }
      return t.push(r),
        function() {
          e = !1, t = t.filter(function(n) {
            return n !== r
          })
        }
    },
    notifyListeners: function() {
      for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
      t.forEach(function(n) {
        return n.apply(void 0, e)
      })
    }
  }
}
var y = !("undefined" == typeof window || !window.document || !window.document.createElement);

function w(n, t) {
  t(window.confirm(n))
}
var g = "popstate",
  x = "hashchange";

function C() {
  try {
    return window.history.state || {}
  } catch (n) {
    return {}
  }
}
var k = "hashchange",
  E = {
    hashbang: {
      encodePath: function(n) {
        return "!" === n.charAt(0) ? n : "!/" + f(n)
      },
      decodePath: function(n) {
        return "!" === n.charAt(0) ? n.substr(1) : n
      }
    },
    noslash: {
      encodePath: f,
      decodePath: s
    },
    slash: {
      encodePath: s,
      decodePath: s
    }
  };

function O(n) {
  var t = n.indexOf("#");
  return -1 === t ? n : n.slice(0, t)
}

function b() {
  var n = window.location.href,
    t = n.indexOf("#");
  return -1 === t ? "" : n.substring(t + 1)
}

function A(n) {
  window.location.replace(O(window.location.href) + "#" + n)
}

function P(n, t, e) {
  return Math.min(Math.max(n, t), e)
}
t.createBrowserHistory = function(n) {
  void 0 === n && (n = {}), y || c(!1);
  var t, e = window.history,
    r = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
    o = -1 !== window.navigator.userAgent.indexOf("Trident"),
    i = n,
    a = i.forceRefresh,
    f = void 0 !== a && a,
    d = i.getUserConfirmation,
    k = void 0 === d ? w : d,
    E = i.keyLength,
    O = void 0 === E ? 6 : E,
    b = n.basename ? h(s(n.basename)) : "";

  function A(n) {
    var t = n || {},
      e = t.key,
      r = t.state,
      o = window.location,
      i = o.pathname + o.search + o.hash;
    return b && (i = l(i, b)), v(i, r, e)
  }

  function P() {
    return Math.random().toString(36).substr(2, O)
  }
  var R = m();

  function L(n) {
    u(K, n), K.length = e.length, R.notifyListeners(K.location, K.action)
  }

  function Z(n) {
    void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS") || M(A(n.state))
  }

  function S() {
    M(A(C()))
  }
  var _ = !1;

  function M(n) {
    _ ? (_ = !1, L()) : R.confirmTransitionTo(n, "POP", k, function(t) {
      var e, r, o, i, a;
      t ? L({
        action: "POP",
        location: n
      }) : (e = n, r = K.location, -1 === (o = N.indexOf(r.key)) && (o = 0), -1 === (i = N.indexOf(e.key)) && (i = 0), (a = o - i) && (_ = !0, U(a)))
    })
  }
  var T = A(C()),
    N = [T.key];

  function H(n) {
    return b + p(n)
  }

  function U(n) {
    e.go(n)
  }
  var j = 0;

  function B(n) {
    1 === (j += n) && 1 === n ? (window.addEventListener(g, Z), o && window.addEventListener(x, S)) : 0 === j && (window.removeEventListener(g, Z), o && window.removeEventListener(x, S))
  }
  var I = !1,
    K = {
      length: e.length,
      action: "POP",
      location: T,
      createHref: H,
      push: function(n, t) {
        var o = v(n, t, P(), K.location);
        R.confirmTransitionTo(o, "PUSH", k, function(n) {
          if (n) {
            var t = H(o),
              i = o.key,
              a = o.state;
            if (r) {
              if (e.pushState({
                  key: i,
                  state: a
                }, null, t), f) window.location.href = t;
              else {
                var c = N.indexOf(K.location.key),
                  u = N.slice(0, c + 1);
                u.push(o.key), N = u, L({
                  action: "PUSH",
                  location: o
                })
              }
            } else window.location.href = t
          }
        })
      },
      replace: function(n, t) {
        var o = "REPLACE",
          i = v(n, t, P(), K.location);
        R.confirmTransitionTo(i, o, k, function(n) {
          if (n) {
            var t = H(i),
              a = i.key,
              c = i.state;
            if (r) {
              if (e.replaceState({
                  key: a,
                  state: c
                }, null, t), f) window.location.replace(t);
              else {
                var u = N.indexOf(K.location.key); - 1 !== u && (N[u] = i.key), L({
                  action: o,
                  location: i
                })
              }
            } else window.location.replace(t)
          }
        })
      },
      go: U,
      goBack: function() {
        U(-1)
      },
      goForward: function() {
        U(1)
      },
      block: function(n) {
        void 0 === n && (n = !1);
        var t = R.setPrompt(n);
        return I || (B(1), I = !0),
          function() {
            return I && (I = !1, B(-1)), t()
          }
      },
      listen: function(n) {
        var t = R.appendListener(n);
        return B(1),
          function() {
            B(-1), t()
          }
      }
    };
  return K
}