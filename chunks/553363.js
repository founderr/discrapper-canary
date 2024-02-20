r("70102"), r("222007");
var n = Object.prototype.hasOwnProperty;

function o(t) {
  if (!(this instanceof o)) throw TypeError("Constructor PseudoMap requires 'new'");
  if (this.clear(), t) {
    if (t instanceof o || "function" == typeof Map && t instanceof Map) t.forEach(function(t, e) {
      this.set(e, t)
    }, this);
    else if (Array.isArray(t)) t.forEach(function(t) {
      this.set(t[0], t[1])
    }, this);
    else throw TypeError("invalid argument")
  }
}

function i(t, e) {
  return t === e || t != t && e != e
}

function a(t, e, r) {
  this.key = t, this.value = e, this._index = r
}

function u(t, e) {
  for (var r = 0, o = "_" + e, a = o; n.call(t, a); a = o + r++)
    if (i(t[a].key, e)) return t[a]
}
t.exports = o, o.prototype.forEach = function(t, e) {
  e = e || this, Object.keys(this._data).forEach(function(r) {
    "size" !== r && t.call(e, this._data[r].value, this._data[r].key)
  }, this)
}, o.prototype.has = function(t) {
  return !!u(this._data, t)
}, o.prototype.get = function(t) {
  var e = u(this._data, t);
  return e && e.value
}, o.prototype.set = function(t, e) {
  (function(t, e, r) {
    for (var o = 0, u = "_" + e, l = u; n.call(t, l); l = u + o++)
      if (i(t[l].key, e)) {
        t[l].value = r;
        return
      } t.size++, t[l] = new a(e, r, l)
  })(this._data, t, e)
}, o.prototype.delete = function(t) {
  var e = u(this._data, t);
  e && (delete this._data[e._index], this._data.size--)
}, o.prototype.clear = function() {
  var t = Object.create(null);
  t.size = 0, Object.defineProperty(this, "_data", {
    value: t,
    enumerable: !1,
    configurable: !0,
    writable: !1
  })
}, Object.defineProperty(o.prototype, "size", {
  get: function() {
    return this._data.size
  },
  set: function(t) {},
  enumerable: !0,
  configurable: !0
}), o.prototype.values = o.prototype.keys = o.prototype.entries = function() {
  throw Error("iterators are not implemented in this version")
}