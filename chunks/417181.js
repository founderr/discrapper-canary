var n, a, o, s = '__lodash_placeholder__',
  i = 1 / 0,
  c = 0 / 0,
  u = [
[
  'ary',
  128
],
[
  'bind',
  1
],
[
  'bindKey',
  2
],
[
  'curry',
  8
],
[
  'curryRight',
  16
],
[
  'flip',
  512
],
[
  'partial',
  32
],
[
  'partialRight',
  64
],
[
  'rearg',
  256
]
  ],
  l = /^\s+|\s+$/g,
  b = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
  f = /\{\n\/\* \[wrapped with (.+)\] \*/,
  h = /,? & /,
  d = /^[-+]0x[0-9a-f]+$/i,
  p = /^0b[01]+$/i,
  v = /^\[object .+?Constructor\]$/,
  y = /^0o[0-7]+$/i,
  g = /^(?:0|[1-9]\d*)$/,
  m = parseInt,
  w = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
  O = 'object' == typeof self && self && self.Object === Object && self,
  k = w || O || Function('return this')();

function E(e, t, r) {
  switch (r.length) {
case 0:
  return e.call(t);
case 1:
  return e.call(t, r[0]);
case 2:
  return e.call(t, r[0], r[1]);
case 3:
  return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}

function x(e) {
  return e != e;
}

function j(e, t) {
  for (var r = -1, n = e.length, a = 0, o = []; ++r < n;) {
var i = e[r];
(i === t || i === s) && (e[r] = s, o[a++] = r);
  }
  return o;
}
var C = Function.prototype,
  M = Object.prototype,
  A = k['__core-js_shared__'];
var _ = (n = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + n : '',
  S = C.toString,
  R = M.hasOwnProperty,
  Z = M.toString,
  P = RegExp('^' + S.call(R).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
  D = Object.create,
  T = Math.max,
  B = Math.min;
var F = (a = z(Object, 'defineProperty'), (o = z.name) && o.length > 2 ? a : void 0);

function N(e) {
  return function() {
var t, r = arguments;
switch (r.length) {
  case 0:
    return new e();
  case 1:
    return new e(r[0]);
  case 2:
    return new e(r[0], r[1]);
  case 3:
    return new e(r[0], r[1], r[2]);
  case 4:
    return new e(r[0], r[1], r[2], r[3]);
  case 5:
    return new e(r[0], r[1], r[2], r[3], r[4]);
  case 6:
    return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
  case 7:
    return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
}
var n = G(t = e.prototype) ? D(t) : {},
  a = e.apply(n, r);
return G(a) ? a : n;
  };
}

function L(e, t, r, n, a, o, s, i, c, u) {
  var l = 128 & t,
b = 1 & t,
f = 2 & t,
h = 24 & t,
d = 512 & t,
p = f ? void 0 : N(e);
  return function v() {
for (var y = arguments.length, m = Array(y), w = y; w--;)
  m[w] = arguments[w];
if (h)
  var O = q(v),
    E = function(e, t) {
      for (var r = e.length, n = 0; r--;)
        e[r] === t && n++;
      return n;
    }(m, O);
if (n && (m = function(e, t, r, n) {
    for (var a = -1, o = e.length, s = r.length, i = -1, c = t.length, u = T(o - s, 0), l = Array(c + u), b = !n; ++i < c;)
      l[i] = t[i];
    for (; ++a < s;)
      (b || a < o) && (l[r[a]] = e[a]);
    for (; u--;)
      l[i++] = e[a++];
    return l;
  }(m, n, a, h)), o && (m = function(e, t, r, n) {
    for (var a = -1, o = e.length, s = -1, i = r.length, c = -1, u = t.length, l = T(o - i, 0), b = Array(l + u), f = !n; ++a < l;)
      b[a] = e[a];
    for (var h = a; ++c < u;)
      b[h + c] = t[c];
    for (; ++s < i;)
      (f || a < o) && (b[h + r[s]] = e[a++]);
    return b;
  }(m, o, s, h)), y -= E, h && y < u) {
  var x = j(m, O);
  return I(e, t, L, v.placeholder, r, m, x, i, c, u - y);
}
var C = b ? r : this,
  M = f ? C[e] : e;
return y = m.length, i ? m = function(e, t) {
  for (var r = e.length, n = B(t.length, r), a = function(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;)
        t[r] = e[r];
      return t;
    }(e); n--;) {
    var o, s, i = t[n];
    o = i, e[n] = (s = null == (s = r) ? 9007199254740991 : s) && ('number' == typeof o || g.test(o)) && o > -1 && o % 1 == 0 && o < s ? a[i] : void 0;
  }
  return e;
}(m, i) : d && y > 1 && m.reverse(), l && c < y && (m.length = c), this && this !== k && this instanceof v && (M = p || N(M)), M.apply(C, m);
  };
}

function I(e, t, r, n, a, o, s, i, c, u) {
  var l = 8 & t;
  t |= l ? 32 : 64, !(4 & (t &= ~(l ? 64 : 32))) && (t &= -4);
  var b = r(e, t, a, l ? o : void 0, l ? s : void 0, l ? void 0 : o, l ? void 0 : s, i, c, u);
  return b.placeholder = n, U(b, e, t);
}

function q(e) {
  return e.placeholder;
}

function z(e, t) {
  var r, n, a, o = (r = e, n = t, null == r ? void 0 : r[n]);
  return !(!G(a = o) || function(e) {
return !!_ && _ in e;
  }(a)) && (function(e) {
var t = G(e) ? Z.call(e) : '';
return '[object Function]' == t || '[object GeneratorFunction]' == t;
  }(a) || function(e) {
var t = !1;
if (null != e && 'function' != typeof e.toString)
  try {
    t = !!(e + '');
  } catch (e) {}
return t;
  }(a) ? P : v).test(function(e) {
if (null != e) {
  try {
    return S.call(e);
  } catch (e) {}
  try {
    return e + '';
  } catch (e) {}
}
return '';
  }(a)) ? o : void 0;
}
var U = F ? function(e, t, r) {
  var n, a, o, s, i, c = t + '';
  return F(e, 'toString', {
configurable: !0,
enumerable: !1,
value: function(e) {
  return function() {
    return e;
  };
}((a = c, i = (s = (o = function(e, t) {
  return ! function(e, t) {
    for (var r = -1, n = e ? e.length : 0; ++r < n && !1 !== t(e[r], r, e););;
  }(u, function(r) {
    var n, a, o = '_.' + r[0];
    if (t & r[1] && (n = e, a = o, !((n ? n.length : 0) && function(e, t, r) {
        if (t != t)
          return function(e, t, r, n) {
            for (var a = e.length, o = r + -1; n ? o-- : ++o < a;)
              if (t(e[o], o, e))
                return o;
            return -1;
          }(e, x, r);
        for (var n = r - 1, a = e.length; ++n < a;)
          if (e[n] === t)
            return n;
        return -1;
      }(n, a, 0) > -1)))
      e.push(o);
  }), e.sort();
}((n = c.match(f)) ? n[1].split(h) : [], r)).length) - 1, o[i] = (s > 1 ? '& ' : '') + o[i], o = o.join(s > 2 ? ', ' : ' '), a.replace(b, '{\n/* [wrapped with ' + o + '] */\n')))
  });
} : function(e) {
  return e;
};

function $(e, t, r) {
  var n = function(e, t, r, n, a, o, s, i) {
var c = 2 & t;
if (!c && 'function' != typeof e)
  throw TypeError('Expected a function');
var u = n ? n.length : 0;
if (!u && (t &= -97, n = a = void 0), s = void 0 === s ? s : T(W(s), 0), i = void 0 === i ? i : W(i), u -= a ? a.length : 0, 64 & t) {
  var l = n,
    b = a;
  n = a = void 0;
}
var f = [
  e,
  t,
  r,
  n,
  a,
  l,
  b,
  o,
  s,
  i
];
if (e = f[0], t = f[1], r = f[2], n = f[3], a = f[4], !(i = f[9] = null == f[9] ? c ? 0 : e.length : T(f[9] - u, 0)) && 24 & t && (t &= -25), t && 1 != t) {
  ;
  if (8 == t || 16 == t) {
    ;
    h = e, d = t, p = i, v = N(h), R = function e() {
      for (var t = arguments.length, r = Array(t), n = t, a = q(e); n--;)
        r[n] = arguments[n];
      var o = t < 3 && r[0] !== a && r[t - 1] !== a ? [] : j(r, a);
      return (t -= o.length) < p ? I(h, d, L, e.placeholder, void 0, r, o, void 0, void 0, p - t) : E(this && this !== k && this instanceof e ? v : h, this, r);
    };
  } else if (32 != t && 33 != t || a.length)
    R = L.apply(void 0, f);
  else {
    ;
    y = e, g = t, m = r, w = n, O = 1 & g, x = N(y), R = function e() {
      for (var t = -1, r = arguments.length, n = -1, a = w.length, o = Array(a + r), s = this && this !== k && this instanceof e ? x : y; ++n < a;)
        o[n] = w[n];
      for (; r--;)
        o[n++] = arguments[++t];
      return E(s, O ? m : this, o);
    };
  }
} else {
  var h, d, p, v, y, g, m, w, O, x, C, M, A, _, S, R = (C = e, M = t, A = r, _ = 1 & M, S = N(C), function e() {
    return (this && this !== k && this instanceof e ? S : C).apply(_ ? A : this, arguments);
  });
}
return U(R, e, t);
  }(e, 8, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
  return n.placeholder = $.placeholder, n;
}

function G(e) {
  var t = typeof e;
  return !!e && ('object' == t || 'function' == t);
}

function W(e) {
  var t, r = (t = e) ? (t = function(e) {
  if ('number' == typeof e)
    return e;
  if ('symbol' == typeof(t = e) || (r = t) && 'object' == typeof r && '[object Symbol]' == Z.call(t))
    return c;
  if (G(e)) {
    var t, r, n = 'function' == typeof e.valueOf ? e.valueOf() : e;
    e = G(n) ? n + '' : n;
  }
  if ('string' != typeof e)
    return 0 === e ? e : +e;
  e = e.replace(l, '');
  var a = p.test(e);
  return a || y.test(e) ? m(e.slice(2), a ? 2 : 8) : d.test(e) ? c : +e;
}(t)) === i || t === -i ? (t < 0 ? -1 : 1) * 1.7976931348623157e+308 : t == t ? t : 0 : 0 === t ? t : 0,
n = r % 1;
  return r == r ? n ? r - n : r : 0;
}
$.placeholder = {}, e.exports = $;