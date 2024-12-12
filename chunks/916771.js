r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(872810),
    s = r(569545),
    o = r(63063),
    l = r(112560),
    u = r(981631),
    c = r(388032);
let d = r(66737);
function f(e) {
    let { stream: n, width: r, selected: f = !1, noArt: _ = !1 } = e;
    return (0, i.jsx)(l.Z, {
        artURL: d,
        header: c.intl.string(c.t.rSlOen),
        size: (0, l.L)(r),
        noArt: _,
        selected: f,
        description: c.intl.format(c.t.sXsgsL, { helpUrl: o.Z.getArticleURL(u.BhN.STREAM_FAILED) }),
        onCTAClick: () => (0, a.aP)((0, s.V9)(n)),
        callToAction: c.intl.string(c.t['4EGMWF'])
    });
}
