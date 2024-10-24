l.d(n, {
    Z: function () {
        return j;
    }
});
var a = l(200651),
    i = l(192379),
    r = l(120356),
    t = l.n(r),
    s = l(866442),
    d = l(399606),
    c = l(481060),
    o = l(749210),
    u = l(410030),
    h = l(607070),
    m = l(603368),
    g = l(687158),
    C = l(576635),
    x = l(484459),
    f = l(502762),
    I = l(430824),
    v = l(594174),
    _ = l(5192),
    Z = l(51144),
    N = l(36766);
function j(e) {
    let { guildId: n, welcomeMessage: l, className: r } = e,
        j = (0, d.e7)([I.Z], () => I.Z.getGuild(n)),
        p = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        b = (0, d.e7)([v.default], () => v.default.getUser(null == l ? void 0 : l.authorIds[0])),
        E = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        M = (0, g.ZP)(null == b ? void 0 : b.id, n),
        { theme: A, primaryColor: S } = (0, C.Z)({
            user: b,
            displayProfile: M
        }),
        T = (0, u.ZP)(),
        R = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, A).hex(),
        P = i.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.authorIds) && void 0 !== e ? e : [];
        }, [l]);
    i.useEffect(() => {
        o.Z.requestMembersById(n, P);
    }, [n, P]),
        i.useEffect(() => {
            null != b && (0, x.Z)(b.id, b.getAvatarURL(n, 48), { guildId: n });
        }, [b, n]);
    let k = (0, Z._T)(E),
        B = null != S ? (0, s.br)(S, 1) : R,
        y = (0, m.$0)(B);
    if (null == b || null == E || null == l) return null;
    let H = null != j && j.ownerId === b.id;
    return (0, a.jsx)('div', {
        className: t()(N.welcomeMessageContainer, r),
        children: (0, a.jsxs)(f.Z, {
            className: N.welcomeMessageProfileContainer,
            user: b,
            displayProfile: M,
            profileType: null,
            themeOverride: T,
            forceShowPremium: !0,
            children: [
                (0, a.jsx)('div', { className: N.avatarBackground }),
                p
                    ? (0, a.jsx)(c.Avatar, {
                          src: b.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: N.avatar,
                          'aria-label': b.username
                      })
                    : (0, a.jsx)(c.AnimatedAvatar, {
                          src: b.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: N.avatar,
                          'aria-label': b.username
                      }),
                (0, a.jsx)('div', {
                    className: N.avatarBorder,
                    style: { backgroundColor: B }
                }),
                (0, a.jsxs)('div', {
                    className: N.welcomeMessageContent,
                    style: { color: y.hex() },
                    children: [
                        (0, a.jsxs)('div', {
                            className: N.adminUsernameContainer,
                            children: [
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: _.ZP.getName(n, null, b)
                                }),
                                H
                                    ? (0, a.jsx)(c.CrownIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: N.ownerIcon
                                      })
                                    : null
                            ]
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'currentColor',
                            children: (function (e, n) {
                                let l = e.split(/\[@username\]/g);
                                return (0, a.jsx)('span', {
                                    children: l.map((e, r) =>
                                        (0, a.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    e,
                                                    r < l.length - 1
                                                        ? (0, a.jsx)(c.Text, {
                                                              tag: 'span',
                                                              variant: 'text-md/semibold',
                                                              children: '@'.concat(n)
                                                          })
                                                        : null
                                                ]
                                            },
                                            'username-'.concat(r)
                                        )
                                    )
                                });
                            })(null == l ? void 0 : l.message, null != k ? k : E.username)
                        })
                    ]
                })
            ]
        })
    });
}
