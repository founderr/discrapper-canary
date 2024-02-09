var Symbol = n("506264"),
  r = Object.prototype,
  o = r.hasOwnProperty,
  l = r.toString,
  i = Symbol ? Symbol.toStringTag : void 0;
e.exports = function(e) {
  var t = o.call(e, i),
    n = e[i];
  try {
    e[i] = void 0;
    var r = !0
  } catch (e) {}
  var a = l.call(e);
  return r && (t ? e[i] = n : delete e[i]), a
}