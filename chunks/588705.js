n.d(t, {
    R: function () {
        return S;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(388905),
    o = n(686546),
    c = n(925329),
    d = n(372769),
    u = n(726745),
    h = n(973616),
    p = n(131704),
    f = n(601964),
    m = n(598077),
    g = n(594174),
    v = n(51144),
    _ = n(981631),
    E = n(888592),
    x = n(245335),
    I = n(388032),
    Z = n(658797);
let S = () =>
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(a.qE, {
                    src: null,
                    size: l.AvatarSizes.DEPRECATED_SIZE_100,
                    className: Z.avatar
                }),
                (0, i.jsx)(a.DK, { children: I.intl.string(I.t['3rE1Pz']) }),
                (0, i.jsx)(a.Dx, {
                    className: Z.inviteResolvingGuildName,
                    children: I.intl.string(I.t.ZTNur6)
                })
            ]
        }),
    C = (e) => {
        let { guild: t, user: n, application: r, compact: s } = e;
        if (null != r)
            return (0, i.jsx)(c.Z, {
                className: Z.appIcon,
                game: r,
                size: Z.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(a.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: l.AvatarSizes.SIZE_80,
                className: s ? Z.compactAvatar : Z.avatar
            });
        if (null != t)
            return (0, i.jsx)(o.ZP, {
                mask: o.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: Z.guildIcon,
                children: (0, i.jsx)(a.Vj, {
                    guild: t,
                    size: a.Vj.Sizes.LARGER,
                    animate: !0
                })
            });
        else return null;
    };
t.Z = (e) => {
    var t;
    let n,
        r,
        o,
        { invite: c, disableUser: S = !1, error: y, flatActivityCount: N = !1, isRegister: T = !1 } = e,
        { currentUser: b, multiAccounts: O } = (0, s.cj)([u.Z, g.default], () => ({
            currentUser: g.default.getCurrentUser(),
            multiAccounts: u.Z.getUsers()
        }));
    if (null == c) return null;
    let R = null != c.guild ? new f.ZP(c.guild) : null,
        A = null != c.channel ? (0, p.jD)(c.channel) : null,
        P = null != c.target_application ? new h.Z(c.target_application) : null,
        j = S || null == c.inviter ? null : new m.Z(c.inviter),
        L = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != R && R.hasFeature(_.oNc.COMMUNITY))) && null != j,
        w = null,
        M = !1;
    if (null != R)
        (w = null == j ? I.intl.string(I.t['3rE1Pz']) : I.intl.formatToPlainString(I.t['5u47vb'], { username: v.ZP.getFormattedName(j) })),
            c.target_type === x.Iq.STREAM && null != c.target_user && (w = I.intl.formatToPlainString(I.t.x2L32d, { username: v.ZP.getFormattedName(c.target_user) })),
            c.target_type === x.Iq.EMBEDDED_APPLICATION && null != c.target_application && (w = null != j ? I.intl.formatToPlainString(I.t.UW1Cam, { username: v.ZP.getFormattedName(j) }) : I.intl.string(I.t.ENSuNz)),
            L &&
                null == P &&
                (n = (0, i.jsx)(a.Vj, {
                    className: Z.icon,
                    guild: R,
                    size: a.Vj.Sizes.SMALL
                })),
            (r = R.name),
            null != P &&
                ((r = P.name),
                (o = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.DK, {
                            className: Z.appIn,
                            children: I.intl.string(I.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.guildContainer,
                            children: [
                                (0, i.jsx)(a.Vj, {
                                    guild: R,
                                    size: a.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(l.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: Z.appGuildName,
                                    children: R.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != A) {
        if (null == j) throw Error('no inviter in group DM invite');
        let e = v.ZP.getFormattedName(j);
        null != A.name && '' !== A.name
            ? ((w = I.intl.formatToPlainString(I.t['5u47vb'], { username: e })),
              (r = A.name),
              null != A.icon &&
                  (n = (0, i.jsx)(a.MC, {
                      channel: A,
                      size: l.AvatarSizes.SIZE_32
                  })))
            : ((w = I.intl.string(I.t.OsdY8P)), (r = e));
    } else if (null != j) {
        let e = v.ZP.getFormattedName(j, !0);
        (r = I.intl.formatToPlainString(I.t['4aF92d'], { username: e })),
            (M = !0),
            (o =
                null != y
                    ? null
                    : (0, i.jsx)(a.DK, {
                          className: Z.directInviteSubTitle,
                          children: T ? I.intl.format(I.t['6r4JiY'], { username: e }) : I.intl.format(I.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsx)(C, {
                application: P,
                guild: R,
                user: L ? j : null,
                compact: M
            }),
            null != y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(a.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(a.Dx, { children: y })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a.DK, { children: w }),
                          (0, i.jsxs)(a.Dx, {
                              className: Z.title,
                              children: [
                                  null != R
                                      ? (0, i.jsx)(d.Z, {
                                            guild: R,
                                            className: Z.guildBadge,
                                            tooltipPosition: 'left'
                                        })
                                      : null,
                                  n,
                                  r
                              ]
                          })
                      ]
                  }),
            o,
            null != P || M || (null == c ? void 0 : null === (t = c.guild) || void 0 === t ? void 0 : t.id) === E.fQ
                ? null
                : (0, i.jsx)(a.EJ, {
                      className: Z.activityCount,
                      online: c.approximate_presence_count,
                      total: c.approximate_member_count,
                      flat: N
                  }),
            O.length > 1 ? (0, i.jsx)(a.jQ, { user: b }) : null
        ]
    });
};
