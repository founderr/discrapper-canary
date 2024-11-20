n.d(t, {
    R: function () {
        return I;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    o = n(388905),
    l = n(686546),
    c = n(925329),
    d = n(372769),
    u = n(726745),
    h = n(973616),
    p = n(131704),
    f = n(601964),
    g = n(598077),
    m = n(594174),
    v = n(51144),
    _ = n(981631),
    E = n(888592),
    x = n(245335),
    Z = n(388032),
    S = n(658797);
let I = () =>
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.qE, {
                    src: null,
                    size: a.AvatarSizes.DEPRECATED_SIZE_100,
                    className: S.avatar
                }),
                (0, i.jsx)(o.DK, { children: Z.intl.string(Z.t['3rE1Pz']) }),
                (0, i.jsx)(o.Dx, {
                    className: S.inviteResolvingGuildName,
                    children: Z.intl.string(Z.t.ZTNur6)
                })
            ]
        }),
    C = (e) => {
        let { guild: t, user: n, application: r, compact: s } = e;
        if (null != r)
            return (0, i.jsx)(c.Z, {
                className: S.appIcon,
                game: r,
                size: S.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: a.AvatarSizes.SIZE_80,
                className: s ? S.compactAvatar : S.avatar
            });
        if (null != t)
            return (0, i.jsx)(l.ZP, {
                mask: l.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: S.guildIcon,
                children: (0, i.jsx)(o.Vj, {
                    guild: t,
                    size: o.Vj.Sizes.LARGER,
                    animate: !0
                })
            });
        else return null;
    };
t.Z = (e) => {
    var t;
    let n,
        r,
        l,
        { invite: c, disableUser: I = !1, error: y, flatActivityCount: N = !1, isRegister: T = !1 } = e,
        { currentUser: b, multiAccounts: O } = (0, s.cj)([u.Z, m.default], () => ({
            currentUser: m.default.getCurrentUser(),
            multiAccounts: u.Z.getUsers()
        }));
    if (null == c) return null;
    let A = null != c.guild ? new f.ZP(c.guild) : null,
        j = null != c.channel ? (0, p.jD)(c.channel) : null,
        L = null != c.target_application ? new h.Z(c.target_application) : null,
        P = I || null == c.inviter ? null : new g.Z(c.inviter),
        R = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != A && A.hasFeature(_.oNc.COMMUNITY))) && null != P,
        w = null,
        M = !1;
    if (null != A)
        (w = null == P ? Z.intl.string(Z.t['3rE1Pz']) : Z.intl.formatToPlainString(Z.t['5u47vb'], { username: v.ZP.getFormattedName(P) })),
            c.target_type === x.Iq.STREAM && null != c.target_user && (w = Z.intl.formatToPlainString(Z.t.x2L32d, { username: v.ZP.getFormattedName(c.target_user) })),
            c.target_type === x.Iq.EMBEDDED_APPLICATION && null != c.target_application && (w = null != P ? Z.intl.formatToPlainString(Z.t.UW1Cam, { username: v.ZP.getFormattedName(P) }) : Z.intl.string(Z.t.ENSuNz)),
            R &&
                null == L &&
                (n = (0, i.jsx)(o.Vj, {
                    className: S.icon,
                    guild: A,
                    size: o.Vj.Sizes.SMALL
                })),
            (r = A.name),
            null != L &&
                ((r = L.name),
                (l = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: S.appIn,
                            children: Z.intl.string(Z.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: S.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: A,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(a.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: S.appGuildName,
                                    children: A.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != j) {
        if (null == P) throw Error('no inviter in group DM invite');
        let e = v.ZP.getFormattedName(P);
        null != j.name && '' !== j.name
            ? ((w = Z.intl.formatToPlainString(Z.t['5u47vb'], { username: e })),
              (r = j.name),
              null != j.icon &&
                  (n = (0, i.jsx)(o.MC, {
                      channel: j,
                      size: a.AvatarSizes.SIZE_32
                  })))
            : ((w = Z.intl.string(Z.t.OsdY8P)), (r = e));
    } else if (null != P) {
        let e = v.ZP.getFormattedName(P, !0);
        (r = Z.intl.formatToPlainString(Z.t['4aF92d'], { username: e })),
            (M = !0),
            (l =
                null != y
                    ? null
                    : (0, i.jsx)(o.DK, {
                          className: S.directInviteSubTitle,
                          children: T ? Z.intl.format(Z.t['6r4JiY'], { username: e }) : Z.intl.format(Z.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(C, {
                application: L,
                guild: A,
                user: R ? P : null,
                compact: M
            }),
            null != y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(o.DK, { children: Z.intl.string(Z.t.mDFGFh) }), (0, i.jsx)(o.Dx, { children: y })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.DK, { children: w }),
                          (0, i.jsxs)(o.Dx, {
                              className: S.title,
                              children: [
                                  null != A
                                      ? (0, i.jsx)(d.Z, {
                                            guild: A,
                                            className: S.guildBadge,
                                            tooltipPosition: 'left'
                                        })
                                      : null,
                                  n,
                                  r
                              ]
                          })
                      ]
                  }),
            l,
            null != L || M || (null == c ? void 0 : null === (t = c.guild) || void 0 === t ? void 0 : t.id) === E.fQ
                ? null
                : (0, i.jsx)(o.EJ, {
                      className: S.activityCount,
                      online: c.approximate_presence_count,
                      total: c.approximate_member_count,
                      flat: N
                  }),
            O.length > 1 ? (0, i.jsx)(o.jQ, { user: b }) : null
        ]
    });
};
