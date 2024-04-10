"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("143927"),
  u = n("828065"),
  d = n("149020"),
  c = n("509633"),
  f = n("670900"),
  E = n("738232"),
  h = n("376644"),
  _ = n("481060"),
  C = n("442837"),
  m = n("441674"),
  S = n("229765"),
  I = n("231467"),
  p = n("10473"),
  T = n("207796"),
  g = n("980721"),
  N = n("308083"),
  A = n("689938"),
  v = n("24953");

function O() {
  let [e, t, n, l] = (0, T.useClanDiscoveryUIStore)(e => [e.selectedGames, e.setSelectedGames, e.game, e.setGame], o.default), i = s.useCallback(() => {
    null != n && null != l && (n === T.ClanDiscoveryGame.GENSHIN ? (l(T.ClanDiscoveryGame.VALORANT), t([{
      applicationId: N.VALORANT_ID,
      name: "Valorant"
    }])) : (l(T.ClanDiscoveryGame.GENSHIN), t([{
      applicationId: N.GENSHIN_ID,
      name: "Genshin Impact"
    }])))
  }, [n, l, t]);
  return (0, a.jsxs)(_.Button, {
    className: v.filterPill,
    innerClassName: v.filterPillContents,
    look: _.ButtonLooks.OUTLINED,
    color: _.ButtonColors.CUSTOM,
    onClick: i,
    children: [(0, a.jsx)(d.GameControllerIcon, {
      className: v.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: A.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
        count: e.length
      })
    })]
  })
}

function R() {
  let e = s.useMemo(N.getPlaystyleOptions, []),
    {
      playstyle: t,
      setMode: n
    } = (0, T.useClanDiscoveryUIStore)(e => ({
      playstyle: e.selectedPlaystyle,
      setMode: e.setMode
    }), o.default),
    l = e[t.id],
    i = s.useCallback(() => {
      n(T.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]),
    r = null == l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(_.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, a.jsx)(_.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    });
  return (0, a.jsx)(_.Tooltip, {
    text: r,
    position: "bottom",
    "aria-label": t.name,
    tooltipClassName: v.filterTooltip,
    tooltipContentClassName: v.filterTooltipContent,
    children: e => (0, a.jsxs)(_.Button, {
      ...e,
      className: v.filterPill,
      innerClassName: v.filterPillContents,
      look: _.ButtonLooks.OUTLINED,
      color: _.ButtonColors.CUSTOM,
      onClick: i,
      children: [(0, a.jsx)(E.ReactionIcon, {
        className: v.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: t.name
      })]
    })
  })
}

