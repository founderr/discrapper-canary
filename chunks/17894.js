n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(525654),
    r = n.n(i),
    o = n(39612),
    a = n(271579),
    l = n(756647),
    c = n(232567),
    s = n(703656),
    d = n(314897),
    u = n(896797),
    f = n(626135),
    p = n(954824),
    m = n(981631);
async function b(e) {
    var t, n;
    let i = null === (t = r().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === i || 'iOS' === i) {
        let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
            i = (0, a.WS)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, c.k)(), (t = d.default.getId());
            } catch {}
        return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i
        });
    }
    return 'discord://';
}
async function h(e) {
    let t = await b(e),
        n = (0, a.zS)(t);
    null != n &&
        f.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        p.Z.launch(t, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
        });
}
