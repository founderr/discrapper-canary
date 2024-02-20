"use strict";
n("422200");
var r = n("859514"),
  a = n("503486"),
  o = n("868822"),
  i = n("64980"),
  u = n("814026"),
  s = n("768897"),
  l = n("484784"),
  c = n("18563"),
  f = n("985797"),
  d = n("89157"),
  p = n("662918"),
  h = n("515011"),
  m = n("88052"),
  _ = n("125359"),
  y = n("59393"),
  g = n("886639"),
  v = n("681802"),
  b = n("418855"),
  M = n("472960"),
  w = n("998270"),
  k = n("148066"),
  L = n("16447"),
  D = n("55082"),
  S = n("579697"),
  T = n("79807"),
  Y = n("174669"),
  x = n("492470"),
  E = Y("iterator"),
  O = "URLSearchParams",
  P = O + "Iterator",
  j = h.set,
  C = h.getterFor(O),
  H = h.getterFor(P),
  N = Object.getOwnPropertyDescriptor,
  F = function(e) {
    if (!u) return a[e];
    var t = N(a, e);
    return t && t.value
  },
  I = F("fetch"),
  A = F("Request"),
  Headers = F("Headers"),
  R = A && A.prototype,
  W = Headers && Headers.prototype,
  RegExp = a.RegExp,
  TypeError = a.TypeError,
  z = a.decodeURIComponent,
  U = a.encodeURIComponent,
  B = i("".charAt),
  K = i([].join),
  q = i([].push),
  J = i("".replace),
  V = i([].shift),
  G = i([].splice),
  $ = i("".split),
  Q = i("".slice),
  Z = /\+/g,
  X = [, , , , ],
  ee = function(e) {
    try {
      return z(e)
    } catch (t) {
      return e
    }
  },
  et = function(e) {
    var t, n = J(e, Z, " "),
      r = 4;
    try {
      return z(n)
    } catch (e) {
      for (; r;) {
        ;
        n = J(n, X[(t = r--) - 1] || (X[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi")), ee)
      }
      return n
    }
  },
  en = /[!'()~]|%20/g,
  er = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  ea = function(e) {
    return er[e]
  },
  eo = function(e) {
    return J(U(e), en, ea)
  },
  ei = p(function(e, t) {
    j(this, {
      type: P,
      iterator: D(C(e).entries),
      kind: t
    })
  }, "Iterator", function() {
    var e = H(this),
      t = e.kind,
      n = e.iterator.next(),
      r = n.value;
    return !n.done && (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
  }, !0),
  eu = function(e) {
    this.entries = [], this.url = null, void 0 !== e && (M(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === B(e, 0) ? Q(e, 1) : e : w(e)))
  };
eu.prototype = {
  type: O,
  bindURL: function(e) {
    this.url = e, this.update()
  },
  parseObject: function(e) {
    var t, n, r, a, i, u, s, l = S(e);
    if (l)
      for (n = (t = D(e, l)).next; !(r = o(n, t)).done;) {
        if ((u = o(i = (a = D(b(r.value))).next, a)).done || (s = o(i, a)).done || !o(i, a).done) throw TypeError("Expected sequence with length 2");
        q(this.entries, {
          key: w(u.value),
          value: w(s.value)
        })
      } else
        for (var c in e) y(e, c) && q(this.entries, {
          key: c,
          value: w(e[c])
        })
  },
  parseQuery: function(e) {
    if (e) {
      for (var t, n, r = $(e, "&"), a = 0; a < r.length;)(t = r[a++]).length && (n = $(t, "="), q(this.entries, {
        key: et(V(n)),
        value: et(K(n, "="))
      }))
    }
  },
  serialize: function() {
    for (var e, t = this.entries, n = [], r = 0; r < t.length;) q(n, eo((e = t[r++]).key) + "=" + eo(e.value));
    return K(n, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var es = function() {
    m(this, el);
    var e = arguments.length > 0 ? arguments[0] : void 0,
      t = j(this, new eu(e));
    !u && (this.size = t.entries.length)
  },
  el = es.prototype;
if (f(el, {
    append: function(e, t) {
      var n = C(this);
      T(arguments.length, 2), q(n.entries, {
        key: w(e),
        value: w(t)
      }), !u && this.length++, n.updateURL()
    },
    delete: function(e) {
      for (var t = C(this), n = T(arguments.length, 1), r = t.entries, a = w(e), o = n < 2 ? void 0 : arguments[1], i = void 0 === o ? o : w(o), s = 0; s < r.length;) {
        var l = r[s];
        if (l.key === a && (void 0 === i || l.value === i)) {
          if (G(r, s, 1), void 0 !== i) break
        } else s++
      }!u && (this.size = r.length), t.updateURL()
    },
    get: function(e) {
      var t = C(this).entries;
      T(arguments.length, 1);
      for (var n = w(e), r = 0; r < t.length; r++)
        if (t[r].key === n) return t[r].value;
      return null
    },
    getAll: function(e) {
      var t = C(this).entries;
      T(arguments.length, 1);
      for (var n = w(e), r = [], a = 0; a < t.length; a++) t[a].key === n && q(r, t[a].value);
      return r
    },
    has: function(e) {
      for (var t = C(this).entries, n = T(arguments.length, 1), r = w(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : w(a), i = 0; i < t.length;) {
        var u = t[i++];
        if (u.key === r && (void 0 === o || u.value === o)) return !0
      }
      return !1
    },
    set: function(e, t) {
      var n, r = C(this);
      T(arguments.length, 1);
      for (var a = r.entries, o = !1, i = w(e), s = w(t), l = 0; l < a.length; l++)(n = a[l]).key === i && (o ? G(a, l--, 1) : (o = !0, n.value = s));
      !o && q(a, {
        key: i,
        value: s
      }), !u && (this.size = a.length), r.updateURL()
    },
    sort: function() {
      var e = C(this);
      x(e.entries, function(e, t) {
        return e.key > t.key ? 1 : -1
      }), e.updateURL()
    },
    forEach: function(e) {
      for (var t, n = C(this).entries, r = g(e, arguments.length > 1 ? arguments[1] : void 0), a = 0; a < n.length;) r((t = n[a++]).value, t.key, this)
    },
    keys: function() {
      return new ei(this, "keys")
    },
    values: function() {
      return new ei(this, "values")
    },
    entries: function() {
      return new ei(this, "entries")
    }
  }, {
    enumerable: !0
  }), l(el, E, el.entries, {
    name: "entries"
  }), l(el, "toString", function() {
    return C(this).serialize()
  }, {
    enumerable: !0
  }), u && c(el, "size", {
    get: function() {
      return C(this).entries.length
    },
    configurable: !0,
    enumerable: !0
  }), d(es, O), r({
    global: !0,
    constructor: !0,
    forced: !s
  }, {
    URLSearchParams: es
  }), !s && _(Headers)) {
  var ec = i(W.has),
    ef = i(W.set),
    ed = function(e) {
      if (M(e)) {
        var t, n = e.body;
        if (v(n) === O) return !ec(t = e.headers ? new Headers(e.headers) : new Headers, "content-type") && ef(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), k(e, {
          body: L(0, w(n)),
          headers: L(0, t)
        })
      }
      return e
    };
  if (_(I) && r({
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      fetch: function(e) {
        return I(e, arguments.length > 1 ? ed(arguments[1]) : {})
      }
    }), _(A)) {
    var ep = function(e) {
      return m(this, R), new A(e, arguments.length > 1 ? ed(arguments[1]) : {})
    };
    R.constructor = ep, ep.prototype = R, r({
      global: !0,
      constructor: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      Request: ep
    })
  }
}
e.exports = {
  URLSearchParams: es,
  getState: C
}