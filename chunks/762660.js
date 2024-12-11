n.d(t, {
    C: function () {
        return C;
    },
    h: function () {
        return f;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    h = n(693546),
    x = n(246364),
    j = n(388032),
    g = n(372819);
function v(e) {
    let { icon: t, onClick: n, submitting: s, disabled: r } = e;
    return (0, i.jsx)(c.Clickable, {
        className: l()(g.actionIconContainer, { [g.disabled]: r || s }),
        onClick: n,
        children: s
            ? (0, i.jsx)(c.Dots, {
                  className: g.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, i.jsx)(t, {
                  className: g.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function C(e) {
    let { applicationStatus: t, guild: r, guildJoinRequest: a, className: C, onClick: f, atMaxMemberCapacity: R } = e,
        [E, p] = s.useState(null),
        { user: I, createdAt: T } = a;
    if (null == I) throw Error('Missing user on this guild join request!');
    let N = s.useMemo(() => new u.Z(I), [I]),
        b = m.ZP.getUserAvatarURL(N),
        Z = t === x.wB.SUBMITTED,
        w = s.useCallback(
            async (e, t) => {
                let { guildId: n, userId: i } = e;
                if (null == E) {
                    p(t);
                    try {
                        await h.Z.updateGuildJoinRequest(n, i, a.joinRequestId, t);
                    } catch (e) {
                        (0, c.showToast)((0, c.createToast)(j.intl.string(j.t.R0RpRU), c.ToastType.FAILURE)), p(null);
                    }
                }
            },
            [E, a.joinRequestId]
        ),
        S = async () => {
            await w(a, x.wB.APPROVED);
        },
        k = async () => {
            await w(a, x.wB.REJECTED);
        };
    return (0, i.jsxs)(c.Clickable, {
        className: l()(g.container, C),
        onClick: f,
        children: [
            (0, i.jsx)(c.Avatar, {
                src: b,
                size: c.AvatarSizes.SIZE_40,
                'aria-label': I.username,
                className: g.__invalid_spacer
            }),
            (0, i.jsxs)('div', {
                className: g.userDetails,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.username
                    }),
                    (0, i.jsx)(c.Text, {
                        className: g.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: o()(T).format('lll')
                    })
                ]
            }),
            Z &&
                !R &&
                (0, i.jsx)(v, {
                    icon: c.CheckmarkLargeIcon,
                    onClick: S,
                    submitting: E === x.wB.APPROVED,
                    disabled: null != E && E !== x.wB.APPROVED
                }),
            Z &&
                (0, i.jsx)(v, {
                    icon: c.XSmallIcon,
                    onClick: k,
                    submitting: E === x.wB.REJECTED,
                    disabled: null != E && E !== x.wB.REJECTED
                }),
            (0, i.jsx)(c.Clickable, {
                className: l()(g.overflowMenuContainer, { [g.disabled]: null != E }),
                onClick: (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    guild: r,
                                    user: N
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
                    className: g.icon,
                    width: 18
                })
            })
        ]
    });
}
function f() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, i.jsxs)('div', {
        className: g.placeholder,
        children: [
            (0, i.jsx)('div', { className: l()(g.placeholderAvatar) }),
            (0, i.jsxs)('div', {
                className: g.userDetails,
                children: [
                    (0, i.jsx)('div', {
                        className: g.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, i.jsx)('div', {
                        className: g.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
