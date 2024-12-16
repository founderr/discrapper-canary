n.d(t, {
    C: function () {
        return C;
    },
    h: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(913527),
    c = n.n(l),
    s = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    f = n(693546),
    b = n(246364),
    x = n(388032),
    p = n(372819);
function h(e) {
    let { icon: t, onClick: n, submitting: r, disabled: a } = e;
    return (0, i.jsx)(s.Clickable, {
        className: o()(p.actionIconContainer, { [p.disabled]: a || r }),
        onClick: n,
        children: r
            ? (0, i.jsx)(s.Dots, {
                  className: p.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, i.jsx)(t, {
                  className: p.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function C(e) {
    let { applicationStatus: t, guild: a, guildJoinRequest: l, className: C, onClick: g, atMaxMemberCapacity: _ } = e,
        [v, j] = r.useState(null),
        { user: I, createdAt: T } = l;
    if (null == I) throw Error('Missing user on this guild join request!');
    let R = r.useMemo(() => new u.Z(I), [I]),
        E = m.ZP.getUserAvatarURL(R),
        S = t === b.wB.SUBMITTED,
        w = r.useCallback(
            async (e, t) => {
                let { guildId: n, userId: i } = e;
                if (null == v) {
                    j(t);
                    try {
                        await f.Z.updateGuildJoinRequest(n, i, l.joinRequestId, t);
                    } catch (e) {
                        (0, s.showToast)((0, s.createToast)(x.intl.string(x.t.R0RpRU), s.ToastType.FAILURE)), j(null);
                    }
                }
            },
            [v, l.joinRequestId]
        ),
        A = async () => {
            await w(l, b.wB.APPROVED);
        },
        N = async () => {
            await w(l, b.wB.REJECTED);
        };
    return (0, i.jsxs)(s.Clickable, {
        className: o()(p.container, C),
        onClick: g,
        children: [
            (0, i.jsx)(s.Avatar, {
                src: E,
                size: s.AvatarSizes.SIZE_40,
                'aria-label': I.username,
                className: p.__invalid_spacer
            }),
            (0, i.jsxs)('div', {
                className: p.userDetails,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.username
                    }),
                    (0, i.jsx)(s.Text, {
                        className: p.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: c()(T).format('lll')
                    })
                ]
            }),
            S &&
                !_ &&
                (0, i.jsx)(h, {
                    icon: s.CheckmarkLargeIcon,
                    onClick: A,
                    submitting: v === b.wB.APPROVED,
                    disabled: null != v && v !== b.wB.APPROVED
                }),
            S &&
                (0, i.jsx)(h, {
                    icon: s.XSmallIcon,
                    onClick: N,
                    submitting: v === b.wB.REJECTED,
                    disabled: null != v && v !== b.wB.REJECTED
                }),
            (0, i.jsx)(s.Clickable, {
                className: o()(p.overflowMenuContainer, { [p.disabled]: null != v }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guild: a,
                                    user: R
                                });
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, i.jsx)(s.MoreHorizontalIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: p.icon,
                    width: 18
                })
            })
        ]
    });
}
function g() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, i.jsxs)('div', {
        className: p.placeholder,
        children: [
            (0, i.jsx)('div', { className: o()(p.placeholderAvatar) }),
            (0, i.jsxs)('div', {
                className: p.userDetails,
                children: [
                    (0, i.jsx)('div', {
                        className: p.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, i.jsx)('div', {
                        className: p.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
