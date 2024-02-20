"use strict";

function t(e, _) {
  var E, t;
  if (null == e) return !1;
  let o = null == e ? void 0 : null === (E = e.ownerDocument) || void 0 === E ? void 0 : E.defaultView;
  if (null == o) return console.warn("Unable to determine render window for element", e), !1;
  let I = null !== (t = null == _ ? void 0 : _.name) && void 0 !== t ? t : "Element",
    T = o[I];
  return null == T ? (console.warn('Unable to find element constructor "'.concat(I, '" in'), o), !1) : e instanceof T
}
E.r(_), E.d(_, {
  isElement: function() {
    return t
  }
})