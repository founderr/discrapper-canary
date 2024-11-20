n.d(t, {
    C: function () {
        return g;
    },
    h: function () {
        return C;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    c = n.n(o),
    s = n(481060),
    d = n(239091),
    u = n(598077),
    m = n(768581),
    f = n(693546),
    b = n(246364),
    x = n(388032),
    h = n(984221);
function p(e) {
    let { icon: t, onClick: n, submitting: r, disabled: a } = e;
    return (0, i.jsx)(s.Clickable, {
        className: l()(h.actionIconContainer, { [h.disabled]: a || r }),
        onClick: n,
        children: r
            ? (0, i.jsx)(s.Dots, {
                  className: h.icon,
                  dotRadius: 2,
                  themed: !0
              })
            : (0, i.jsx)(t, {
                  className: h.icon,
                  size: 'xxs',
                  color: 'currentColor'
              })
    });
}
function g(e) {
    let { applicationStatus: t, guild: a, guildJoinRequest: o, className: g, onClick: C, atMaxMemberCapacity: _ } = e,
        [v, j] = r.useState(null),
        { user: I, createdAt: T } = o;
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
                        await f.Z.updateGuildJoinRequest(n, i, o.joinRequestId, t);
                    } catch (e) {
                        (0, s.showToast)((0, s.createToast)(x.intl.string(x.t.R0RpRU), s.ToastType.FAILURE)), j(null);
                    }
                }
            },
            [v, o.joinRequestId]
        ),
        N = async () => {
            await w(o, b.wB.APPROVED);
        },
        A = async () => {
            await w(o, b.wB.REJECTED);
        };
    return (0, i.jsxs)(s.Clickable, {
        className: l()(h.container, g),
        onClick: C,
        children: [
            (0, i.jsx)(s.Avatar, {
                src: E,
                size: s.AvatarSizes.SIZE_40,
                'aria-label': I.username,
                className: h.__invalid_spacer
            }),
            (0, i.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.username
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.createdAt,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: c()(T).format('lll')
                    })
                ]
            }),
            S &&
                !_ &&
                (0, i.jsx)(p, {
                    icon: s.CheckmarkLargeIcon,
                    onClick: N,
                    submitting: v === b.wB.APPROVED,
                    disabled: null != v && v !== b.wB.APPROVED
                }),
            S &&
                (0, i.jsx)(p, {
                    icon: s.XSmallIcon,
                    onClick: A,
                    submitting: v === b.wB.REJECTED,
                    disabled: null != v && v !== b.wB.REJECTED
                }),
            (0, i.jsx)(s.Clickable, {
                className: l()(h.overflowMenuContainer, { [h.disabled]: null != v }),
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
                    className: h.icon,
                    width: 18
                })
            })
        ]
    });
}
function C() {
    let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
        t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
    return (0, i.jsxs)('div', {
        className: h.placeholder,
        children: [
            (0, i.jsx)('div', { className: l()(h.placeholderAvatar) }),
            (0, i.jsxs)('div', {
                className: h.userDetails,
                children: [
                    (0, i.jsx)('div', {
                        className: h.placeholderUsername,
                        style: { maxWidth: e }
                    }),
                    (0, i.jsx)('div', {
                        className: h.placeholderCreatedAt,
                        style: { maxWidth: t }
                    })
                ]
            })
        ]
    });
}
