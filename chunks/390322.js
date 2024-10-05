n.d(t, {
    Z: function () {
        return o;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(618158);
function o(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: o } = (0, i.Y)('popup');
    return a.useEffect(() => (n(), () => o()), [o, n]), (0, s.jsx)(s.Fragment, { children: t });
}
