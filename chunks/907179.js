n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(475413),
    s = n(388032);
function o(e) {
    let { isBlocked: t, onClick: n, size: o = i.ButtonSizes.SMALL } = e;
    return (0, r.jsx)(a.tG, {
        size: o,
        action: t ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
        text: s.intl.string(s.t['UJKH/v']),
        autoFocus: !0,
        fullWidth: !1,
        onClick: n
    });
}
