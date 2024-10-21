t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    i = t(689938),
    s = t(842196);
function o(e) {
    let { onClick: n } = e;
    return (0, a.jsxs)(r.Button, {
        className: s.randomizeButton,
        innerClassName: s.randomizeButtonInner,
        look: r.Button.Looks.OUTLINED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.PRIMARY,
        onClick: n,
        grow: !1,
        children: [(0, a.jsx)(r.RetryIcon, { size: 'xs' }), i.Z.Messages.CLAN_SETUP_RANDOMIZE_LOOK]
    });
}
