n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(475674),
  s = n(42326),
  a = n(906467);

function r(e) {
  var t;
  let {
    participant: n,
    className: r
  } = e;
  let o = null == (t = (0, i.Z)(n)) ? null : a.Z.isDeveloper ? "".concat(t.message, " (").concat(t.errorType, ")") : t.message;
  return null != o ? (0, l.jsx)(s.Z, {
    className: r,
    errorMessage: o
  }) : null
}