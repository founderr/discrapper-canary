l.d(t, {
    Z: function () {
        return r;
    }
});
var a = l(192379),
    i = l(442837),
    n = l(430824),
    s = l(687476);
function r(e) {
    let t = (0, i.e7)([n.Z], () => n.Z.getRoles(e)),
        l = (0, i.e7)([s.Z], () => s.Z.getSubscriptionRoles(e));
    return a.useMemo(() => Object.values(t).filter((e) => l.has(e.id)), [t, l]);
}
