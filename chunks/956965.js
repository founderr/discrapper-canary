var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(220082),
    l = n(131795);
function o(e) {
    let { fallbackColor: t } = e;
    return (0, i.jsx)('div', {
        className: s()(l.bannerImage),
        style: { backgroundColor: t }
    });
}
t.Z = function (e) {
    let { iconURL: t } = e,
        n = (0, r.ZP)(t, '');
    return (0, i.jsx)('div', {
        className: l.banner,
        children: (0, i.jsx)(o, { fallbackColor: n })
    });
};
