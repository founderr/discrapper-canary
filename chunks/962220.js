var l = n(39612),
    r = n(271579),
    i = n(756647),
    a = n(625128),
    u = n(626135),
    o = n(954824),
    s = n(751189),
    c = n(981631);
let d = 'template';
e.Z = {
    ...s.Z,
    openNativeAppModal(t) {
        a.Z.openNativeAppModal(t, c.Etm.GUILD_TEMPLATE_BROWSER);
    },
    openMobileApp(t, e) {
        if (null != platform.ua && platform.ua.toLowerCase().indexOf('googlebot') > -1) return;
        let n = null != t ? (0, l.Oh)(t) : (0, l.Gk)(),
            a = (0, r.WS)(),
            s = (0, r.ZP)(n, {
                utmSource: d,
                fingerprint: e,
                attemptId: a
            });
        u.default.track(c.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, i.K)(e),
            attempt_id: a,
            source: d,
            guild_template_code: t
        }),
            o.Z.launch(s, () => {});
    }
};
