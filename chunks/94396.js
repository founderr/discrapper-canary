t.d(n, {
    _: function () {
        return u;
    }
}),
    t(47120),
    t(192379);
var i = t(374470),
    o = t(254109),
    r = t(312097),
    a = t(52824),
    l = t(626135),
    s = t(981631),
    c = t(230569);
function u(e, n, t) {
    let u = {};
    for (let [d, _] of e.entries())
        u[
            (0, a.q)({
                proxyURL: _.proxyUrl,
                url: _.url
            })
        ] = (a) =>
            (function (e, n, t) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    u = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                    null != u &&
                        (l.default.track(
                            s.rMx.OPEN_MODAL,
                            {
                                type: s.jXE.MEDIA_VIEWER,
                                ...u
                            },
                            { throttlePercent: 0.01 }
                        ),
                        (0, o.fS)(u.guild_id, u.channel_id, u.channel_type, n.length)),
                    (0, r.K)({
                        ...a,
                        className: c.forcedTransparency,
                        onIndexChange: null != u ? o.f0 : void 0,
                        items: n,
                        startingIndex: t,
                        location: 'zoomedMediaModalHelper',
                        onCloseCallback: null != u ? o.VO : void 0
                    });
            })(a, e, d, n, t);
    return u;
}
