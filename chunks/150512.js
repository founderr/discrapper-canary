l.d(n, {
    Z: function () {
        return N;
    }
});
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(866442),
    d = l(399606),
    c = l(481060),
    o = l(749210),
    u = l(410030),
    h = l(607070),
    m = l(603368),
    g = l(687158),
    x = l(576635),
    C = l(484459),
    f = l(502762),
    v = l(430824),
    I = l(594174),
    Z = l(5192),
    p = l(51144),
    j = l(36766);
function N(e) {
    let { guildId: n, welcomeMessage: l, className: t } = e,
        N = (0, d.e7)([v.Z], () => v.Z.getGuild(n)),
        _ = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        b = (0, d.e7)([I.default], () => I.default.getUser(null == l ? void 0 : l.authorIds[0])),
        E = (0, d.e7)([I.default], () => I.default.getCurrentUser()),
        A = (0, g.ZP)(null == b ? void 0 : b.id, n),
        { theme: S, primaryColor: k } = (0, x.Z)({
            user: b,
            displayProfile: A
        }),
        y = (0, u.ZP)(),
        w = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, S).hex(),
        M = i.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.authorIds) && void 0 !== e ? e : [];
        }, [l]);
    i.useEffect(() => {
        o.Z.requestMembersById(n, M);
    }, [n, M]),
        i.useEffect(() => {
            null != b && (0, C.Z)(b.id, b.getAvatarURL(n, 48), { guildId: n });
        }, [b, n]);
    let P = (0, p._T)(E),
        B = null != k ? (0, s.br)(k, 1) : w,
        H = (0, m.$0)(B);
    if (null == b || null == E || null == l) return null;
    let R = null != N && N.ownerId === b.id;
    return (0, a.jsx)('div', {
        className: r()(j.welcomeMessageContainer, t),
        children: (0, a.jsxs)(f.Z, {
            className: j.welcomeMessageProfileContainer,
            user: b,
            displayProfile: A,
            profileType: null,
            themeOverride: y,
            forceShowPremium: !0,
            children: [
                (0, a.jsx)('div', { className: j.avatarBackground }),
                _
                    ? (0, a.jsx)(c.Avatar, {
                          src: b.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: j.avatar,
                          'aria-label': b.username
                      })
                    : (0, a.jsx)(c.AnimatedAvatar, {
                          src: b.getAvatarURL(n, 48),
                          size: c.AvatarSizes.SIZE_48,
                          className: j.avatar,
                          'aria-label': b.username
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
                                    children: Z.ZP.getName(n, null, b)
                                }),
                                R
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
                                    children: l.map((e, t) =>
                                        (0, a.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    e,
                                                    t < l.length - 1
                                                        ? (0, a.jsx)(c.Text, {
                                                              tag: 'span',
                                                              variant: 'text-md/semibold',
                                                              children: '@'.concat(n)
                                                          })
                                                        : null
                                                ]
                                            },
                                            'username-'.concat(t)
                                        )
                                    )
                                });
                            })(null == l ? void 0 : l.message, null != P ? P : E.username)
                        })
                    ]
                })
            ]
        })
    });
}
