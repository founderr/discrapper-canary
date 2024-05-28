"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("531057"),
  u = n("149020"),
  d = n("8386"),
  c = n("738232"),
  f = n("376644"),
  E = n("481060"),
  C = n("963202"),
  h = n("105671"),
  _ = n("92373"),
  S = n("207796"),
  m = n("308083"),
  p = n("689938"),
  I = n("683391");

function g(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: l,
    tooltip: r,
    onClick: u,
    isActive: d,
    autoWidth: c = !1
  } = e, [f, C] = s.useState(!1), [h, _] = s.useState(!1), m = S.useClanDiscoveryUIStore.getState().mode, p = m === S.ClanDiscoveryMode.GAMES || m === S.ClanDiscoveryMode.PLAYSTYLE || m === S.ClanDiscoveryMode.TRAITS;
  s.useEffect(() => {
    p && (C(!1), _(!1))
  }, [p]);
  let g = d && (h || f),
    T = s.useMemo(() => (0, a.jsxs)(E.Clickable, {
      className: I.tooltipContentWrapper,
      onClick: u,
      onMouseEnter: () => {
        !p && C(!0)
      },
      onMouseLeave: () => {
        C(!1)
      },
      children: [(0, a.jsx)("div", {
        className: I.tooltipHoverBridge
      }), r]
    }), [r, u, p]);
  return (0, a.jsx)(E.Tooltip, {
    text: T,
    position: "bottom",
    "aria-label": l,
    shouldShow: g,
    forceOpen: g,
    allowOverflow: !0,
    disableTooltipPointerEvents: !1,
    tooltipClassName: i()(I.filterTooltip, {
      [I.filterTooltipAutoWidth]: c
    }),
    tooltipContentClassName: I.filterTooltipContent,
    children: e => (0, a.jsxs)(E.Button, {
      ...e,
      className: i()(I.filterPill, {
        [I.filterPillActive]: d
      }),
      innerClassName: I.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: u,
      onMouseEnter: () => {
        _(!0)
      },
      onMouseLeave: () => {
        _(!1)
      },
      children: [t, (0, a.jsxs)("div", {
        className: I.filterPillText,
        children: [(0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, a.jsx)(o.ChevronSmallDownIcon, {
          className: I.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function T() {
  var e;
  let t = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = s.useCallback(() => {
      (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.GAMES)
    }, []),
    l = null !== (e = (0, h.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    i = t.slice(0, 3),
    o = t.length - 3,
    d = (0, a.jsx)("div", {
      className: I.gamesTooltip,
      children: i.map((e, t) => (0, a.jsx)(_.default, {
        applicationId: e,
        otherGamesCount: 2 === t && o > 0 ? o + 1 : void 0
      }, e))
    }),
    c = (0, a.jsx)(u.GameControllerIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(g, {
    icon: c,
    text: p.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: d,
    onClick: n,
    isActive: t.length > 0,
    ariaLabel: l,
    autoWidth: !0
  })
}

function A() {
  let e = s.useMemo(m.getPlaystyleOptions, []),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    n = null != t ? e[t] : null,
    l = null == n ? void 0 : n.title,
    i = s.useCallback(() => {
      (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.PLAYSTYLE)
    }, []);
  if (null == n || null == l) return null;
  let o = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xxl/medium",
        children: n.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: n.title
        }), (0, a.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: n.subtitle
        })]
      })]
    }),
    u = (0, a.jsx)(c.ReactionIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(g, {
    icon: u,
    text: l,
    tooltip: o,
    onClick: i,
    isActive: null != n,
    ariaLabel: l
  })
}

function N() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = s.useCallback(() => {
      (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.TRAITS)
    }, []);
  if (null == e) return null;
  let n = (0, a.jsx)("div", {
      className: I.traitsTooltip,
      children: e.map(e => (0, a.jsx)("div", {
        className: I.trait,
        children: (0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    l = (0, a.jsx)(f.TagIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(g, {
    icon: l,
    text: p.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: n,
    onClick: t,
    isActive: e.length > 0,
    ariaLabel: e.join(", "),
    autoWidth: !0
  })
}

function v() {
  let {
    enableClanCreation: e
  } = (0, C.useClanPrepilotExperimentForAllGuilds)({
    location: "clan_discovery_add_clan",
    includeConverted: !1
  });
  return e ? (0, a.jsxs)(E.Clickable, {
    className: i()(I.buttonPill),
    onClick: () => (0, S.setClanDiscoveryMode)(S.ClanDiscoveryMode.ADMIN_UPSELL),
    children: [(0, a.jsx)(d.PlusSmallIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)("div", {
      className: I.filterPillText,
      children: (0, a.jsx)(E.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: p.default.Messages.CLAN_DISCOVERY_ADD_CLAN
      })
    })]
  }) : null
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: I.toolbar,
    children: [(0, a.jsx)("div", {
      className: I.addClan,
      children: (0, a.jsx)(v, {})
    }), (0, a.jsxs)("div", {
      className: I.preferences,
      children: [(0, a.jsx)(T, {}), (0, a.jsx)(A, {}), (0, a.jsx)(N, {})]
    }), (0, a.jsx)("div", {
      className: I.actions
    })]
  })
}