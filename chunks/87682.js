var n = r("390493");
"use strict";

function u(e) {
  if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
}

function o(e, t) {
  for (var r, n = "", u = 0, o = -1, a = 0, i = 0; i <= e.length; ++i) {
    if (i < e.length) r = e.charCodeAt(i);
    else if (47 === r) break;
    else r = 47;
    if (47 === r) {
      if (o === i - 1 || 1 === a);
      else if (o !== i - 1 && 2 === a) {
        if (n.length < 2 || 2 !== u || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
          if (n.length > 2) {
            var s = n.lastIndexOf("/");
            if (s !== n.length - 1) {
              -1 === s ? (n = "", u = 0) : u = (n = n.slice(0, s)).length - 1 - n.lastIndexOf("/"), o = i, a = 0;
              continue
            }
          } else if (2 === n.length || 1 === n.length) {
            n = "", u = 0, o = i, a = 0;
            continue
          }
        }
        t && (n.length > 0 ? n += "/.." : n = "..", u = 2)
      } else n.length > 0 ? n += "/" + e.slice(o + 1, i) : n = e.slice(o + 1, i), u = i - o - 1;
      o = i, a = 0
    } else 46 === r && -1 !== a ? ++a : a = -1
  }
  return n
}
r("70102");
var a = {
  resolve: function() {
    for (var e, t, r = "", a = !1, i = arguments.length - 1; i >= -1 && !a; i--) i >= 0 ? t = arguments[i] : (void 0 === e && (e = n.cwd()), t = e), u(t), 0 !== t.length && (r = t + "/" + r, a = 47 === t.charCodeAt(0));
    if (r = o(r, !a), a) return r.length > 0 ? "/" + r : "/";
    if (r.length > 0) return r;
    return "."
  },
  normalize: function(e) {
    if (u(e), 0 === e.length) return ".";
    var t = 47 === e.charCodeAt(0),
      r = 47 === e.charCodeAt(e.length - 1);
    return (0 === (e = o(e, !t)).length && !t && (e = "."), e.length > 0 && r && (e += "/"), t) ? "/" + e : e
  },
  isAbsolute: function(e) {
    return u(e), e.length > 0 && 47 === e.charCodeAt(0)
  },
  join: function() {
    if (0 == arguments.length) return ".";
    for (var e, t = 0; t < arguments.length; ++t) {
      var r = arguments[t];
      u(r), r.length > 0 && (void 0 === e ? e = r : e += "/" + r)
    }
    return void 0 === e ? "." : a.normalize(e)
  },
  relative: function(e, t) {
    if (u(e), u(t), e === t) return "";
    if (e = a.resolve(e), e === (t = a.resolve(t))) return "";
    for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
    for (var n = e.length, o = n - r, i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
    for (var s = t.length - i, l = o < s ? o : s, c = -1, f = 0; f <= l; ++f) {
      if (f === l) {
        if (s > l) {
          if (47 === t.charCodeAt(i + f)) return t.slice(i + f + 1);
          if (0 === f) return t.slice(i + f)
        } else o > l && (47 === e.charCodeAt(r + f) ? c = f : 0 === f && (c = 0));
        break
      }
      var d = e.charCodeAt(r + f);
      if (d !== t.charCodeAt(i + f)) break;
      47 === d && (c = f)
    }
    var D = "";
    for (f = r + c + 1; f <= n; ++f)(f === n || 47 === e.charCodeAt(f)) && (0 === D.length ? D += ".." : D += "/..");
    return D.length > 0 ? D + t.slice(i + c) : (i += c, 47 === t.charCodeAt(i) && ++i, t.slice(i))
  },
  _makeLong: function(e) {
    return e
  },
  dirname: function(e) {
    if (u(e), 0 === e.length) return ".";
    for (var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)
      if (47 === (t = e.charCodeAt(a))) {
        if (!o) {
          n = a;
          break
        }
      } else o = !1;
    return -1 === n ? r ? "/" : "." : r && 1 === n ? "//" : e.slice(0, n)
  },
  basename: function(e, t) {
    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
    u(e);
    var r, n = 0,
      o = -1,
      a = !0;
    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return "";
      var i = t.length - 1,
        s = -1;
      for (r = e.length - 1; r >= 0; --r) {
        var l = e.charCodeAt(r);
        if (47 === l) {
          if (!a) {
            n = r + 1;
            break
          }
        } else - 1 === s && (a = !1, s = r + 1), i >= 0 && (l === t.charCodeAt(i) ? -1 == --i && (o = r) : (i = -1, o = s))
      }
      return n === o ? o = s : -1 === o && (o = e.length), e.slice(n, o)
    }
    for (r = e.length - 1; r >= 0; --r)
      if (47 === e.charCodeAt(r)) {
        if (!a) {
          n = r + 1;
          break
        }
      } else - 1 === o && (a = !1, o = r + 1);
    return -1 === o ? "" : e.slice(n, o)
  },
  extname: function(e) {
    u(e);
    for (var t = -1, r = 0, n = -1, o = !0, a = 0, i = e.length - 1; i >= 0; --i) {
      var s = e.charCodeAt(i);
      if (47 === s) {
        if (!o) {
          r = i + 1;
          break
        }
        continue
      } - 1 === n && (o = !1, n = i + 1), 46 === s ? -1 === t ? t = i : 1 !== a && (a = 1) : -1 !== t && (a = -1)
    }
    return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
  },
  format: function(e) {
    var t, r, n;
    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return r = (t = e).dir || t.root, n = t.base || (t.name || "") + (t.ext || ""), r ? r === t.root ? r + n : r + "/" + n : n
  },
  parse: function(e) {
    u(e);
    var t, r = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (0 === e.length) return r;
    var n = e.charCodeAt(0),
      o = 47 === n;
    o ? (r.root = "/", t = 1) : t = 0;
    for (var a = -1, i = 0, s = -1, l = !0, c = e.length - 1, f = 0; c >= t; --c) {
      if (47 === (n = e.charCodeAt(c))) {
        if (!l) {
          i = c + 1;
          break
        }
        continue
      } - 1 === s && (l = !1, s = c + 1), 46 === n ? -1 === a ? a = c : 1 !== f && (f = 1) : -1 !== a && (f = -1)
    }
    return -1 === a || -1 === s || 0 === f || 1 === f && a === s - 1 && a === i + 1 ? -1 !== s && (0 === i && o ? r.base = r.name = e.slice(1, s) : r.base = r.name = e.slice(i, s)) : (0 === i && o ? (r.name = e.slice(1, a), r.base = e.slice(1, s)) : (r.name = e.slice(i, a), r.base = e.slice(i, s)), r.ext = e.slice(a, s)), i > 0 ? r.dir = e.slice(0, i - 1) : o && (r.dir = "/"), r
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
a.posix = a, e.exports = a