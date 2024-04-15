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
  C = n("92373"),
  m = n("10473"),
  S = n("207796"),
  I = n("308083"),
  p = n("689938"),
  T = n("60427");

function g() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = s.useCallback(() => {
      t(S.ClanDiscoveryMode.GAMES)
    }, [t]),
    l = e.map(e => e.name).join(", "),
    o = (0, a.jsx)("div", {
      className: T.gamesTooltip,
      children: e.map(e => (0, a.jsx)(C.default, {
        applicationId: e.applicationId,
        name: e.name
      }, e.applicationId))
    });
  return (0, a.jsx)(h.Tooltip, {
    text: o,
    position: "bottom",
    "aria-label": l,
    tooltipClassName: i()(T.filterTooltip, T.filterTooltipAutoWidth),
    tooltipContentClassName: T.filterTooltipContent,
    children: t => (0, a.jsxs)(h.Button, {
      ...t,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: n,
      children: [(0, a.jsx)(u.GameControllerIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(h.Text, {
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
    n = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, r.default),
    l = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = e[t],
    o = s.useCallback(() => {
      l(S.ClanDiscoveryMode.PLAYSTYLE)
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
    tooltipClassName: T.filterTooltip,
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, a.jsxs)(h.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: h.ButtonLooks.OUTLINED,
      color: h.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, a.jsx)(f.ReactionIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: n
      })]
    })
  })
}

function N() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = s.useCallback(() => {
      t(S.ClanDiscoveryMode.TRAITS)
    }, [t]);
  return null == e ? null : (0, a.jsxs)(h.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: n,
    children: [(0, a.jsx)(E.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
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
  return (0, a.jsxs)(h.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, a.jsx)(o.ClockIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: p.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function R() {
  let e = (0, _.useStateFromStoresArray)([m.default], () => m.default.getFavoriteClans(), []);
  return (0, a.jsxs)(h.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(d.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function O() {
  return (0, a.jsx)(h.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: h.ButtonLooks.OUTLINED,
    color: h.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(c.MagnifyingGlassIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: T.toolbar,
    children: [(0, a.jsxs)("div", {
      className: T.preferences,
      children: [(0, a.jsx)(g, {}), (0, a.jsx)(A, {}), (0, a.jsx)(N, {}), (0, a.jsx)(v, {})]
    }), (0, a.jsxs)("div", {
      className: T.actions,
      children: [(0, a.jsx)(R, {}), (0, a.jsx)(O, {})]
    })]
  })
}