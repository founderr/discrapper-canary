"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("143927"),
  o = n("442837"),
  u = n("531057"),
  d = n("149020"),
  c = n("8386"),
  f = n("738232"),
  E = n("376644"),
  h = n("481060"),
  _ = n("963202"),
  C = n("105671"),
  m = n("92373"),
  S = n("430824"),
  p = n("207796"),
  I = n("308083"),
  g = n("689938"),
  T = n("683391");

function A(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: s,
    tooltip: i,
    onClick: r,
    isActive: o,
    autoWidth: d = !1
  } = e;
  return (0, a.jsx)(h.Tooltip, {
    text: i,
    position: "bottom",
    "aria-label": s,
    shouldShow: o,
    tooltipClassName: l()(T.filterTooltip, {
      [T.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, a.jsxs)(h.Button, {
      ...e,
      className: l()(T.filterPill, {
        [T.filterPillActive]: o
      }),
      innerClassName: T.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, a.jsxs)("div", {
        className: T.filterPillText,
        children: [(0, a.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, a.jsx)(u.ChevronSmallDownIcon, {
          className: T.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function N() {
  var e;
  let t = (0, p.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = s.useCallback(() => {
      n(p.ClanDiscoveryMode.GAMES)
    }, [n]),
    l = null !== (e = (0, C.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    o = t.slice(0, 2),
    u = t.length - 2,
    c = (0, a.jsxs)("div", {
      className: T.gamesTooltip,
      children: [o.map(e => (0, a.jsx)(m.default, {
        applicationId: e
      }, e)), u > 0 && (0, a.jsx)(m.default, {
        applicationId: t[2],
        remainingGame: u
      })]
    }),
    f = (0, a.jsx)(d.GameControllerIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(A, {
    icon: f,
    text: g.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: c,
    onClick: i,
    isActive: t.length > 0,
    ariaLabel: l,
    autoWidth: !0
  })
}

function v() {
  let e = s.useMemo(I.getPlaystyleOptions, []),
    t = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    n = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = null != t ? e[t] : null,
    l = null == i ? void 0 : i.title,
    o = s.useCallback(() => {
      n(p.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]);
  if (null == i || null == l) return null;
  let u = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.Heading, {
        variant: "heading-xxl/medium",
        children: i.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(h.Heading, {
          variant: "heading-md/medium",
          children: i.title
        }), (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          children: i.subtitle
        })]
      })]
    }),
    d = (0, a.jsx)(f.ReactionIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(A, {
    icon: d,
    text: l,
    tooltip: u,
    onClick: o,
    isActive: null != i,
    ariaLabel: l
  })
}

function R() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = s.useCallback(() => {
      t(p.ClanDiscoveryMode.TRAITS)
    }, [t]);
  if (null == e) return null;
  let i = (0, a.jsx)("div", {
      className: T.traitsTooltip,
      children: e.map(e => (0, a.jsx)("div", {
        className: T.trait,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    l = (0, a.jsx)(E.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(A, {
    icon: l,
    text: g.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: i,
    onClick: n,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}

function L() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    t = (0, o.useStateFromStoresArray)([S.default], () => Object.values(S.default.getGuilds()));
  return (0, _.useAnyClanPrepilotExperimentEnabled)(t, "clan_discovery_add_clan") ? (0, a.jsxs)(h.Clickable, {
    className: l()(T.buttonPill),
    onClick: () => e(p.ClanDiscoveryMode.ADMIN_UPSELL),
    children: [(0, a.jsx)(c.PlusSmallIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)("div", {
      className: T.filterPillText,
      children: (0, a.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: g.default.Messages.CLAN_DISCOVERY_ADD_CLAN
      })
    })]
  }) : null
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: T.toolbar,
    children: [(0, a.jsx)("div", {
      className: T.addClan,
      children: (0, a.jsx)(L, {})
    }), (0, a.jsxs)("div", {
      className: T.preferences,
      children: [(0, a.jsx)(N, {}), (0, a.jsx)(v, {}), (0, a.jsx)(R, {})]
    }), (0, a.jsx)("div", {
      className: T.actions
    })]
  })
}