n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(475674),
    r = n(42326),
    s = n(906467);
function a(e) {
    var t;
    let { participant: n, className: a } = e;
    let o = null == (t = (0, l.Z)(n)) ? null : s.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
    return null != o
        ? (0, i.jsx)(r.Z, {
              className: a,
              errorMessage: o
          })
        : null;
}
