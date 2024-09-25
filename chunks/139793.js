n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(434650),
    s = n(353647);
function l(e) {
    let { userId: t, onAction: n } = e,
        [r, l] = (0, i.useState)(!1),
        u = (0, a.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t)),
        c = (0, i.useCallback)(
            (e) => {
                e && (n({ action: 'VIEW' }), l(!0));
            },
            [n]
        );
    return (0, o.O)(c, void 0, !u && !r);
}
