"use strict";
e("422200");
var n = e("859514"),
  i = e("503486"),
  o = e("868822"),
  u = e("64980"),
  a = e("814026"),
  f = e("768897"),
  s = e("484784"),
  c = e("18563"),
  l = e("985797"),
  h = e("89157"),
  p = e("662918"),
  v = e("515011"),
  d = e("88052"),
  g = e("125359"),
  y = e("59393"),
  b = e("886639"),
  m = e("681802"),
  _ = e("418855"),
  w = e("472960"),
  E = e("998270"),
  k = e("148066"),
  A = e("16447"),
  x = e("55082"),
  R = e("579697"),
  S = e("79807"),
  O = e("174669"),
  T = e("492470"),
  I = O("iterator"),
  M = "URLSearchParams",
  L = M + "Iterator",
  j = v.set,
  P = v.getterFor(M),
  U = v.getterFor(L),
  N = Object.getOwnPropertyDescriptor,
  B = function(t) {
    if (!a) return i[t];
    var r = N(i, t);
    return r && r.value
  },
  C = B("fetch"),
  q = B("Request"),
  Headers = B("Headers"),
  D = q && q.prototype,
  z = Headers && Headers.prototype,
  RegExp = i.RegExp,
  TypeError = i.TypeError,
  F = i.decodeURIComponent,
  H = i.encodeURIComponent,
  W = u("".charAt),
  $ = u([].join),
  Z = u([].push),
  G = u("".replace),
  J = u([].shift),
  X = u([].splice),
  Y = u("".split),
  V = u("".slice),
  K = /\+/g,
  Q = [, , , , ],
  tt = function(t) {
    try {
      return F(t)
    } catch (r) {
      return t
    }
  },
  tr = function(t) {
    var r, e = G(t, K, " "),
      n = 4;
    try {
      return F(e)
    } catch (t) {
      for (; n;) {
        ;
        e = G(e, Q[(r = n--) - 1] || (Q[r - 1] = RegExp("((?:%[\\da-f]{2}){" + r + "})", "gi")), tt)
      }
      return e
    }
  },
  te = /[!'()~]|%20/g,
  tn = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  ti = function(t) {
    return tn[t]
  },
  to = function(t) {
    return G(H(t), te, ti)
  },
  tu = p(function(t, r) {
    j(this, {
      type: L,
      iterator: x(P(t).entries),
      kind: r
    })
  }, "Iterator", function() {
    var t = U(this),
      r = t.kind,
      e = t.iterator.next(),
      n = e.value;
    return !e.done && (e.value = "keys" === r ? n.key : "values" === r ? n.value : [n.key, n.value]), e
  }, !0),
  ta = function(t) {
    this.entries = [], this.url = null, void 0 !== t && (w(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === W(t, 0) ? V(t, 1) : t : E(t)))
  };
ta.prototype = {
  type: M,
  bindURL: function(t) {
    this.url = t, this.update()
  },
  parseObject: function(t) {
    var r, e, n, i, u, a, f, s = R(t);
    if (s)
      for (e = (r = x(t, s)).next; !(n = o(e, r)).done;) {
        if ((a = o(u = (i = x(_(n.value))).next, i)).done || (f = o(u, i)).done || !o(u, i).done) throw TypeError("Expected sequence with length 2");
        Z(this.entries, {
          key: E(a.value),
          value: E(f.value)
        })
      } else
        for (var c in t) y(t, c) && Z(this.entries, {
          key: c,
          value: E(t[c])
        })
  },
  parseQuery: function(t) {
    if (t) {
      for (var r, e, n = Y(t, "&"), i = 0; i < n.length;)(r = n[i++]).length && (e = Y(r, "="), Z(this.entries, {
        key: tr(J(e)),
        value: tr($(e, "="))
      }))
    }
  },
  serialize: function() {
    for (var t, r = this.entries, e = [], n = 0; n < r.length;) Z(e, to((t = r[n++]).key) + "=" + to(t.value));
    return $(e, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var tf = function() {
    d(this, ts);
    var t = arguments.length > 0 ? arguments[0] : void 0,
      r = j(this, new ta(t));
    !a && (this.size = r.entries.length)
  },
  ts = tf.prototype;
if (l(ts, {
    append: function(t, r) {
      var e = P(this);
      S(arguments.length, 2), Z(e.entries, {
        key: E(t),
        value: E(r)
      }), !a && this.length++, e.updateURL()
    },
    delete: function(t) {
      for (var r = P(this), e = S(arguments.length, 1), n = r.entries, i = E(t), o = e < 2 ? void 0 : arguments[1], u = void 0 === o ? o : E(o), f = 0; f < n.length;) {
        var s = n[f];
        if (s.key === i && (void 0 === u || s.value === u)) {
          if (X(n, f, 1), void 0 !== u) break
        } else f++
      }!a && (this.size = n.length), r.updateURL()
    },
    get: function(t) {
      var r = P(this).entries;
      S(arguments.length, 1);
      for (var e = E(t), n = 0; n < r.length; n++)
        if (r[n].key === e) return r[n].value;
      return null
    },
    getAll: function(t) {
      var r = P(this).entries;
      S(arguments.length, 1);
      for (var e = E(t), n = [], i = 0; i < r.length; i++) r[i].key === e && Z(n, r[i].value);
      return n
    },
    has: function(t) {
      for (var r = P(this).entries, e = S(arguments.length, 1), n = E(t), i = e < 2 ? void 0 : arguments[1], o = void 0 === i ? i : E(i), u = 0; u < r.length;) {
        var a = r[u++];
        if (a.key === n && (void 0 === o || a.value === o)) return !0
      }
      return !1
    },
    set: function(t, r) {
      var e, n = P(this);
      S(arguments.length, 1);
      for (var i = n.entries, o = !1, u = E(t), f = E(r), s = 0; s < i.length; s++)(e = i[s]).key === u && (o ? X(i, s--, 1) : (o = !0, e.value = f));
      !o && Z(i, {
        key: u,
        value: f
      }), !a && (this.size = i.length), n.updateURL()
    },
    sort: function() {
      var t = P(this);
      T(t.entries, function(t, r) {
        return t.key > r.key ? 1 : -1
      }), t.updateURL()
    },
    forEach: function(t) {
      for (var r, e = P(this).entries, n = b(t, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < e.length;) n((r = e[i++]).value, r.key, this)
    },
    keys: function() {
      return new tu(this, "keys")
    },
    values: function() {
      return new tu(this, "values")
    },
    entries: function() {
      return new tu(this, "entries")
    }
  }, {
    enumerable: !0
  }), s(ts, I, ts.entries, {
    name: "entries"
  }), s(ts, "toString", function() {
    return P(this).serialize()
  }, {
    enumerable: !0
  }), a && c(ts, "size", {
    get: function() {
      return P(this).entries.length
    },
    configurable: !0,
    enumerable: !0
  }), h(tf, M), n({
    global: !0,
    constructor: !0,
    forced: !f
  }, {
    URLSearchParams: tf
  }), !f && g(Headers)) {
  var tc = u(z.has),
    tl = u(z.set),
    th = function(t) {
      if (w(t)) {
        var r, e = t.body;
        if (m(e) === M) return !tc(r = t.headers ? new Headers(t.headers) : new Headers, "content-type") && tl(r, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), k(t, {
          body: A(0, E(e)),
          headers: A(0, r)
        })
      }
      return t
    };
  if (g(C) && n({
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      fetch: function(t) {
        return C(t, arguments.length > 1 ? th(arguments[1]) : {})
      }
    }), g(q)) {
    var tp = function(t) {
      return d(this, D), new q(t, arguments.length > 1 ? th(arguments[1]) : {})
    };
    D.constructor = tp, tp.prototype = D, n({
      global: !0,
      constructor: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      Request: tp
    })
  }
}
t.exports = {
  URLSearchParams: tf,
  getState: P
}