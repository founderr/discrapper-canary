n.d(t, {
    m: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
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
    x = n(16853),
    T = n(981631),
    N = n(689938),
    S = n(184307),
    v = n(883760);
let Z = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: S.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: v
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: S.addServerText,
                children: N.Z.Messages.HUB_ADD_SERVER_CTA
            })
        ]
    });
};
function A(e) {
    let { entry: t } = e,
        [s, r] = a.useState(!1),
        { canEdit: c } = (0, I.Z)(t);
    return (0, i.jsx)('div', {
        className: l()(S.actionButtonsContainer, { [S.forceButtonsShow]: s }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.Tooltip, {
                          text: N.Z.Messages.HUB_ENTRY_UPDATE,
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: a, ...s } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...s,
                                  onClick: () => {
                                      null == a || a(),
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      entry: t
                                                  });
                                          });
                                  },
                                  'aria-label': N.Z.Messages.HUB_ENTRY_UPDATE,
                                  children: (0, i.jsx)(o.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: S.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(x.Z, {
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: N.Z.Messages.MORE,
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: a, ...s } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...s,
                                    onClick: (e) => {
                                        null == a || a(), t(e);
                                    },
                                    'aria-label': N.Z.Messages.MORE,
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
    let { entry: s } = e,
        [l, h] = a.useState(!1),
        I = null != (0, r.e7)([g.Z], () => g.Z.getGuild(s.guildId)),
        x = async () => {
            h(!0);
            try {
                I ? (0, f.X)(s.guildId) : await u.Z.joinGuild(s.guildId, { source: T.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        v = C.ZP.getGuildSplashURL({
            id: s.guildId,
            splash: s.splash,
            size: 300 * (0, _.x_)()
        }),
        Z =
            null !==
                (t = C.ZP.getGuildIconURL({
                    id: s.guildId,
                    icon: s.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        M = N.Z.Messages.JOIN;
    return (
        I && (M = N.Z.Messages.HUB_DIRECTORY_CARD_JOINED_GUILD_BUTTON),
        (0, i.jsxs)('div', {
            className: S.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            entry: s
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
                                null != v &&
                                (0, i.jsx)('img', {
                                    src: v,
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
                                        iconSrc: Z,
                                        guild: new E.ZP(s),
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
                                    guild: s,
                                    tooltipColor: o.Tooltip.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: S.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: s.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: S.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: s.description
                        }),
                        (0, i.jsxs)('div', {
                            className: S.memberInfo,
                            children: [
                                null != s.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: s.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != s.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: s.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            submitting: l,
                            className: S.joinButton,
                            color: I ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            onClick: x,
                            children: M
                        })
                    ]
                }),
                (0, i.jsx)(A, { entry: s })
            ]
        })
    );
};
