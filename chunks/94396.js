l.d(t, {
    _: function () {
        return u;
    }
}),
    l(47120),
    l(192379);
var n = l(374470),
    i = l(254109),
    r = l(312097),
    a = l(52824),
    s = l(626135),
    o = l(981631),
    d = l(230569);
function u(e, t, l) {
    let u = {};
    for (let [m, h] of e.entries())
        'IMAGE' === h.type &&
            (u[
                (0, a.q)({
                    proxyURL: h.proxyUrl,
                    url: h.url
                })
            ] = (a) =>
                (function (e, t, l) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        u = arguments.length > 4 ? arguments[4] : void 0;
                    e.preventDefault(),
                        (0, n.k)(e.currentTarget) && e.currentTarget.blur(),
                        null != u &&
                            (s.default.track(
                                o.rMx.OPEN_MODAL,
                                {
                                    type: o.jXE.MEDIA_VIEWER,
                                    ...u
                                },
                                { throttlePercent: 0.01 }
                            ),
                            (0, i.fS)(u.guild_id, u.channel_id, u.channel_type, t.length)),
                        (0, r.K)({
                            ...a,
                            className: d.forcedTransparency,
                            onIndexChange: null != u ? i.f0 : void 0,
                            items: t,
                            startingIndex: l,
                            location: 'zoomedMediaModalHelper',
                            onCloseCallback: null != u ? i.VO : void 0
                        });
                })(a, e, m, t, l));
    return u;
}
