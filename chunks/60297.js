var Symbol = n("506264"),
  r = n("754892"),
  o = n("19797"),
  l = Symbol ? Symbol.toStringTag : void 0;
e.exports = function(e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? r(e) : o(e)
}