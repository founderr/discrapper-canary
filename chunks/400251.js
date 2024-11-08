n.d(t, {
    m: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(749210),
    u = n(686546),
    h = n(951394),
    p = n(565138),
    m = n(372769),
    f = n(134432),
    g = n(769654),
    C = n(601964),
    x = n(430824),
    v = n(768581),
    _ = n(683818),
    I = n(16853),
    E = n(981631),
    b = n(388032),
    N = n(111641),
    Z = n(883760);
let S = (e) => {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.Clickable, {
        onClick: t,
        className: N.addEntryCard,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: Z
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                color: 'header-primary',
                className: N.addServerText,
                children: b.intl.string(b.t.H9jxS0)
            })
        ]
    });
};
function T(e) {
    let { entry: t } = e,
        [a, s] = l.useState(!1),
        { canEdit: c } = (0, _.Z)(t);
    return (0, i.jsx)('div', {
        className: r()(N.actionButtonsContainer, { [N.forceButtonsShow]: a }),
        children: (0, i.jsxs)(h.ZP, {
            children: [
                c
                    ? (0, i.jsx)(o.Tooltip, {
                          text: b.intl.string(b.t.XnuOvL),
                          hideOnClick: !0,
                          children: (e) => {
                              let { onClick: l, ...a } = e;
                              return (0, i.jsx)(h.zx, {
                                  ...a,
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
                                      className: N.overflowIcon
                                  })
                              });
                          }
                      })
                    : null,
                (0, i.jsx)(I.Z, {
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: t,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(o.Tooltip, {
                            text: b.intl.string(b.t.UKOtz8),
                            hideOnClick: !0,
                            children: (e) => {
                                let { onClick: l, ...a } = e;
                                return (0, i.jsx)(h.zx, {
                                    ...n,
                                    ...a,
                                    onClick: (e) => {
                                        null == l || l(), t(e);
                                    },
                                    'aria-label': b.intl.string(b.t.UKOtz8),
                                    children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: N.overflowIcon
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
        [r, h] = l.useState(!1),
        _ = null != (0, s.e7)([x.Z], () => x.Z.getGuild(a.guildId)),
        I = async () => {
            h(!0);
            try {
                _ ? (0, g.X)(a.guildId) : await d.Z.joinGuild(a.guildId, { source: E.vtS.DIRECTORY_ENTRY });
            } finally {
                h(!1);
            }
        },
        Z = v.ZP.getGuildSplashURL({
            id: a.guildId,
            splash: a.splash,
            size: 300 * (0, f.x_)()
        }),
        S =
            null !==
                (t = v.ZP.getGuildIconURL({
                    id: a.guildId,
                    icon: a.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        j = b.intl.string(b.t.VJlc0d);
    return (
        _ && (j = b.intl.string(b.t.cqWE2d)),
        (0, i.jsxs)('div', {
            className: N.card,
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
                    className: N.cardHeader,
                    children: [
                        (0, i.jsx)('div', {
                            className: N.splash,
                            children:
                                null != Z &&
                                (0, i.jsx)('img', {
                                    src: Z,
                                    alt: '',
                                    className: N.splashImage
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: N.guildIcon,
                            children: (0, i.jsx)(u.ZP, {
                                mask: u.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, i.jsx)('div', {
                                    className: N.iconMask,
                                    children: (0, i.jsx)(p.Z, {
                                        className: N.icon,
                                        iconSrc: S,
                                        guild: new C.ZP(a),
                                        size: p.Z.Sizes.MEDIUM,
                                        active: !0
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: N.guildInfo,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.title,
                            children: [
                                (0, i.jsx)(m.Z, {
                                    className: N.guildBadge,
                                    guild: a,
                                    tooltipColor: o.Tooltip.Colors.PRIMARY
                                }),
                                (0, i.jsx)(o.Text, {
                                    className: N.guildName,
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: a.name
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            className: N.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: a.description
                        }),
                        (0, i.jsxs)('div', {
                            className: N.memberInfo,
                            children: [
                                null != a.approximatePresenceCount &&
                                    (0, i.jsxs)('div', {
                                        className: N.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: N.dotOnline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t['LC+S+v'], { membersOnline: a.approximatePresenceCount })
                                            })
                                        ]
                                    }),
                                null != a.approximateMemberCount &&
                                    (0, i.jsxs)('div', {
                                        className: N.memberCount,
                                        children: [
                                            (0, i.jsx)('div', { className: N.dotOffline }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-secondary',
                                                children: b.intl.format(b.t.zRl6XV, { count: a.approximateMemberCount })
                                            })
                                        ]
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            submitting: r,
                            className: N.joinButton,
                            color: _ ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            onClick: I,
                            children: j
                        })
                    ]
                }),
                (0, i.jsx)(T, { entry: a })
            ]
        })
    );
};
