"use strict";
a.r(t), a.d(t, {
  GameSelector: function() {
    return j
  },
  PlayStyleSelector: function() {
    return b
  },
  PrimetimeSelector: function() {
    return D
  },
  TraitSelector: function() {
    return y
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("348327"),
  o = a.n(r),
  u = a("153832"),
  d = a("143927"),
  c = a("981500"),
  f = a("481060"),
  E = a("442837"),
  h = a("924801"),
  _ = a("92373"),
  C = a("359380"),
  m = a("571245"),
  S = a("898543"),
  p = a("32966"),
  I = a("314897"),
  T = a("77498"),
  g = a("441674"),
  A = a("465670"),
  N = a("90062"),
  v = a("964309"),
  R = a("729285"),
  O = a("480222"),
  L = a("207796"),
  M = a("308083"),
  P = a("689938"),
  x = a("896328");

function y() {
  let e = (0, L.useClanDiscoveryUIStore)(e => e.selectedTraits, d.default),
    t = (0, L.useClanDiscoveryUIStore)(e => e.setSelectedTraits, d.default),
    a = s.useMemo(() => P.default.getAvailableLocales().map(e => ({
      value: e.value,
      label: e.name
    })), []),
    l = new Set(e),
    [i, r] = s.useMemo(() => [e.filter(e => M.LANGUAGES_SET.has(e)), e.filter(e => !M.LANGUAGES_SET.has(e))], [e]),
    o = s.useCallback(e => {
      let {
        interests: a
      } = e;
      null != a && t(Array.from(a))
    }, [t]),
    u = s.useCallback(e => {
      o({
        interests: new Set([...r, ...e])
      })
    }, [o, r]);
  return (0, n.jsxs)(O.default, {
    children: [(0, n.jsxs)("div", {
      className: x.traitHeader,
      children: [(0, n.jsx)(f.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: P.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
      }), (0, n.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: P.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: x.traits,
      children: [(0, n.jsx)("div", {
        className: x.traitCategory,
        children: (0, n.jsx)(C.TraitSelectionCategory, {
          title: P.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: S.default,
          traits: M.VALORANT_TRAITS,
          interests: l,
          handleUpdate: o
        })
      }), (0, n.jsx)("div", {
        className: x.traitCategory,
        children: (0, n.jsx)(C.TraitSelectionCategory, {
          title: P.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: N.default,
          traits: M.AGE_TRAITS,
          interests: l,
          handleUpdate: o
        })
      }), (0, n.jsx)("div", {
        className: x.traitCategory,
        children: (0, n.jsx)(C.TraitSelectionCategory, {
          title: P.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: v.default,
          traits: M.IDENTITY_TRAITS,
          interests: l,
          handleUpdate: o
        })
      }), (0, n.jsxs)("div", {
        className: x.traitCategory,
        children: [(0, n.jsxs)("div", {
          className: x.languagesTitle,
          children: [(0, n.jsx)(c.LanguageIcon, {
            className: x.languagesIcon
          }), (0, n.jsx)(f.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: P.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          })]
        }), (0, n.jsx)("div", {
          className: x.languagesSelect,
          children: (0, n.jsx)(f.SearchableSelect, {
            options: a,
            value: i,
            onChange: u,
            placeholder: P.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      })]
    })]
  })
}

function D() {
  let e = s.useMemo(() => (0, h.getDayOptions)(), []),
    t = (0, L.useClanDiscoveryUIStore)(e => e.selectedPrimetimes, o()),
    a = (0, L.useClanDiscoveryUIStore)(e => e.setSelectedPrimetime, d.default),
    l = s.useCallback((e, n) => {
      let s = [...t];
      s[e] = {
        id: s[e].id,
        day: n,
        time: s[e].time
      }, a(s)
    }, [t, a]),
    r = s.useCallback((e, n) => {
      let s = [...t];
      s[e] = {
        id: s[e].id,
        day: s[e].day,
        time: n
      }, a(s)
    }, [t, a]),
    c = s.useCallback(e => {
      let n = [...t];
      n.splice(e, 1), a(n)
    }, [t, a]),
    E = s.useCallback(() => {
      if (t.length >= 3) return;
      let e = [...t];
      e.push({
        id: (0, u.v4)(),
        day: void 0,
        time: "morning"
      }), a(e)
    }, [t, a]);
  return (0, n.jsxs)(O.default, {
    children: [(0, n.jsxs)("div", {
      className: x.playtimeHeader,
      children: [(0, n.jsx)(f.Heading, {
        variant: "heading-xxl/medium",
        children: P.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
      }), (0, n.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: P.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: x.playtimes,
      children: [t.map((t, a) => (0, n.jsxs)("div", {
        className: x.timeSelectorRow,
        children: [(0, n.jsx)(f.SearchableSelect, {
          value: t.day,
          options: e,
          placeholder: P.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => l(a, e)
        }), (0, n.jsx)(m.default, {
          value: t.time,
          onChange: e => r(a, e)
        }), (0, n.jsx)(f.Clickable, {
          onClick: () => c(a),
          className: x.clickable,
          children: (0, n.jsx)(A.default, {
            className: x.removeIcon
          })
        })]
      }, t.id)), t.length < 3 && (0, n.jsxs)(f.Clickable, {
        onClick: E,
        className: i()(x.timeSelectorRow, x.clickable),
        children: [(0, n.jsx)(R.default, {
          className: x.plusIcon
        }), (0, n.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: P.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}

function b() {
  let e = (0, f.useToken)(f.tokens.colors.WHITE),
    t = (0, L.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, d.default),
    a = (0, L.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, d.default),
    l = s.useMemo(() => Object.values((0, M.getPlaystyleOptions)()), []);
  return (0, n.jsxs)(O.default, {
    children: [(0, n.jsxs)("div", {
      className: x.playstyleHeader,
      children: [(0, n.jsx)(f.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: P.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
      }), (0, n.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: P.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
      })]
    }), (0, n.jsx)("div", {
      className: x.playstyles,
      children: l.map(s => (0, n.jsxs)(f.Clickable, {
        className: i()(x.playstyleOption, {
          [x.selectedPlaystyle]: s.type === t
        }),
        onClick: () => a({
          id: s.type,
          name: s.title
        }),
        children: [(0, n.jsx)(f.Heading, {
          variant: "heading-xxl/medium",
          children: s.emoji
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(f.Heading, {
            variant: "heading-md/medium",
            children: s.title
          }), (0, n.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: s.subtitle
          })]
        }), s.type === t && (0, n.jsx)(g.default, {
          backgroundColor: e.hex(),
          className: x.checkmark
        })]
      }, s.type))
    })]
  })
}

function U(e, t) {
  return (e !== L.ClanDiscoveryGame.VALORANT || t !== M.VALORANT_ID) && (e !== L.ClanDiscoveryGame.GENSHIN || t !== M.GENSHIN_ID) && !0
}

function j() {
  let e = (0, L.useClanDiscoveryUIStore)(e => e.game, d.default),
    t = (0, L.useClanDiscoveryUIStore)(e => e.selectedGames, d.default),
    a = (0, L.useClanDiscoveryUIStore)(e => e.setSelectedGames, d.default),
    l = (0, E.useStateFromStoresArray)([T.default], () => T.default.games, []),
    i = s.useMemo(() => l.map(e => ({
      value: e.id,
      label: e.name
    })), [l]),
    r = (0, E.useStateFromStores)([I.default], () => I.default.getId()),
    {
      recentGames: o
    } = (0, p.useUserRecentGames)(r),
    u = (0, E.useStateFromStoresArray)([T.default], () => null != o ? o.map(e => {
      let t = T.default.getGameById(e.applicationId);
      return {
        ...e,
        name: null == t ? void 0 : t.name
      }
    }) : []),
    c = s.useCallback(e => {
      if (3 === t.length) return;
      let n = T.default.getGameById(e);
      null != n && a([...t, {
        applicationId: e,
        name: n.name
      }])
    }, [t, a]),
    h = s.useCallback(n => {
      if (!!U(e, n)) a(t.filter(e => e.applicationId !== n))
    }, [e, t, a]);
  return (0, n.jsxs)(O.default, {
    children: [(0, n.jsxs)("div", {
      className: x.gameHeader,
      children: [(0, n.jsx)(f.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: P.default.Messages.CLAN_DISCOVERY_GAME_TITLE
      }), (0, n.jsx)(f.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: P.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: x.games,
      children: [(0, n.jsx)("div", {
        className: x.gamesInput,
        children: (0, n.jsx)(f.SearchableSelect, {
          options: i,
          value: "",
          placeholder: P.default.Messages.CLAN_DISCOVERY_GAMES_SEARCH_PLACEHOLDER,
          onChange: c,
          isDisabled: 3 === t.length
        })
      }), (0, n.jsx)("div", {
        className: x.selectedGames,
        children: t.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: P.default.Messages.CLAN_DISCOVERY_GAMES_SELECTED
          }), (0, n.jsx)("div", {
            className: x.selectedSection,
            children: t.map(t => (0, n.jsx)(_.default, {
              applicationId: t.applicationId,
              name: t.name,
              onClick: h,
              imageContainerClassName: U(e, t.applicationId) ? x.clickable : void 0,
              selected: !0
            }, t.applicationId))
          })]
        })
      }), (0, n.jsx)("div", {
        className: x.recentGames,
        children: u.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: P.default.Messages.RECENT_GAMES
          }), (0, n.jsx)("div", {
            className: x.selectedSection,
            children: u.map(e => (0, n.jsx)(_.default, {
              name: e.name,
              applicationId: e.applicationId,
              imageContainerClassName: x.clickable,
              onClick: c
            }, e.applicationId))
          })]
        })
      })]
    })]
  })
}