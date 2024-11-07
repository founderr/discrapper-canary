n.d(t, {
    R: function () {
        return S;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(388905),
    o = n(686546),
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
    I = n(823433);
let S = () =>
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(l.qE, {
                    src: null,
                    size: a.AvatarSizes.DEPRECATED_SIZE_100,
                    className: I.avatar
                }),
                (0, i.jsx)(l.DK, { children: Z.intl.string(Z.t['3rE1Pz']) }),
                (0, i.jsx)(l.Dx, {
                    className: I.inviteResolvingGuildName,
                    children: Z.intl.string(Z.t.ZTNur6)
                })
            ]
        }),
    C = (e) => {
        let { guild: t, user: n, application: r, compact: s } = e;
        if (null != r)
            return (0, i.jsx)(c.Z, {
                className: I.appIcon,
                game: r,
                size: I.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(l.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: a.AvatarSizes.SIZE_80,
                className: s ? I.compactAvatar : I.avatar
            });
        if (null != t)
            return (0, i.jsx)(o.ZP, {
                mask: o.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: I.guildIcon,
                children: (0, i.jsx)(l.Vj, {
                    guild: t,
                    size: l.Vj.Sizes.LARGER,
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
        { currentUser: b, multiAccounts: O } = (0, s.cj)([u.Z, m.default], () => ({
            currentUser: m.default.getCurrentUser(),
            multiAccounts: u.Z.getUsers()
        }));
    if (null == c) return null;
    let j = null != c.guild ? new f.ZP(c.guild) : null,
        A = null != c.channel ? (0, p.jD)(c.channel) : null,
        P = null != c.target_application ? new h.Z(c.target_application) : null,
        R = S || null == c.inviter ? null : new g.Z(c.inviter),
        L = !((null != c.approximate_member_count && c.approximate_member_count > 100) || (null != j && j.hasFeature(_.oNc.COMMUNITY))) && null != R,
        w = null,
        M = !1;
    if (null != j)
        (w = null == R ? Z.intl.string(Z.t['3rE1Pz']) : Z.intl.formatToPlainString(Z.t['5u47vb'], { username: v.ZP.getFormattedName(R) })),
            c.target_type === x.Iq.STREAM && null != c.target_user && (w = Z.intl.formatToPlainString(Z.t.x2L32d, { username: v.ZP.getFormattedName(c.target_user) })),
            c.target_type === x.Iq.EMBEDDED_APPLICATION && null != c.target_application && (w = null != R ? Z.intl.formatToPlainString(Z.t.UW1Cam, { username: v.ZP.getFormattedName(R) }) : Z.intl.string(Z.t.ENSuNz)),
            L &&
                null == P &&
                (n = (0, i.jsx)(l.Vj, {
                    className: I.icon,
                    guild: j,
                    size: l.Vj.Sizes.SMALL
                })),
            (r = j.name),
            null != P &&
                ((r = P.name),
                (o = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.DK, {
                            className: I.appIn,
                            children: Z.intl.string(Z.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: I.guildContainer,
                            children: [
                                (0, i.jsx)(l.Vj, {
                                    guild: j,
                                    size: l.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(a.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: I.appGuildName,
                                    children: j.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != A) {
        if (null == R) throw Error('no inviter in group DM invite');
        let e = v.ZP.getFormattedName(R);
        null != A.name && '' !== A.name
            ? ((w = Z.intl.formatToPlainString(Z.t['5u47vb'], { username: e })),
              (r = A.name),
              null != A.icon &&
                  (n = (0, i.jsx)(l.MC, {
                      channel: A,
                      size: a.AvatarSizes.SIZE_32
                  })))
            : ((w = Z.intl.string(Z.t.OsdY8P)), (r = e));
    } else if (null != R) {
        let e = v.ZP.getFormattedName(R, !0);
        (r = Z.intl.formatToPlainString(Z.t['4aF92d'], { username: e })),
            (M = !0),
            (o =
                null != y
                    ? null
                    : (0, i.jsx)(l.DK, {
                          className: I.directInviteSubTitle,
                          children: T ? Z.intl.format(Z.t['6r4JiY'], { username: e }) : Z.intl.format(Z.t.Quj7HR, { username: e })
                      }));
    }
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)(C, {
                application: P,
                guild: j,
                user: L ? R : null,
                compact: M
            }),
            null != y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)(l.DK, { children: Z.intl.string(Z.t.mDFGFh) }), (0, i.jsx)(l.Dx, { children: y })]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.DK, { children: w }),
                          (0, i.jsxs)(l.Dx, {
                              className: I.title,
                              children: [
                                  null != j
                                      ? (0, i.jsx)(d.Z, {
                                            guild: j,
                                            className: I.guildBadge,
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
                : (0, i.jsx)(l.EJ, {
                      className: I.activityCount,
                      online: c.approximate_presence_count,
                      total: c.approximate_member_count,
                      flat: N
                  }),
            O.length > 1 ? (0, i.jsx)(l.jQ, { user: b }) : null
        ]
    });
};
