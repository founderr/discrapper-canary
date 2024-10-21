n.d(s, {
    C: function () {
        return M;
    },
    h: function () {
        return N;
    }
}),
    n(47120),
    n(411104);
var t = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    i = n(913527),
    o = n.n(i),
    c = n(481060),
    d = n(239091),
    u = n(598077),
    I = n(768581),
    E = n(693546),
    _ = n(246364),
    T = n(689938),
    m = n(984221);
function R(e) {
    let { icon: s, onClick: n, submitting: a, disabled: l } = e;
    return (0, t.jsx)(c.Clickable, {
        className: r()(m.actionIconContainer, { [m.disabled]: l || a }),
        onClick: n,
        children: a
            ? (0, t.jsx)(c.Dots, {
                  className: m.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, t.jsx)(s, {
                  className: m.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function M(e) {
    let { applicationStatus: s, guild: l, guildJoinRequest: i, className: M, onClick: N, atMaxMemberCapacity: C } = e,
        [x, h] = a.useState(null),
        { user: A, createdAt: b } = i;
    if (null == A) throw Error('Missing user on this guild join request!');
    let S = a.useMemo(() => new u.Z(A), [A]),
        j = I.ZP.getUserAvatarURL(S),
        P = s === _.wB.SUBMITTED,
        p = a.useCallback(
            async (e, s) => {
                let { guildId: n, userId: t } = e;
                if (null == x) {
                    h(s);
                    try {
                        await E.Z.updateGuildJoinRequest(n, t, i.joinRequestId, s);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(T.Z.Messages.ERROR_GENERIC_TITLE, c.ToastType.FAILURE)), h(null);
                    }
                }
            },
            [x, i.joinRequestId]
        ),
        g = async () => {
            await p(i, _.wB.APPROVED);
        },
        v = async () => {
            await p(i, _.wB.REJECTED);
        };
    return (0, t.jsxs)(c.Clickable, {
        className: r()(m.container, M),
        onClick: N,
        children: [
            (0, t.jsx)(c.Avatar, {
                src: j,
                size: c.AvatarSizes.SIZE_40,
                'aria-label': A.username,
                className: m.__invalid_spacer
            }),
            (0, t.jsxs)('div', {
                className: m.userDetails,
                children: [
                    (0, t.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: A.username
                    }),
                    (0, t.jsx)(c.Text, {
                        className: m.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o()(b).format('lll')
                    })
                ]
            }),
            P &&
                !C &&
                (0, t.jsx)(R, {
                    icon: c.CheckmarkLargeIcon,
                    onClick: g,
                    submitting: x === _.wB.APPROVED,
                    disabled: null != x && x !== _.wB.APPROVED
                }),
            P &&
                (0, t.jsx)(R, {
                    icon: c.XSmallIcon,
                    onClick: v,
                    submitting: x === _.wB.REJECTED,
                    disabled: null != x && x !== _.wB.REJECTED
                }),
            (0, t.jsx)(c.Clickable, {
                className: r()(m.overflowMenuContainer, { [m.disabled]: null != x }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (s) =>
                                (0, t.jsx)(e, {
                                    ...s,
                                    guild: l,
                                    user: S
                                });
                        },
                        {
                            position: 'bottom',
                            align: 'right'
                        }
                    );
                },
                children: (0, t.jsx)(c.MoreHorizontalIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: m.icon,
                    width: 18
                })
            })
        ]
    });
}
function N() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        s = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, t.jsxs)('div', {
        className: m.placeholder,
        children: [
            (0, t.jsx)('div', { className: r()(m.placeholderAvatar) }),
            (0, t.jsxs)('div', {
                className: m.userDetails,
                children: [
                    (0, t.jsx)('div', {
                        className: m.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, t.jsx)('div', {
                        className: m.placeholderCreatedAt,
                        style: { maxWidth: s }
                    })
                ]
            })
        ]
    });
}
