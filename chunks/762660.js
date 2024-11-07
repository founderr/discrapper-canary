n.d(t, {
    C: function () {
        return g;
    },
    h: function () {
        return v;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    h = n(693546),
    x = n(246364),
    b = n(388032),
    j = n(3969);
function p(e) {
    let { icon: t, onClick: n, submitting: l, disabled: r } = e;
    return (0, i.jsx)(c.Clickable, {
        className: a()(j.actionIconContainer, { [j.disabled]: r || l }),
        onClick: n,
        children: l
            ? (0, i.jsx)(c.Dots, {
                  className: j.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, i.jsx)(t, {
                  className: j.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function g(e) {
    let { applicationStatus: t, guild: r, guildJoinRequest: s, className: g, onClick: v, atMaxMemberCapacity: f } = e,
        [C, I] = l.useState(null),
        { user: R, createdAt: E } = s;
    if (null == R) throw Error('Missing user on this guild join request!');
    let T = l.useMemo(() => new u.Z(R), [R]),
        S = m.ZP.getUserAvatarURL(T),
        _ = t === x.wB.SUBMITTED,
        N = l.useCallback(
            async (e, t) => {
                let { guildId: n, userId: i } = e;
                if (null == C) {
                    I(t);
                    try {
                        await h.Z.updateGuildJoinRequest(n, i, s.joinRequestId, t);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.R0RpRU), c.ToastType.FAILURE)), I(null);
                    }
                }
            },
            [C, s.joinRequestId]
        ),
        A = async () => {
            await N(s, x.wB.APPROVED);
        },
        Z = async () => {
            await N(s, x.wB.REJECTED);
        };
    return (0, i.jsxs)(c.Clickable, {
        className: a()(j.container, g),
        onClick: v,
        children: [
            (0, i.jsx)(c.Avatar, {
                src: S,
                size: c.AvatarSizes.SIZE_40,
                'aria-label': R.username,
                className: j.__invalid_spacer
            }),
            (0, i.jsxs)('div', {
                className: j.userDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: R.username
                    }),
                    (0, i.jsx)(c.Text, {
                        className: j.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o()(E).format('lll')
                    })
                ]
            }),
            _ &&
                !f &&
                (0, i.jsx)(p, {
                    icon: c.CheckmarkLargeIcon,
                    onClick: A,
                    submitting: C === x.wB.APPROVED,
                    disabled: null != C && C !== x.wB.APPROVED
                }),
            _ &&
                (0, i.jsx)(p, {
                    icon: c.XSmallIcon,
                    onClick: Z,
                    submitting: C === x.wB.REJECTED,
                    disabled: null != C && C !== x.wB.REJECTED
                }),
            (0, i.jsx)(c.Clickable, {
                className: a()(j.overflowMenuContainer, { [j.disabled]: null != C }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guild: r,
                                    user: T
                                });
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: j.icon,
                    width: 18
                })
            })
        ]
    });
}
function v() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, i.jsxs)('div', {
        className: j.placeholder,
        children: [
            (0, i.jsx)('div', { className: a()(j.placeholderAvatar) }),
            (0, i.jsxs)('div', {
                className: j.userDetails,
                children: [
                    (0, i.jsx)('div', {
                        className: j.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, i.jsx)('div', {
                        className: j.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
