n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651),
    s = n(192379),
    l = n(618158);
function r(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: r } = (0, l.Y)('popup');
    return s.useEffect(() => (n(), () => r()), [r, n]), (0, i.jsx)(i.Fragment, { children: t });
}
