r.d(n, {
    l: function () {
        return s;
    }
});
var i = r(661763),
    a = r(921336);
function s(e, n) {
    let r = (0, i.zL)(e, { labelable: !0 }),
        { hoverProps: s } = (0, a.XI)({
            onHoverStart: () => (null == n ? void 0 : n.open(!0)),
            onHoverEnd: () => (null == n ? void 0 : n.close())
        });
    return { tooltipProps: (0, i.dG)(r, s, { role: 'tooltip' }) };
}
r(192379);
