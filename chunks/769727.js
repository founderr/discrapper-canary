"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("153832"),
  u = n("143927"),
  d = n("828065"),
  c = n("149020"),
  f = n("509633"),
  E = n("670900"),
  h = n("738232"),
  _ = n("376644"),
  C = n("481060"),
  m = n("442837"),
  S = n("924801"),
  I = n("571245"),
  T = n("441674"),
  p = n("465670"),
  g = n("729285"),
  A = n("229765"),
  N = n("231467"),
  v = n("10473"),
  R = n("207796"),
  O = n("980721"),
  L = n("308083"),
  M = n("689938"),
  P = n("24953");

function y() {
  let [e, t, n, l] = (0, R.useClanDiscoveryUIStore)(e => [e.selectedGames, e.setSelectedGames, e.game, e.setGame], u.default), i = s.useCallback(() => {
    null != n && null != l && (n === R.ClanDiscoveryGame.GENSHIN ? (l(R.ClanDiscoveryGame.VALORANT), t([{
      applicationId: L.VALORANT_ID,
      name: "Valorant"
    }])) : (l(R.ClanDiscoveryGame.GENSHIN), t([{
      applicationId: L.GENSHIN_ID,
      name: "Genshin Impact"
    }])))
  }, [n, l, t]);
  return (0, a.jsxs)(C.Button, {
    className: P.filterPill,
    innerClassName: P.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: i,
    children: [(0, a.jsx)(c.GameControllerIcon, {
      className: P.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: M.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
        count: e.length
      })
    })]
  })
}

