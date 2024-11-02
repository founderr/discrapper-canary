n.d(t, {
    R: function () {
        return I;
    }
}),
    n(411104);
var l = n(200651),
    s = n(192379),
    a = n(442837),
    r = n(481060),
    i = n(388905),
    u = n(686546),
    o = n(925329),
    c = n(372769),
    m = n(726745),
    d = n(973616),
    x = n(131704),
    p = n(601964),
    g = n(598077),
    j = n(594174),
    h = n(51144),
    f = n(981631),
    v = n(888592),
    N = n(245335),
    S = n(388032),
    E = n(658797);
let I = () =>
        (0, l.jsxs)(s.Fragment, {
            children: [
                (0, l.jsx)(i.qE, {
                    src: null,
                    size: r.AvatarSizes.DEPRECATED_SIZE_100,
                    className: E.avatar
                }),
                (0, l.jsx)(i.DK, { children: S.intl.string(S.t['3rE1Pz']) }),
                (0, l.jsx)(i.Dx, {
                    className: E.inviteResolvingGuildName,
                    children: S.intl.string(S.t.ZTNur6)
                })
            ]
        }),
    T = (e) => {
        let { guild: t, user: n, application: s, compact: a } = e;
        if (null != s)
            return (0, l.jsx)(o.Z, {
                className: E.appIcon,
                game: s,
                size: E.appIconSize
            });
        if (null != n)
            return (0, l.jsx)(i.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: a ? E.compactAvatar : E.avatar
            });
        if (null != t)
            return (0, l.jsx)(u.ZP, {
                mask: u.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: E.guildIcon,
                children: (0, l.jsx)(i.Vj, {
                    guild: t,
                    size: i.Vj.Sizes.LARGER,
                    animate: !0
                })
            });
        else return null;
    };
t.Z = (e) => {
    var t;
    let n,
        s,
        u,
        { invite: o, disableUser: I = !1, error: b, flatActivityCount: L = !1, isRegister: A = !1 } = e,
        { currentUser: _, multiAccounts: R } = (0, a.cj)([m.Z, j.default], () => ({
            currentUser: j.default.getCurrentUser(),
            multiAccounts: m.Z.getUsers()
        }));
    if (null == o) return null;
    let C = null != o.guild ? new p.ZP(o.guild) : null,
        z = null != o.channel ? (0, x.jD)(o.channel) : null,
        P = null != o.target_application ? new d.Z(o.target_application) : null,
        Z = I || null == o.inviter ? null : new g.Z(o.inviter),
        D = !((null != o.approximate_member_count && o.approximate_member_count > 100) || (null != C && C.hasFeature(f.oNc.COMMUNITY))) && null != Z,
        O = null,
        F = !1;
    if (null != C)
        (O = null == Z ? S.intl.string(S.t['3rE1Pz']) : S.intl.formatToPlainString(S.t['5u47vb'], { username: h.ZP.getFormattedName(Z) })),
            o.target_type === N.Iq.STREAM && null != o.target_user && (O = S.intl.formatToPlainString(S.t.x2L32d, { username: h.ZP.getFormattedName(o.target_user) })),
            o.target_type === N.Iq.EMBEDDED_APPLICATION && null != o.target_application && (O = null != Z ? S.intl.formatToPlainString(S.t.UW1Cam, { username: h.ZP.getFormattedName(Z) }) : S.intl.string(S.t.ENSuNz)),
            D &&
                null == P &&
                (n = (0, l.jsx)(i.Vj, {
                    className: E.icon,
                    guild: C,
                    size: i.Vj.Sizes.SMALL
                })),
            (s = C.name),
            null != P &&
                ((s = P.name),
                (u = (0, l.jsxs)('div', {
                    children: [
                        (0, l.jsx)(i.DK, {
                            className: E.appIn,
                            children: S.intl.string(S.t['3gg9fH'])
                        }),
                        (0, l.jsxs)('div', {
                            className: E.guildContainer,
                            children: [
                                (0, l.jsx)(i.Vj, {
                                    guild: C,
                                    size: i.Vj.Sizes.SMALL
                                }),
                                (0, l.jsx)(r.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: E.appGuildName,
                                    children: C.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != z) {
        if (null == Z) throw Error('no inviter in group DM invite');
        let e = h.ZP.getFormattedName(Z);
        null != z.name && '' !== z.name
            ? ((O = S.intl.formatToPlainString(S.t['5u47vb'], { username: e })),
              (s = z.name),
              null != z.icon &&
                  (n = (0, l.jsx)(i.MC, {
                      channel: z,
                      size: r.AvatarSizes.SIZE_32
                  })))
            : ((O = S.intl.string(S.t.OsdY8P)), (s = e));
    } else if (null != Z) {
        let e = h.ZP.getFormattedName(Z, !0);
        (s = S.intl.formatToPlainString(S.t['4aF92d'], { username: e })),
            (F = !0),
            (u =
                null != b
                    ? null
                    : (0, l.jsx)(i.DK, {
                          className: E.directInviteSubTitle,
                          children: A ? S.intl.format(S.t['6r4JiY'], { username: e }) : S.intl.format(S.t.Quj7HR, { username: e })
                      }));
    }
    return (0, l.jsxs)('div', {
        className: E.container,
        children: [
            (0, l.jsx)(T, {
                application: P,
                guild: C,
                user: D ? Z : null,
                compact: F
            }),
            null != b
                ? (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(i.DK, { children: S.intl.string(S.t.mDFGFh) }), (0, l.jsx)(i.Dx, { children: b })]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(i.DK, { children: O }),
                          (0, l.jsxs)(i.Dx, {
                              className: E.title,
                              children: [
                                  null != C
                                      ? (0, l.jsx)(c.Z, {
                                            guild: C,
                                            className: E.guildBadge,
                                            tooltipPosition: 'left'
                                        })
                                      : null,
                                  n,
                                  s
                              ]
                          })
                      ]
                  }),
            u,
            null != P || F || (null == o ? void 0 : null === (t = o.guild) || void 0 === t ? void 0 : t.id) === v.fQ
                ? null
                : (0, l.jsx)(i.EJ, {
                      className: E.activityCount,
                      online: o.approximate_presence_count,
                      total: o.approximate_member_count,
                      flat: L
                  }),
            R.length > 1 ? (0, l.jsx)(i.jQ, { user: _ }) : null
        ]
    });
};
