l.d(n, {
    Z: function () {
        return p;
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
    N = l(228168),
    j = l(36766);
function p(e) {
    let { guildId: n, welcomeMessage: l, className: r } = e,
        p = (0, d.e7)([I.Z], () => I.Z.getGuild(n)),
        b = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        E = (0, d.e7)([v.default], () => v.default.getUser(null == l ? void 0 : l.authorIds[0])),
        M = (0, d.e7)([v.default], () => v.default.getCurrentUser()),
        A = (0, g.ZP)(null == E ? void 0 : E.id, n),
        { theme: S, primaryColor: T } = (0, C.Z)({
            user: E,
            displayProfile: A
        }),
        R = (0, u.ZP)(),
        P = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, S).hex(),
        k = i.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.authorIds) && void 0 !== e ? e : [];
        }, [l]);
    i.useEffect(() => {
        o.Z.requestMembersById(n, k);
    }, [n, k]),
        i.useEffect(() => {
            null != E && (0, x.Z)(E.id, E.getAvatarURL(n, 48), { guildId: n });
        }, [E, n]);
    let y = (0, Z._T)(M),
        B = null != T ? (0, s.br)(T, 1) : P,
        H = (0, m.$0)(B);
    if (null == E || null == M || null == l) return null;
    let L = null != p && p.ownerId === E.id;
    return (0, a.jsx)('div', {
        className: t()(j.welcomeMessageContainer, r),
        children: (0, a.jsxs)(f.Z, {
            className: j.welcomeMessageProfileContainer,
            user: E,
            displayProfile: A,
            profileType: N.y0.CARD,
            themeOverride: R,
            forceShowPremium: !0,
            children: [
                (0, a.jsx)('div', { className: j.avatarBackground }),
                b
                    ? (0, a.jsx)(c.Avatar, {
                          src: E.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: j.avatar,
                          'aria-label': E.username
                      })
                    : (0, a.jsx)(c.AnimatedAvatar, {
                          src: E.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: j.avatar,
                          'aria-label': E.username
                      }),
                (0, a.jsx)('div', {
                    className: j.avatarBorder,
                    style: { backgroundColor: B }
                }),
                (0, a.jsxs)('div', {
                    className: j.welcomeMessageContent,
                    style: { color: H.hex() },
                    children: [
                        (0, a.jsxs)('div', {
                            className: j.adminUsernameContainer,
                            children: [
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'currentColor',
                                    children: _.ZP.getName(n, null, E)
                                }),
                                L
                                    ? (0, a.jsx)(c.CrownIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: j.ownerIcon
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
                            })(null == l ? void 0 : l.message, null != y ? y : M.username)
                        })
                    ]
                })
            ]
        })
    });
}
