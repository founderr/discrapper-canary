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

function d(e) {
  return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}

function h(e) {
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
  'string' == typeof e ? (i = h(e)).state = t : (void 0 === (i = c({}, e)).pathname && (i.pathname = ''), i.search ? '?' !== i.search.charAt(0) && (i.search = '?' + i.search) : i.search = '', i.hash ? '#' !== i.hash.charAt(0) && (i.hash = '#' + i.hash) : i.hash = '', void 0 !== t && void 0 === i.state && (i.state = t));
  try {
i.pathname = decodeURI(i.pathname);
  } catch (e) {
throw e instanceof URIError ? URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  return n && (i.key = n), r ? i.pathname ? '/' !== i.pathname.charAt(0) && (i.pathname = o(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = '/'), i;
}

function m() {
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
var g = !('undefined' == typeof window || !window.document || !window.document.createElement);

function _(e, t) {
  t(window.confirm(e));
}
var S = 'popstate',
  w = 'hashchange';

function E() {
  try {
return window.history.state || {};
  } catch (e) {
return {};
  }
}
var y = 'hashchange',
  T = {
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

function I(e) {
  var t = e.indexOf('#');
  return -1 === t ? e : e.slice(0, t);
}

function b() {
  var e = window.location.href,
t = e.indexOf('#');
  return -1 === t ? '' : e.substring(t + 1);
}

function A(e) {
  window.location.replace(I(window.location.href) + '#' + e);
}

function O(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
t.createBrowserHistory = function(e) {
  void 0 === e && (e = {}), g || s(!1);
  var t, n = window.history,
r = (-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone')) && window.history && 'pushState' in window.history,
i = -1 !== window.navigator.userAgent.indexOf('Trident'),
o = e,
a = o.forceRefresh,
l = void 0 !== a && a,
h = o.getUserConfirmation,
y = void 0 === h ? _ : h,
T = o.keyLength,
I = void 0 === T ? 6 : T,
b = e.basename ? d(u(e.basename)) : '';

  function A(e) {
var t = e || {},
  n = t.key,
  r = t.state,
  i = window.location,
  o = i.pathname + i.search + i.hash;
return b && (o = f(o, b)), p(o, r, n);
  }

  function O() {
return Math.random().toString(36).substr(2, I);
  }
  var x = m();

  function N(e) {
c(Z, e), Z.length = n.length, x.notifyListeners(Z.location, Z.action);
  }

  function P(e) {
void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS') || G(A(e.state));
  }

  function C() {
G(A(E()));
  }
  var R = !1;

  function G(e) {
R ? (R = !1, N()) : x.confirmTransitionTo(e, 'POP', y, function(t) {
  var n, r, i, o, a;
  t ? N({
    action: 'POP',
    location: e
  }) : (n = e, r = Z.location, -1 === (i = k.indexOf(r.key)) && (i = 0), -1 === (o = k.indexOf(n.key)) && (o = 0), (a = i - o) && (R = !0, M(a)));
});
  }
  var U = A(E()),
k = [U.key];

  function D(e) {
return b + v(e);
  }

  function M(e) {
n.go(e);
  }
  var L = 0;

  function $(e) {
1 === (L += e) && 1 === e ? (window.addEventListener(S, P), i && window.addEventListener(w, C)) : 0 === L && (window.removeEventListener(S, P), i && window.removeEventListener(w, C));
  }
  var z = !1,
Z = {
  length: n.length,
  action: 'POP',
  location: U,
  createHref: D,
  push: function(e, t) {
    var i = p(e, t, O(), Z.location);
    x.confirmTransitionTo(i, 'PUSH', y, function(e) {
      if (e) {
        var t = D(i),
          o = i.key,
          a = i.state;
        if (r) {
          if (n.pushState({
              key: o,
              state: a
            }, null, t), l)
            window.location.href = t;
          else {
            var s = k.indexOf(Z.location.key),
              c = k.slice(0, s + 1);
            c.push(i.key), k = c, N({
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
      o = p(e, t, O(), Z.location);
    x.confirmTransitionTo(o, i, y, function(e) {
      if (e) {
        var t = D(o),
          a = o.key,
          s = o.state;
        if (r) {
          if (n.replaceState({
              key: a,
              state: s
            }, null, t), l)
            window.location.replace(t);
          else {
            var c = k.indexOf(Z.location.key); -
            1 !== c && (k[c] = o.key), N({
              action: i,
              location: o
            });
          }
        } else
          window.location.replace(t);
      }
    });
  },
  go: M,
  goBack: function() {
    M(-1);
  },
  goForward: function() {
    M(1);
  },
  block: function(e) {
    void 0 === e && (e = !1);
    var t = x.setPrompt(e);
    return z || ($(1), z = !0),
      function() {
        return z && (z = !1, $(-1)), t();
      };
  },
  listen: function(e) {
    var t = x.appendListener(e);
    return $(1),
      function() {
        $(-1), t();
      };
  }
};
  return Z;
};