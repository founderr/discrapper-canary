"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("348327"),
  o = a.n(r),
  u = a("143927"),
  d = a("828065"),
  c = a("149020"),
  f = a("509633"),
  E = a("670900"),
  h = a("738232"),
  _ = a("376644"),
  C = a("481060"),
  m = a("442837"),
  S = a("92373"),
  I = a("10473"),
  p = a("207796"),
  T = a("308083"),
  g = a("689938"),
  A = a("60427");

function N() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.selectedGames, o()),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    a = s.useCallback(() => {
      t(p.ClanDiscoveryMode.GAMES)
    }, [t]),
    l = e.map(e => e.name).join(", "),
    r = (0, n.jsx)("div", {
      className: A.gamesTooltip,
      children: e.map(e => (0, n.jsx)(S.default, {
        applicationId: e.applicationId,
        name: e.name
      }, e.applicationId))
    });
  return (0, n.jsx)(C.Tooltip, {
    text: r,
    position: "bottom",
    "aria-label": l,
    tooltipClassName: i()(A.filterTooltip, A.filterTooltipAutoWidth),
    tooltipContentClassName: A.filterTooltipContent,
    children: t => (0, n.jsxs)(C.Button, {
      ...t,
      className: A.filterPill,
      innerClassName: A.filterPillContents,
      look: C.ButtonLooks.OUTLINED,
      color: C.ButtonColors.CUSTOM,
      onClick: a,
      children: [(0, n.jsx)(c.GameControllerIcon, {
        className: A.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(C.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: g.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
          count: e.length
        })
      })]
    })
  })
}

function v() {
  let e = s.useMemo(T.getPlaystyleOptions, []),
    t = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, u.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, u.default),
    l = (0, p.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    i = e[t],
    r = s.useCallback(() => {
      l(p.ClanDiscoveryMode.PLAYSTYLE)
    }, [l]),
    o = null == i ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(C.Heading, {
        variant: "heading-xxl/medium",
        children: i.emoji
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(C.Heading, {
          variant: "heading-md/medium",
          children: i.title
        }), (0, n.jsx)(C.Text, {
          variant: "text-xs/normal",
          children: i.subtitle
        })]
      })]
    });
  return (0, n.jsx)(C.Tooltip, {
    text: o,
    position: "bottom",
    "aria-label": a,
    tooltipClassName: A.filterTooltip,
    tooltipContentClassName: A.filterTooltipContent,
    children: e => (0, n.jsxs)(C.Button, {
      ...e,
      className: A.filterPill,
      innerClassName: A.filterPillContents,
      look: C.ButtonLooks.OUTLINED,
      color: C.ButtonColors.CUSTOM,
      onClick: r,
      children: [(0, n.jsx)(h.ReactionIcon, {
        className: A.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(C.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: a
      })]
    })
  })
}

function R() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.selectedTraits, u.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    a = s.useCallback(() => {
      t(p.ClanDiscoveryMode.TRAITS)
    }, [t]);
  return null == e ? null : (0, n.jsxs)(C.Button, {
    className: A.filterPill,
    innerClassName: A.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: a,
    children: [(0, n.jsx)(_.TagIcon, {
      className: A.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.size, " Traits")
    })]
  })
}

function O() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.setMode, u.default),
    t = s.useCallback(() => {
      e(p.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, n.jsxs)(C.Button, {
    className: A.filterPill,
    innerClassName: A.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, n.jsx)(d.ClockIcon, {
      className: A.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: g.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function L() {
  let e = (0, m.useStateFromStoresArray)([I.default], () => I.default.getFavoriteClans(), []);
  return (0, n.jsxs)(C.Button, {
    className: A.filterPillSmall,
    innerClassName: A.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, n.jsx)(f.HeartIcon, {
      className: A.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(C.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function M() {
  return (0, n.jsx)(C.Button, {
    className: A.filterPillSmall,
    innerClassName: A.filterPillContents,
    look: C.ButtonLooks.OUTLINED,
    color: C.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, n.jsx)(E.MagnifyingGlassIcon, {
      className: A.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, n.jsxs)("div", {
    className: A.toolbar,
    children: [(0, n.jsxs)("div", {
      className: A.preferences,
      children: [(0, n.jsx)(N, {}), (0, n.jsx)(v, {}), (0, n.jsx)(R, {}), (0, n.jsx)(O, {})]
    }), (0, n.jsxs)("div", {
      className: A.actions,
      children: [(0, n.jsx)(L, {}), (0, n.jsx)(M, {})]
    })]
  })
}