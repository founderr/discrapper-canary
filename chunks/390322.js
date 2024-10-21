n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(618158);
function l(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: l } = (0, i.Y)('popup');
    return a.useEffect(() => (n(), () => l()), [l, n]), (0, s.jsx)(s.Fragment, { children: t });
}
