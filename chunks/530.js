n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(129861),
    l = n(406943),
    u = n(385499),
    c = n(979264),
    d = n(228168),
    f = n(388032),
    _ = n(961347);
function p(e) {
    let { user: t, profileType: n, usernameIcon: i, tags: p, nickname: h, nicknameIcons: m, pronouns: g, className: E, isTryItOut: v, onOpenProfile: I, nicknameVariant: T = 'heading-lg/bold', pronounsVariant: b = 'text-sm/medium' } = e,
        S = {
            [_.biteSize]: n === d.y0.BITE_SIZE,
            [_.fullSize]: n === d.y0.FULL_SIZE,
            [_.panel]: n === d.y0.PANEL
        },
        y = (e) =>
            null == I
                ? e
                : (0, r.jsx)(s.Clickable, {
                      onClick: I,
                      className: _.clickableUsername,
                      children: e
                  }),
        A = null != g && g.length > 0,
        N = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: a()(_.container, { [_.bot]: null != N }, E),
        children: [
            (0, r.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    y(
                        (0, r.jsx)(s.Heading, {
                            className: a()(_.nickname, S),
                            variant: T,
                            children: h
                        })
                    ),
                    null != N &&
                        (0, r.jsx)(u.Z, {
                            type: N,
                            verified: t.isVerifiedBot()
                        }),
                    null != m &&
                        (0, r.jsx)('div', {
                            className: a()(_.nicknameIcons, S),
                            children: m
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(_.tags, S, {
                    [_.pronouns]: A,
                    [_.bot]: null != N
                }),
                children: [
                    y(
                        (0, r.jsx)(o.Z, {
                            user: t,
                            usernameIcon: i,
                            forceUsername: !0,
                            forcePomelo: v,
                            className: _.userTag,
                            usernameClass: _.userTagUsername,
                            discriminatorClass: _.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: _.dotSpacer
                                }),
                                (0, r.jsx)(s.TooltipContainer, {
                                    className: _.pronounsTooltip,
                                    text: f.intl.string(f.t.GI2A8P),
                                    delay: d.vB,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: b,
                                        className: _.pronounsText,
                                        color: 'header-primary',
                                        children: g
                                    })
                                })
                            ]
                        }),
                    (0, r.jsx)(c.ZP, {
                        userId: t.id,
                        containerClassName: _.clanTagContainer,
                        className: _.clanTag
                    }),
                    p
                ]
            })
        ]
    });
}
