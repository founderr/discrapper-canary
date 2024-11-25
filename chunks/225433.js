a.d(n, {
    Z: function () {
        return s;
    }
});
var t = a(200651);
a(192379);
var c = a(120356),
    i = a.n(c),
    o = a(481060),
    r = a(388032),
    d = a(744149);
let l = Object.freeze({
    DEFAULT: d.default,
    FILLED: d.filled
});
function s(e) {
    let { className: n, onClick: a, 'aria-label': c, look: s = l.DEFAULT } = e;
    return (0, t.jsx)(o.Clickable, {
        'aria-label': null != c ? c : r.intl.string(r.t.N86XcH),
        className: i()(d.button, s, n),
        onClick: a
    });
}
s.Looks = l;
