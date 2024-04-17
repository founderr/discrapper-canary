"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("828065"),
  u = a("149020"),
  d = a("509633"),
  c = a("670900"),
  f = a("738232"),
  E = a("376644"),
  h = a("481060"),
  _ = a("442837"),
  C = a("45680"),
  m = a("92373"),
  S = a("10473"),
  p = a("207796"),
  I = a("308083"),
  T = a("689938"),
  g = a("60427");

function A() {
  var e;
  let t = (0, p.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      a(p.ClanDiscoveryMode.GAMES)
    }, [a]),
    o = null !== (e = (0, C.useGameNamesString)(t)) && void 0 !== e ? e : "",
    d = (0, n.jsx)("div", {
      className: g.gamesTooltip,
      children: t.map(e => (0, n.jsx)(m.default, {
        applicationId: e
      }, e))
    });
  return (0, n.jsx)(h.Tooltip, {
    text: d,
    position: "bottom",
    "aria-label": o,
    tooltipClassName: i()(g.filterTooltip, g.filterTooltipAutoWidth),
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, n.jsxs)(h.Button, {
      ...e,
      className: g.filterPill,
      innerClassName: g.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: l,
      children: [(0, n.jsx)(u.GameControllerIcon, {
        className: g.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: T.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
          count: t.length
        })
      })]
    })
  })
}

function N() {
  let e = s.useMemo(I.getPlaystyleOptions, []),
    t = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, r.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, r.default),
    l = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = e[t],
    o = s.useCallback(() => {
      l(p.ClanDiscoveryMode.PLAYSTYLE)
    }, [l]),
    u = null == i ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(h.Heading, {
        variant: "heading-xxl/medium",
        children: i.emoji
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(h.Heading, {
          variant: "heading-md/medium",
          children: i.title
        }), (0, n.jsx)(h.Text, {
          variant: "text-xs/normal",
          children: i.subtitle
        })]
      })]
    });
  return (0, n.jsx)(h.Tooltip, {
    text: u,
    position: "bottom",
    "aria-label": a,
    tooltipClassName: g.filterTooltip,
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, n.jsxs)(h.Button, {
      ...e,
      className: g.filterPill,
      innerClassName: g.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, n.jsx)(f.ReactionIcon, {
        className: g.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: a
      })]
    })
  })
}

function v() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    a = s.useCallback(() => {
      t(p.ClanDiscoveryMode.TRAITS)
    }, [t]);
  return null == e ? null : (0, n.jsxs)(h.Button, {
    className: g.filterPill,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: a,
    children: [(0, n.jsx)(E.TagIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function R() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    t = s.useCallback(() => {
      e(p.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, n.jsxs)(h.Button, {
    className: g.filterPill,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, n.jsx)(o.ClockIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: T.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function O() {
  let e = (0, _.useStateFromStoresArray)([S.default], () => S.default.getFavoriteClans(), []);
  return (0, n.jsxs)(h.Button, {
    className: g.filterPillSmall,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, n.jsx)(d.HeartIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function L() {
  return (0, n.jsx)(h.Button, {
    className: g.filterPillSmall,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, n.jsx)(c.MagnifyingGlassIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, n.jsxs)("div", {
    className: g.toolbar,
    children: [(0, n.jsxs)("div", {
      className: g.preferences,
      children: [(0, n.jsx)(A, {}), (0, n.jsx)(N, {}), (0, n.jsx)(v, {}), (0, n.jsx)(R, {})]
    }), (0, n.jsxs)("div", {
      className: g.actions,
      children: [(0, n.jsx)(O, {}), (0, n.jsx)(L, {})]
    })]
  })
}