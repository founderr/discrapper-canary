function n(t) {
  if (t) return function(t) {
    for (var r in n.prototype) t[r] = n.prototype[r];
    return t
  }(t)
}
t = e.nmd(t), e("424973"), void 0 !== t && (t.exports = n);
n.prototype.on = n.prototype.addEventListener = function(t, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(r), this
}, n.prototype.once = function(t, r) {
  function e() {
    this.off(t, e), r.apply(this, arguments)
  }
  return e.fn = r, this.on(t, e), this
}, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, r) {
  if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
  var e, n = this._callbacks["$" + t];
  if (!n) return this;
  if (1 == arguments.length) return delete this._callbacks["$" + t], this;
  for (var i = 0; i < n.length; i++)
    if ((e = n[i]) === r || e.fn === r) {
      n.splice(i, 1);
      break
    } return 0 === n.length && delete this._callbacks["$" + t], this
}, n.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var r = Array(arguments.length - 1), e = this._callbacks["$" + t], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
  if (e) {
    e = e.slice(0);
    for (var n = 0, i = e.length; n < i; ++n) e[n].apply(this, r)
  }
  return this
}, n.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
}, n.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length
}