n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(618158);
function r(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: r } = (0, a.Y)('popup');
    return s.useEffect(() => (n(), () => r()), [r, n]), (0, i.jsx)(i.Fragment, { children: t });
}
