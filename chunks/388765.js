"use strict";
var r = n("390493");
n("424973"), n("854508");
var i = Object.keys || function(e) {
  var t = [];
  for (var n in e) t.push(n);
  return t
};
e.exports = l;
var o = n("245387"),
  s = n("769419");
n("599235")(l, o);
for (var a = i(s.prototype), c = 0; c < a.length; c++) {
  var u = a[c];
  !l.prototype[u] && (l.prototype[u] = s.prototype[u])
}

function l(e) {
  if (!(this instanceof l)) return new l(e);
  o.call(this, e), s.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", d)))
}

function d() {
  !this._writableState.ended && r.nextTick(f, this)
}

function f(e) {
  e.end()
}
Object.defineProperty(l.prototype, "writableHighWaterMark", {
  enumerable: !1,
  get: function() {
    return this._writableState.highWaterMark
  }
}), Object.defineProperty(l.prototype, "writableBuffer", {
  enumerable: !1,
  get: function() {
    return this._writableState && this._writableState.getBuffer()
  }
}), Object.defineProperty(l.prototype, "writableLength", {
  enumerable: !1,
  get: function() {
    return this._writableState.length
  }
}), Object.defineProperty(l.prototype, "destroyed", {
  enumerable: !1,
  get: function() {
    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
  },
  set: function(e) {
    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
  }
})