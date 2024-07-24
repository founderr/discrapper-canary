function i(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var o, r = i(n(634450)),
  a = i(n(115953));
n(368040);
var s = i(n(765490));

function c() {
  return (c = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var i in n)
    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
}
return e;
  }).apply(this, arguments);
}

function l(e) {
  return '/' === e.charAt(0) ? e : '/' + e;
}

function u(e) {
  return '/' === e.charAt(0) ? e.substr(1) : e;
}

function d(e, t) {
  var n, i;
  return (n = e, i = t, 0 === n.toLowerCase().indexOf(i.toLowerCase()) && -1 !== '/?#'.indexOf(n.charAt(i.length))) ? e.substr(t.length) : e;
}

function h(e) {
  return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}

function f(e) {
  var t = e || '/',
n = '',
i = '',
o = t.indexOf('#'); -
  1 !== o && (i = t.substr(o), t = t.substr(0, o));
  var r = t.indexOf('?');
  return -1 !== r && (n = t.substr(r), t = t.substr(0, r)), {
pathname: t,
search: '?' === n ? '' : n,
hash: '#' === i ? '' : i
  };
}

function g(e) {
  var t = e.pathname,
n = e.search,
i = e.hash,
o = t || '/';
  return n && '?' !== n && (o += '?' === n.charAt(0) ? n : '?' + n), i && '#' !== i && (o += '#' === i.charAt(0) ? i : '#' + i), o;
}

function m(e, t, n, i) {
  var o;
  'string' == typeof e ? (o = f(e)).state = t : (void 0 === (o = c({}, e)).pathname && (o.pathname = ''), o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : o.search = '', o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : o.hash = '', void 0 !== t && void 0 === o.state && (o.state = t));
  try {
o.pathname = decodeURI(o.pathname);
  } catch (e) {
throw e instanceof URIError ? URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  return n && (o.key = n), i ? o.pathname ? '/' !== o.pathname.charAt(0) && (o.pathname = r(o.pathname, i.pathname)) : o.pathname = i.pathname : o.pathname || (o.pathname = '/'), o;
}

function p() {
  var e = null,
t = [];
  return {
setPrompt: function(t) {
  return e = t,
    function() {
      e === t && (e = null);
    };
},
confirmTransitionTo: function(t, n, i, o) {
  if (null != e) {
    var r = 'function' == typeof e ? e(t, n) : e;
    'string' == typeof r ? 'function' == typeof i ? i(r, o) : o(!0) : o(!1 !== r);
  } else
    o(!0);
},
appendListener: function(e) {
  var n = !0;

  function i() {
    n && e.apply(void 0, arguments);
  }
  return t.push(i),
    function() {
      n = !1, t = t.filter(function(e) {
        return e !== i;
      });
    };
},
notifyListeners: function() {
  for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
    n[i] = arguments[i];
  t.forEach(function(e) {
    return e.apply(void 0, n);
  });
}
  };
}
var b = !('undefined' == typeof window || !window.document || !window.document.createElement);

function _(e, t) {
  t(window.confirm(e));
}
var v = 'popstate',
  w = 'hashchange';

function C() {
  try {
return window.history.state || {};
  } catch (e) {
return {};
  }
}
var y = 'hashchange',
  x = {
hashbang: {
  encodePath: function(e) {
    return '!' === e.charAt(0) ? e : '!/' + u(e);
  },
  decodePath: function(e) {
    return '!' === e.charAt(0) ? e.substr(1) : e;
  }
},
noslash: {
  encodePath: u,
  decodePath: l
},
slash: {
  encodePath: l,
  decodePath: l
}
  };

function S(e) {
  var t = e.indexOf('#');
  return -1 === t ? e : e.slice(0, t);
}

function I() {
  var e = window.location.href,
t = e.indexOf('#');
  return -1 === t ? '' : e.substring(t + 1);
}

function R(e) {
  window.location.replace(S(window.location.href) + '#' + e);
}

function B(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
t.createBrowserHistory = function(e) {
  void 0 === e && (e = {}), b || s(!1);
  var t, n = window.history,
i = (-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone')) && window.history && 'pushState' in window.history,
o = -1 !== window.navigator.userAgent.indexOf('Trident'),
r = e,
a = r.forceRefresh,
u = void 0 !== a && a,
f = r.getUserConfirmation,
y = void 0 === f ? _ : f,
x = r.keyLength,
S = void 0 === x ? 6 : x,
I = e.basename ? h(l(e.basename)) : '';

  function R(e) {
var t = e || {},
  n = t.key,
  i = t.state,
  o = window.location,
  r = o.pathname + o.search + o.hash;
return I && (r = d(r, I)), m(r, i, n);
  }

  function B() {
return Math.random().toString(36).substr(2, S);
  }
  var k = p();

  function E(e) {
c(N, e), N.length = n.length, k.notifyListeners(N.location, N.action);
  }

  function T(e) {
void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS') || A(R(e.state));
  }

  function O() {
A(R(C()));
  }
  var P = !1;

  function A(e) {
P ? (P = !1, E()) : k.confirmTransitionTo(e, 'POP', y, function(t) {
  var n, i, o, r, a;
  t ? E({
    action: 'POP',
    location: e
  }) : (n = e, i = N.location, -1 === (o = M.indexOf(i.key)) && (o = 0), -1 === (r = M.indexOf(n.key)) && (r = 0), (a = o - r) && (P = !0, W(a)));
});
  }
  var L = R(C()),
M = [L.key];

  function H(e) {
return I + g(e);
  }

  function W(e) {
n.go(e);
  }
  var Z = 0;

  function D(e) {
1 === (Z += e) && 1 === e ? (window.addEventListener(v, T), o && window.addEventListener(w, O)) : 0 === Z && (window.removeEventListener(v, T), o && window.removeEventListener(w, O));
  }
  var z = !1,
N = {
  length: n.length,
  action: 'POP',
  location: L,
  createHref: H,
  push: function(e, t) {
    var o = m(e, t, B(), N.location);
    k.confirmTransitionTo(o, 'PUSH', y, function(e) {
      if (e) {
        var t = H(o),
          r = o.key,
          a = o.state;
        if (i) {
          if (n.pushState({
              key: r,
              state: a
            }, null, t), u)
            window.location.href = t;
          else {
            var s = M.indexOf(N.location.key),
              c = M.slice(0, s + 1);
            c.push(o.key), M = c, E({
              action: 'PUSH',
              location: o
            });
          }
        } else
          window.location.href = t;
      }
    });
  },
  replace: function(e, t) {
    var o = 'REPLACE',
      r = m(e, t, B(), N.location);
    k.confirmTransitionTo(r, o, y, function(e) {
      if (e) {
        var t = H(r),
          a = r.key,
          s = r.state;
        if (i) {
          if (n.replaceState({
              key: a,
              state: s
            }, null, t), u)
            window.location.replace(t);
          else {
            var c = M.indexOf(N.location.key); -
            1 !== c && (M[c] = r.key), E({
              action: o,
              location: r
            });
          }
        } else
          window.location.replace(t);
      }
    });
  },
  go: W,
  goBack: function() {
    W(-1);
  },
  goForward: function() {
    W(1);
  },
  block: function(e) {
    void 0 === e && (e = !1);
    var t = k.setPrompt(e);
    return z || (D(1), z = !0),
      function() {
        return z && (z = !1, D(-1)), t();
      };
  },
  listen: function(e) {
    var t = k.appendListener(e);
    return D(1),
      function() {
        D(-1), t();
      };
  }
};
  return N;
};