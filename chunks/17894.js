n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(525654),
    r = n.n(s),
    i = n(39612),
    a = n(271579),
    o = n(756647),
    l = n(232567),
    c = n(703656),
    u = n(314897),
    d = n(896797),
    _ = n(626135),
    h = n(954824),
    E = n(981631);
async function p(e) {
    var t, n;
    let s = null === (t = r().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === s || 'iOS' === s) {
        let t = null !== (n = u.default.getFingerprint()) && void 0 !== n ? n : u.default.getId(),
            s = (0, a.WS)();
        if (null == t && u.default.isAuthenticated())
            try {
                await (0, l.k)(), (t = u.default.getId());
            } catch {}
        return (0, a.ZP)((0, i.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: s
        });
    }
    return 'discord://';
}
async function g(e) {
    let t = await p(e),
        n = (0, a.zS)(t);
    null != n &&
        _.default.track(E.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        h.Z.launch(t, (e) => {
            !e && (0, c.dL)(d.Z.fallbackRoute);
        });
}
