n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(129861),
    l = n(607070),
    o = n(570928),
    c = n(388905),
    d = n(1585),
    u = n(125988),
    _ = n(43267),
    E = n(522289),
    h = n(699516),
    m = n(51144),
    I = n(998502),
    p = n(620924),
    g = n(332712),
    T = n(81471),
    f = n(689938),
    C = n(562352);
let S = (e) => {
        let { userId: t } = e,
            n = (0, g.O)(t);
        return null == n || 0 === n.length
            ? (0, i.jsx)(s.Text, {
                  className: C.mutualGuilds,
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: f.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
              })
            : (0, i.jsxs)('div', {
                  className: C.mutualGuildsContainer,
                  children: [
                      (0, i.jsx)(E.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: c.Vj.Sizes.SMOL,
                          hideOverflowCount: !0
                      }),
                      (0, i.jsx)(s.Text, {
                          className: C.mutualGuilds,
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: f.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: n.length })
                      })
                  ]
              });
    },
    N = I.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function A(e) {
    var t;
    let { channel: n, otherUser: c, active: E } = e,
        I = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        g = (0, a.e7)([h.Z], () => (null == c ? null : h.Z.getNickname(c.id))),
        A = !I && E,
        v = (0, p.c)(n),
        { avatarDecorationSrc: Z } = (0, u.Z)({
            user: c,
            size: (0, d.y9)(s.AvatarSizes.SIZE_40),
            onlyAnimateOnHover: !0
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N, {
                className: C.avatar,
                src: (0, _.x)(n, 40, A),
                avatarDecoration: Z,
                size: s.AvatarSizes.SIZE_40,
                'aria-label': null !== (t = null == c ? void 0 : c.username) && void 0 !== t ? t : f.Z.Messages.UNKNOWN_USER
            }),
            (0, i.jsxs)('div', {
                className: C.userPreview,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.userContainerWithPreview,
                        children: [
                            (0, i.jsx)(r.Z, {
                                nick: g,
                                user: c,
                                showAccountIdentifier: !0,
                                className: C.tagContainer,
                                usernameClass: C.username,
                                discriminatorClass: null != m.ZP.getGlobalName(c) ? C.globalName : C.discriminator
                            }),
                            (0, i.jsx)(s.Text, {
                                className: C.timestampWithPreview,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: v
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z, {
                        hoverText: (0, i.jsx)(T.Z, { channel: n }),
                        forceHover: E,
                        children: (0, i.jsx)(S, { userId: c.id })
                    })
                ]
            })
        ]
    });
}
