t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    c = t.n(a),
    o = t(481060),
    r = t(388032),
    s = t(343968);
let l = Object.freeze({
    DEFAULT: s.default,
    FILLED: s.filled
});
function d(e) {
    let { className: n, onClick: t, 'aria-label': a, look: d = l.DEFAULT } = e;
    return (0, i.jsx)(o.Clickable, {
        'aria-label': null != a ? a : r.intl.string(r.t.N86XcH),
        className: c()(s.button, d, n),
        onClick: t
    });
}
d.Looks = l;
