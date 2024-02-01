"use strict";
n("70102"), n("781738"), n("424973"), n("843762");
var r = n("831208");

function i() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var o = /^([a-z0-9.+-]+:)/i,
  s = /:[0-9]*$/,
  a = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  c = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
  u = ["%", "/", "?", ";", "#"].concat(c),
  l = ["/", "?", "#"],
  d = /^[+a-z0-9A-Z_-]{0,63}$/,
  f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  p = {
    javascript: !0,
    "javascript:": !0
  },
  h = {
    javascript: !0,
    "javascript:": !0
  },
  v = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  },
  g = n("106504");

function b(e, t, n) {
  if (e && "object" == typeof e && e instanceof i) return e;
  var r = new i;
  return r.parse(e, t, n), r
}
i.prototype.parse = function(e, t, n) {
  if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"),
    s = -1 !== i && i < e.indexOf("#") ? "?" : "#",
    b = e.split(s);
  b[0] = b[0].replace(/\\/g, "/");
  var m = e = b.join(s);
  if (m = m.trim(), !n && 1 === e.split("#").length) {
    var y = a.exec(m);
    if (y) return this.path = m, this.href = m, this.pathname = y[1], y[2] ? (this.search = y[2], t ? this.query = g.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
  }
  var x = o.exec(m);
  if (x) {
    var w = (x = x[0]).toLowerCase();
    this.protocol = w, m = m.substr(x.length)
  }
  if (n || x || m.match(/^\/\/[^@/]+@[^@/]+/)) {
    var S = "//" === m.substr(0, 2);
    S && !(x && h[x]) && (m = m.substr(2), this.slashes = !0)
  }
  if (!h[x] && (S || x && !v[x])) {
    for (var k, E, _ = -1, M = 0; M < l.length; M++) {
      var D = m.indexOf(l[M]); - 1 !== D && (-1 === _ || D < _) && (_ = D)
    } - 1 !== (E = -1 === _ ? m.lastIndexOf("@") : m.lastIndexOf("@", _)) && (k = m.slice(0, E), m = m.slice(E + 1), this.auth = decodeURIComponent(k)), _ = -1;
    for (var M = 0; M < u.length; M++) {
      var D = m.indexOf(u[M]); - 1 !== D && (-1 === _ || D < _) && (_ = D)
    } - 1 === _ && (_ = m.length), this.host = m.slice(0, _), m = m.slice(_), this.parseHost(), this.hostname = this.hostname || "";
    var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!C) {
      for (var P = this.hostname.split(/\./), M = 0, T = P.length; M < T; M++) {
        var A = P[M];
        if (A && !A.match(d)) {
          for (var R = "", I = 0, O = A.length; I < O; I++) A.charCodeAt(I) > 127 ? R += "x" : R += A[I];
          if (!R.match(d)) {
            var j = P.slice(0, M),
              L = P.slice(M + 1),
              N = A.match(f);
            N && (j.push(N[1]), L.unshift(N[2])), L.length && (m = "/" + L.join(".") + m), this.hostname = j.join(".");
            break
          }
        }
      }
    }
    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !C && (this.hostname = r.toASCII(this.hostname));
    var F = this.port ? ":" + this.port : "",
      B = this.hostname || "";
    this.host = B + F, this.href += this.host, C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== m[0] && (m = "/" + m))
  }
  if (!p[w])
    for (var M = 0, T = c.length; M < T; M++) {
      var z = c[M];
      if (-1 !== m.indexOf(z)) {
        var K = encodeURIComponent(z);
        K === z && (K = escape(z)), m = m.split(z).join(K)
      }
    }
  var V = m.indexOf("#"); - 1 !== V && (this.hash = m.substr(V), m = m.slice(0, V));
  var U = m.indexOf("?");
  if (-1 !== U ? (this.search = m.substr(U), this.query = m.substr(U + 1), t && (this.query = g.parse(this.query)), m = m.slice(0, U)) : t && (this.search = "", this.query = {}), m && (this.pathname = m), v[w] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var F = this.pathname || "",
      q = this.search || "";
    this.path = F + q
  }
  return this.href = this.format(), this
};
i.prototype.format = function() {
  var e = this.auth || "";
  e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
  var t = this.protocol || "",
    n = this.pathname || "",
    r = this.hash || "",
    i = !1,
    o = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (o = g.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: !1
  }));
  var s = this.search || o && "?" + o || "";
  return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : !i && (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), n = n.replace(/[?#]/g, function(e) {
    return encodeURIComponent(e)
  }), t + i + n + (s = s.replace("#", "%23")) + r
};
i.prototype.resolve = function(e) {
  return this.resolveObject(b(e, !1, !0)).format()
};
i.prototype.resolveObject = function(e) {
  if ("string" == typeof e) {
    var t = new i;
    t.parse(e, !1, !0), e = t
  }
  for (var n = new i, r = Object.keys(this), o = 0; o < r.length; o++) {
    var s = r[o];
    n[s] = this[s]
  }
  if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var a = Object.keys(e), c = 0; c < a.length; c++) {
      var u = a[c];
      "protocol" !== u && (n[u] = e[u])
    }
    return v[n.protocol] && n.hostname && !n.pathname && (n.pathname = "/", n.path = n.pathname), n.href = n.format(), n
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!v[e.protocol]) {
      for (var l = Object.keys(e), d = 0; d < l.length; d++) {
        var f = l[d];
        n[f] = e[f]
      }
      return n.href = n.format(), n
    }
    if (n.protocol = e.protocol, e.host || h[e.protocol]) n.pathname = e.pathname;
    else {
      for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
      !e.host && (e.host = ""), !e.hostname && (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
    }
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var g = n.pathname || "",
        b = n.search || "";
      n.path = g + b
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
  }
  var m = n.pathname && "/" === n.pathname.charAt(0),
    y = e.host || e.pathname && "/" === e.pathname.charAt(0),
    x = y || m || n.host && e.pathname,
    w = x,
    S = n.pathname && n.pathname.split("/") || [],
    p = e.pathname && e.pathname.split("/") || [],
    k = n.protocol && !v[n.protocol];
  if (k && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), x = x && ("" === p[0] || "" === S[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, S = p;
  else if (p.length) !S && (S = []), S.pop(), S = S.concat(p), n.search = e.search, n.query = e.query;
  else if (null != e.search) {
    if (k) {
      n.host = S.shift(), n.hostname = n.host;
      var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
      E && (n.auth = E.shift(), n.hostname = E.shift(), n.host = n.hostname)
    }
    return n.search = e.search, n.query = e.query, (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
  }
  if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var _ = S.slice(-1)[0], M = (n.host || e.host || S.length > 1) && ("." === _ || ".." === _) || "" === _, D = 0, C = S.length; C >= 0; C--) "." === (_ = S[C]) ? S.splice(C, 1) : ".." === _ ? (S.splice(C, 1), D++) : D && (S.splice(C, 1), D--);
  if (!x && !w)
    for (; D--; D) S.unshift("..");
  x && "" !== S[0] && (!S[0] || "/" !== S[0].charAt(0)) && S.unshift(""), M && "/" !== S.join("/").substr(-1) && S.push("");
  var P = "" === S[0] || S[0] && "/" === S[0].charAt(0);
  if (k) {
    n.hostname = P ? "" : S.length ? S.shift() : "", n.host = n.hostname;
    var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
    E && (n.auth = E.shift(), n.hostname = E.shift(), n.host = n.hostname)
  }
  return (x = x || n.host && S.length) && !P && S.unshift(""), S.length > 0 ? n.pathname = S.join("/") : (n.pathname = null, n.path = null), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
}, i.prototype.parseHost = function() {
  var e = this.host,
    t = s.exec(e);
  t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
}, t.parse = b, t.resolve = function(e, t) {
  return b(e, !1, !0).resolve(t)
}, t.resolveObject = function(e, t) {
  return e ? b(e, !1, !0).resolveObject(t) : t
}, t.format = function(e) {
  return ("string" == typeof e && (e = b(e)), e instanceof i) ? e.format() : i.prototype.format.call(e)
}, t.Url = i