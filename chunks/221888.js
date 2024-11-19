n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    f = n(239091),
    _ = n(410575),
    p = n(751688),
    h = n(199902),
    m = n(594174),
    g = n(823379),
    E = n(5192),
    v = n(354459),
    b = n(981631),
    I = n(388032),
    T = n(884532);
function S(e, t) {
    switch (e) {
        case v.fO.ACTIVITY:
            return I.intl.formatToPlainString(I.t.TCM94e, { numUsers: t });
        case v.fO.STREAM:
            return I.intl.formatToPlainString(I.t.BR7Tnp, { numViewers: t });
        default:
            throw Error('Unknown participant type.');
    }
}
function y(e) {
    let { users: t, disableInteraction: n, guildId: i, participantType: a, channelId: o, handleUserContextMenu: l } = e,
        u = S(a, t.length);
    return (0, r.jsx)(d.Dialog, {
        'aria-label': u,
        className: T.popoutWrapper,
        children: (0, r.jsxs)(d.Scroller, {
            className: T.scroller,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: 'heading-deprecated-12/semibold',
                    className: T.memberListHeader,
                    children: u
                }),
                (0, r.jsx)('div', {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            p.Z,
                            {
                                guildId: null != i ? i : void 0,
                                className: s()(T.memberListItem, { [T.popoutDisabled]: n }),
                                textClassName: T.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: E.ZP.getNickname(i, o, e),
                                onContextMenu: (t) => (n ? null : l(t, e))
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function A(e) {
    let { users: t, guildId: n, channelId: i, maxVisibleUsers: a = 3, className: o, participantType: l } = e,
        u = S(l, t.length),
        c =
            t.length < a
                ? t.map((e) =>
                      (0, r.jsx)(
                          'div',
                          {
                              className: T.viewersTooltipItem,
                              children: E.ZP.getName(n, i, e)
                          },
                          e.id
                      )
                  )
                : u;
    return (0, r.jsx)(d.TooltipContainer, {
        text: c,
        'aria-label': u,
        children: (0, r.jsxs)('div', {
            className: s()(T.viewers, o),
            children: [
                (0, r.jsx)(d.EyeIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: T.viewersIcon
                }),
                (0, r.jsx)('span', {
                    'aria-hidden': 'true',
                    children: t.length
                })
            ]
        })
    });
}
let N = [];
function C(e) {
    let { channelId: t, guildId: a, participant: o, className: p, compact: E = !1, disableInteraction: I = !1, maxVisibleUsers: S = 3 } = e,
        [C, R] = i.useState(!1),
        O = i.useRef(new c.sW(150, () => R(!1))),
        D = (0, u.Wu)(
            [h.Z, m.default],
            () => {
                if (o.type === v.fO.STREAM) {
                    let e = h.Z.getViewerIds(o.id);
                    return e.length > 0 ? e.map((e) => m.default.getUser(e)).filter(g.lm) : N;
                }
                return o.type === v.fO.ACTIVITY
                    ? o.participants.length > 0
                        ? Array.from(o.participants)
                              .map((e) => m.default.getUser(e.userId))
                              .filter(g.lm)
                        : N
                    : N;
            },
            [o]
        ),
        L = i.useCallback(() => {
            O.current.cancel(), R(!0);
        }, []),
        x = i.useCallback(() => {
            O.current.delay();
        }, []),
        w = i.useCallback(
            (e, t) => {
                L(),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('44378')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    user: t
                                });
                        },
                        { onClose: x }
                    );
            },
            [x, L]
        );
    if (0 === D.length) return null;
    if (E)
        return (0, r.jsx)(A, {
            maxVisibleUsers: S,
            users: D,
            guildId: a,
            channelId: t,
            className: p,
            participantType: o.type
        });
    let M = l()(D)
        .take(S)
        .map((e) =>
            (0, r.jsx)(
                d.Avatar,
                {
                    src: e.getAvatarURL(a, 24),
                    'aria-label': e.username,
                    size: d.AvatarSizes.SIZE_24,
                    className: T.viewer
                },
                e.id
            )
        )
        .value();
    return (
        D.length > S &&
            (M[M.length - 1] = (0, r.jsxs)(
                'div',
                {
                    className: T.overflow,
                    children: ['+', D.length - S + 1]
                },
                'overflow'
            )),
        (0, r.jsx)(_.Z, {
            section: b.jXE.STREAM_VIEWER_POPOUT,
            children: (0, r.jsx)('div', {
                onMouseEnter: L,
                onMouseLeave: x,
                children: (0, r.jsx)(d.Popout, {
                    renderPopout: () =>
                        (0, r.jsx)(y, {
                            participantType: o.type,
                            handleUserContextMenu: w,
                            guildId: a,
                            channelId: t,
                            users: D,
                            disableInteraction: I
                        }),
                    shouldShow: C,
                    position: 'top',
                    children: () =>
                        (0, r.jsx)('div', {
                            className: s()(T.viewers, p),
                            children: M
                        })
                })
            })
        })
    );
}
