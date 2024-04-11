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
  I = n("359380"),
  T = n("571245"),
  p = n("824959"),
  g = n("898543"),
  A = n("441674"),
  N = n("465670"),
  v = n("950463"),
  R = n("90062"),
  O = n("964309"),
  L = n("729285"),
  M = n("229765"),
  P = n("231467"),
  y = n("10473"),
  x = n("207796"),
  D = n("980721"),
  b = n("308083"),
  U = n("689938"),
  j = n("24953");

function G() {
  let [e, t, n, l] = (0, x.useClanDiscoveryUIStore)(e => [e.selectedGames, e.setSelectedGames, e.game, e.setGame], u.default), i = s.useCallback(() => {
    null != n && null != l && (n === x.ClanDiscoveryGame.GENSHIN ? (l(x.ClanDiscoveryGame.VALORANT), t([{
      applicationId: b.VALORANT_ID,
      name: "Valorant"
    }])) : (l(x.ClanDiscoveryGame.GENSHIN), t([{
      applicationId: b.GENSHIN_ID,
      name: "Genshin Impact"
    }])))
  }, [n, l, t]);
  return (0, a.jsxs)(C.Button, {
    className: j.filterPill,
    innerClassName: j.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: i,
    children: [(0, a.jsx)(c.GameControllerIcon, {
      className: j.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: U.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
        count: e.length
      })
    })]
  })
}

