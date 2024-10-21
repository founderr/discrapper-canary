n.d(s, {
    Z: function () {
        return _;
    }
});
var t = n(192379),
    l = n(442837),
    i = n(598077),
    C = n(699516),
    r = n(295226),
    a = n(786397),
    o = n(474936);
function _() {
    let e = (0, a.w)(o.a7),
        s = (0, l.e7)([r.Z], () => r.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, l.e7)([C.Z], () => null == s || C.Z.isBlocked(s.id));
    return t.useMemo(() => (n || null == s ? null : new i.Z(s)), [s, n]);
}
