r("854508"), r("222007"), r("843762"), t.exports = s;
var n, Map = r("333222"),
  o = r("151293"),
  i = r("860860"),
  a = {};

function u(t, e, r) {
  var o;
  return (a[e] ? o = a[e] : (o = n(e), a[e] = o), 2 == arguments.length) ? t[o] : (t[o] = r, r)
}

function l() {
  return 1
}

function s(t) {
  if (!(this instanceof s)) return new s(t);
  "number" == typeof t && (t = {
    max: t
  }), !t && (t = {});
  var e = u(this, "max", t.max);
  (!e || "number" != typeof e || e <= 0) && u(this, "max", 1 / 0);
  var r = t.length || l;
  "function" != typeof r && (r = l), u(this, "lengthCalculator", r), u(this, "allowStale", t.stale || !1), u(this, "maxAge", t.maxAge || 0), u(this, "dispose", t.dispose), this.reset()
}

function c(t, e, r, n) {
  var o = r.value;
  f(t, o) && (h(t, r), !u(t, "allowStale") && (o = void 0)), o && e.call(n, o.value, o.key, t)
}

function p(t, e, r) {
  var n = u(t, "cache").get(e);
  if (n) {
    var o = n.value;
    f(t, o) ? (h(t, n), !u(t, "allowStale") && (o = void 0)) : r && u(t, "lruList").unshiftNode(n), o && (o = o.value)
  }
  return o
}

function f(t, e) {
  if (!e || !e.maxAge && !u(t, "maxAge")) return !1;
  var r = !1,
    n = Date.now() - e.now;
  return r = e.maxAge ? n > e.maxAge : u(t, "maxAge") && n > u(t, "maxAge")
}

function y(t) {
  if (u(t, "length") > u(t, "max"))
    for (var e = u(t, "lruList").tail; u(t, "length") > u(t, "max") && null !== e;) {
      var r = e.prev;
      h(t, e), e = r
    }
}

function h(t, e) {
  if (e) {
    var r = e.value;
    u(t, "dispose") && u(t, "dispose").call(this, r.key, r.value), u(t, "length", u(t, "length") - r.length), u(t, "cache").delete(r.key), u(t, "lruList").removeNode(e)
  }
}

