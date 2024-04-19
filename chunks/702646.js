"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("149020"),
  u = n("509633"),
  d = n("670900"),
  c = n("738232"),
  f = n("376644"),
  E = n("481060"),
  h = n("442837"),
  _ = n("45680"),
  C = n("92373"),
  m = n("10473"),
  S = n("207796"),
  I = n("308083"),
  p = n("689938"),
  T = n("60427");

function g() {
  var e;
  let t = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      n(S.ClanDiscoveryMode.GAMES)
    }, [n]),
    u = null !== (e = (0, _.useGameNamesString)(t)) && void 0 !== e ? e : "",
    d = (0, a.jsx)("div", {
      className: T.gamesTooltip,
      children: t.map(e => (0, a.jsx)(C.default, {
        applicationId: e
      }, e))
    });
  return (0, a.jsx)(E.Tooltip, {
    text: d,
    position: "bottom",
    "aria-label": u,
    tooltipClassName: i()(T.filterTooltip, T.filterTooltipAutoWidth),
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, a.jsxs)(E.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: l,
      children: [(0, a.jsx)(o.GameControllerIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(E.Text, {
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
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.id, r.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, r.default),
    l = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    i = e[t],
    o = s.useCallback(() => {
      l(S.ClanDiscoveryMode.PLAYSTYLE)
    }, [l]),
    u = null == i ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xxl/medium",
        children: i.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: i.title
        }), (0, a.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: i.subtitle
        })]
      })]
    });
  return (0, a.jsx)(E.Tooltip, {
    text: u,
    position: "bottom",
    "aria-label": n,
    tooltipClassName: T.filterTooltip,
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, a.jsxs)(E.Button, {
      ...e,
      className: T.filterPill,
      innerClassName: T.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: o,
      children: [(0, a.jsx)(c.ReactionIcon, {
        className: T.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(E.Text, {
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
  return null == e ? null : (0, a.jsxs)(E.Button, {
    className: T.filterPill,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: n,
    children: [(0, a.jsx)(f.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(E.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function v() {
  let e = (0, h.useStateFromStoresArray)([m.default], () => m.default.getFavoriteClans(), []);
  return (0, a.jsxs)(E.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(u.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(E.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function R() {
  return (0, a.jsx)(E.Button, {
    className: T.filterPillSmall,
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(d.MagnifyingGlassIcon, {
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
      children: [(0, a.jsx)(g, {}), (0, a.jsx)(A, {}), (0, a.jsx)(N, {})]
    }), (0, a.jsxs)("div", {
      className: T.actions,
      children: [(0, a.jsx)(v, {}), (0, a.jsx)(R, {})]
    })]
  })
}