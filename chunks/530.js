n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(129861),
    u = n(906732),
    c = n(970854),
    d = n(385499),
    _ = n(954138),
    E = n(979264),
    f = n(228168),
    h = n(689938),
    p = n(543337);
function I(e) {
    let { user: t, profileType: n, usernameIcon: a, tags: I, nickname: m, nicknameIcons: T, pronouns: S, className: g, isTryItOut: A, onOpenProfile: N, nicknameVariant: R = 'heading-lg/bold', pronounsVariant: O = 'text-sm/medium' } = e,
        { newestAnalyticsLocation: v } = (0, u.ZP)(),
        C = {
            [p.biteSize]: n === f.y0.BITE_SIZE,
            [p.fullSize]: n === f.y0.FULL_SIZE,
            [p.panel]: n === f.y0.PANEL
        },
        L = (e) =>
            null == N
                ? e
                : (0, r.jsx)(o.Clickable, {
                      onClick: N,
                      className: p.clickableUsername,
                      children: e
                  }),
        D = null != S && S.length > 0,
        y = (0, c.D)(t),
        b = (0, _.Z)('UserProfileUsername'),
        M = i.useMemo(
            () => ({
                source: v,
                tagUserId: t.id
            }),
            [v, t.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(p.container, { [p.bot]: null != y }, g),
        children: [
            (0, r.jsxs)('div', {
                className: p.usernameRow,
                children: [
                    L(
                        (0, r.jsx)(o.Heading, {
                            className: s()(p.nickname, C),
                            variant: R,
                            children: m
                        })
                    ),
                    null != y &&
                        (0, r.jsx)(d.Z, {
                            type: y,
                            verified: t.isVerifiedBot()
                        }),
                    null != T &&
                        (0, r.jsx)('div', {
                            className: s()(p.nicknameIcons, C),
                            children: T
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(p.tags, C, {
                    [p.pronouns]: D,
                    [p.bot]: null != y
                }),
                children: [
                    L(
                        (0, r.jsx)(l.Z, {
                            user: t,
                            usernameIcon: a,
                            forceUsername: !0,
                            forcePomelo: A,
                            className: p.userTag,
                            usernameClass: p.userTagUsername,
                            discriminatorClass: p.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    D &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: p.dotSpacer
                                }),
                                (0, r.jsx)(o.TooltipContainer, {
                                    className: p.pronounsTooltip,
                                    text: h.Z.Messages.USER_PROFILE_PRONOUNS,
                                    delay: f.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: O,
                                        className: p.pronounsText,
                                        color: 'header-primary',
                                        children: S
                                    })
                                })
                            ]
                        }),
                    b &&
                        (0, r.jsx)(E.ZP, {
                            userId: t.id,
                            profileViewedAnalytics: M,
                            containerClassName: p.clanTagContainer,
                            className: p.clanTag
                        }),
                    I
                ]
            })
        ]
    });
}
