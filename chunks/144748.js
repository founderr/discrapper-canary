var n = r(740362),
  o = r(354848),
  i = r(339718),
  c = r(883539),
  u = r(442975),
  a = c("IE_PROTO"),
  s = Object,
  f = s.prototype;
t.exports = u ? s.getPrototypeOf : function(t) {
  var e = i(t);
  if (n(e, a)) return e[a];
  var r = e.constructor;
  return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null
}