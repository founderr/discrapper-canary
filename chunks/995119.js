t.d(n, {
    Z: function () {
        return o;
    }
});
var r = t(200651);
t(192379);
var a = t(481060),
    i = t(388032),
    s = t(842196);
function o(e) {
    let { onClick: n } = e;
    return (0, r.jsxs)(a.Button, {
        className: s.randomizeButton,
        innerClassName: s.randomizeButtonInner,
        look: a.Button.Looks.OUTLINED,
        size: a.Button.Sizes.MEDIUM,
        color: a.Button.Colors.PRIMARY,
        onClick: n,
        grow: !1,
        children: [(0, r.jsx)(a.RetryIcon, { size: 'xs' }), i.intl.string(i.t.jn5UYG)]
    });
}
