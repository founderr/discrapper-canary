"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("884691"),
  a = n("275370"),
  o = n.n(a),
  i = {};

function s(e, t) {
  void 0 === t && (t = o);
  var n = (0, r.useRef)(i),
    a = n.current;
  return (0, r.useEffect)(function() {
    n.current = a
  }), n.current !== i && t(e, n.current) || (a = e), a
}