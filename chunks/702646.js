"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("531057"),
  u = a("149020"),
  d = a("738232"),
  c = a("376644"),
  f = a("481060"),
  E = a("105671"),
  h = a("92373"),
  _ = a("207796"),
  C = a("308083"),
  m = a("689938"),
  S = a("506254");

function p(e) {
  let {
    icon: t,
    text: a,
    ariaLabel: s,
    tooltip: l,
    onClick: r,
    isActive: u,
    autoWidth: d = !1
  } = e;
  return (0, n.jsx)(f.Tooltip, {
    text: l,
    position: "bottom",
    "aria-label": s,
    shouldShow: u,
    tooltipClassName: i()(S.filterTooltip, {
      [S.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: S.filterTooltipContent,
    children: e => (0, n.jsxs)(f.Button, {
      ...e,
      className: i()(S.filterPill, {
        [S.filterPillActive]: u
      }),
      innerClassName: S.filterPillContents,
      look: f.ButtonLooks.OUTLINED,
      color: f.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, n.jsxs)("div", {
        className: S.filterPillText,
        children: [(0, n.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: a
        }), (0, n.jsx)(o.ChevronSmallDownIcon, {
          className: S.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function I() {
  var e;
  let t = (0, _.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    a = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      a(_.ClanDiscoveryMode.GAMES)
    }, [a]),
    i = null !== (e = (0, E.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    o = (0, n.jsx)("div", {
      className: S.gamesTooltip,
      children: t.map(e => (0, n.jsx)(h.default, {
        applicationId: e
      }, e))
    }),
    d = (0, n.jsx)(u.GameControllerIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(p, {
    icon: d,
    text: m.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: o,
    onClick: l,
    isActive: t.length > 0,
    ariaLabel: i,
    autoWidth: !0
  })
}

function T() {
  let e = s.useMemo(C.getPlaystyleOptions, []),
    t = (0, _.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    a = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = null != t ? e[t] : null,
    i = null == l ? void 0 : l.title,
    o = s.useCallback(() => {
      a(_.ClanDiscoveryMode.PLAYSTYLE)
    }, [a]);
  if (null == l || null == i) return null;
  let u = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(f.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, n.jsx)(f.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    }),
    c = (0, n.jsx)(d.ReactionIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(p, {
    icon: c,
    text: i,
    tooltip: u,
    onClick: o,
    isActive: null != l,
    ariaLabel: i
  })
}

function g() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    a = s.useCallback(() => {
      t(_.ClanDiscoveryMode.TRAITS)
    }, [t]);
  if (null == e) return null;
  let l = (0, n.jsx)("div", {
      className: S.traitsTooltip,
      children: e.map(e => (0, n.jsx)("div", {
        className: S.trait,
        children: (0, n.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    i = (0, n.jsx)(c.TagIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, n.jsx)(p, {
    icon: i,
    text: m.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: l,
    onClick: a,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}
t.default = function() {
  return (0, n.jsx)("div", {
    className: S.toolbar,
    children: (0, n.jsxs)("div", {
      className: S.preferences,
      children: [(0, n.jsx)(I, {}), (0, n.jsx)(T, {}), (0, n.jsx)(g, {})]
    })
  })
}