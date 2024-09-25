n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(618158);
function o(e) {
    let { children: t } = e,
        { preventIdle: n, allowIdle: o } = (0, a.Y)('popup');
    return i.useEffect(() => (n(), () => o()), [o, n]), (0, r.jsx)(r.Fragment, { children: t });
}
