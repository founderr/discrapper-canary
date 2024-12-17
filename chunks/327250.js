n.d(t, {
    ZP: function () {
        return M;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
    s = n(481060),
    o = n(493683),
    c = n(906732),
    d = n(979264),
    u = n(69882),
    h = n(251794),
    p = n(386696),
    m = n(910693),
    f = n(314897),
    g = n(271383),
    C = n(430824),
    x = n(496675),
    v = n(158776),
    _ = n(885110),
    I = n(594174),
    E = n(572004),
    b = n(5192),
    Z = n(51144),
    S = n(981631),
    N = n(308083),
    T = n(388032),
    j = n(125712);
function A(e) {
    let { user: t, guildId: n, onClose: l } = e,
        r = t.id,
        o = (0, a.e7)([_.Z, v.Z, f.default], () => (r === f.default.getId() ? _.Z.getStatus() : v.Z.getStatus(r, n)), [r, n]);
    return (0, i.jsxs)('div', {
        className: j.topRow,
        children: [
            (0, i.jsxs)('div', {
                className: j.memberNameContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: j.memberAvatar,
                        children: (0, i.jsx)(s.Avatar, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: s.AvatarSizes.SIZE_48,
                            status: o
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.memberNameAndTagContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.memberNameTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, i.jsx)(s.NameWithRole, {
                                            name: b.ZP.getName(n, null, t),
                                            color: s.tokens.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, i.jsx)(d.ZP, {
                                        clan: null == t ? void 0 : t.clan,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: N.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: j.memberClanTag,
                                        containerClassName: j.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: Z.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, i.jsx)(s.Clickable, {
                    className: j.closeAction,
                    onClick: l,
                    children: (0, i.jsx)(s.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function y(e) {
    let { tag: t = 'div', text: n, disabled: l, children: a, onClick: o, ...c } = e;
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...c,
                ...e,
                tag: t,
                'aria-label': n,
                className: r()(j.bottomRowAction, { [j.bottomRowActionDisabled]: l }),
                onClick: l ? void 0 : o,
                children: (0, i.jsx)('div', {
                    className: j.innerBottomRowAction,
                    children: a
                })
            })
    });
}
function P(e) {
    let { user: t, member: l, guildId: r } = e,
        d = (0, a.e7)([C.Z], () => C.Z.getGuild(r)),
        {
            canKickUser: g,
            canBanUser: v,
            canModerateMembers: _
        } = (0, a.cj)(
            [x.Z, I.default, C.Z],
            () => ({
                canKickUser: null != d && x.Z.canManageUser(S.Plq.KICK_MEMBERS, t, d),
                canBanUser: null != d && x.Z.canManageUser(S.Plq.BAN_MEMBERS, t, d),
                canModerateMembers: null != d && (0, p.F)(d.id, t.id, [I.default, C.Z, x.Z])
            }),
            [t, d]
        ),
        b = (0, u.b)(l),
        { analyticsLocations: Z, newestAnalyticsLocation: N } = (0, c.ZP)(),
        A = (0, m.sE)(r, {
            targetUserId: t.id,
            location: N,
            locations: Z
        }),
        P = (0, a.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id));
    return (0, i.jsxs)('div', {
        className: j.bottomRow,
        children: [
            (0, i.jsx)(y, {
                disabled: P,
                text: T.intl.string(T.t['g33r/P']),
                onClick: () => {
                    o.Z.openPrivateChannel(t.id);
                },
                children: (0, i.jsx)(s.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 24,
                    height: 24
                })
            }),
            (0, i.jsx)(y, {
                disabled: !g,
                text: T.intl.string(T.t['3glT6e']),
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: N,
                                guildId: r,
                                user: t
                            });
                    });
                },
                children: (0, i.jsx)(s.UserMinusIcon, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.tokens.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(y, {
                disabled: !v,
                text: T.intl.string(T.t['5MBJ5O']),
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: N,
                                guildId: r,
                                user: t
                            });
                    });
                },
                children: (0, i.jsx)(s.HammerIcon, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.tokens.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(y, {
                disabled: !_,
                text: b ? T.intl.string(T.t.N86XcH) : T.intl.string(T.t.kTlLr6),
                onClick: () => {
                    b
                        ? (0, h.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: Z
                          })
                        : (0, h.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: Z
                          });
                },
                children: (0, i.jsx)(s.ClockWarningIcon, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.tokens.colors.TEXT_NORMAL.css
                })
            }),
            (0, i.jsx)(y, {
                text: T.intl.string(T.t.IHTjzM),
                onClick: () => {
                    A(m.jQ.COPY_ID), (0, E.JG)(t.id);
                },
                disabled: !E.wS,
                children: (0, i.jsx)(s.IdIcon, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: s.tokens.colors.TEXT_NORMAL.css
                })
            })
        ]
    });
}
function M(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        r = (0, a.e7)([I.default], () => I.default.getUser(t), [t]),
        s = (0, a.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
    return null == r || null == s
        ? null
        : (0, i.jsxs)('div', {
              className: j.container,
              children: [
                  (0, i.jsx)(A, {
                      user: r,
                      guildId: n,
                      onClose: l
                  }),
                  (0, i.jsx)(P, {
                      user: r,
                      member: s,
                      guildId: n
                  })
              ]
          });
}
