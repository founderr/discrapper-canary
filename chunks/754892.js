var Symbol = e("506264"),
  r = Object.prototype,
  u = r.hasOwnProperty,
  o = r.toString,
  i = Symbol ? Symbol.toStringTag : void 0;
t.exports = function(t) {
  var n = u.call(t, i),
    e = t[i];
  try {
    t[i] = void 0;
    var r = !0
  } catch (t) {}
  var a = o.call(t);
  return r && (n ? t[i] = e : delete t[i]), a
}