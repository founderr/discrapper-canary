n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(525654),
    a = n.n(r),
    i = n(39612),
    l = n(271579),
    s = n(756647),
    o = n(232567),
    u = n(703656),
    c = n(314897),
    d = n(896797),
    h = n(626135),
    I = n(954824),
    _ = n(981631);
async function f(e) {
    var t, n;
    let r = null === (t = a().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === r || 'iOS' === r) {
        let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
            r = (0, l.WS)();
        if (null == t && c.default.isAuthenticated())
            try {
                await (0, o.k)(), (t = c.default.getId());
            } catch {}
        return (0, l.ZP)((0, i.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r
        });
    }
    return 'discord://';
}
async function m(e) {
    let t = await f(e),
        n = (0, l.zS)(t);
    null != n &&
        h.default.track(_.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        I.Z.launch(t, (e) => {
            !e && (0, u.dL)(d.Z.fallbackRoute);
        });
}
