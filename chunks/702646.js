"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("531057"),
  u = a("149020"),
  d = a("509633"),
  c = a("738232"),
  f = a("376644"),
  E = a("481060"),
  h = a("442837"),
  _ = a("105671"),
  C = a("92373"),
  m = a("10473"),
  S = a("207796"),
  p = a("308083"),
  I = a("689938"),
  T = a("683391");

function g(e) {
  let {
    icon: t,
    text: a,
    ariaLabel: s,
    tooltip: l,
    onClick: r,
    isActive: u,
    autoWidth: d = !1
  } = e;
  return (0, n.jsx)(E.Tooltip, {
    text: l,
    position: "bottom",
    "aria-label": s,
    shouldShow: u,
    tooltipClassName: i()(T.filterTooltip, {
      [T.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: T.filterTooltipContent,
    children: e => (0, n.jsxs)(E.Button, {
      ...e,
      className: i()(T.filterPill, {
        [T.filterPillActive]: u
      }),
      innerClassName: T.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, n.jsxs)("div", {
        className: T.filterPillText,
        children: [(0, n.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: a
        }), (0, n.jsx)(o.ChevronSmallDownIcon, {
          className: T.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function A() {
  var e;
  let t = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      a(S.ClanDiscoveryMode.GAMES)
    }, [a]),
    i = null !== (e = (0, _.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    o = (0, n.jsx)("div", {
      className: T.gamesTooltip,
      children: t.map(e => (0, n.jsx)(C.default, {
        applicationId: e
      }, e))
    }),
    d = (0, n.jsx)(u.GameControllerIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(g, {
    icon: d,
    text: I.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: o,
    onClick: l,
    isActive: t.length > 0,
    ariaLabel: i,
    autoWidth: !0
  })
}

function N() {
  let e = s.useMemo(p.getPlaystyleOptions, []),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = null != t ? e[t] : null,
    i = null == l ? void 0 : l.title,
    o = s.useCallback(() => {
      a(S.ClanDiscoveryMode.PLAYSTYLE)
    }, [a]);
  if (null == l || null == i) return null;
  let u = (0, n.jsxs)(n.Fragment, {
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
    }),
    d = (0, n.jsx)(c.ReactionIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(g, {
    icon: d,
    text: i,
    tooltip: u,
    onClick: o,
    isActive: null != l,
    ariaLabel: i
  })
}

function v() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    a = s.useCallback(() => {
      t(S.ClanDiscoveryMode.TRAITS)
    }, [t]);
  if (null == e) return null;
  let l = (0, n.jsx)("div", {
      className: T.traitsTooltip,
      children: e.map(e => (0, n.jsx)("div", {
        className: T.trait,
        children: (0, n.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    i = (0, n.jsx)(f.TagIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(g, {
    icon: i,
    text: I.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: l,
    onClick: a,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}

function R() {
  let e = (0, h.useStateFromStoresArray)([m.default], () => m.default.getSavedClans(), []);
  return (0, n.jsxs)(E.Button, {
    className: i()(T.filterPill),
    innerClassName: T.filterPillContents,
    look: E.ButtonLooks.OUTLINED,
    color: E.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, n.jsx)(d.HeartIcon, {
      className: T.filterPillIcon,
      color: "currentColor"
    }), (0, n.jsx)(E.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: I.default.Messages.CLAN_DISCOVERY_SAVED_FILTER.format({
        count: e.length
      })
    })]
  })
}
t.default = function() {
  return (0, n.jsxs)("div", {
    className: T.toolbar,
    children: [(0, n.jsx)("div", {
      className: T.toolbarSpacer
    }), (0, n.jsxs)("div", {
      className: T.preferences,
      children: [(0, n.jsx)(A, {}), (0, n.jsx)(N, {}), (0, n.jsx)(v, {})]
    }), (0, n.jsx)("div", {
      className: T.actions,
      children: (0, n.jsx)(R, {})
    })]
  })
}