function x() {
  let e = s.useMemo(L.getPlaystyleOptions, []),
    {
      playstyle: t,
      setMode: n
    } = (0, R.useClanDiscoveryUIStore)(e => ({
      playstyle: e.selectedPlaystyle,
      setMode: e.setMode
    }), u.default),
    l = e[t.id],
    i = s.useCallback(() => {
      n(R.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]),
    r = null == l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(C.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, a.jsx)(C.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    });
  return (0, a.jsx)(C.Tooltip, {
    text: r,
    position: "bottom",
    "aria-label": t.name,
    tooltipClassName: P.filterTooltip,
    tooltipContentClassName: P.filterTooltipContent,
    children: e => (0, a.jsxs)(C.Button, {
      ...e,
      className: P.filterPill,
      innerClassName: P.filterPillContents,
      look: C.ButtonLooks.OUTLINED,
      color: C.ButtonColors.CUSTOM,
      onClick: i,
      children: [(0, a.jsx)(h.ReactionIcon, {
        className: P.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(C.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: t.name
      })]
    })
  })
}

function D() {
  let e = (0, R.useClanDiscoveryUIStore)(e => e.selectedTraits, u.default);
  return null == e ? null : (0, a.jsxs)(C.Button, {
    className: P.filterPill,
    innerClassName: P.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(_.TagIcon, {
      className: P.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function b() {
  let e = (0, R.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    t = s.useCallback(() => {
      e(R.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, a.jsxs)(C.Button, {
    className: P.filterPill,
    innerClassName: P.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, a.jsx)(d.ClockIcon, {
      className: P.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: M.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function U() {
  let e = (0, m.useStateFromStoresArray)([v.default], () => v.default.getFavoriteClans(), []);
  return (0, a.jsxs)(C.Button, {
    className: P.filterPillSmall,
    innerClassName: P.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(f.HeartIcon, {
      className: P.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function j() {
  return (0, a.jsx)(C.Button, {
    className: P.filterPillSmall,
    innerClassName: P.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(E.MagnifyingGlassIcon, {
      className: P.filterPillIcon,
      color: "currentColor"
    })
  })
}

function G() {
  return (0, a.jsxs)("div", {
    className: P.toolbar,
    children: [(0, a.jsxs)("div", {
      className: P.preferences,
      children: [(0, a.jsx)(y, {}), (0, a.jsx)(x, {}), (0, a.jsx)(D, {}), (0, a.jsx)(b, {})]
    }), (0, a.jsxs)("div", {
      className: P.actions,
      children: [(0, a.jsx)(U, {}), (0, a.jsx)(j, {})]
    })]
  })
}

function w() {
  let [e, t] = (0, R.useClanDiscoveryUIStore)(e => [(0, R.buildSearchCriteriaFromUIState)(e), e.selectedPlaystyle], u.default), n = (0, m.useStateFromStores)([v.default], () => v.default.getSearchResult(e), [e]);
  return (0, O.isUnloadedSearchResult)(n) ? null : (0, O.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: P.topPicks,
    children: [(0, a.jsxs)("div", {
      className: P.topPicksHeader,
      children: [(0, a.jsx)(C.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: M.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(C.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: M.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: null == t ? void 0 : t.name
        })
      })]
    }), (0, a.jsx)("div", {
      className: P.topPicksContent,
      children: n.items.map(t => (0, a.jsx)(N.default, {
        clan: t,
        affinity: (0, O.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function k() {
  let e = s.useMemo(() => (0, S.getDayOptions)(), []),
    [t, n, l] = (0, R.useClanDiscoveryUIStore)(e => [e.selectedPrimetimes, e.setSelectedPrimetime, e.setMode], u.default),
    r = s.useCallback(() => {
      l(R.ClanDiscoveryMode.DISCOVERY)
    }, [l]),
    d = s.useCallback((e, a) => {
      let s = [...t];
      s[e].day = a, n(s)
    }, [t, n]),
    c = s.useCallback((e, a) => {
      let s = [...t];
      s[e].time = a, n(s)
    }, [t, n]),
    f = s.useCallback(e => {
      let a = [...t];
      a.splice(e, 1), n(a)
    }, [t, n]),
    E = s.useCallback(() => {
      if (t.length >= 3) return;
      let e = [...t];
      e.push({
        id: (0, o.v4)(),
        day: void 0,
        time: "morning"
      }), n(e)
    }, [t, n]);
  return (0, a.jsxs)("div", {
    className: P.playtimeSelector,
    children: [(0, a.jsx)("div", {
      className: P.playtimeSelectorSaveContainer,
      children: (0, a.jsx)(C.Button, {
        onClick: r,
        look: C.ButtonLooks.OUTLINED,
        color: C.ButtonColors.PRIMARY,
        children: M.default.Messages.SAVE
      })
    }), (0, a.jsxs)("div", {
      className: P.playtimeSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: P.playtimeHeader,
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-xxl/medium",
          children: M.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
        }), (0, a.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: M.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
        })]
      }), (0, a.jsxs)("div", {
        className: P.playtimes,
        children: [t.map((t, n) => (0, a.jsxs)("div", {
          className: P.timeSelectorRow,
          children: [(0, a.jsx)(C.SearchableSelect, {
            value: t.day,
            options: e,
            placeholder: M.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
            onChange: e => d(n, e)
          }), (0, a.jsx)(I.default, {
            value: t.time,
            onChange: e => c(n, e)
          }), (0, a.jsx)(C.Clickable, {
            onClick: () => f(n),
            className: P.clickable,
            children: (0, a.jsx)(p.default, {
              className: P.removeIcon
            })
          })]
        }, t.id)), t.length < 3 && (0, a.jsxs)(C.Clickable, {
          onClick: E,
          className: i()(P.timeSelectorRow, P.clickable),
          children: [(0, a.jsx)(g.default, {
            className: P.plusIcon
          }), (0, a.jsx)(C.Text, {
            variant: "text-sm/medium",
            children: M.default.Messages.CLAN_SETUP_PRIMETIME_ADD
          })]
        })]
      })]
    })]
  })
}

function F() {
  let e = (0, C.useToken)(C.tokens.colors.WHITE),
    [t, n, l] = (0, R.useClanDiscoveryUIStore)(e => [e.selectedPlaystyle, e.setSelectedPlaystyle, e.setMode], u.default),
    r = s.useMemo(() => Object.values((0, L.getPlaystyleOptions)()), []),
    o = s.useCallback(() => {
      l(R.ClanDiscoveryMode.DISCOVERY)
    }, [l]);
  return (0, a.jsxs)("div", {
    className: P.playstyleSelector,
    children: [(0, a.jsx)("div", {
      className: P.playstyleSelectorSaveContainer,
      children: (0, a.jsx)(C.Button, {
        onClick: o,
        look: C.ButtonLooks.OUTLINED,
        color: C.ButtonColors.PRIMARY,
        children: M.default.Messages.SAVE
      })
    }), (0, a.jsxs)("div", {
      className: P.playstyleSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: P.playstyleHeader,
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-xxl/normal",
          color: "header-primary",
          children: M.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
        }), (0, a.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: M.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
        })]
      }), (0, a.jsx)("div", {
        className: P.playstyles,
        children: r.map(s => (0, a.jsxs)(C.Clickable, {
          className: i()(P.playstyleOption, {
            [P.selectedPlaystyle]: s.type === t.id
          }),
          onClick: () => n({
            id: s.type,
            name: s.title
          }),
          children: [(0, a.jsx)(C.Heading, {
            variant: "heading-xxl/medium",
            children: s.emoji
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(C.Heading, {
              variant: "heading-md/medium",
              children: s.title
            }), (0, a.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: s.subtitle
            })]
          }), s.type === t.id && (0, a.jsx)(T.default, {
            backgroundColor: e.hex(),
            className: P.checkmark
          })]
        }, s.type))
      })]
    })]
  })
}
t.default = function() {
  let [e, t, n] = (0, R.useClanDiscoveryUIStore)(e => [e.mode, e.game, (0, R.buildSearchCriteriaFromUIState)(e)], u.default), l = (0, m.useStateFromStores)([v.default], () => v.default.hasLoadedStaticClanDiscovery(t)), i = (0, r.useTransition)([e], {
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
    expires: 350
  });
  return s.useEffect(() => {
    !l && (0, A.loadStaticClanDiscovery)(t)
  }, [t, l]), s.useEffect(() => {
    l && (0, A.searchClanDiscovery)(t, n)
  }, [t, n, l]), (0, a.jsxs)("main", {
    className: P.container,
    children: [(0, a.jsx)(G, {}), (0, a.jsx)("div", {
      className: P.content,
      children: (0, a.jsx)(w, {})
    }), i((e, t) => {
      switch (t) {
        case R.ClanDiscoveryMode.PLAYSTYLE:
          return (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(F, {})
          });
        case R.ClanDiscoveryMode.PRIMETIME:
          return (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(k, {})
          });
        default:
          return null
      }
    })]
  })
}