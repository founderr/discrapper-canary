t.d(l, {
    _: function () {
        return h;
    }
}),
    t(47120);
var n = t(200651);
t(192379);
var i = t(374470),
    r = t(481060),
    a = t(254109),
    s = t(52824),
    o = t(626135),
    d = t(981631),
    u = t(701865),
    m = t(268108);
function h(e, l, h) {
    let c = {};
    for (let [p, b] of e.entries())
        c[
            (0, s.q)({
                proxyURL: b.proxyUrl,
                url: b.url
            })
        ] = (s) =>
            (function (e, l, s) {
                let h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    c = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                    null != c &&
                        (o.default.track(
                            d.rMx.OPEN_MODAL,
                            {
                                type: d.jXE.MEDIA_VIEWER,
                                ...c
                            },
                            { throttlePercent: 0.01 }
                        ),
                        (0, a.fS)(c.guild_id, c.channel_id, c.channel_type, l.length)),
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(t.bind(t, 950120));
                            return (t) =>
                                (0, n.jsx)(e, {
                                    ...t,
                                    ...h,
                                    className: m.forcedTransparency,
                                    onIndexChange: null != c ? a.f0 : void 0,
                                    items: l,
                                    startingIndex: s
                                });
                        },
                        {
                            onCloseCallback: null != c ? a.VO : void 0,
                            modalKey: u.U
                        }
                    );
            })(s, e, p, l, h);
    return c;
}