function L() {
  let e = (0, T.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default);
  return null == e ? null : (0, a.jsxs)(_.Button, {
    className: v.filterPill,
    innerClassName: v.filterPillContents,
    look: _.ButtonLooks.OUTLINED,
    color: _.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(h.TagIcon, {
      className: v.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function M() {
  var e;
  let t = (0, T.useClanDiscoveryUIStore)(e => e.selectedPrimetime, o.default);
  return (0, a.jsxs)(_.Button, {
    className: v.filterPill,
    innerClassName: v.filterPillContents,
    look: _.ButtonLooks.OUTLINED,
    color: _.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(u.ClockIcon, {
      className: v.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: null !== (e = null == t ? void 0 : t.start) && void 0 !== e ? e : A.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER_EMPTY
    })]
  })
}

function P() {
  let e = (0, C.useStateFromStoresArray)([p.default], () => p.default.getFavoriteClans(), []);
  return (0, a.jsxs)(_.Button, {
    className: v.filterPillSmall,
    innerClassName: v.filterPillContents,
    look: _.ButtonLooks.OUTLINED,
    color: _.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(c.HeartIcon, {
      className: v.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function y() {
  return (0, a.jsx)(_.Button, {
    className: v.filterPillSmall,
    innerClassName: v.filterPillContents,
    look: _.ButtonLooks.OUTLINED,
    color: _.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(f.MagnifyingGlassIcon, {
      className: v.filterPillIcon,
      color: "currentColor"
    })
  })
}

function x() {
  return (0, a.jsxs)("div", {
    className: v.toolbar,
    children: [(0, a.jsxs)("div", {
      className: v.preferences,
      children: [(0, a.jsx)(O, {}), (0, a.jsx)(R, {}), (0, a.jsx)(L, {}), (0, a.jsx)(M, {})]
    }), (0, a.jsxs)("div", {
      className: v.actions,
      children: [(0, a.jsx)(P, {}), (0, a.jsx)(y, {})]
    })]
  })
}

function D() {
  let [e, t] = (0, T.useClanDiscoveryUIStore)(e => [(0, T.buildSearchCriteriaFromUIState)(e), e.selectedPlaystyle], o.default), n = (0, C.useStateFromStores)([p.default], () => p.default.getSearchResult(e), [e]);
  return (0, g.isUnloadedSearchResult)(n) ? null : (0, g.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: v.topPicks,
    children: [(0, a.jsxs)("div", {
      className: v.topPicksHeader,
      children: [(0, a.jsx)(_.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: A.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: A.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: null == t ? void 0 : t.name
        })
      })]
    }), (0, a.jsx)("div", {
      className: v.topPicksContent,
      children: n.items.map(e => (0, a.jsx)(I.default, {
        clan: e
      }, e.id))
    })]
  }) : null
}

function b() {
  let e = (0, _.useToken)(_.tokens.colors.WHITE),
    [t, n, l] = (0, T.useClanDiscoveryUIStore)(e => [e.selectedPlaystyle, e.setSelectedPlaystyle, e.setMode], o.default),
    r = s.useMemo(() => Object.values((0, N.getPlaystyleOptions)()), []),
    u = s.useCallback(() => {
      l(T.ClanDiscoveryMode.DISCOVERY)
    }, [l]);
  return (0, a.jsxs)("div", {
    className: v.playstyleSelector,
    children: [(0, a.jsx)("div", {
      className: v.playstyleSelectorSaveContainer,
      children: (0, a.jsx)(_.Button, {
        onClick: u,
        look: _.ButtonLooks.OUTLINED,
        color: _.ButtonColors.PRIMARY,
        children: A.default.Messages.SAVE
      })
    }), (0, a.jsxs)("div", {
      className: v.playstyleSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: v.playstyleHeader,
        children: [(0, a.jsx)(_.Heading, {
          variant: "heading-xxl/normal",
          color: "header-primary",
          children: A.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
        }), (0, a.jsx)(_.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: A.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
        })]
      }), (0, a.jsx)("div", {
        className: v.playstyles,
        children: r.map(s => (0, a.jsxs)(_.Clickable, {
          className: i()(v.playstyleOption, {
            [v.selectedPlaystyle]: s.type === t.id
          }),
          onClick: () => n({
            id: s.type,
            name: s.title
          }),
          children: [(0, a.jsx)(_.Heading, {
            variant: "heading-xxl/medium",
            children: s.emoji
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(_.Heading, {
              variant: "heading-md/medium",
              children: s.title
            }), (0, a.jsx)(_.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: s.subtitle
            })]
          }), s.type === t.id && (0, a.jsx)(m.default, {
            backgroundColor: e.hex(),
            className: v.checkmark
          })]
        }, s.type))
      })]
    })]
  })
}
t.default = function() {
  let [e, t, n] = (0, T.useClanDiscoveryUIStore)(e => [e.mode, e.game, (0, T.buildSearchCriteriaFromUIState)(e)], o.default), l = (0, C.useStateFromStores)([p.default], () => p.default.hasLoadedStaticClanDiscovery(t)), i = (0, r.useTransition)([e], {
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
      clamp: !0
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    expires: 300
  });
  return s.useEffect(() => {
    !l && (0, S.loadStaticClanDiscovery)(t)
  }, [t, l]), s.useEffect(() => {
    l && (0, S.searchClanDiscovery)(t, n)
  }, [t, n, l]), (0, a.jsxs)("main", {
    className: v.container,
    children: [(0, a.jsx)(x, {}), (0, a.jsx)("div", {
      className: v.content,
      children: (0, a.jsx)(D, {})
    }), i((e, t) => {
      if (t === T.ClanDiscoveryMode.PLAYSTYLE) return (0, a.jsx)(r.animated.div, {
        style: e,
        children: (0, a.jsx)(b, {})
      });
      return null
    })]
  })
}