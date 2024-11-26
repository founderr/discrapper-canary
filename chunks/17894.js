t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(525654),
    r = t.n(i),
    o = t(39612),
    a = t(271579),
    l = t(756647),
    c = t(232567),
    d = t(703656),
    s = t(314897),
    u = t(896797),
    f = t(626135),
    p = t(954824),
    m = t(981631);
async function b(e) {
    var n, t;
    let i = null === (n = r().os) || void 0 === n ? void 0 : n.family;
    if ('Android' === i || 'iOS' === i) {
        let n = null !== (t = s.default.getFingerprint()) && void 0 !== t ? t : s.default.getId(),
            i = (0, a.WS)();
        if (null == n && s.default.isAuthenticated())
            try {
                await (0, c.k)(), (n = s.default.getId());
            } catch {}
        return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i
        });
    }
    return 'discord://';
}
async function _(e) {
    let n = await b(e),
        t = (0, a.zS)(n);
    null != t &&
        f.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource
        }),
        p.Z.launch(n, (e) => {
            !e && (0, d.dL)(u.Z.fallbackRoute);
        });
}
