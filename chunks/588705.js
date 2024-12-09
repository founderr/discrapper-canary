n.d(e, {
    R: function () {
        return U;
    }
}),
    n(411104);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    u = n(388905),
    o = n(686546),
    s = n(925329),
    c = n(372769),
    d = n(726745),
    _ = n(973616),
    E = n(131704),
    p = n(601964),
    f = n(598077),
    N = n(594174),
    I = n(51144),
    A = n(981631),
    m = n(888592),
    T = n(245335),
    g = n(388032),
    S = n(594193);
let U = () =>
        (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(u.qE, {
                    src: null,
                    size: a.AvatarSizes.DEPRECATED_SIZE_100,
                    className: S.avatar
                }),
                (0, l.jsx)(u.DK, { children: g.intl.string(g.t['3rE1Pz']) }),
                (0, l.jsx)(u.Dx, {
                    className: S.inviteResolvingGuildName,
                    children: g.intl.string(g.t.ZTNur6)
                })
            ]
        }),
    C = (t) => {
        let { guild: e, user: n, application: r, compact: i } = t;
        if (null != r)
            return (0, l.jsx)(s.Z, {
                className: S.appIcon,
                game: r,
                size: S.appIconSize
            });
        if (null != n)
            return (0, l.jsx)(u.qE, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: a.AvatarSizes.SIZE_80,
                className: i ? S.compactAvatar : S.avatar
            });
        if (null != e)
            return (0, l.jsx)(o.ZP, {
                mask: o.ZP.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: S.guildIcon,
                children: (0, l.jsx)(u.Vj, {
                    guild: e,
                    size: u.Vj.Sizes.LARGER,
                    animate: !0
                })
            });
        else return null;
    };
e.Z = (t) => {
    var e;
    let n,
        r,
        o,
        { invite: s, disableUser: U = !1, error: v, flatActivityCount: L = !1, isRegister: M = !1 } = t,
        { currentUser: h, multiAccounts: O } = (0, i.cj)([d.Z, N.default], () => ({
            currentUser: N.default.getCurrentUser(),
            multiAccounts: d.Z.getUsers()
        }));
    if (null == s) return null;
    let R = null != s.guild ? new p.ZP(s.guild) : null,
        y = null != s.channel ? (0, E.jD)(s.channel) : null,
        Z = null != s.target_application ? new _.ZP(s.target_application) : null,
        D = U || null == s.inviter ? null : new f.Z(s.inviter),
        w = !((null != s.approximate_member_count && s.approximate_member_count > 100) || (null != R && R.hasFeature(A.oNc.COMMUNITY))) && null != D,
        F = null,
        P = !1;
    if (null != R)
        (F = null == D ? g.intl.string(g.t['3rE1Pz']) : g.intl.formatToPlainString(g.t['5u47vb'], { username: I.ZP.getFormattedName(D) })),
            s.target_type === T.Iq.STREAM && null != s.target_user && (F = g.intl.formatToPlainString(g.t.x2L32d, { username: I.ZP.getFormattedName(s.target_user) })),
            s.target_type === T.Iq.EMBEDDED_APPLICATION && null != s.target_application && (F = null != D ? g.intl.formatToPlainString(g.t.UW1Cam, { username: I.ZP.getFormattedName(D) }) : g.intl.string(g.t.ENSuNz)),
            w &&
                null == Z &&
                (n = (0, l.jsx)(u.Vj, {
                    className: S.icon,
                    guild: R,
                    size: u.Vj.Sizes.SMALL
                })),
            (r = R.name),
            null != Z &&
                ((r = Z.name),
                (o = (0, l.jsxs)('div', {
                    children: [
                        (0, l.jsx)(u.DK, {
                            className: S.appIn,
                            children: g.intl.string(g.t['3gg9fH'])
                        }),
                        (0, l.jsxs)('div', {
                            className: S.guildContainer,
                            children: [
                                (0, l.jsx)(u.Vj, {
                                    guild: R,
                                    size: u.Vj.Sizes.SMALL
                                }),
                                (0, l.jsx)(a.Text, {
                                    tag: 'span',
                                    variant: 'text-lg/normal',
                                    color: 'header-primary',
                                    className: S.appGuildName,
                                    children: R.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != y) {
        if (null == D) throw Error('no inviter in group DM invite');
        let t = I.ZP.getFormattedName(D);
        null != y.name && '' !== y.name
            ? ((F = g.intl.formatToPlainString(g.t['5u47vb'], { username: t })),
              (r = y.name),
              null != y.icon &&
                  (n = (0, l.jsx)(u.MC, {
                      channel: y,
                      size: a.AvatarSizes.SIZE_32
                  })))
            : ((F = g.intl.string(g.t.OsdY8P)), (r = t));
    } else if (null != D) {
        let t = I.ZP.getFormattedName(D, !0);
        (r = g.intl.formatToPlainString(g.t['4aF92d'], { username: t })),
            (P = !0),
            (o =
                null != v
                    ? null
                    : (0, l.jsx)(u.DK, {
                          className: S.directInviteSubTitle,
                          children: M ? g.intl.format(g.t['6r4JiY'], { username: t }) : g.intl.format(g.t.Quj7HR, { username: t })
                      }));
    }
    return (0, l.jsxs)('div', {
        className: S.container,
        children: [
            (0, l.jsx)(C, {
                application: Z,
                guild: R,
                user: w ? D : null,
                compact: P
            }),
            null != v
                ? (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)(u.DK, { children: g.intl.string(g.t.mDFGFh) }), (0, l.jsx)(u.Dx, { children: v })]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.DK, { children: F }),
                          (0, l.jsxs)(u.Dx, {
                              className: S.title,
                              children: [
                                  null != R
                                      ? (0, l.jsx)(c.Z, {
                                            guild: R,
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
            o,
            null != Z || P || (null == s ? void 0 : null === (e = s.guild) || void 0 === e ? void 0 : e.id) === m.fQ
                ? null
                : (0, l.jsx)(u.EJ, {
                      className: S.activityCount,
                      online: s.approximate_presence_count,
                      total: s.approximate_member_count,
                      flat: L
                  }),
            O.length > 1 ? (0, l.jsx)(u.jQ, { user: h }) : null
        ]
    });
};
