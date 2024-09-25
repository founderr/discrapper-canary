n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(442837),
    i = n(201895),
    l = n(557135),
    s = n(703656),
    a = n(592125),
    o = n(979651),
    u = n(66999),
    c = n(981631);
function d(e, t) {
    let n = (0, r.e7)([a.Z], () => a.Z.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, u.Z)(null == n ? void 0 : n.id);
    if (null == n || d) return null;
    let h = n.isGuildVocal(),
        _ = (0, i.ZP)({ channel: n });
    return {
        navigateToChannel: () => {
            h
                ? l.Z.handleVoiceConnect({
                      channel: n,
                      connected: o.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, s.uL)(c.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: _
    };
}
