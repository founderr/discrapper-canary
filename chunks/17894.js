n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(525654),
    i = n.n(r),
    s = n(39612),
    l = n(271579),
    a = n(756647),
    o = n(232567),
    c = n(703656),
    d = n(314897),
    u = n(896797),
    _ = n(626135),
    E = n(954824),
    p = n(981631);
async function h(e) {
    var t, n;
    let r = null === (t = i().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === r || 'iOS' === r) {
        let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
            r = (0, l.WS)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, o.k)(), (t = d.default.getId());
            } catch {}
        return (0, l.ZP)((0, s.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r
        });
    }
    return 'discord://';
}
async function f(e) {
    let t = await h(e),
        n = (0, l.zS)(t);
    null != n &&
        _.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        E.Z.launch(t, (e) => {
            !e && (0, c.dL)(u.Z.fallbackRoute);
        });
}
