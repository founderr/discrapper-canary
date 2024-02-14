"use strict";
e("414889");
var n, i = e("859514"),
  o = e("814026"),
  u = e("768897"),
  a = e("503486"),
  f = e("886639"),
  s = e("64980"),
  c = e("484784"),
  l = e("18563"),
  h = e("88052"),
  p = e("59393"),
  v = e("862799"),
  d = e("753580"),
  g = e("355540"),
  y = e("696397").codeAt,
  b = e("682714"),
  m = e("998270"),
  _ = e("89157"),
  w = e("79807"),
  E = e("753062"),
  k = e("515011"),
  A = k.set,
  x = k.getterFor("URL"),
  URLSearchParams = E.URLSearchParams,
  R = E.getState,
  S = a.URL,
  TypeError = a.TypeError,
  O = a.parseInt,
  T = Math.floor,
  I = Math.pow,
  M = s("".charAt),
  L = s(/./.exec),
  j = s([].join),
  P = s(1..toString),
  U = s([].pop),
  N = s([].push),
  B = s("".replace),
  C = s([].shift),
  q = s("".split),
  D = s("".slice),
  z = s("".toLowerCase),
  F = s([].unshift),
  H = "Invalid scheme",
  W = "Invalid host",
  $ = "Invalid port",
  Z = /[a-z]/i,
  G = /[\d+-.a-z]/i,
  J = /\d/,
  X = /^0x/i,
  Y = /^[0-7]+$/,
  V = /^\d+$/,
  K = /^[\da-f]+$/i,
  Q = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  tt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  tr = /^[\u0000-\u0020]+/,
  te = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  tn = /[\t\n\r]/g,
  ti = function(t) {
    var r, e, n, i, o, u, a, f = q(t, ".");
    if (f.length && "" === f[f.length - 1] && f.length--, (r = f.length) > 4) return t;
    for (n = 0, e = []; n < r; n++) {
      if ("" === (i = f[n])) return t;
      if (o = 10, i.length > 1 && "0" === M(i, 0) && (o = L(X, i) ? 16 : 8, i = D(i, 8 === o ? 1 : 2)), "" === i) u = 0;
      else {
        if (!L(10 === o ? V : 8 === o ? Y : K, i)) return t;
        u = O(i, o)
      }
      N(e, u)
    }
    for (n = 0; n < r; n++)
      if (u = e[n], n === r - 1) {
        if (u >= I(256, 5 - r)) return null
      } else if (u > 255) return null;
    for (n = 0, a = U(e); n < e.length; n++) a += e[n] * I(256, 3 - n);
    return a
  },
  to = function(t) {
    var r, e, n, i, o, u, a, f = [0, 0, 0, 0, 0, 0, 0, 0],
      s = 0,
      c = null,
      l = 0,
      h = function() {
        return M(t, l)
      };
    if (":" === h()) {
      if (":" !== M(t, 1)) return;
      l += 2, c = ++s
    }
    for (; h();) {
      if (8 === s) return;
      if (":" === h()) {
        if (null !== c) return;
        l++, c = ++s;
        continue
      }
      for (r = e = 0; e < 4 && L(K, h());) r = 16 * r + O(h(), 16), l++, e++;
      if ("." === h()) {
        if (0 === e) return;
        if (l -= e, s > 6) return;
        for (n = 0; h();) {
          if (i = null, n > 0) {
            if ("." !== h() || !(n < 4)) return;
            l++
          }
          if (!L(J, h())) return;
          for (; L(J, h());) {
            if (o = O(h(), 10), null === i) i = o;
            else {
              if (0 === i) return;
              i = 10 * i + o
            }
            if (i > 255) return;
            l++
          }
          f[s] = 256 * f[s] + i, (2 == ++n || 4 === n) && s++
        }
        if (4 !== n) return;
        break
      }
      if (":" === h()) {
        if (l++, !h()) return
      } else if (h()) return;
      f[s++] = r
    }
    if (null !== c)
      for (u = s - c, s = 7; 0 !== s && u > 0;) a = f[s], f[s--] = f[c + u - 1], f[c + --u] = a;
    else if (8 !== s) return;
    return f
  },
  tu = function(t) {
    for (var r = null, e = 1, n = null, i = 0, o = 0; o < 8; o++) 0 !== t[o] ? (i > e && (r = n, e = i), n = null, i = 0) : (null === n && (n = o), ++i);
    return i > e && (r = n, e = i), r
  },
  ta = function(t) {
    var r, e, n, i;
    if ("number" == typeof t) {
      for (e = 0, r = []; e < 4; e++) F(r, t % 256), t = T(t / 256);
      return j(r, ".")
    }
    if ("object" == typeof t) {
      for (e = 0, r = "", n = tu(t); e < 8; e++)(!i || 0 !== t[e]) && (i && (i = !1), n === e ? (r += e ? ":" : "::", i = !0) : (r += P(t[e], 16), e < 7 && (r += ":")));
      return "[" + r + "]"
    }
    return t
  },
  tf = {},
  ts = v({}, tf, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  tc = v({}, ts, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  tl = v({}, tc, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
  th = function(t, r) {
    var e = y(t, 0);
    return e > 32 && e < 127 && !p(r, t) ? t : encodeURIComponent(t)
  },
  tp = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  tv = function(t, r) {
    var e;
    return 2 === t.length && L(Z, M(t, 0)) && (":" === (e = M(t, 1)) || !r && "|" === e)
  },
  td = function(t) {
    var r;
    return t.length > 1 && tv(D(t, 0, 2)) && (2 === t.length || "/" === (r = M(t, 2)) || "\\" === r || "?" === r || "#" === r)
  },
  tg = {},
  ty = {},
  tb = {},
  tm = {},
  t_ = {},
  tw = {},
  tE = {},
  tk = {},
  tA = {},
  tx = {},
  tR = {},
  tS = {},
  tO = {},
  tT = {},
  tI = {},
  tM = {},
  tL = {},
  tj = {},
  tP = {},
  tU = {},
  tN = {},
  tB = function(t, r, e) {
    var n, i, o, u = m(t);
    if (r) {
      if (i = this.parse(u)) throw TypeError(i);
      this.searchParams = null
    } else {
      if (void 0 !== e && (n = new tB(e, !0)), i = this.parse(u, null, n)) throw TypeError(i);
      (o = R(new URLSearchParams)).bindURL(this), this.searchParams = o
    }
  };
tB.prototype = {
  type: "URL",
  parse: function(t, r, e) {
    var i = r || tg,
      o = 0,
      u = "",
      a = !1,
      f = !1,
      s = !1;
    for (t = m(t), !r && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, t = B(t, tr, ""), t = B(t, te, "$1")), c = d(t = B(t, tn, "")); o <= c.length;) {
      switch (l = c[o], i) {
        case tg:
          if (l && L(Z, l)) u += z(l), i = ty;
          else {
            if (r) return H;
            i = tb;
            continue
          }
          break;
        case ty:
          if (l && (L(G, l) || "+" === l || "-" === l || "." === l)) u += z(l);
          else if (":" === l) {
            if (r && (this.isSpecial() !== p(tp, u) || "file" === u && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
            if (this.scheme = u, r) {
              this.isSpecial() && tp[this.scheme] === this.port && (this.port = null);
              return
            }
            u = "", "file" === this.scheme ? i = tT : this.isSpecial() && e && e.scheme === this.scheme ? i = tm : this.isSpecial() ? i = tk : "/" === c[o + 1] ? (i = t_, o++) : (this.cannotBeABaseURL = !0, N(this.path, ""), i = tP)
          } else {
            if (r) return H;
            u = "", i = tb, o = 0;
            continue
          }
          break;
        case tb:
          if (!e || e.cannotBeABaseURL && "#" !== l) return H;
          if (e.cannotBeABaseURL && "#" === l) {
            this.scheme = e.scheme, this.path = g(e.path), this.query = e.query, this.fragment = "", this.cannotBeABaseURL = !0, i = tN;
            break
          }
          i = "file" === e.scheme ? tT : tw;
          continue;
        case tm:
          if ("/" === l && "/" === c[o + 1]) i = tA, o++;
          else {
            i = tw;
            continue
          }
          break;
        case t_:
          if ("/" === l) {
            i = tx;
            break
          }
          i = tj;
          continue;
        case tw:
          if (this.scheme = e.scheme, l === n) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = e.query;
          else if ("/" === l || "\\" === l && this.isSpecial()) i = tE;
          else if ("?" === l) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = "", i = tU;
          else if ("#" === l) this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.query = e.query, this.fragment = "", i = tN;
          else {
            this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, this.path = g(e.path), this.path.length--, i = tj;
            continue
          }
          break;
        case tE:
          if (this.isSpecial() && ("/" === l || "\\" === l)) i = tA;
          else if ("/" === l) i = tx;
          else {
            this.username = e.username, this.password = e.password, this.host = e.host, this.port = e.port, i = tj;
            continue
          }
          break;
        case tk:
          if (i = tA, "/" !== l || "/" !== M(u, o + 1)) continue;
          o++;
          break;
        case tA:
          if ("/" !== l && "\\" !== l) {
            i = tx;
            continue
          }
          break;
        case tx:
          if ("@" === l) {
            a && (u = "%40" + u), a = !0, h = d(u);
            for (var c, l, h, v, y, b, _ = 0; _ < h.length; _++) {
              var w = h[_];
              if (":" === w && !s) {
                s = !0;
                continue
              }
              var E = th(w, tl);
              s ? this.password += E : this.username += E
            }
            u = ""
          } else if (l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
            if (a && "" === u) return "Invalid authority";
            o -= d(u).length + 1, u = "", i = tR
          } else u += l;
          break;
        case tR:
        case tS:
          if (r && "file" === this.scheme) {
            i = tM;
            continue
          }
          if (":" !== l || f) {
            if (l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
              if (this.isSpecial() && "" === u) return W;
              if (r && "" === u && (this.includesCredentials() || null !== this.port)) return;
              if (v = this.parseHost(u)) return v;
              if (u = "", i = tL, r) return;
              continue
            } else "[" === l ? f = !0 : "]" === l && (f = !1), u += l
          } else {
            if ("" === u) return W;
            if (v = this.parseHost(u)) return v;
            if (u = "", i = tO, r === tS) return
          }
          break;
        case tO:
          if (L(J, l)) u += l;
          else {
            if (!(l === n || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) && !r) return $;
            if ("" !== u) {
              var k = O(u, 10);
              if (k > 65535) return $;
              this.port = this.isSpecial() && k === tp[this.scheme] ? null : k, u = ""
            }
            if (r) return;
            i = tL;
            continue
          }
          break;
        case tT:
          if (this.scheme = "file", "/" === l || "\\" === l) i = tI;
          else if (e && "file" === e.scheme) switch (l) {
            case n:
              this.host = e.host, this.path = g(e.path), this.query = e.query;
              break;
            case "?":
              this.host = e.host, this.path = g(e.path), this.query = "", i = tU;
              break;
            case "#":
              this.host = e.host, this.path = g(e.path), this.query = e.query, this.fragment = "", i = tN;
              break;
            default:
              !td(j(g(c, o), "")) && (this.host = e.host, this.path = g(e.path), this.shortenPath()), i = tj;
              continue
          } else {
            i = tj;
            continue
          }
          break;
        case tI:
          if ("/" === l || "\\" === l) {
            i = tM;
            break
          }
          e && "file" === e.scheme && !td(j(g(c, o), "")) && (tv(e.path[0], !0) ? N(this.path, e.path[0]) : this.host = e.host), i = tj;
          continue;
        case tM:
          if (l === n || "/" === l || "\\" === l || "?" === l || "#" === l) {
            if (!r && tv(u)) i = tj;
            else if ("" === u) {
              if (this.host = "", r) return;
              i = tL
            } else {
              if (v = this.parseHost(u)) return v;
              if ("localhost" === this.host && (this.host = ""), r) return;
              u = "", i = tL
            }
            continue
          }
          u += l;
          break;
        case tL:
          if (this.isSpecial()) {
            if (i = tj, "/" !== l && "\\" !== l) continue
          } else if (r || "?" !== l) {
            if (r || "#" !== l) {
              if (l !== n && (i = tj, "/" !== l)) continue
            } else this.fragment = "", i = tN
          } else this.query = "", i = tU;
          break;
        case tj:
          if (l === n || "/" === l || "\\" === l && this.isSpecial() || !r && ("?" === l || "#" === l)) {
            ;
            if (".." === (y = z(y = u)) || "%2e." === y || ".%2e" === y || "%2e%2e" === y) this.shortenPath(), "/" !== l && !("\\" === l && this.isSpecial()) && N(this.path, "");
            else {
              ;
              if ("." === (b = u) || "%2e" === z(b)) "/" !== l && !("\\" === l && this.isSpecial()) && N(this.path, "");
              else "file" === this.scheme && !this.path.length && tv(u) && (this.host && (this.host = ""), u = M(u, 0) + ":"), N(this.path, u)
            }
            if (u = "", "file" === this.scheme && (l === n || "?" === l || "#" === l))
              for (; this.path.length > 1 && "" === this.path[0];) C(this.path);
            "?" === l ? (this.query = "", i = tU) : "#" === l && (this.fragment = "", i = tN)
          } else u += th(l, tc);
          break;
        case tP:
          "?" === l ? (this.query = "", i = tU) : "#" === l ? (this.fragment = "", i = tN) : l !== n && (this.path[0] += th(l, tf));
          break;
        case tU:
          r || "#" !== l ? l !== n && ("'" === l && this.isSpecial() ? this.query += "%27" : "#" === l ? this.query += "%23" : this.query += th(l, tf)) : (this.fragment = "", i = tN);
          break;
        case tN:
          l !== n && (this.fragment += th(l, ts))
      }
      o++
    }
  },
  parseHost: function(t) {
    var r, e, n;
    if ("[" === M(t, 0)) {
      if ("]" !== M(t, t.length - 1) || !(r = to(D(t, 1, -1)))) return W;
      this.host = r
    } else if (this.isSpecial()) {
      if (L(Q, t = b(t)) || null === (r = ti(t))) return W;
      this.host = r
    } else {
      if (L(tt, t)) return W;
      for (n = 0, r = "", e = d(t); n < e.length; n++) r += th(e[n], tf);
      this.host = r
    }
  },
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function() {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function() {
    return p(tp, this.scheme)
  },
  shortenPath: function() {
    var t = this.path,
      r = t.length;
    r && ("file" !== this.scheme || 1 !== r || !tv(t[0], !0)) && t.length--
  },
  serialize: function() {
    var t = this.scheme,
      r = this.username,
      e = this.password,
      n = this.host,
      i = this.port,
      o = this.path,
      u = this.query,
      a = this.fragment,
      f = t + ":";
    return null !== n ? (f += "//", this.includesCredentials() && (f += r + (e ? ":" + e : "") + "@"), f += ta(n), null !== i && (f += ":" + i)) : "file" === t && (f += "//"), f += this.cannotBeABaseURL ? o[0] : o.length ? "/" + j(o, "/") : "", null !== u && (f += "?" + u), null !== a && (f += "#" + a), f
  },
  setHref: function(t) {
    var r = this.parse(t);
    if (r) throw TypeError(r);
    this.searchParams.update()
  },
  getOrigin: function() {
    var t = this.scheme,
      r = this.port;
    if ("blob" === t) try {
      return new tC(t.path[0]).origin
    } catch (t) {
      return "null"
    }
    return "file" !== t && this.isSpecial() ? t + "://" + ta(this.host) + (null !== r ? ":" + r : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(t) {
    this.parse(m(t) + ":", tg)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(t) {
    var r = d(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var e = 0; e < r.length; e++) this.username += th(r[e], tl)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(t) {
    var r = d(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var e = 0; e < r.length; e++) this.password += th(r[e], tl)
    }
  },
  getHost: function() {
    var t = this.host,
      r = this.port;
    return null === t ? "" : null === r ? ta(t) : ta(t) + ":" + r
  },
  setHost: function(t) {
    !this.cannotBeABaseURL && this.parse(t, tR)
  },
  getHostname: function() {
    var t = this.host;
    return null === t ? "" : ta(t)
  },
  setHostname: function(t) {
    !this.cannotBeABaseURL && this.parse(t, tS)
  },
  getPort: function() {
    var t = this.port;
    return null === t ? "" : m(t)
  },
  setPort: function(t) {
    !this.cannotHaveUsernamePasswordPort() && ("" === (t = m(t)) ? this.port = null : this.parse(t, tO))
  },
  getPathname: function() {
    var t = this.path;
    return this.cannotBeABaseURL ? t[0] : t.length ? "/" + j(t, "/") : ""
  },
  setPathname: function(t) {
    !this.cannotBeABaseURL && (this.path = [], this.parse(t, tL))
  },
  getSearch: function() {
    var t = this.query;
    return t ? "?" + t : ""
  },
  setSearch: function(t) {
    "" === (t = m(t)) ? this.query = null: ("?" === M(t, 0) && (t = D(t, 1)), this.query = "", this.parse(t, tU)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var t = this.fragment;
    return t ? "#" + t : ""
  },
  setHash: function(t) {
    if ("" === (t = m(t))) {
      this.fragment = null;
      return
    }
    "#" === M(t, 0) && (t = D(t, 1)), this.fragment = "", this.parse(t, tN)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var tC = function(t) {
    var r = h(this, tq),
      e = w(arguments.length, 1) > 1 ? arguments[1] : void 0,
      n = A(r, new tB(t, !1, e));
    !o && (r.href = n.serialize(), r.origin = n.getOrigin(), r.protocol = n.getProtocol(), r.username = n.getUsername(), r.password = n.getPassword(), r.host = n.getHost(), r.hostname = n.getHostname(), r.port = n.getPort(), r.pathname = n.getPathname(), r.search = n.getSearch(), r.searchParams = n.getSearchParams(), r.hash = n.getHash())
  },
  tq = tC.prototype,
  tD = function(t, r) {
    return {
      get: function() {
        return x(this)[t]()
      },
      set: r && function(t) {
        return x(this)[r](t)
      },
      configurable: !0,
      enumerable: !0
    }
  };
if (o && (l(tq, "href", tD("serialize", "setHref")), l(tq, "origin", tD("getOrigin")), l(tq, "protocol", tD("getProtocol", "setProtocol")), l(tq, "username", tD("getUsername", "setUsername")), l(tq, "password", tD("getPassword", "setPassword")), l(tq, "host", tD("getHost", "setHost")), l(tq, "hostname", tD("getHostname", "setHostname")), l(tq, "port", tD("getPort", "setPort")), l(tq, "pathname", tD("getPathname", "setPathname")), l(tq, "search", tD("getSearch", "setSearch")), l(tq, "searchParams", tD("getSearchParams")), l(tq, "hash", tD("getHash", "setHash"))), c(tq, "toJSON", function() {
    return x(this).serialize()
  }, {
    enumerable: !0
  }), c(tq, "toString", function() {
    return x(this).serialize()
  }, {
    enumerable: !0
  }), S) {
  var tz = S.createObjectURL,
    tF = S.revokeObjectURL;
  tz && c(tC, "createObjectURL", f(tz, S)), tF && c(tC, "revokeObjectURL", f(tF, S))
}
_(tC, "URL"), i({
  global: !0,
  constructor: !0,
  forced: !u,
  sham: !o
}, {
  URL: tC
})