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
  C = a("92373"),
  m = a("10473"),
  S = a("207796"),
  I = a("308083"),
  p = a("689938"),
  T = a("60427");

function g() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    a = s.useCallback(() => {
      t(S.ClanDiscoveryMode.GAMES)
    }, [t]),
    l = e.map(e => e.name).join(", "),
    o = (0, n.jsx)("div", {
      className: T.gamesTooltip,
      children: e.map(e => (0, n.jsx)(C.default, {
        applicationId: e.applicationId,
        name: e.name
      }, e.applicationId))
    });
  return (0, n.jsx)(h.Tooltip, {
    text: o,
    position: "bottom",
    "aria-label": l,
    tooltipClassName: i()(T.filterTooltip, T.filterTooltipAutoWidth),
    tooltipContentClassName: T.filterTooltipContent,
    children: t => (0, n.jsxs)(h.Button, {
      ...t,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: a,
      children: [(0, n.jsx)(u.GameControllerIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: p.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
          count: e.length
        })
      })]
    })
  })
}

function A() {
  let e = s.useMemo(I.getPlaystyleOptions, []),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, r.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, r.default),
    l = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = e[t],
    o = s.useCallback(() => {
      l(S.ClanDiscoveryMode.PLAYSTYLE)
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
    tooltipClassName: T.filterTooltip,
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, n.jsxs)(h.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, n.jsx)(f.ReactionIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: a
      })]
    })
  })
}

function N() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    a = s.useCallback(() => {
      t(S.ClanDiscoveryMode.TRAITS)
    }, [t]);
  return null == e ? null : (0, n.jsxs)(h.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: a,
    children: [(0, n.jsx)(E.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function v() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    t = s.useCallback(() => {
      e(S.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, n.jsxs)(h.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, n.jsx)(o.ClockIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: p.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function R() {
  let e = (0, _.useStateFromStoresArray)([m.default], () => m.default.getFavoriteClans(), []);
  return (0, n.jsxs)(h.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, n.jsx)(d.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function O() {
  return (0, n.jsx)(h.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, n.jsx)(c.MagnifyingGlassIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, n.jsxs)("div", {
    className: T.toolbar,
    children: [(0, n.jsxs)("div", {
      className: T.preferences,
      children: [(0, n.jsx)(g, {}), (0, n.jsx)(A, {}), (0, n.jsx)(N, {}), (0, n.jsx)(v, {})]
    }), (0, n.jsxs)("div", {
      className: T.actions,
      children: [(0, n.jsx)(R, {}), (0, n.jsx)(O, {})]
    })]
  })
}