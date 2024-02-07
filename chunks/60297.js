var Symbol = e("506264"),
  r = e("754892"),
  u = e("19797"),
  o = Symbol ? Symbol.toStringTag : void 0;
t.exports = function(t) {
  return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : u(t)
}