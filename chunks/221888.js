n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(846519),
    E = n(481060),
    f = n(239091),
    h = n(410575),
    p = n(751688),
    m = n(199902),
    I = n(594174),
    T = n(823379),
    g = n(5192),
    S = n(354459),
    A = n(981631),
    v = n(689938),
    N = n(526982);
let O = 150;
function R(e, t) {
    switch (e) {
        case S.fO.ACTIVITY:
            return v.Z.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({ numUsers: t });
        case S.fO.STREAM:
            return v.Z.Messages.SPECTATORS.format({ numViewers: t });
        default:
            throw Error('Unknown participant type.');
    }
}
function C(e) {
    let { users: t, disableInteraction: n, guildId: r, participantType: i, channelId: o, handleUserContextMenu: s } = e,
        u = R(i, t.length);
    return (0, a.jsx)(E.Dialog, {
        'aria-label': u,
        className: N.popoutWrapper,
        children: (0, a.jsxs)(E.Scroller, {
            className: N.scroller,
            children: [
                (0, a.jsx)(E.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: N.memberListHeader,
                    children: u
                }),
                (0, a.jsx)('div', {
                    children: t.map((e) =>
                        (0, a.jsx)(
                            p.Z,
                            {
                                guildId: null != r ? r : void 0,
                                className: l()(N.memberListItem, { [N.popoutDisabled]: n }),
                                textClassName: N.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: g.ZP.getNickname(r, o, e),
                                onContextMenu: (t) => (n ? null : s(t, e))
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function y(e) {
    let { users: t, guildId: n, channelId: r, maxVisibleUsers: i = 3, className: o, participantType: s } = e,
        u = R(s, t.length),
        c =
            t.length < i
                ? t.map((e) =>
                      (0, a.jsx)(
                          'div',
                          {
                              className: N.viewersTooltipItem,
                              children: g.ZP.getName(n, r, e)
                          },
                          e.id
                      )
                  )
                : u;
    return (0, a.jsx)(E.TooltipContainer, {
        text: c,
        'aria-label': u,
        children: (0, a.jsxs)('div', {
            className: l()(N.viewers, o),
            children: [
                (0, a.jsx)(E.EyeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: N.viewersIcon
                }),
                (0, a.jsx)('span', {
                    'aria-hidden': 'true',
                    children: t.length
                })
            ]
        })
    });
}
let b = [];
function L(e) {
    let { channelId: t, guildId: r, participant: i, className: s, compact: u = !1, disableInteraction: p = !1, maxVisibleUsers: g = 3 } = e,
        [v, R] = o.useState(!1),
        L = o.useRef(new _.sW(O, () => R(!1))),
        D = (0, d.Wu)(
            [m.Z, I.default],
            () => {
                if (i.type === S.fO.STREAM) {
                    let e = m.Z.getViewerIds(i.id);
                    return e.length > 0 ? e.map((e) => I.default.getUser(e)).filter(T.lm) : b;
                }
                return i.type === S.fO.ACTIVITY
                    ? i.participants.length > 0
                        ? Array.from(i.participants)
                              .map((e) => I.default.getUser(e.userId))
                              .filter(T.lm)
                        : b
                    : b;
            },
            [i]
        ),
        M = o.useCallback(() => {
            L.current.cancel(), R(!0);
        }, []),
        P = o.useCallback(() => {
            L.current.delay();
        }, []),
        U = o.useCallback(
            (e, t) => {
                M(),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    ...n,
                                    user: t
                                });
                        },
                        { onClose: P }
                    );
            },
            [P, M]
        );
    if (0 === D.length) return null;
    if (u)
        return (0, a.jsx)(y, {
            maxVisibleUsers: g,
            users: D,
            guildId: r,
            channelId: t,
            className: s,
            participantType: i.type
        });
    let w = c()(D)
        .take(g)
        .map((e) =>
            (0, a.jsx)(
                E.Avatar,
                {
                    src: e.getAvatarURL(r, 24),
                    'aria-label': e.username,
                    size: E.AvatarSizes.SIZE_24,
                    className: N.viewer
                },
                e.id
            )
        )
        .value();
    return (
        D.length > g &&
            (w[w.length - 1] = (0, a.jsxs)(
                'div',
                {
                    className: N.overflow,
                    children: ['+', D.length - g + 1]
                },
                'overflow'
            )),
        (0, a.jsx)(h.Z, {
            section: A.jXE.STREAM_VIEWER_POPOUT,
            children: (0, a.jsx)('div', {
                onMouseEnter: M,
                onMouseLeave: P,
                children: (0, a.jsx)(E.Popout, {
                    renderPopout: () =>
                        (0, a.jsx)(C, {
                            participantType: i.type,
                            handleUserContextMenu: U,
                            guildId: r,
                            channelId: t,
                            users: D,
                            disableInteraction: p
                        }),
                    shouldShow: v,
                    position: 'top',
                    children: () =>
                        (0, a.jsx)('div', {
                            className: l()(N.viewers, s),
                            children: w
                        })
                })
            })
        })
    );
}
