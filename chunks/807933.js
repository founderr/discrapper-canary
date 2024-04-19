"use strict";
n.r(t), n.d(t, {
  GameSelector: function() {
    return L
  },
  PlayStyleSelector: function() {
    return R
  },
  TraitSelector: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("981500"),
  u = n("481060"),
  d = n("442837"),
  c = n("92373"),
  f = n("359380"),
  E = n("898543"),
  h = n("32966"),
  _ = n("314897"),
  C = n("77498"),
  m = n("441674"),
  S = n("90062"),
  I = n("964309"),
  p = n("480222"),
  T = n("207796"),
  g = n("308083"),
  A = n("689938"),
  N = n("896328");

function v() {
  let e = (0, T.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, T.useClanDiscoveryUIStore)(e => e.setSelectedTraits, r.default),
    n = s.useMemo(() => A.default.getAvailableLocales().map(e => ({
      value: e.value,
      label: e.name
    })), []),
    l = new Set(e),
    [i, d] = s.useMemo(() => [e.filter(e => g.LANGUAGES_SET.has(e)), e.filter(e => !g.LANGUAGES_SET.has(e))], [e]),
    c = s.useCallback(e => {
      let {
        interests: n
      } = e;
      null != n && t(Array.from(n))
    }, [t]),
    h = s.useCallback(e => {
      c({
        interests: new Set([...d, ...e])
      })
    }, [c, d]);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: N.traitHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: A.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
      })]
    }), (0, a.jsxs)("div", {
      className: N.traits,
      children: [(0, a.jsx)("div", {
        className: N.traitCategory,
        children: (0, a.jsx)(f.TraitSelectionCategory, {
          title: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: E.default,
          traits: g.VALORANT_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, a.jsx)("div", {
        className: N.traitCategory,
        children: (0, a.jsx)(f.TraitSelectionCategory, {
          title: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: S.default,
          traits: g.AGE_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, a.jsx)("div", {
        className: N.traitCategory,
        children: (0, a.jsx)(f.TraitSelectionCategory, {
          title: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: I.default,
          traits: g.IDENTITY_TRAITS,
          interests: l,
          handleUpdate: c
        })
      }), (0, a.jsxs)("div", {
        className: N.traitCategory,
        children: [(0, a.jsxs)("div", {
          className: N.languagesTitle,
          children: [(0, a.jsx)(o.LanguageIcon, {
            className: N.languagesIcon
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          })]
        }), (0, a.jsx)("div", {
          className: N.languagesSelect,
          children: (0, a.jsx)(u.SearchableSelect, {
            options: n,
            value: i,
            onChange: h,
            placeholder: A.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      })]
    })]
  })
}

function R() {
  let e = (0, u.useToken)(u.tokens.colors.WHITE),
    t = (0, T.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, r.default),
    n = (0, T.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, r.default),
    l = s.useMemo(() => Object.values((0, g.getPlaystyleOptions)()), []);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: N.playstyleHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: A.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: N.playstyles,
      children: l.map(s => (0, a.jsxs)(u.Clickable, {
        className: i()(N.playstyleOption, {
          [N.selectedPlaystyle]: s.type === t
        }),
        onClick: () => n({
          id: s.type,
          name: s.title
        }),
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-xxl/medium",
          children: s.emoji
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: s.title
          }), (0, a.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: s.subtitle
          })]
        }), s.type === t && (0, a.jsx)(m.default, {
          backgroundColor: e.hex(),
          className: N.checkmark
        })]
      }, s.type))
    })]
  })
}

function O(e, t) {
  return (e !== T.ClanDiscoveryGame.VALORANT || t !== g.VALORANT_ID) && (e !== T.ClanDiscoveryGame.GENSHIN || t !== g.GENSHIN_ID) && !0
}

function L() {
  let e = (0, T.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, T.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = (0, T.useClanDiscoveryUIStore)(e => e.setSelectedGames, r.default),
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
      if (3 !== t.length) null != C.default.getGameById(e) && n([...t, e])
    }, [t, n]),
    S = s.useCallback(a => {
      if (!!O(e, a)) n(t.filter(e => e !== a))
    }, [e, t, n]);
  return (0, a.jsxs)(p.default, {
    children: [(0, a.jsxs)("div", {
      className: N.gameHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: A.default.Messages.CLAN_DISCOVERY_GAME_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: A.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE
      })]
    }), (0, a.jsxs)("div", {
      className: N.games,
      children: [(0, a.jsx)("div", {
        className: N.gamesInput,
        children: (0, a.jsx)(u.SearchableSelect, {
          options: i,
          value: "",
          placeholder: A.default.Messages.CLAN_DISCOVERY_GAMES_SEARCH_PLACEHOLDER,
          onChange: m,
          isDisabled: 3 === t.length
        })
      }), (0, a.jsx)("div", {
        className: N.selectedGames,
        children: t.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: A.default.Messages.CLAN_DISCOVERY_GAMES_SELECTED
          }), (0, a.jsx)("div", {
            className: N.selectedSection,
            children: t.map(t => (0, a.jsx)(c.default, {
              applicationId: t,
              onClick: S,
              imageContainerClassName: O(e, t) ? N.clickable : void 0,
              selected: !0
            }, t))
          })]
        })
      }), (0, a.jsx)("div", {
        className: N.recentGames,
        children: E.length > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: A.default.Messages.RECENT_GAMES
          }), (0, a.jsx)("div", {
            className: N.selectedSection,
            children: E.map(e => (0, a.jsx)(c.default, {
              applicationId: e.applicationId,
              imageContainerClassName: N.clickable,
              onClick: m
            }, e.applicationId))
          })]
        })
      })]
    })]
  })
}