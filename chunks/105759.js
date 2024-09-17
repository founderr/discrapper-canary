t.d(n, {
    Z: function () {
        return d;
    }
});
var r = t(470079),
    a = t(442837),
    i = t(598077),
    s = t(699516),
    o = t(295226),
    l = t(786397),
    C = t(474936);
function d() {
    let e = (0, l.w)(C.a7),
        n = (0, a.e7)([o.Z], () => o.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        t = (0, a.e7)([s.Z], () => null == n || s.Z.isBlocked(n.id));
    return r.useMemo(() => (t || null == n ? null : new i.Z(n)), [n, t]);
}
