function r(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var i, o = r(n(634450)),
  a = r(n(115953));
n(368040);
var s = r(n(765490));

function c() {
  return (c = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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

function f(e, t) {
  var n, r;
  return (n = e, r = t, 0 === n.toLowerCase().indexOf(r.toLowerCase()) && -1 !== '/?#'.indexOf(n.charAt(r.length))) ? e.substr(t.length) : e;
}

function h(e) {
  return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}

function d(e) {
  var t = e || '/',
n = '',
r = '',
i = t.indexOf('#'); -
  1 !== i && (r = t.substr(i), t = t.substr(0, i));
  var o = t.indexOf('?');
  return -1 !== o && (n = t.substr(o), t = t.substr(0, o)), {
pathname: t,
search: '?' === n ? '' : n,
hash: '#' === r ? '' : r
  };
}

function v(e) {
  var t = e.pathname,
n = e.search,
r = e.hash,
i = t || '/';
  return n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n), r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r), i;
}

function p(e, t, n, r) {
  var i;
  'string' == typeof e ? (i = d(e)).state = t : (void 0 === (i = c({}, e)).pathname && (i.pathname = ''), i.search ? '?' !== i.search.charAt(0) && (i.search = '?' + i.search) : i.search = '', i.hash ? '#' !== i.hash.charAt(0) && (i.hash = '#' + i.hash) : i.hash = '', void 0 !== t && void 0 === i.state && (i.state = t));
  try {
i.pathname = decodeURI(i.pathname);
  } catch (e) {
throw e instanceof URIError ? URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  return n && (i.key = n), r ? i.pathname ? '/' !== i.pathname.charAt(0) && (i.pathname = o(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = '/'), i;
}

function w() {
  var e = null,
t = [];
  return {
setPrompt: function(t) {
  return e = t,
    function() {
      e === t && (e = null);
    };
},
confirmTransitionTo: function(t, n, r, i) {
  if (null != e) {
    var o = 'function' == typeof e ? e(t, n) : e;
    'string' == typeof o ? 'function' == typeof r ? r(o, i) : i(!0) : i(!1 !== o);
  } else
    i(!0);
},
appendListener: function(e) {
  var n = !0;

  function r() {
    n && e.apply(void 0, arguments);
  }
  return t.push(r),
    function() {
      n = !1, t = t.filter(function(e) {
        return e !== r;
      });
    };
},
notifyListeners: function() {
  for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  t.forEach(function(e) {
    return e.apply(void 0, n);
  });
}
  };
}
var y = !('undefined' == typeof window || !window.document || !window.document.createElement);

function m(e, t) {
  t(window.confirm(e));
}
var g = 'popstate',
  x = 'hashchange';

function b() {
  try {
return window.history.state || {};
  } catch (e) {
return {};
  }
}
var E = 'hashchange',
  O = {
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

function P(e) {
  var t = e.indexOf('#');
  return -1 === t ? e : e.slice(0, t);
}

function k() {
  var e = window.location.href,
t = e.indexOf('#');
  return -1 === t ? '' : e.substring(t + 1);
}

function S(e) {
  window.location.replace(P(window.location.href) + '#' + e);
}

function A(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
t.createBrowserHistory = function(e) {
  void 0 === e && (e = {}), y || s(!1);
  var t, n = window.history,
r = (-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone')) && window.history && 'pushState' in window.history,
i = -1 !== window.navigator.userAgent.indexOf('Trident'),
o = e,
a = o.forceRefresh,
l = void 0 !== a && a,
d = o.getUserConfirmation,
E = void 0 === d ? m : d,
O = o.keyLength,
P = void 0 === O ? 6 : O,
k = e.basename ? h(u(e.basename)) : '';

  function S(e) {
var t = e || {},
  n = t.key,
  r = t.state,
  i = window.location,
  o = i.pathname + i.search + i.hash;
return k && (o = f(o, k)), p(o, r, n);
  }

  function A() {
return Math.random().toString(36).substr(2, P);
  }
  var C = w();

  function $(e) {
c(q, e), q.length = n.length, C.notifyListeners(q.location, q.action);
  }

  function z(e) {
void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS') || B(S(e.state));
  }

  function L() {
B(S(b()));
  }
  var R = !1;

  function B(e) {
R ? (R = !1, $()) : C.confirmTransitionTo(e, 'POP', E, function(t) {
  var n, r, i, o, a;
  t ? $({
    action: 'POP',
    location: e
  }) : (n = e, r = q.location, -1 === (i = U.indexOf(r.key)) && (i = 0), -1 === (o = U.indexOf(n.key)) && (o = 0), (a = i - o) && (R = !0, H(a)));
});
  }
  var T = S(b()),
U = [T.key];

  function j(e) {
return k + v(e);
  }

  function H(e) {
n.go(e);
  }
  var M = 0;

  function I(e) {
1 === (M += e) && 1 === e ? (window.addEventListener(g, z), i && window.addEventListener(x, L)) : 0 === M && (window.removeEventListener(g, z), i && window.removeEventListener(x, L));
  }
  var D = !1,
q = {
  length: n.length,
  action: 'POP',
  location: T,
  createHref: j,
  push: function(e, t) {
    var i = p(e, t, A(), q.location);
    C.confirmTransitionTo(i, 'PUSH', E, function(e) {
      if (e) {
        var t = j(i),
          o = i.key,
          a = i.state;
        if (r) {
          if (n.pushState({
              key: o,
              state: a
            }, null, t), l)
            window.location.href = t;
          else {
            var s = U.indexOf(q.location.key),
              c = U.slice(0, s + 1);
            c.push(i.key), U = c, $({
              action: 'PUSH',
              location: i
            });
          }
        } else
          window.location.href = t;
      }
    });
  },
  replace: function(e, t) {
    var i = 'REPLACE',
      o = p(e, t, A(), q.location);
    C.confirmTransitionTo(o, i, E, function(e) {
      if (e) {
        var t = j(o),
          a = o.key,
          s = o.state;
        if (r) {
          if (n.replaceState({
              key: a,
              state: s
            }, null, t), l)
            window.location.replace(t);
          else {
            var c = U.indexOf(q.location.key); -
            1 !== c && (U[c] = o.key), $({
              action: i,
              location: o
            });
          }
        } else
          window.location.replace(t);
      }
    });
  },
  go: H,
  goBack: function() {
    H(-1);
  },
  goForward: function() {
    H(1);
  },
  block: function(e) {
    void 0 === e && (e = !1);
    var t = C.setPrompt(e);
    return D || (I(1), D = !0),
      function() {
        return D && (D = !1, I(-1)), t();
      };
  },
  listen: function(e) {
    var t = C.appendListener(e);
    return I(1),
      function() {
        I(-1), t();
      };
  }
};
  return q;
};