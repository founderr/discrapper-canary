"use strict";
a.r(t), a.d(t, {
  GameSelector: function() {
    return U
  },
  PlayStyleSelector: function() {
    return D
  },
  PrimetimeSelector: function() {
    return y
  },
  TraitSelector: function() {
    return x
  }
}), a("47120"), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("153832"),
  o = a("143927"),
  u = a("481060"),
  d = a("442837"),
  c = a("924801"),
  f = a("92373"),
  E = a("359380"),
  h = a("571245"),
  _ = a("824959"),
  C = a("898543"),
  m = a("32966"),
  S = a("314897"),
  p = a("77498"),
  I = a("441674"),
  T = a("465670"),
  g = a("950463"),
  A = a("90062"),
  N = a("964309"),
  v = a("729285"),
  R = a("480222"),
  O = a("207796"),
  L = a("308083"),
  M = a("689938"),
  P = a("896328");

function x() {
  let e = (0, O.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default),
    t = (0, O.useClanDiscoveryUIStore)(e => e.setSelectedTraits, o.default),
    a = s.useMemo(() => M.default.getAvailableLocales().map(e => ({
      value: e.value,
      label: e.name
    })), []),
    [l, i] = s.useMemo(() => [Array.from(e).filter(e => L.LANGUAGES_SET.has(e)), Array.from(e).filter(e => !L.LANGUAGES_SET.has(e))], [e]),
    r = s.useCallback(e => {
      let {
        interests: a
      } = e;
      null != a && t(a)
    }, [t]),
    d = s.useCallback(e => {
      r({
        interests: new Set([...i, ...e])
      })
    }, [r, i]);
  return (0, n.jsxs)(R.default, {
    children: [(0, n.jsxs)("div", {
      className: P.traitHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: M.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: M.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: P.traits,
      children: [(0, n.jsx)("div", {
        className: P.traitCategory,
        children: (0, n.jsx)(E.TraitSelectionCategory, {
          title: M.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_VALORANT,
          icon: C.default,
          traits: L.VALORANT_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, n.jsx)("div", {
        className: P.traitCategory,
        children: (0, n.jsx)(E.TraitSelectionCategory, {
          title: M.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
          icon: A.default,
          traits: L.AGE_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, n.jsx)("div", {
        className: P.traitCategory,
        children: (0, n.jsx)(E.TraitSelectionCategory, {
          title: M.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
          icon: N.default,
          traits: L.IDENTITY_TRAITS,
          interests: e,
          handleUpdate: r
        })
      }), (0, n.jsxs)("div", {
        className: P.traitCategory,
        children: [(0, n.jsxs)("div", {
          className: P.languagesTitle,
          children: [(0, n.jsx)(_.default, {
            className: P.languagesIcon
          }), (0, n.jsx)(u.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: M.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE
          })]
        }), (0, n.jsx)("div", {
          className: P.languagesSelect,
          children: (0, n.jsx)(u.SearchableSelect, {
            options: a,
            value: l,
            onChange: d,
            placeholder: M.default.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
            multi: !0
          })
        })]
      }), (0, n.jsx)("div", {
        className: P.traitCategory,
        children: (0, n.jsx)(E.TraitSelectionCategory, {
          title: M.default.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LOCALE,
          icon: g.default,
          traits: L.LOCALE_TRAITS,
          interests: e,
          handleUpdate: r
        })
      })]
    })]
  })
}

function y() {
  let e = s.useMemo(() => (0, c.getDayOptions)(), []),
    t = (0, O.useClanDiscoveryUIStore)(e => e.selectedPrimetimes, o.default),
    a = (0, O.useClanDiscoveryUIStore)(e => e.setSelectedPrimetime, o.default),
    l = s.useCallback((e, n) => {
      let s = [...t];
      s[e].day = n, a(s)
    }, [t, a]),
    d = s.useCallback((e, n) => {
      let s = [...t];
      s[e].time = n, a(s)
    }, [t, a]),
    f = s.useCallback(e => {
      let n = [...t];
      n.splice(e, 1), a(n)
    }, [t, a]),
    E = s.useCallback(() => {
      if (t.length >= 3) return;
      let e = [...t];
      e.push({
        id: (0, r.v4)(),
        day: void 0,
        time: "morning"
      }), a(e)
    }, [t, a]);
  return (0, n.jsxs)(R.default, {
    children: [(0, n.jsxs)("div", {
      className: P.playtimeHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/medium",
        children: M.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: M.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: P.playtimes,
      children: [t.map((t, a) => (0, n.jsxs)("div", {
        className: P.timeSelectorRow,
        children: [(0, n.jsx)(u.SearchableSelect, {
          value: t.day,
          options: e,
          placeholder: M.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => l(a, e)
        }), (0, n.jsx)(h.default, {
          value: t.time,
          onChange: e => d(a, e)
        }), (0, n.jsx)(u.Clickable, {
          onClick: () => f(a),
          className: P.clickable,
          children: (0, n.jsx)(T.default, {
            className: P.removeIcon
          })
        })]
      }, t.id)), t.length < 3 && (0, n.jsxs)(u.Clickable, {
        onClick: E,
        className: i()(P.timeSelectorRow, P.clickable),
        children: [(0, n.jsx)(v.default, {
          className: P.plusIcon
        }), (0, n.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: M.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}

function D() {
  let e = (0, u.useToken)(u.tokens.colors.WHITE),
    t = (0, O.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, o.default),
    a = (0, O.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, o.default),
    l = s.useMemo(() => Object.values((0, L.getPlaystyleOptions)()), []);
  return (0, n.jsxs)(R.default, {
    children: [(0, n.jsxs)("div", {
      className: P.playstyleHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: M.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: M.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE
      })]
    }), (0, n.jsx)("div", {
      className: P.playstyles,
      children: l.map(s => (0, n.jsxs)(u.Clickable, {
        className: i()(P.playstyleOption, {
          [P.selectedPlaystyle]: s.type === t
        }),
        onClick: () => a({
          id: s.type,
          name: s.title
        }),
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
        }), s.type === t && (0, n.jsx)(I.default, {
          backgroundColor: e.hex(),
          className: P.checkmark
        })]
      }, s.type))
    })]
  })
}

function b(e, t) {
  return (e !== O.ClanDiscoveryGame.VALORANT || t !== L.VALORANT_ID) && (e !== O.ClanDiscoveryGame.GENSHIN || t !== L.GENSHIN_ID) && !0
}

function U() {
  let e = (0, O.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, O.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
    a = (0, O.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    l = (0, d.useStateFromStoresArray)([p.default], () => p.default.games, []),
    i = s.useMemo(() => l.map(e => ({
      value: e.id,
      label: e.name
    })), [l]),
    r = (0, d.useStateFromStores)([S.default], () => S.default.getId()),
    {
      recentGames: c
    } = (0, m.useUserRecentGames)(r),
    E = (0, d.useStateFromStoresArray)([p.default], () => null != c ? c.map(e => {
      let t = p.default.getGameById(e.applicationId);
      return {
        ...e,
        name: null == t ? void 0 : t.name
      }
    }) : []),
    h = s.useCallback(e => {
      if (3 === t.length) return;
      let n = p.default.getGameById(e);
      null != n && a([...t, {
        applicationId: e,
        name: n.name
      }])
    }, [t, a]),
    _ = s.useCallback(n => {
      if (!!b(e, n)) a(t.filter(e => e.applicationId !== n))
    }, [e, t, a]);
  return (0, n.jsxs)(R.default, {
    children: [(0, n.jsxs)("div", {
      className: P.gameHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xxl/normal",
        color: "header-primary",
        children: M.default.Messages.CLAN_DISCOVERY_GAME_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: M.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE
      })]
    }), (0, n.jsxs)("div", {
      className: P.games,
      children: [(0, n.jsx)("div", {
        className: P.gamesInput,
        children: (0, n.jsx)(u.SearchableSelect, {
          options: i,
          value: "",
          placeholder: M.default.Messages.CLAN_DISCOVERY_GAMES_SEARCH_PLACEHOLDER,
          onChange: h,
          isDisabled: 3 === t.length
        })
      }), (0, n.jsx)("div", {
        className: P.selectedGames,
        children: t.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: M.default.Messages.CLAN_DISCOVERY_GAMES_SELECTED
          }), (0, n.jsx)("div", {
            className: P.selectedSection,
            children: t.map(t => (0, n.jsx)(f.default, {
              applicationId: t.applicationId,
              name: t.name,
              onClick: _,
              imageContainerClassName: b(e, t.applicationId) ? P.clickable : void 0,
              selected: !0
            }, t.applicationId))
          })]
        })
      }), (0, n.jsx)("div", {
        className: P.recentGames,
        children: E.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: M.default.Messages.RECENT_GAMES
          }), (0, n.jsx)("div", {
            className: P.selectedSection,
            children: E.map(e => (0, n.jsx)(f.default, {
              name: e.name,
              applicationId: e.applicationId,
              imageContainerClassName: P.clickable,
              onClick: h
            }, e.applicationId))
          })]
        })
      })]
    })]
  })
}