function w() {
  let e = s.useMemo(b.getPlaystyleOptions, []),
    {
      playstyle: t,
      setMode: n
    } = (0, x.useClanDiscoveryUIStore)(e => ({
      playstyle: e.selectedPlaystyle,
      setMode: e.setMode
    }), u.default),
    l = e[t.id],
    i = s.useCallback(() => {
      n(x.ClanDiscoveryMode.PLAYSTYLE)
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
    tooltipClassName: j.filterTooltip,
    tooltipContentClassName: j.filterTooltipContent,
    children: e => (0, a.jsxs)(C.Button, {
      ...e,
      className: j.filterPill,
      innerClassName: j.filterPillContents,
      look: C.ButtonLooks.OUTLINED,
      color: C.ButtonColors.CUSTOM,
      onClick: i,
      children: [(0, a.jsx)(h.ReactionIcon, {
        className: j.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(C.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: t.name
      })]
    })
  })
}

function k() {
  let [e, t] = (0, x.useClanDiscoveryUIStore)(e => [e.selectedTraits, e.setMode], u.default), n = s.useCallback(() => {
    t(x.ClanDiscoveryMode.TRAITS)
  }, [t]);
  return null == e ? null : (0, a.jsxs)(C.Button, {
    className: j.filterPill,
    innerClassName: j.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: n,
    children: [(0, a.jsx)(_.TagIcon, {
      className: j.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function F() {
  let e = (0, x.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    t = s.useCallback(() => {
      e(x.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, a.jsxs)(C.Button, {
    className: j.filterPill,
    innerClassName: j.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, a.jsx)(d.ClockIcon, {
      className: j.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: U.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function H() {
  let e = (0, m.useStateFromStoresArray)([y.default], () => y.default.getFavoriteClans(), []);
  return (0, a.jsxs)(C.Button, {
    className: j.filterPillSmall,
    innerClassName: j.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(f.HeartIcon, {
      className: j.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function B() {
  return (0, a.jsx)(C.Button, {
    className: j.filterPillSmall,
    innerClassName: j.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(E.MagnifyingGlassIcon, {
      className: j.filterPillIcon,
      color: "currentColor"
    })
  })
}

function V() {
  return (0, a.jsxs)("div", {
    className: j.toolbar,
    children: [(0, a.jsxs)("div", {
      className: j.preferences,
      children: [(0, a.jsx)(G, {}), (0, a.jsx)(w, {}), (0, a.jsx)(k, {}), (0, a.jsx)(F, {})]
    }), (0, a.jsxs)("div", {
      className: j.actions,
      children: [(0, a.jsx)(H, {}), (0, a.jsx)(B, {})]
    })]
  })
}

function Y() {
  let [e, t] = (0, x.useClanDiscoveryUIStore)(e => [(0, x.buildSearchCriteriaFromUIState)(e), e.selectedPlaystyle], u.default), n = (0, m.useStateFromStores)([y.default], () => y.default.getSearchResult(e), [e]);
  return (0, D.isUnloadedSearchResult)(n) ? null : (0, D.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: j.topPicks,
    children: [(0, a.jsxs)("div", {
      className: j.topPicksHeader,
      children: [(0, a.jsx)(C.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: U.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(C.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: U.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: null == t ? void 0 : t.name
        })
      })]
    }), (0, a.jsx)("div", {
      className: j.topPicksContent,
      children: n.items.map(t => (0, a.jsx)(P.default, {
        clan: t,
        affinity: (0, D.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function W() {
  let [e, t, n] = (0, x.useClanDiscoveryUIStore)(e => [new Set(e.selectedTraits), e.setSelectedTraits, e.setMode], u.default), l = s.useMemo(() => U.default.getAvailableLocales().map(e => ({
    value: e.value,
    label: e.name
  })), []), [i, r] = s.useMemo(() => [Array.from(e).filter(e => b.LANGUAGES_SET.has(e)), Array.from(e).filter(e => !b.LANGUAGES_SET.has(e))], [e]), o = s.useCallback(() => {
    n(x.ClanDiscoveryMode.DISCOVERY)
  }, [n]), d = s.useCallback(e => {
    let {
      interests: n
    } = e;
    null != n && t(Array.from(n))
  }, [t]), c = s.useCallback(e => {
    d({
      interests: new Set([...r, ...e])
    })
  }, [d, r]);
  return (0, a.jsxs)("div", {
    className: j.traitSelector,
    children: [(0, a.jsx)("div", {
      className: j.traitSelectorSaveContainer,
      children: (0, a.jsx)(C.Button, {
        onClick: o,
        look: C.ButtonLooks.OUTLINED,
        color: C.ButtonColors.PRIMARY,
        children: U.default.Messages.SAVE
      })
    }), (0, a.jsxs)(C.Scroller, {
      fade: !0,
      className: j.traitSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: j.traitHeader,
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-xxl/normal",
          color: "header-primary",
          children: U.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
        }), (0, a.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: U.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
        })]
      }), (0, a.jsxs)("div", {
        className: j.traits,
        children: [(0, a.jsx)("div", {
          className: j.traitCategory,
          children: (0, a.jsx)(I.TraitSelectionCategory, {
            title: U.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
            icon: g.default,
            traits: b.VALORANT_TRAITS,
            interests: e,
            handleUpdate: d
          })
        }), (0, a.jsx)("div", {
          className: j.traitCategory,
          children: (0, a.jsx)(I.TraitSelectionCategory, {
            title: U.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
            icon: R.default,
            traits: b.AGE_TRAITS,
            interests: e,
            handleUpdate: d
          })
        }), (0, a.jsx)("div", {
          className: j.traitCategory,
          children: (0, a.jsx)(I.TraitSelectionCategory, {
            title: U.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
            icon: O.default,
            traits: b.IDENTITY_TRAITS,
            interests: e,
            handleUpdate: d
          })
        }), (0, a.jsxs)("div", {
          className: j.traitCategory,
          children: [(0, a.jsxs)("div", {
            className: j.languagesTitle,
            children: [(0, a.jsx)(p.default, {
              className: j.languagesIcon
            }), (0, a.jsx)(C.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: U.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
            })]
          }), (0, a.jsx)("div", {
            className: j.languagesSelect,
            children: (0, a.jsx)(C.SearchableSelect, {
              options: l,
              value: i,
              onChange: c,
              placeholder: U.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
              multi: !0
            })
          })]
        }), (0, a.jsx)("div", {
          className: j.traitCategory,
          children: (0, a.jsx)(I.TraitSelectionCategory, {
            title: U.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
            icon: v.default,
            traits: b.LOCALE_TRAITS,
            interests: e,
            handleUpdate: d
          })
        })]
      })]
    })]
  })
}

function K() {
  let e = s.useMemo(() => (0, S.getDayOptions)(), []),
    [t, n, l] = (0, x.useClanDiscoveryUIStore)(e => [e.selectedPrimetimes, e.setSelectedPrimetime, e.setMode], u.default),
    r = s.useCallback(() => {
      l(x.ClanDiscoveryMode.DISCOVERY)
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
    className: j.playtimeSelector,
    children: [(0, a.jsx)("div", {
      className: j.playtimeSelectorSaveContainer,
      children: (0, a.jsx)(C.Button, {
        onClick: r,
        look: C.ButtonLooks.OUTLINED,
        color: C.ButtonColors.PRIMARY,
        children: U.default.Messages.SAVE
      })
    }), (0, a.jsxs)("div", {
      className: j.playtimeSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: j.playtimeHeader,
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-xxl/medium",
          children: U.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
        }), (0, a.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: U.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
        })]
      }), (0, a.jsxs)("div", {
        className: j.playtimes,
        children: [t.map((t, n) => (0, a.jsxs)("div", {
          className: j.timeSelectorRow,
          children: [(0, a.jsx)(C.SearchableSelect, {
            value: t.day,
            options: e,
            placeholder: U.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
            onChange: e => d(n, e)
          }), (0, a.jsx)(T.default, {
            value: t.time,
            onChange: e => c(n, e)
          }), (0, a.jsx)(C.Clickable, {
            onClick: () => f(n),
            className: j.clickable,
            children: (0, a.jsx)(N.default, {
              className: j.removeIcon
            })
          })]
        }, t.id)), t.length < 3 && (0, a.jsxs)(C.Clickable, {
          onClick: E,
          className: i()(j.timeSelectorRow, j.clickable),
          children: [(0, a.jsx)(L.default, {
            className: j.plusIcon
          }), (0, a.jsx)(C.Text, {
            variant: "text-sm/medium",
            children: U.default.Messages.CLAN_SETUP_PRIMETIME_ADD
          })]
        })]
      })]
    })]
  })
}

function z() {
  let e = (0, C.useToken)(C.tokens.colors.WHITE),
    [t, n, l] = (0, x.useClanDiscoveryUIStore)(e => [e.selectedPlaystyle, e.setSelectedPlaystyle, e.setMode], u.default),
    r = s.useMemo(() => Object.values((0, b.getPlaystyleOptions)()), []),
    o = s.useCallback(() => {
      l(x.ClanDiscoveryMode.DISCOVERY)
    }, [l]);
  return (0, a.jsxs)("div", {
    className: j.playstyleSelector,
    children: [(0, a.jsx)("div", {
      className: j.playstyleSelectorSaveContainer,
      children: (0, a.jsx)(C.Button, {
        onClick: o,
        look: C.ButtonLooks.OUTLINED,
        color: C.ButtonColors.PRIMARY,
        children: U.default.Messages.SAVE
      })
    }), (0, a.jsxs)("div", {
      className: j.playstyleSelectorContent,
      children: [(0, a.jsxs)("div", {
        className: j.playstyleHeader,
        children: [(0, a.jsx)(C.Heading, {
          variant: "heading-xxl/normal",
          color: "header-primary",
          children: U.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
        }), (0, a.jsx)(C.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: U.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
        })]
      }), (0, a.jsx)("div", {
        className: j.playstyles,
        children: r.map(s => (0, a.jsxs)(C.Clickable, {
          className: i()(j.playstyleOption, {
            [j.selectedPlaystyle]: s.type === t.id
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
          }), s.type === t.id && (0, a.jsx)(A.default, {
            backgroundColor: e.hex(),
            className: j.checkmark
          })]
        }, s.type))
      })]
    })]
  })
}
t.default = function() {
  let [e, t, n] = (0, x.useClanDiscoveryUIStore)(e => [e.mode, e.game, (0, x.buildSearchCriteriaFromUIState)(e)], u.default), l = (0, m.useStateFromStores)([y.default], () => y.default.hasLoadedStaticClanDiscovery(t)), i = (0, r.useTransition)([e], {
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
    !l && (0, M.loadStaticClanDiscovery)(t)
  }, [t, l]), s.useEffect(() => {
    l && (0, M.searchClanDiscovery)(t, n)
  }, [t, n, l]), (0, a.jsxs)("main", {
    className: j.container,
    children: [(0, a.jsx)(V, {}), (0, a.jsx)("div", {
      className: j.content,
      children: (0, a.jsx)(Y, {})
    }), i((e, t) => {
      switch (t) {
        case x.ClanDiscoveryMode.PLAYSTYLE:
          return (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(z, {})
          });
        case x.ClanDiscoveryMode.PRIMETIME:
          return (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(K, {})
          });
        case x.ClanDiscoveryMode.TRAITS:
          return (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(W, {})
          });
        default:
          return null
      }
    })]
  })
}