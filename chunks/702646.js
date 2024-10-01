n.d(t, {
    a: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(442837),
    c = n(481060),
    d = n(963202),
    u = n(105671),
    _ = n(92373),
    h = n(570938),
    E = n(377171),
    m = n(229893),
    I = n(207796),
    g = n(308083),
    p = n(689938),
    T = n(899115);
function f(e) {
    let { icon: t, text: n, ariaLabel: s, tooltip: l, onClick: o, isActive: d, autoWidth: u = !1 } = e,
        [_, h] = a.useState(!1),
        [E, m] = a.useState(!1),
        g = I.GN.getState().mode,
        p = g === I.v0.GAMES || g === I.v0.PLAYSTYLE || g === I.v0.TRAITS;
    a.useEffect(() => {
        p && (h(!1), m(!1));
    }, [p]);
    let f = d && (E || _),
        S = a.useMemo(
            () =>
                null != l
                    ? (0, i.jsxs)(c.Clickable, {
                          className: T.tooltipContentWrapper,
                          onClick: o,
                          onMouseEnter: () => {
                              !p && h(!0);
                          },
                          onMouseLeave: () => {
                              h(!1);
                          },
                          children: [(0, i.jsx)('div', { className: T.tooltipHoverBridge }), l]
                      })
                    : null,
            [l, o, p]
        ),
        C = a.useCallback(
            (e) =>
                (0, i.jsxs)(c.Button, {
                    ...e,
                    className: r()(T.filterPill, { [T.filterPillActive]: d }),
                    innerClassName: T.filterPillContents,
                    look: c.ButtonLooks.OUTLINED,
                    color: c.ButtonColors.CUSTOM,
                    onClick: o,
                    onMouseEnter: () => {
                        m(!0);
                    },
                    onMouseLeave: () => {
                        m(!1);
                    },
                    children: [
                        t,
                        (0, i.jsxs)('div', {
                            className: T.filterPillText,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != S &&
                                    (0, i.jsx)(c.ChevronSmallDownIcon, {
                                        className: T.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, d, o, S]
        );
    return null == S
        ? C({})
        : (0, i.jsx)(c.Tooltip, {
              text: S,
              position: 'bottom',
              'aria-label': s,
              shouldShow: f,
              forceOpen: f,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: r()(T.filterTooltip, { [T.filterTooltipAutoWidth]: u }),
              tooltipContentClassName: T.filterTooltipContent,
              children: C
          });
}
function S() {
    var e;
    let t = (0, I.GN)((e) => e.selectedGames, l.Z),
        n = a.useCallback(() => {
            (0, I.fH)(I.v0.GAMES, !0);
        }, []),
        s = null !== (e = (0, u.i)(t)) && void 0 !== e ? e : '',
        r = t.slice(0, 3),
        o = t.length - 3,
        d = (0, i.jsx)('div', {
            className: T.gamesTooltip,
            children: r.map((e, t) =>
                (0, i.jsx)(
                    _.Z,
                    {
                        applicationId: e,
                        otherGamesCount: 2 === t && o > 0 ? o + 1 : void 0
                    },
                    e
                )
            )
        }),
        h = (0, i.jsx)(c.GameControllerIcon, {
            className: T.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: h,
        text: p.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({ count: t.length }),
        tooltip: d,
        onClick: n,
        isActive: t.length > 0,
        ariaLabel: s,
        autoWidth: !0
    });
}
function C() {
    let e = a.useMemo(g.f4, []),
        t = (0, I.GN)((e) => e.selectedPlaystyle, l.Z),
        n = null != t ? e[t] : null,
        s = null == n ? void 0 : n.title,
        r = a.useCallback(() => {
            (0, I.fH)(I.v0.PLAYSTYLE, !0);
        }, []),
        o =
            null != n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              variant: 'heading-xxl/medium',
                              children: n.emoji
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(c.Heading, {
                                      variant: 'heading-md/medium',
                                      children: n.title
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      children: n.subtitle
                                  })
                              ]
                          })
                      ]
                  })
                : null,
        d = (0, i.jsx)(c.DpadIcon, {
            className: T.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: d,
        text: null != s ? s : p.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
        tooltip: o,
        onClick: r,
        isActive: null != n,
        ariaLabel: null != s ? s : p.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
    });
}
function N() {
    let e = (0, I.GN)((e) => e.selectedTraits, l.Z),
        t = a.useCallback(() => {
            (0, I.fH)(I.v0.TRAITS, !0);
        }, []);
    if (null == e) return null;
    let n = (0, i.jsx)('div', {
            className: T.traitsTooltip,
            children: e.map((e) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: T.trait,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children: e
                        })
                    },
                    e
                )
            )
        }),
        s = (0, i.jsx)(c.TagIcon, {
            className: T.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: s,
        text: p.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
        tooltip: n,
        onClick: t,
        isActive: e.length > 0,
        ariaLabel: e.join(', '),
        autoWidth: !0
    });
}
function A(e) {
    let { onClick: t } = e,
        n = (0, I.GN)((e) => e.mode, l.Z),
        a = (0, o.Wu)([m.Z], () => m.Z.getSavedGuilds()),
        s = (0, i.jsx)(c.HeartIcon, {
            className: T.filterPillIcon,
            color: 'currentColor'
        }),
        r = (0, i.jsxs)('div', {
            className: T.savedInnerContainer,
            children: [
                p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                a.length > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: a.length,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: T.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(f, {
        icon: s,
        text: r,
        onClick: t,
        isActive: n === I.v0.SAVED_GUILDS,
        ariaLabel: p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
        autoWidth: !0
    });
}
function v() {
    let e = (0, I.GN)((e) => e.mode, l.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: s
        } = (0, I.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        r = t.length + (null != n ? 1 : 0) + s.length,
        o = a.useCallback(() => {
            if (e === I.v0.PREFERENCES) {
                (0, I.fH)(I.v0.DISCOVERY);
                return;
            }
            (0, I.fH)(I.v0.PREFERENCES);
        }, [e]),
        d = (0, i.jsxs)('div', {
            className: T.savedInnerContainer,
            children: [
                p.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
                r > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: r,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: T.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(f, {
        icon: (0, i.jsx)(c.FiltersHorizontalIcon, {
            className: T.filterPillIcon,
            color: 'currentColor'
        }),
        text: d,
        onClick: o,
        isActive: r > 0,
        ariaLabel: p.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
        autoWidth: !0
    });
}
function L(e) {
    let { title: t, onNavigateBack: n } = e;
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: T.backToDiscovery,
              children: [
                  (0, i.jsx)(c.Clickable, {
                      className: T.backArrow,
                      onClick: n,
                      children: (0, i.jsx)(c.ArrowLargeLeftIcon, { color: 'currentColor' })
                  }),
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'none',
                      children: t
                  })
              ]
          });
}
function Z(e) {
    let { className: t, onNavigateBack: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(T.toolbar, t),
        children: [
            (0, i.jsx)('div', {
                className: T.backToDiscovery,
                children: (0, i.jsx)(L, {
                    title: p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    onNavigateBack: n
                })
            }),
            (0, i.jsx)('div', { className: T.actions })
        ]
    });
}
function R() {
    return (0, i.jsxs)('div', {
        className: T.guildsIconContainer,
        children: [
            (0, i.jsx)(h.Z, {
                width: 24,
                height: 24
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: p.Z.Messages.CLANS
            })
        ]
    });
}
function O(e) {
    let { guildIcon: t, className: n } = e,
        s = (0, I.GN)((e) => e.mode, l.Z),
        { enableClanCreation: o } = (0, d.C3)({
            location: 'UnifiedDiscoveryToolbar',
            includeConverted: !0
        }),
        c = (0, I.GN)((e) => e.dismissedPilotAdminNux),
        u = a.useMemo(() => !o || c, [c, o]),
        _ = a.useCallback(() => {
            if (s !== I.v0.SAVED_GUILDS) return (0, I.fH)(I.v0.SAVED_GUILDS);
        }, [s]),
        h = a.useCallback(() => (0, I.fH)(I.v0.DISCOVERY), []);
    return s === I.v0.SAVED_GUILDS
        ? (0, i.jsx)(Z, {
              className: n,
              onNavigateBack: h
          })
        : (0, i.jsxs)('div', {
              className: r()(T.toolbar, n),
              children: [
                  null != t
                      ? (0, i.jsx)('div', {
                            className: T.toolbarIcon,
                            children: t
                        })
                      : null,
                  (0, i.jsx)('div', { className: T.preferences }),
                  u &&
                      (0, i.jsxs)('div', {
                          className: T.actions,
                          children: [(0, i.jsx)(v, {}), (0, i.jsx)(A, { onClick: _ })]
                      })
              ]
          });
}
t.Z = function (e) {
    let { guildIcon: t, className: n } = e,
        a = (0, I.GN)((e) => e.mode, l.Z);
    return (0, d.iN)('discovery_toolbar')
        ? (0, i.jsx)(O, {
              guildIcon: t,
              className: n
          })
        : a === I.v0.SAVED_GUILDS
          ? (0, i.jsx)(Z, { className: n })
          : (0, i.jsxs)('div', {
                className: r()(T.toolbar, n),
                children: [
                    null != t
                        ? (0, i.jsx)('div', {
                              className: T.toolbarIcon,
                              children: t
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: T.preferences,
                        children: [(0, i.jsx)(S, {}), (0, i.jsx)(C, {}), (0, i.jsx)(N, {})]
                    }),
                    (0, i.jsx)('div', { className: T.actions })
                ]
            });
};
