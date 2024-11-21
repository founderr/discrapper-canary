n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(129861),
    u = n(906732),
    c = n(406943),
    d = n(385499),
    f = n(979264),
    _ = n(228168),
    p = n(388032),
    h = n(543337);
function m(e) {
    let { user: t, profileType: n, usernameIcon: a, tags: m, nickname: g, nicknameIcons: E, pronouns: v, className: b, isTryItOut: I, onOpenProfile: T, nicknameVariant: S = 'heading-lg/bold', pronounsVariant: y = 'text-sm/medium' } = e,
        { newestAnalyticsLocation: A } = (0, u.ZP)(),
        N = {
            [h.biteSize]: n === _.y0.BITE_SIZE,
            [h.fullSize]: n === _.y0.FULL_SIZE,
            [h.panel]: n === _.y0.PANEL
        },
        C = (e) =>
            null == T
                ? e
                : (0, r.jsx)(o.Clickable, {
                      onClick: T,
                      className: h.clickableUsername,
                      children: e
                  }),
        R = null != v && v.length > 0,
        O = (0, c.D)(t),
        D = i.useMemo(
            () => ({
                source: A,
                tagUserId: t.id
            }),
            [A, t.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(h.container, { [h.bot]: null != O }, b),
        children: [
            (0, r.jsxs)('div', {
                className: h.usernameRow,
                children: [
                    C(
                        (0, r.jsx)(o.Heading, {
                            className: s()(h.nickname, N),
                            variant: S,
                            children: g
                        })
                    ),
                    null != O &&
                        (0, r.jsx)(d.Z, {
                            type: O,
                            verified: t.isVerifiedBot()
                        }),
                    null != E &&
                        (0, r.jsx)('div', {
                            className: s()(h.nicknameIcons, N),
                            children: E
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(h.tags, N, {
                    [h.pronouns]: R,
                    [h.bot]: null != O
                }),
                children: [
                    C(
                        (0, r.jsx)(l.Z, {
                            user: t,
                            usernameIcon: a,
                            forceUsername: !0,
                            forcePomelo: I,
                            className: h.userTag,
                            usernameClass: h.userTagUsername,
                            discriminatorClass: h.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: h.dotSpacer
                                }),
                                (0, r.jsx)(o.TooltipContainer, {
                                    className: h.pronounsTooltip,
                                    text: p.intl.string(p.t.GI2A8P),
                                    delay: _.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: y,
                                        className: h.pronounsText,
                                        color: 'header-primary',
                                        children: v
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(f.ZP, {
                        userId: t.id,
                        profileViewedAnalytics: D,
                        containerClassName: h.clanTagContainer,
                        className: h.clanTag
                    }),
                    m
                ]
            })
        ]
    });
}
