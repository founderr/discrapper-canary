"use strict";
a.r(t), a.d(t, {
  GameSelector: function() {
    return L
  },
  PlayStyleSelector: function() {
    return v
  },
  TraitSelector: function() {
    return N
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("981500"),
  u = a("481060"),
  d = a("442837"),
  c = a("92373"),
  f = a("359380"),
  E = a("898543"),
  h = a("32966"),
  _ = a("314897"),
  C = a("77498"),
  m = a("441674"),
  S = a("90062"),
  I = a("964309"),
  p = a("207796"),
  T = a("308083"),
  g = a("689938"),
  A = a("896328");

function N() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setSelectedTraits, r.default),
    a = s.useMemo(() => g.default.getAvailableLocales().map(e => ({
      value: e.value,
      label: e.name
    })), []),
    l = new Set(e),
    [i, d] = s.useMemo(() => [e.filter(e => T.LANGUAGES_SET.has(e)), e.filter(e => !T.LANGUAGES_SET.has(e))], [e]),
    c = s.useCallback(e => {
      let {
        interests: a
      } = e;
      null != a && t(Array.from(a))
    }, [t]),
    h = s.useCallback(e => {
      c({
        interests: new Set([...d, ...e])
      })
    }, [c, d]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: A.traitHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: g.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: g.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: A.traits,
      children: [(0, n.jsx)("div", {
        className: A.traitCategory,
        children: (0, n.jsx)(f.TraitSelectionCategory, {
          title: g.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: E.default,
          traits: T.VALORANT_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, n.jsx)("div", {
        className: A.traitCategory,
        children: (0, n.jsx)(f.TraitSelectionCategory, {
          title: g.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: S.default,
          traits: T.AGE_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, n.jsx)("div", {
        className: A.traitCategory,
        children: (0, n.jsx)(f.TraitSelectionCategory, {
          title: g.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: I.default,
          traits: T.IDENTITY_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, n.jsxs)("div", {
        className: A.traitCategory,
        children: [(0, n.jsxs)("div", {
          className: A.languagesTitle,
          children: [(0, n.jsx)(o.LanguageIcon, {
            className: A.languagesIcon
          }), (0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: g.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          })]
        }), (0, n.jsx)("div", {
          className: A.languagesSelect,
          children: (0, n.jsx)(u.SearchableSelect, {
            options: a,
            value: i,
            onChange: h,
            placeholder: g.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      })]
    })]
  })
}

function v() {
  let e = (0, u.useToken)(u.tokens.colors.WHITE),
    t = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, r.default),
    l = s.useMemo(() => Object.values((0, T.getPlaystyleOptions)()), []);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: A.playstyleHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
      })]
    }), (0, n.jsx)("div", {
      className: A.playstyles,
      children: l.map(s => (0, n.jsxs)(u.Clickable, {
        className: i()(A.playstyleOption, {
          [A.selectedPlaystyle]: s.type === t
        }),
        onClick: () => a(s.type),
        children: [(0, n.jsx)(u.Heading, {
          variant: "heading-xxl/medium",
          children: s.emoji
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: s.title
          }), (0, n.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: s.subtitle
          })]
        }), s.type === t && (0, n.jsx)(m.default, {
          backgroundColor: e.hex(),
          className: A.checkmark
        })]
      }, s.type))
    })]
  })
}

function R(e, t) {
  return (e !== p.ClanDiscoveryGame.VALORANT || t !== T.VALORANT_ID) && (e !== p.ClanDiscoveryGame.GENSHIN || t !== T.GENSHIN_ID) && !0
}

function L() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.setSelectedGames, r.default),
    l = (0, d.useStateFromStoresArray)([C.default], () => C.default.games, []),
    i = s.useMemo(() => l.map(e => ({
      value: e.id,
      label: e.name
    })), [l]),
    o = (0, d.useStateFromStores)([_.default], () => _.default.getId()),
    {
      recentGames: f
    } = (0, h.useUserRecentGames)(o),
    E = (0, d.useStateFromStoresArray)([C.default], () => null != f ? f.map(e => {
      let t = C.default.getGameById(e.applicationId);
      return {
        ...e,
        name: null == t ? void 0 : t.name
      }
    }) : []),
    m = s.useCallback(e => {
      if (3 !== t.length) null != C.default.getGameById(e) && a([...t, e])
    }, [t, a]),
    S = s.useCallback(n => {
      if (!!R(e, n)) a(t.filter(e => e !== n))
    }, [e, t, a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: A.gameHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: g.default.Messages.CLAN_DISCOVERY_GAME_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: g.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: A.games,
      children: [(0, n.jsx)("div", {
        className: A.gamesInput,
        children: (0, n.jsx)(u.SearchableSelect, {
          options: i,
          value: "",
          placeholder: g.default.Messages.CLAN_DISCOVERY_GAMES_SEARCH_PLACEHOLDER,
          onChange: m,
          isDisabled: 3 === t.length
        })
      }), (0, n.jsx)("div", {
        className: A.selectedGames,
        children: t.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: g.default.Messages.CLAN_DISCOVERY_GAMES_SELECTED
          }), (0, n.jsx)("div", {
            className: A.selectedSection,
            children: t.map(t => (0, n.jsx)(c.default, {
              applicationId: t,
              onClick: S,
              imageContainerClassName: R(e, t) ? A.clickable : void 0,
              selected: !0
            }, t))
          })]
        })
      }), (0, n.jsx)("div", {
        className: A.recentGames,
        children: E.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: g.default.Messages.RECENT_GAMES
          }), (0, n.jsx)("div", {
            className: A.selectedSection,
            children: E.map(e => (0, n.jsx)(c.default, {
              applicationId: e.applicationId,
              imageContainerClassName: A.clickable,
              onClick: m
            }, e.applicationId))
          })]
        })
      })]
    })]
  })
}