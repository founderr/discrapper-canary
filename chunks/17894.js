n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(525654),
    i = n.n(r),
    l = n(39612),
    s = n(271579),
    a = n(756647),
    o = n(232567),
    c = n(703656),
    u = n(314897),
    d = n(896797),
    h = n(626135),
    _ = n(954824),
    f = n(981631);
async function E(e) {
    var t, n;
    let r = null === (t = i().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === r || 'iOS' === r) {
        let t = null !== (n = u.default.getFingerprint()) && void 0 !== n ? n : u.default.getId(),
            r = (0, s.WS)();
        if (null == t && u.default.isAuthenticated())
            try {
                await (0, o.k)(), (t = u.default.getId());
            } catch {}
        return (0, s.ZP)((0, l.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r
        });
    }
    return 'discord://';
}
async function p(e) {
    let t = await E(e),
        n = (0, s.zS)(t);
    null != n &&
        h.default.track(f.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        _.Z.launch(t, (e) => {
            !e && (0, c.dL)(d.Z.fallbackRoute);
        });
}
