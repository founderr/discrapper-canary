n.d(e, {
    _: function () {
        return I;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var s = n(374470),
    o = n(481060),
    r = n(254109),
    l = n(52824),
    a = n(626135),
    c = n(981631),
    u = n(701865),
    d = n(268108);
function I(t, e, I) {
    let S = {};
    for (let [_, p] of t.entries())
        S[
            (0, l.q)({
                proxyURL: p.proxyUrl,
                url: p.url
            })
        ] = (l) =>
            (function (t, e, l) {
                let I = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    S = arguments.length > 4 ? arguments[4] : void 0;
                t.preventDefault(),
                    (0, s.k)(t.currentTarget) && t.currentTarget.blur(),
                    null != S &&
                        (a.default.track(
                            c.rMx.OPEN_MODAL,
                            {
                                type: c.jXE.MEDIA_VIEWER,
                                ...S
                            },
                            { throttlePercent: 0.01 }
                        ),
                        (0, r.fS)(S.guild_id, S.channel_id, S.channel_type, e.length)),
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.resolve().then(n.bind(n, 950120));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    ...I,
                                    className: d.forcedTransparency,
                                    onIndexChange: null != S ? r.f0 : void 0,
                                    items: e,
                                    startingIndex: l
                                });
                        },
                        {
                            onCloseCallback: null != S ? r.VO : void 0,
                            modalKey: u.U
                        }
                    );
            })(l, t, _, e, I);
    return S;
}
