i.d(n, {
    c: function () {
        return b;
    }
});
var t = i(735250);
i(470079);
var o = i(481060),
    a = i(269128),
    r = i(358555),
    l = i(267642),
    s = i(26323),
    c = i(30513),
    d = i(981631),
    u = i(689938),
    _ = i(472997);
function g(e) {
    let { guild: n, banner: i } = e;
    return (0, t.jsx)('div', {
        className: _.guildBanner,
        style: { backgroundImage: 'url('.concat(i) },
        children: (0, t.jsxs)('div', {
            className: _.guildHeader,
            children: [
                (0, t.jsx)(r.Z, {
                    guild: n,
                    isBannerVisible: !0
                }),
                (0, t.jsx)(o.Heading, {
                    className: _.guildName,
                    variant: 'heading-md/semibold',
                    children: n.toString()
                }),
                (0, t.jsx)(a.Z, {
                    className: _.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function b(e) {
    let { analyticsLocations: n, analyticsLocation: i, guild: o, isGIF: a, banner: r } = e,
        _ = a ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
    null != _ &&
        (0, s.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: i,
            guild: o,
            headerProps: {
                title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                subtitle: (function (e, n) {
                    let i = (0, l.nW)(e);
                    return n ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({ targetLevelOrPlan: i }) : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({ targetLevelOrPlan: i });
                })(_, a),
                image: (0, t.jsx)(g, {
                    guild: o,
                    banner: r
                })
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: a ? (0, c.zC)() : (0, c.XO)()
        });
}
