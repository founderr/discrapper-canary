n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(442837),
    s = n(598077),
    r = n(699516),
    C = n(295226),
    a = n(786397),
    o = n(474936);
function d() {
    let e = (0, a.w)(o.a7),
        t = (0, l.e7)([C.Z], () => C.Z.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, l.e7)([r.Z], () => null == t || r.Z.isBlocked(t.id));
    return i.useMemo(() => (n || null == t ? null : new s.Z(t)), [t, n]);
}