function d(t, e, r, n, o) {
  this.key = t, this.value = e, this.length = r, this.now = n, this.maxAge = o || 0
}
n = "function" == typeof Symbol ? function(t) {
  return Symbol.for(t)
} : function(t) {
  return "_" + t
}, Object.defineProperty(s.prototype, "max", {
  set: function(t) {
    (!t || "number" != typeof t || t <= 0) && (t = 1 / 0), u(this, "max", t), y(this)
  },
  get: function() {
    return u(this, "max")
  },
  enumerable: !0
}), Object.defineProperty(s.prototype, "allowStale", {
  set: function(t) {
    u(this, "allowStale", !!t)
  },
  get: function() {
    return u(this, "allowStale")
  },
  enumerable: !0
}), Object.defineProperty(s.prototype, "maxAge", {
  set: function(t) {
    (!t || "number" != typeof t || t < 0) && (t = 0), u(this, "maxAge", t), y(this)
  },
  get: function() {
    return u(this, "maxAge")
  },
  enumerable: !0
}), Object.defineProperty(s.prototype, "lengthCalculator", {
  set: function(t) {
    "function" != typeof t && (t = l), t !== u(this, "lengthCalculator") && (u(this, "lengthCalculator", t), u(this, "length", 0), u(this, "lruList").forEach(function(t) {
      t.length = u(this, "lengthCalculator").call(this, t.value, t.key), u(this, "length", u(this, "length") + t.length)
    }, this)), y(this)
  },
  get: function() {
    return u(this, "lengthCalculator")
  },
  enumerable: !0
}), Object.defineProperty(s.prototype, "length", {
  get: function() {
    return u(this, "length")
  },
  enumerable: !0
}), Object.defineProperty(s.prototype, "itemCount", {
  get: function() {
    return u(this, "lruList").length
  },
  enumerable: !0
}), s.prototype.rforEach = function(t, e) {
  e = e || this;
  for (var r = u(this, "lruList").tail; null !== r;) {
    var n = r.prev;
    c(this, t, r, e), r = n
  }
}, s.prototype.forEach = function(t, e) {
  e = e || this;
  for (var r = u(this, "lruList").head; null !== r;) {
    var n = r.next;
    c(this, t, r, e), r = n
  }
}, s.prototype.keys = function() {
  return u(this, "lruList").toArray().map(function(t) {
    return t.key
  }, this)
}, s.prototype.values = function() {
  return u(this, "lruList").toArray().map(function(t) {
    return t.value
  }, this)
}, s.prototype.reset = function() {
  u(this, "dispose") && u(this, "lruList") && u(this, "lruList").length && u(this, "lruList").forEach(function(t) {
    u(this, "dispose").call(this, t.key, t.value)
  }, this), u(this, "cache", new Map), u(this, "lruList", new i), u(this, "length", 0)
}, s.prototype.dump = function() {
  return u(this, "lruList").map(function(t) {
    if (!f(this, t)) return {
      k: t.key,
      v: t.value,
      e: t.now + (t.maxAge || 0)
    }
  }, this).toArray().filter(function(t) {
    return t
  })
}, s.prototype.dumpLru = function() {
  return u(this, "lruList")
}, s.prototype.inspect = function(t, e) {
  var r = "LRUCache {",
    n = !1;
  u(this, "allowStale") && (r += "\n  allowStale: true", n = !0);
  var i = u(this, "max");
  i && i !== 1 / 0 && (n && (r += ","), r += "\n  max: " + o.inspect(i, e), n = !0);
  var a = u(this, "maxAge");
  a && (n && (r += ","), r += "\n  maxAge: " + o.inspect(a, e), n = !0);
  var s = u(this, "lengthCalculator");
  s && s !== l && (n && (r += ","), r += "\n  length: " + o.inspect(u(this, "length"), e), n = !0);
  var c = !1;
  return u(this, "lruList").forEach(function(t) {
    c ? r += ",\n  " : (n && (r += ",\n"), c = !0, r += "\n  ");
    var i = o.inspect(t.key).split("\n").join("\n  "),
      u = {
        value: t.value
      };
    t.maxAge !== a && (u.maxAge = t.maxAge), s !== l && (u.length = t.length), f(this, t) && (u.stale = !0), u = o.inspect(u, e).split("\n").join("\n  "), r += i + " => " + u
  }), (c || n) && (r += "\n"), r += "}"
}, s.prototype.set = function(t, e, r) {
  var n = (r = r || u(this, "maxAge")) ? Date.now() : 0,
    o = u(this, "lengthCalculator").call(this, e, t);
  if (u(this, "cache").has(t)) {
    if (o > u(this, "max")) return h(this, u(this, "cache").get(t)), !1;
    var i = u(this, "cache").get(t).value;
    return u(this, "dispose") && u(this, "dispose").call(this, t, i.value), i.now = n, i.maxAge = r, i.value = e, u(this, "length", u(this, "length") + (o - i.length)), i.length = o, this.get(t), y(this), !0
  }
  var a = new d(t, e, o, n, r);
  return a.length > u(this, "max") ? (u(this, "dispose") && u(this, "dispose").call(this, t, e), !1) : (u(this, "length", u(this, "length") + a.length), u(this, "lruList").unshift(a), u(this, "cache").set(t, u(this, "lruList").head), y(this), !0)
}, s.prototype.has = function(t) {
  return !(!u(this, "cache").has(t) || f(this, u(this, "cache").get(t).value)) && !0
}, s.prototype.get = function(t) {
  return p(this, t, !0)
}, s.prototype.peek = function(t) {
  return p(this, t, !1)
}, s.prototype.pop = function() {
  var t = u(this, "lruList").tail;
  return t ? (h(this, t), t.value) : null
}, s.prototype.del = function(t) {
  h(this, u(this, "cache").get(t))
}, s.prototype.load = function(t) {
  this.reset();
  for (var e = Date.now(), r = t.length - 1; r >= 0; r--) {
    var n = t[r],
      o = n.e || 0;
    if (0 === o) this.set(n.k, n.v);
    else {
      var i = o - e;
      i > 0 && this.set(n.k, n.v, i)
    }
  }
}, s.prototype.prune = function() {
  var t = this;
  u(this, "cache").forEach(function(e, r) {
    p(t, r, !1)
  })
}