t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    a = t(481060),
    o = t(689938),
    l = t(60179);
let c = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled
});
function d(e) {
    let { className: s, onClick: t, 'aria-label': r, look: d = c.DEFAULT } = e;
    return (0, n.jsx)(a.Clickable, {
        'aria-label': null != r ? r : o.Z.Messages.REMOVE,
        className: i()(l.button, d, s),
        onClick: t
    });
}
d.Looks = c;
