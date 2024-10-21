n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(475674),
    a = n(42326),
    l = n(906467);
function r(e) {
    var t;
    let { participant: n, className: r } = e;
    let o = null == (t = (0, s.Z)(n)) ? null : l.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
    return null != o
        ? (0, i.jsx)(a.Z, {
              className: r,
              errorMessage: o
          })
        : null;
}
