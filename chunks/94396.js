t.d(n, {
    _: function () {
        return s;
    }
}),
    t(47120),
    t(192379);
var o = t(374470),
    i = t(254109),
    a = t(312097),
    r = t(52824),
    c = t(626135),
    d = t(981631),
    l = t(431548);
function s(e, n, t) {
    let s = {};
    for (let [u, _] of e.entries())
        s[
            (0, r.q)({
                proxyURL: _.proxyUrl,
                url: _.url
            })
        ] = (r) =>
            (function (e, n, t) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, o.k)(e.currentTarget) && e.currentTarget.blur(),
                    null != s &&
                        (c.default.track(
                            d.rMx.OPEN_MODAL,
                            {
                                type: d.jXE.MEDIA_VIEWER,
                                ...s
                            },
                            { throttlePercent: 0.01 }
                        ),
                        (0, i.fS)(s.guild_id, s.channel_id, s.channel_type, n.length)),
                    (0, a.K)({
                        ...r,
                        className: l.forcedTransparency,
                        onIndexChange: null != s ? i.f0 : void 0,
                        items: n,
                        startingIndex: t,
                        location: 'zoomedMediaModalHelper',
                        onCloseCallback: null != s ? i.VO : void 0
                    });
            })(r, e, u, n, t);
    return s;
}
