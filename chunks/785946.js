
function n(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var a, o = n(r(634450)),
  s = n(r(115953));
r(368040);
var i = n(r(765490));

function c() {
  return (c = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var r = arguments[t];
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
}
return e;
  }).apply(this, arguments);
}

function u(e) {
  return '/' === e.charAt(0) ? e : '/' + e;
}

function l(e) {
  return '/' === e.charAt(0) ? e.substr(1) : e;
}

function b(e, t) {
  var r, n;
  return (r = e, n = t, 0 === r.toLowerCase().indexOf(n.toLowerCase()) && -1 !== '/?#'.indexOf(r.charAt(n.length))) ? e.substr(t.length) : e;
}

function f(e) {
  return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}

function h(e) {
  var t = e || '/',
r = '',
n = '',
a = t.indexOf('#'); -
  1 !== a && (n = t.substr(a), t = t.substr(0, a));
  var o = t.indexOf('?');
  return -1 !== o && (r = t.substr(o), t = t.substr(0, o)), {
pathname: t,
search: '?' === r ? '' : r,
hash: '#' === n ? '' : n
  };
}

function d(e) {
  var t = e.pathname,
r = e.search,
n = e.hash,
a = t || '/';
  return r && '?' !== r && (a += '?' === r.charAt(0) ? r : '?' + r), n && '#' !== n && (a += '#' === n.charAt(0) ? n : '#' + n), a;
}

function p(e, t, r, n) {
  var a;
  'string' == typeof e ? (a = h(e)).state = t : (void 0 === (a = c({}, e)).pathname && (a.pathname = ''), a.search ? '?' !== a.search.charAt(0) && (a.search = '?' + a.search) : a.search = '', a.hash ? '#' !== a.hash.charAt(0) && (a.hash = '#' + a.hash) : a.hash = '', void 0 !== t && void 0 === a.state && (a.state = t));
  try {
a.pathname = decodeURI(a.pathname);
  } catch (e) {
throw e instanceof URIError ? URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  return r && (a.key = r), n ? a.pathname ? '/' !== a.pathname.charAt(0) && (a.pathname = o(a.pathname, n.pathname)) : a.pathname = n.pathname : a.pathname || (a.pathname = '/'), a;
}

function v() {
  var e = null,
t = [];
  return {
setPrompt: function(t) {
  return e = t,
    function() {
      e === t && (e = null);
    };
},
confirmTransitionTo: function(t, r, n, a) {
  if (null != e) {
    var o = 'function' == typeof e ? e(t, r) : e;
    'string' == typeof o ? 'function' == typeof n ? n(o, a) : a(!0) : a(!1 !== o);
  } else
    a(!0);
},
appendListener: function(e) {
  var r = !0;

  function n() {
    r && e.apply(void 0, arguments);
  }
  return t.push(n),
    function() {
      r = !1, t = t.filter(function(e) {
        return e !== n;
      });
    };
},
notifyListeners: function() {
  for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  t.forEach(function(e) {
    return e.apply(void 0, r);
  });
}
  };
}
var y = !('undefined' == typeof window || !window.document || !window.document.createElement);

function g(e, t) {
  t(window.confirm(e));
}
var m = 'popstate',
  w = 'hashchange';

function O() {
  try {
return window.history.state || {};
  } catch (e) {
return {};
  }
}
var k = 'hashchange',
  E = {
hashbang: {
  encodePath: function(e) {
    return '!' === e.charAt(0) ? e : '!/' + l(e);
  },
  decodePath: function(e) {
    return '!' === e.charAt(0) ? e.substr(1) : e;
  }
},
noslash: {
  encodePath: l,
  decodePath: u
},
slash: {
  encodePath: u,
  decodePath: u
}
  };

function x(e) {
  var t = e.indexOf('#');
  return -1 === t ? e : e.slice(0, t);
}

function j() {
  var e = window.location.href,
t = e.indexOf('#');
  return -1 === t ? '' : e.substring(t + 1);
}

function C(e) {
  window.location.replace(x(window.location.href) + '#' + e);
}

function M(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
t.createBrowserHistory = function(e) {
  void 0 === e && (e = {}), y || i(!1);
  var t, r = window.history,
n = (-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone')) && window.history && 'pushState' in window.history,
a = -1 !== window.navigator.userAgent.indexOf('Trident'),
o = e,
s = o.forceRefresh,
l = void 0 !== s && s,
h = o.getUserConfirmation,
k = void 0 === h ? g : h,
E = o.keyLength,
x = void 0 === E ? 6 : E,
j = e.basename ? f(u(e.basename)) : '';

  function C(e) {
var t = e || {},
  r = t.key,
  n = t.state,
  a = window.location,
  o = a.pathname + a.search + a.hash;
return j && (o = b(o, j)), p(o, n, r);
  }

  function M() {
return Math.random().toString(36).substr(2, x);
  }
  var A = v();

  function _(e) {
c(q, e), q.length = r.length, A.notifyListeners(q.location, q.action);
  }

  function S(e) {
void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS') || P(C(e.state));
  }

  function R() {
P(C(O()));
  }
  var Z = !1;

  function P(e) {
Z ? (Z = !1, _()) : A.confirmTransitionTo(e, 'POP', k, function(t) {
  var r, n, a, o, s;
  t ? _({
    action: 'POP',
    location: e
  }) : (r = e, n = q.location, -1 === (a = T.indexOf(n.key)) && (a = 0), -1 === (o = T.indexOf(r.key)) && (o = 0), (s = a - o) && (Z = !0, F(s)));
});
  }
  var D = C(O()),
T = [D.key];

  function B(e) {
return j + d(e);
  }

  function F(e) {
r.go(e);
  }
  var N = 0;

  function L(e) {
1 === (N += e) && 1 === e ? (window.addEventListener(m, S), a && window.addEventListener(w, R)) : 0 === N && (window.removeEventListener(m, S), a && window.removeEventListener(w, R));
  }
  var I = !1,
q = {
  length: r.length,
  action: 'POP',
  location: D,
  createHref: B,
  push: function(e, t) {
    var a = p(e, t, M(), q.location);
    A.confirmTransitionTo(a, 'PUSH', k, function(e) {
      if (e) {
        var t = B(a),
          o = a.key,
          s = a.state;
        if (n) {
          if (r.pushState({
              key: o,
              state: s
            }, null, t), l)
            window.location.href = t;
          else {
            var i = T.indexOf(q.location.key),
              c = T.slice(0, i + 1);
            c.push(a.key), T = c, _({
              action: 'PUSH',
              location: a
            });
          }
        } else
          window.location.href = t;
      }
    });
  },
  replace: function(e, t) {
    var a = 'REPLACE',
      o = p(e, t, M(), q.location);
    A.confirmTransitionTo(o, a, k, function(e) {
      if (e) {
        var t = B(o),
          s = o.key,
          i = o.state;
        if (n) {
          if (r.replaceState({
              key: s,
              state: i
            }, null, t), l)
            window.location.replace(t);
          else {
            var c = T.indexOf(q.location.key); -
            1 !== c && (T[c] = o.key), _({
              action: a,
              location: o
            });
          }
        } else
          window.location.replace(t);
      }
    });
  },
  go: F,
  goBack: function() {
    F(-1);
  },
  goForward: function() {
    F(1);
  },
  block: function(e) {
    void 0 === e && (e = !1);
    var t = A.setPrompt(e);
    return I || (L(1), I = !0),
      function() {
        return I && (I = !1, L(-1)), t();
      };
  },
  listen: function(e) {
    var t = A.appendListener(e);
    return L(1),
      function() {
        L(-1), t();
      };
  }
};
  return q;
};