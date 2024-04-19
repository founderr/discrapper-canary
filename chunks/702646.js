"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("828065"),
  u = n("149020"),
  d = n("509633"),
  c = n("670900"),
  f = n("738232"),
  E = n("376644"),
  h = n("481060"),
  _ = n("442837"),
  C = n("45680"),
  m = n("92373"),
  S = n("10473"),
  I = n("207796"),
  p = n("308083"),
  T = n("689938"),
  g = n("60427");

function A() {
  var e;
  let t = (0, I.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = (0, I.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      n(I.ClanDiscoveryMode.GAMES)
    }, [n]),
    o = null !== (e = (0, C.useGameNamesString)(t)) && void 0 !== e ? e : "",
    d = (0, a.jsx)("div", {
      className: g.gamesTooltip,
      children: t.map(e => (0, a.jsx)(m.default, {
        applicationId: e
      }, e))
    });
  return (0, a.jsx)(h.Tooltip, {
    text: d,
    position: "bottom",
    "aria-label": o,
    tooltipClassName: i()(g.filterTooltip, g.filterTooltipAutoWidth),
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, a.jsxs)(h.Button, {
      ...e,
      className: g.filterPill,
      innerClassName: g.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: l,
      children: [(0, a.jsx)(u.GameControllerIcon, {
        className: g.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(h.Text, {
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
  let e = s.useMemo(p.getPlaystyleOptions, []),
    t = (0, I.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, r.default),
    n = (0, I.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, r.default),
    l = (0, I.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = e[t],
    o = s.useCallback(() => {
      l(I.ClanDiscoveryMode.PLAYSTYLE)
    }, [l]),
    u = null == i ? null : (0, a.jsxs)(a.Fragment, {
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
    });
  return (0, a.jsx)(h.Tooltip, {
    text: u,
    position: "bottom",
    "aria-label": n,
    tooltipClassName: g.filterTooltip,
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, a.jsxs)(h.Button, {
      ...e,
      className: g.filterPill,
      innerClassName: g.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, a.jsx)(f.ReactionIcon, {
        className: g.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: n
      })]
    })
  })
}

function v() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, I.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = s.useCallback(() => {
      t(I.ClanDiscoveryMode.TRAITS)
    }, [t]);
  return null == e ? null : (0, a.jsxs)(h.Button, {
    className: g.filterPill,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: n,
    children: [(0, a.jsx)(E.TagIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function R() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    t = s.useCallback(() => {
      e(I.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, a.jsxs)(h.Button, {
    className: g.filterPill,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, a.jsx)(o.ClockIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: T.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function O() {
  let e = (0, _.useStateFromStoresArray)([S.default], () => S.default.getFavoriteClans(), []);
  return (0, a.jsxs)(h.Button, {
    className: g.filterPillSmall,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(d.HeartIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function L() {
  return (0, a.jsx)(h.Button, {
    className: g.filterPillSmall,
    innerClassName: g.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(c.MagnifyingGlassIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: g.toolbar,
    children: [(0, a.jsxs)("div", {
      className: g.preferences,
      children: [(0, a.jsx)(A, {}), (0, a.jsx)(N, {}), (0, a.jsx)(v, {}), (0, a.jsx)(R, {})]
    }), (0, a.jsxs)("div", {
      className: g.actions,
      children: [(0, a.jsx)(O, {}), (0, a.jsx)(L, {})]
    })]
  })
}