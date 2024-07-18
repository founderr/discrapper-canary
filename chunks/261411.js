r.d(t, {
  Z: function() {
return i;
  }
});
var n = r(870271);

function a(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++)
n[r] = e[r];
  return n;
}

function o(e, t, r) {
  var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
  if ('Object' === e) {
var s = Object.getOwnPropertyNames(t);
r && s.sort(!0 === r ? void 0 : r), i = {
  entries: (s = s.slice(n, o + 1)).map(function(e) {
    return {
      key: e,
      value: t[e]
    };
  })
};
  } else if ('Array' === e)
i = {
  entries: t.slice(n, o + 1).map(function(e, t) {
    return {
      key: t + n,
      value: e
    };
  })
};
  else {
var i, c, u = 0,
  l = [],
  b = !0,
  f = 'function' == typeof t.set,
  h = function(e, t) {
    var r = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
    if (!r) {
      if (Array.isArray(e) || (r = function(e, t) {
          if (e) {
            if ('string' == typeof e)
              return a(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if ('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)
              return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return a(e, t);
          }
        }(e))) {
        r && (e = r);
        var n = 0,
          o = function() {};
        return {
          s: o,
          n: function() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function(e) {
            throw e;
          },
          f: o
        };
      }
      throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s, i = !0,
      c = !1;
    return {
      s: function() {
        r = r.call(e);
      },
      n: function() {
        var e = r.next();
        return i = e.done, e;
      },
      e: function(e) {
        c = !0, s = e;
      },
      f: function() {
        try {
          !i && null != r.return && r.return();
        } finally {
          if (c)
            throw s;
        }
      }
    };
  }(t);
try {
  for (h.s(); !(c = h.n()).done;) {
    var d = c.value;
    if (u > o) {
      b = !1;
      break;
    }
    n <= u && (f && Array.isArray(d) ? 'string' == typeof d[0] || 'number' == typeof d[0] ? l.push({
      key: d[0],
      value: d[1]
    }) : l.push({
      key: '[entry '.concat(u, ']'),
      value: {
        '[key]': d[0],
        '[value]': d[1]
      }
    }) : l.push({
      key: u,
      value: d
    })), u++;
  }
} catch (e) {
  h.e(e);
} finally {
  h.f();
}
i = {
  hasMore: !b,
  entries: l
};
  }
  return i;
}

function s(e, t, r) {
  for (var n = []; t - e > r * r;)
r *= r;
  for (var a = e; a <= t; a += r)
n.push({
  from: a,
  to: Math.min(t, a + r - 1)
});
  return n;
}

function i(e, t, r, a) {
  var i, c, u, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
b = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
f = o.bind(null, e, t, r);
  if (!a)
return f().entries;
  var h = b < 1 / 0;
  var d = Math.min(b - l, (i = e, c = t, 'Object' === i ? Object.keys(c).length : 'Array' === i ? c.length : 1 / 0));
  if ('Iterable' !== e) {
if (d <= a || a < 7)
  return f(l, b).entries;
  } else if (d <= a && !h)
return f(l, b).entries;
  if ('Iterable' === e) {
var p = f(l, l + a - 1),
  v = p.hasMore,
  y = p.entries;
u = v ? [].concat((0, n.Z)(y), (0, n.Z)(s(l + a, l + 2 * a - 1, a))) : y;
  } else
u = h ? s(l, b, a) : [].concat((0, n.Z)(f(0, a - 5).entries), (0, n.Z)(s(a - 4, d - 5, a)), (0, n.Z)(f(d - 4, d - 1).entries));
  return u;
}