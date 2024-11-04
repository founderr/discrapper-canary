n.d(t, {
    m: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(239091),
    u = n(749210),
    d = n(686546),
    h = n(951394),
    m = n(565138),
    p = n(372769),
    f = n(134432),
    g = n(769654),
    C = n(601964),
    x = n(430824),
    v = n(768581),
    _ = n(683818),
    I = n(16853),
    E = n(981631),
    b = n(388032),
    S = n(724850),
    Z = n(883760);
let T = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: S.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: Z
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: S.addServerText,
                children: b.intl.string(b.t.H9jxS0)
            })
        ]
    });
};
function N(e) {
    let { entry: t } = e,
        [r, a] = l.useState(!1),
        { canEdit: c } = (0, _.Z)(t);
    return (0, i.jsx)('div', {
        className: s()(S.actionButtonsContainer, { [S.forceButtonsShow]: r }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.Tooltip, {
                          text: b.intl.string(b.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: l, ...r } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...r,
                                  onClick: () => {
                                      null == l || l(),
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                              return (n) =>
                                                  (0, i.jsx)(e, {
                                                      ...n,
                                                      entry: t
                                                  });
                                          });
                                  },
                                  'aria-label': b.intl.string(b.t.XnuOvL),
                                  children: (0, i.jsx)(o.PencilIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: S.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(I.Z, {
                    onRequestOpen: () => a(!0),
                    onRequestClose: () => a(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: b.intl.string(b.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: l, ...r } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...r,
                                    onClick: (e) => {
                                        null == l || l(), t(e);
                                    },
                                    'aria-label': b.intl.string(b.t.UKOtz8),
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
    let { entry: r } = e,
        [s, h] = l.useState(!1),
        _ = null != (0, a.e7)([x.Z], () => x.Z.getGuild(r.guildId)),
        I = async () => {
            h(!0);
            try {
                _ ? (0, g.X)(r.guildId) : await u.Z.joinGuild(r.guildId, { source: E.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        Z = v.ZP.getGuildSplashURL({
            id: r.guildId,
            splash: r.splash,
            size: 300 * (0, f.x_)()
        }),
        T =
            null !==
                (t = v.ZP.getGuildIconURL({
                    id: r.guildId,
                    icon: r.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        j = b.intl.string(b.t.VJlc0d);
    return (
        _ && (j = b.intl.string(b.t.cqWE2d)),
        (0, i.jsxs)('div', {
            className: S.card,
            onContextMenu: (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 643560));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            entry: r
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
                                null != Z &&
                                (0, i.jsx)('img', {
                                    src: Z,
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
                                    children: (0, i.jsx)(m.Z, {
                                        className: S.icon,
                                        iconSrc: T,
                                        guild: new C.ZP(r),
                                        size: m.Z.Sizes.MEDIUM,
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
                                (0, i.jsx)(p.Z, {
                                    className: S.guildBadge,
                                    guild: r,
                                    tooltipColor: o.Tooltip.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: S.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: r.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: S.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.description
                        }),
                        (0, i.jsxs)('div', {
                            className: S.memberInfo,
                            children: [
                                null != r.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t['LC+S+v'], { membersOnline: r.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != r.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: S.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: S.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t.zRl6XV, { count: r.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            submitting: s,
                            className: S.joinButton,
                            color: _ ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            onClick: I,
                            children: j
                        })
                    ]
                }),
                (0, i.jsx)(N, { entry: r })
            ]
        })
    );
};
