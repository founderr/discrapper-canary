n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(399606),
    r = n(481060),
    o = n(493683),
    c = n(906732),
    u = n(979264),
    d = n(69882),
    h = n(251794),
    p = n(386696),
    m = n(910693),
    _ = n(314897),
    f = n(271383),
    E = n(430824),
    C = n(496675),
    g = n(158776),
    I = n(885110),
    x = n(594174),
    T = n(572004),
    N = n(5192),
    S = n(51144),
    v = n(981631),
    Z = n(308083),
    A = n(689938),
    M = n(181861);
function b(e) {
    let { user: t, guildId: n, onClose: a } = e,
        s = t.id,
        o = (0, l.e7)([I.Z, g.Z, _.default], () => (s === _.default.getId() ? I.Z.getStatus() : g.Z.getStatus(s, n)), [s, n]);
    return (0, i.jsxs)('div', {
        className: M.topRow,
        children: [
            (0, i.jsxs)('div', {
                className: M.memberNameContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: M.memberAvatar,
                        children: (0, i.jsx)(r.Avatar, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: r.AvatarSizes.SIZE_48,
                            status: o
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: M.memberNameAndTagContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: M.memberNameTextContainer,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, i.jsx)(r.NameWithRole, {
                                            name: N.ZP.getName(n, null, t),
                                            color: r.tokens.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, i.jsx)(u.ZP, {
                                        clan: null == t ? void 0 : t.clan,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: Z.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: M.memberClanTag,
                                        containerClassName: M.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: S.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, i.jsx)(r.Clickable, {
                    className: M.closeAction,
                    onClick: a,
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function R(e) {
    let { tag: t = 'div', disabled: n, children: a, onClick: l, ...o } = e;
    return (0, i.jsx)(r.Clickable, {
        ...o,
        tag: t,
        className: s()(M.bottomRowAction, { [M.bottomRowActionDisabled]: n }),
        onClick: n ? void 0 : l,
        children: (0, i.jsx)('div', {
            className: M.innerBottomRowAction,
            children: a
        })
    });
}
function L(e) {
    let { user: t, member: a, guildId: s } = e,
        u = (0, l.e7)([E.Z], () => E.Z.getGuild(s)),
        {
            canKickUser: f,
            canBanUser: g,
            canModerateMembers: I
        } = (0, l.cj)(
            [C.Z, x.default, E.Z],
            () => ({
                canKickUser: null != u && C.Z.canManageUser(v.Plq.KICK_MEMBERS, t, u),
                canBanUser: null != u && C.Z.canManageUser(v.Plq.BAN_MEMBERS, t, u),
                canModerateMembers: null != u && (0, p.F)(u.id, t.id, [x.default, E.Z, C.Z])
            }),
            [t, u]
        ),
        N = (0, d.b)(a),
        { analyticsLocations: S, newestAnalyticsLocation: Z } = (0, c.ZP)(),
        b = (0, m.sE)(s, {
            targetUserId: t.id,
            location: Z,
            locations: S
        }),
        L = (0, l.e7)([_.default], () => _.default.getId() === (null == t ? void 0 : t.id));
    return (0, i.jsxs)('div', {
        className: M.bottomRow,
        children: [
            (0, i.jsxs)(R, {
                disabled: L,
                'aria-label': A.Z.Messages.SEND_DM,
                onClick: () => {
                    o.Z.openPrivateChannel(t.id);
                },
                children: [
                    (0, i.jsx)(r.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 22,
                        height: 22
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: A.Z.Messages.SEND_DM
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !f,
                'aria-label': A.Z.Messages.KICK,
                onClick: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: Z,
                                guildId: s,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(r.UserMinusIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: A.Z.Messages.KICK
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !g,
                'aria-label': A.Z.Messages.BAN,
                onClick: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: Z,
                                guildId: s,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(r.HammerIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: A.Z.Messages.BAN
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !I,
                'aria-label': A.Z.Messages.TIMEOUT_USER,
                onClick: () => {
                    N ? (0, h.q)(a.guildId, a.userId, S) : (0, h.z)(a.guildId, a.userId, S);
                },
                children: [
                    (0, i.jsx)(r.ClockWarningIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: N ? A.Z.Messages.REMOVE : A.Z.Messages.TIMEOUT_USER
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                'aria-label': A.Z.Messages.COPY_ID,
                onClick: () => {
                    b(m.jQ.COPY_ID), (0, T.JG)(t.id);
                },
                disabled: !T.wS,
                children: [
                    (0, i.jsx)(r.IdIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: A.Z.Messages.COPY_ID
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { userId: t, guildId: n, onClose: a } = e,
        s = (0, l.e7)([x.default], () => x.default.getUser(t), [t]),
        r = (0, l.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]);
    return null == s || null == r
        ? null
        : (0, i.jsxs)('div', {
              className: M.container,
              children: [
                  (0, i.jsx)(b, {
                      user: s,
                      guildId: n,
                      onClose: a
                  }),
                  (0, i.jsx)(L, {
                      user: s,
                      member: r,
                      guildId: n
                  })
              ]
          });
}
