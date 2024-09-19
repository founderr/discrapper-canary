n.d(t, {
    a: function () {
        return O;
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
    E = n(570938),
    h = n(377171),
    m = n(823379),
    I = n(229893),
    g = n(207796),
    p = n(308083),
    T = n(689938),
    S = n(899115);
function f(e) {
    let { icon: t, text: n, ariaLabel: s, tooltip: l, onClick: o, isActive: d, autoWidth: u = !1 } = e,
        [_, E] = a.useState(!1),
        [h, m] = a.useState(!1),
        I = g.GN.getState().mode,
        p = I === g.v0.GAMES || I === g.v0.PLAYSTYLE || I === g.v0.TRAITS;
    a.useEffect(() => {
        p && (E(!1), m(!1));
    }, [p]);
    let T = d && (h || _),
        f = a.useMemo(
            () =>
                null != l
                    ? (0, i.jsxs)(c.Clickable, {
                          className: S.tooltipContentWrapper,
                          onClick: o,
                          onMouseEnter: () => {
                              !p && E(!0);
                          },
                          onMouseLeave: () => {
                              E(!1);
                          },
                          children: [(0, i.jsx)('div', { className: S.tooltipHoverBridge }), l]
                      })
                    : null,
            [l, o, p]
        ),
        C = a.useCallback(
            (e) =>
                (0, i.jsxs)(c.Button, {
                    ...e,
                    className: r()(S.filterPill, { [S.filterPillActive]: d }),
                    innerClassName: S.filterPillContents,
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
                            className: S.filterPillText,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != f &&
                                    (0, i.jsx)(c.ChevronSmallDownIcon, {
                                        className: S.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, d, o, f]
        );
    return null == f
        ? C({})
        : (0, i.jsx)(c.Tooltip, {
              text: f,
              position: 'bottom',
              'aria-label': s,
              shouldShow: T,
              forceOpen: T,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: r()(S.filterTooltip, { [S.filterTooltipAutoWidth]: u }),
              tooltipContentClassName: S.filterTooltipContent,
              children: C
          });
}
function C() {
    var e;
    let t = (0, g.GN)((e) => e.selectedGames, l.Z),
        n = a.useCallback(() => {
            (0, g.fH)(g.v0.GAMES, !0);
        }, []),
        s = null !== (e = (0, u.i)(t)) && void 0 !== e ? e : '',
        r = t.slice(0, 3),
        o = t.length - 3,
        d = (0, i.jsx)('div', {
            className: S.gamesTooltip,
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
        E = (0, i.jsx)(c.GameControllerIcon, {
            className: S.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: E,
        text: T.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({ count: t.length }),
        tooltip: d,
        onClick: n,
        isActive: t.length > 0,
        ariaLabel: s,
        autoWidth: !0
    });
}
function N() {
    let e = a.useMemo(p.f4, []),
        t = (0, g.GN)((e) => e.selectedPlaystyle, l.Z),
        n = null != t ? e[t] : null,
        s = null == n ? void 0 : n.title,
        r = a.useCallback(() => {
            (0, g.fH)(g.v0.PLAYSTYLE, !0);
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
            className: S.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: d,
        text: null != s ? s : T.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
        tooltip: o,
        onClick: r,
        isActive: null != n,
        ariaLabel: null != s ? s : T.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
    });
}
function A() {
    let e = (0, g.GN)((e) => e.selectedTraits, l.Z),
        t = a.useCallback(() => {
            (0, g.fH)(g.v0.TRAITS, !0);
        }, []);
    if (null == e) return null;
    let n = (0, i.jsx)('div', {
            className: S.traitsTooltip,
            children: e.map((e) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: S.trait,
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
            className: S.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(f, {
        icon: s,
        text: T.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
        tooltip: n,
        onClick: t,
        isActive: e.length > 0,
        ariaLabel: e.join(', '),
        autoWidth: !0
    });
}
function v(e) {
    let { onClick: t } = e,
        n = (0, g.GN)((e) => e.mode, l.Z),
        s = (0, g.GN)((e) => e.savedGuildIds, l.Z),
        r = (0, o.Wu)([I.Z], () => s.map((e) => I.Z.getGuildProfile(e)), [s]),
        d = a.useMemo(() => r.filter(m.lm), [r]),
        u = (0, i.jsx)(c.HeartIcon, {
            className: S.filterPillIcon,
            color: 'currentColor'
        }),
        _ = (0, i.jsxs)('div', {
            className: S.savedInnerContainer,
            children: [
                T.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                d.length > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: d.length,
                          color: h.Z.INTERACTIVE_ACTIVE,
                          className: S.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(f, {
        icon: u,
        text: _,
        onClick: t,
        isActive: n === g.v0.SAVED_GUILDS,
        ariaLabel: T.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
        autoWidth: !0
    });
}
function L() {
    let e = (0, g.GN)((e) => e.mode, l.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: s
        } = (0, g.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        r = t.length + (null != n ? 1 : 0) + s.length,
        o = a.useCallback(() => {
            if (e === g.v0.PREFERENCES) {
                (0, g.fH)(g.v0.DISCOVERY);
                return;
            }
            (0, g.fH)(g.v0.PREFERENCES);
        }, [e]),
        d = (0, i.jsxs)('div', {
            className: S.savedInnerContainer,
            children: [
                T.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
                r > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: r,
                          color: h.Z.INTERACTIVE_ACTIVE,
                          className: S.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(f, {
        icon: (0, i.jsx)(c.FiltersHorizontalIcon, {
            className: S.filterPillIcon,
            color: 'currentColor'
        }),
        text: d,
        onClick: o,
        isActive: r > 0,
        ariaLabel: T.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
        autoWidth: !0
    });
}
function Z(e) {
    let { title: t, onNavigateBack: n } = e;
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: S.backToDiscovery,
              children: [
                  (0, i.jsx)(c.Clickable, {
                      className: S.backArrow,
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
function R(e) {
    let { className: t, onNavigateBack: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(S.toolbar, t),
        children: [
            (0, i.jsx)('div', {
                className: S.backToDiscovery,
                children: (0, i.jsx)(Z, {
                    title: T.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    onNavigateBack: n
                })
            }),
            (0, i.jsx)('div', { className: S.actions })
        ]
    });
}
function O() {
    return (0, i.jsxs)('div', {
        className: S.guildsIconContainer,
        children: [
            (0, i.jsx)(E.Z, {
                width: 24,
                height: 24
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: T.Z.Messages.CLANS
            })
        ]
    });
}
function x(e) {
    let { guildIcon: t, className: n } = e,
        s = (0, g.GN)((e) => e.mode, l.Z),
        { enableClanCreation: o } = (0, d.C3)({
            location: 'UnifiedDiscoveryToolbar',
            includeConverted: !0
        }),
        c = (0, g.GN)((e) => e.dismissedPilotAdminNux),
        u = a.useMemo(() => !o || c, [c, o]),
        _ = a.useCallback(() => {
            if (s !== g.v0.SAVED_GUILDS) return (0, g.fH)(g.v0.SAVED_GUILDS);
        }, [s]),
        E = a.useCallback(() => (0, g.fH)(g.v0.DISCOVERY), []);
    return s === g.v0.SAVED_GUILDS
        ? (0, i.jsx)(R, {
              className: n,
              onNavigateBack: E
          })
        : (0, i.jsxs)('div', {
              className: r()(S.toolbar, n),
              children: [
                  null != t
                      ? (0, i.jsx)('div', {
                            className: S.toolbarIcon,
                            children: t
                        })
                      : null,
                  (0, i.jsx)('div', { className: S.preferences }),
                  u &&
                      (0, i.jsxs)('div', {
                          className: S.actions,
                          children: [(0, i.jsx)(L, {}), (0, i.jsx)(v, { onClick: _ })]
                      })
              ]
          });
}
t.Z = function (e) {
    let { guildIcon: t, className: n } = e,
        a = (0, g.GN)((e) => e.mode, l.Z);
    return (0, d.iN)('discovery_toolbar')
        ? (0, i.jsx)(x, {
              guildIcon: t,
              className: n
          })
        : a === g.v0.SAVED_GUILDS
          ? (0, i.jsx)(R, { className: n })
          : (0, i.jsxs)('div', {
                className: r()(S.toolbar, n),
                children: [
                    null != t
                        ? (0, i.jsx)('div', {
                              className: S.toolbarIcon,
                              children: t
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: S.preferences,
                        children: [(0, i.jsx)(C, {}), (0, i.jsx)(N, {}), (0, i.jsx)(A, {})]
                    }),
                    (0, i.jsx)('div', { className: S.actions })
                ]
            });
};
