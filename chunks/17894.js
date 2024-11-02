t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(525654),
    r = t.n(i),
    o = t(39612),
    a = t(271579),
    l = t(756647),
    c = t(232567),
    s = t(703656),
    d = t(314897),
    u = t(896797),
    p = t(626135),
    f = t(954824),
    b = t(981631);
async function m(e) {
    var n, t;
    let i = null === (n = r().os) || void 0 === n ? void 0 : n.family;
    if ('Android' === i || 'iOS' === i) {
        let n = null !== (t = d.default.getFingerprint()) && void 0 !== t ? t : d.default.getId(),
            i = (0, a.WS)();
        if (null == n && d.default.isAuthenticated())
            try {
                await (0, c.k)(), (n = d.default.getId());
            } catch {}
        return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i
        });
    }
    return 'discord://';
}
async function h(e) {
    let n = await m(e),
        t = (0, a.zS)(n);
    null != t &&
        p.default.track(b.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource
        }),
        f.Z.launch(n, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
        });
}
