n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(129861),
    l = n(970854),
    u = n(385499),
    c = n(228168),
    d = n(689938),
    _ = n(543337);
function E(e) {
    let { user: t, profileType: n, usernameIcon: i, tags: E, nickname: f, nicknameIcons: h, pronouns: p, className: I, isTryItOut: m, onOpenProfile: T, nicknameVariant: S = 'heading-lg/bold', pronounsVariant: g = 'text-sm/medium' } = e,
        A = {
            [_.biteSize]: n === c.y0.BITE_SIZE,
            [_.fullSize]: n === c.y0.FULL_SIZE,
            [_.panel]: n === c.y0.PANEL
        },
        N = (e) =>
            null == T
                ? e
                : (0, r.jsx)(s.Clickable, {
                      onClick: T,
                      className: _.clickableUsername,
                      children: e
                  }),
        O = null != p && p.length > 0,
        R = (0, l.D)(t);
    return (0, r.jsxs)('div', {
        className: a()(_.container, { [_.bot]: null != R }, I),
        children: [
            (0, r.jsxs)('div', {
                className: _.usernameRow,
                children: [
                    N(
                        (0, r.jsx)(s.Heading, {
                            className: a()(_.nickname, A),
                            variant: S,
                            children: f
                        })
                    ),
                    null != R &&
                        (0, r.jsx)(u.Z, {
                            type: R,
                            verified: t.isVerifiedBot()
                        }),
                    null != h &&
                        (0, r.jsx)('div', {
                            className: a()(_.nicknameIcons, A),
                            children: h
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(_.tags, A, {
                    [_.pronouns]: O,
                    [_.bot]: null != R
                }),
                children: [
                    N(
                        (0, r.jsx)(o.Z, {
                            user: t,
                            usernameIcon: i,
                            forceUsername: !0,
                            forcePomelo: m,
                            className: _.userTag,
                            usernameClass: _.userTagUsername,
                            discriminatorClass: _.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: _.dotSpacer
                                }),
                                (0, r.jsx)(s.TooltipContainer, {
                                    className: _.pronounsTooltip,
                                    text: d.Z.Messages.USER_PROFILE_PRONOUNS,
                                    delay: c.vB,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: g,
                                        className: _.pronounsText,
                                        color: 'header-primary',
                                        children: p
                                    })
                                })
                            ]
                        }),
                    E
                ]
            })
        ]
    });
}
