n.d(t, {
    m: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(239091),
    u = n(749210),
    d = n(686546),
    h = n(951394),
    p = n(565138),
    m = n(372769),
    _ = n(134432),
    f = n(769654),
    E = n(601964),
    g = n(430824),
    C = n(768581),
    I = n(683818),
    T = n(16853),
    x = n(981631),
    v = n(689938),
    S = n(724850),
    N = n(883760);
let A = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: S.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: N
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: S.addServerText,
                children: v.Z.Messages.HUB_ADD_SERVER_CTA
            })
        ]
    });
};
function Z(e) {
    let { entry: t } = e,
        [a, r] = s.useState(!1),
        { canEdit: c } = (0, I.Z)(t);
    return (0, i.jsx)('div', {
        className: l()(S.actionButtonsContainer, { [S.forceButtonsShow]: a }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.Tooltip, {
                          text: v.Z.Messages.HUB_ENTRY_UPDATE,
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: s, ...a } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...a,
                                  onClick: () => {
                                      null == s || s(),
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      entry: t
                                                  });
                                          });
                                  },
                                  'aria-label': v.Z.Messages.HUB_ENTRY_UPDATE,
                                  children: (0, i.jsx)(o.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: S.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(T.Z, {
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: v.Z.Messages.MORE,
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: s, ...a } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...a,
                                    onClick: (e) => {
                                        null == s || s(), t(e);
                                    },
                                    'aria-label': v.Z.Messages.MORE,
                                    children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: S.overflowIcon
                                    })
                                });
                            }
                        });
                    }
                })
            ]
        })
    });
}
t.Z = (e) => {
    var t;
    let { entry: a } = e,
        [l, h] = s.useState(!1),
        I = null != (0, r.e7)([g.Z], () => g.Z.getGuild(a.guildId)),
        T = async () => {
            h(!0);
            try {
                I ? (0, f.X)(a.guildId) : await u.Z.joinGuild(a.guildId, { source: x.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        N = C.ZP.getGuildSplashURL({
            id: a.guildId,
            splash: a.splash,
            size: 300 * (0, _.x_)()
        }),
        A =
            null !==
                (t = C.ZP.getGuildIconURL({
                    id: a.guildId,
                    icon: a.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        M = v.Z.Messages.JOIN;
    return (
        I && (M = v.Z.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON),
        (0, i.jsxs)('div', {
            className: S.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            entry: a
                        });
                });
            },
            children: [
                (0, i.jsxs)('div', {
                    className: S.cardHeader,
                    children: [
                        (0, i.jsx)('div', {
                            className: S.splash,
                            children:
                                null != N &&
                                (0, i.jsx)('img', {
                                    src: N,
                                    alt: '',
                                    className: S.splashImage
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: S.guildIcon,
                            children: (0, i.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)('div', {
                                    className: S.iconMask,
                                    children: (0, i.jsx)(p.Z, {
                                        className: S.icon,
                                        iconSrc: A,
                                        guild: new E.ZP(a),
                                        size: p.Z.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: S.guildInfo,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.title,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    className: S.guildBadge,
                                    guild: a,
                                    tooltipColor: o.Tooltip.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: S.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: a.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: S.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a.description
                        }),
                        (0, i.jsxs)('div', {
                            className: S.memberInfo,
                            children: [
                                null != a.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: v.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: a.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != a.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: v.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: a.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            submitting: l,
                            className: S.joinButton,
                            color: I ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            onClick: T,
                            children: M
                        })
                    ]
                }),
                (0, i.jsx)(Z, { entry: a })
            ]
        })
    );
};
