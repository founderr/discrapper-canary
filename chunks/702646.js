"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("149020"),
  u = a("509633"),
  d = a("670900"),
  c = a("738232"),
  f = a("376644"),
  E = a("481060"),
  h = a("442837"),
  _ = a("45680"),
  C = a("92373"),
  m = a("10473"),
  S = a("207796"),
  I = a("308083"),
  p = a("689938"),
  T = a("60427");

function g() {
  var e;
  let t = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      a(S.ClanDiscoveryMode.GAMES)
    }, [a]),
    u = null !== (e = (0, _.useGameNamesString)(t)) && void 0 !== e ? e : "",
    d = (0, n.jsx)("div", {
      className: T.gamesTooltip,
      children: t.map(e => (0, n.jsx)(C.default, {
        applicationId: e
      }, e))
    });
  return (0, n.jsx)(E.Tooltip, {
    text: d,
    position: "bottom",
    "aria-label": u,
    tooltipClassName: i()(T.filterTooltip, T.filterTooltipAutoWidth),
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, n.jsxs)(E.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: l,
      children: [(0, n.jsx)(o.GameControllerIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(E.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: p.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
          count: t.length
        })
      })]
    })
  })
}

function A() {
  let e = s.useMemo(I.getPlaystyleOptions, []),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = null != t ? e[t] : null,
    i = null == l ? void 0 : l.title,
    o = s.useCallback(() => {
      a(S.ClanDiscoveryMode.PLAYSTYLE)
    }, [a]),
    u = null == l ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, n.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    });
  return null == l || null == i ? null : (0, n.jsx)(E.Tooltip, {
    text: u,
    position: "bottom",
    "aria-label": i,
    tooltipClassName: T.filterTooltip,
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, n.jsxs)(E.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, n.jsx)(c.ReactionIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, n.jsx)(E.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: i
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
  return null == e ? null : (0, n.jsxs)(E.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: a,
    children: [(0, n.jsx)(f.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(E.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function v() {
  let e = (0, h.useStateFromStoresArray)([m.default], () => m.default.getFavoriteClans(), []);
  return (0, n.jsxs)(E.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, n.jsx)(u.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(E.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function R() {
  return (0, n.jsx)(E.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, n.jsx)(d.MagnifyingGlassIcon, {
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
      children: [(0, n.jsx)(g, {}), (0, n.jsx)(A, {}), (0, n.jsx)(N, {})]
    }), (0, n.jsxs)("div", {
      className: T.actions,
      children: [(0, n.jsx)(v, {}), (0, n.jsx)(R, {})]
    })]
  })
}