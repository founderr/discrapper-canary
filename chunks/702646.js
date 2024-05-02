"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("531057"),
  u = n("149020"),
  d = n("738232"),
  c = n("376644"),
  f = n("481060"),
  E = n("105671"),
  h = n("92373"),
  _ = n("207796"),
  C = n("308083"),
  m = n("689938"),
  S = n("506254");

function p(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: s,
    tooltip: l,
    onClick: r,
    isActive: u,
    autoWidth: d = !1
  } = e;
  return (0, a.jsx)(f.Tooltip, {
    text: l,
    position: "bottom",
    "aria-label": s,
    shouldShow: u,
    tooltipClassName: i()(S.filterTooltip, {
      [S.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: S.filterTooltipContent,
    children: e => (0, a.jsxs)(f.Button, {
      ...e,
      className: i()(S.filterPill, {
        [S.filterPillActive]: u
      }),
      innerClassName: S.filterPillContents,
      look: f.ButtonLooks.OUTLINED,
      color: f.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, a.jsxs)("div", {
        className: S.filterPillText,
        children: [(0, a.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, a.jsx)(o.ChevronSmallDownIcon, {
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
    n = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      n(_.ClanDiscoveryMode.GAMES)
    }, [n]),
    i = null !== (e = (0, E.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    o = (0, a.jsx)("div", {
      className: S.gamesTooltip,
      children: t.map(e => (0, a.jsx)(h.default, {
        applicationId: e
      }, e))
    }),
    d = (0, a.jsx)(u.GameControllerIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(p, {
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
    n = (0, _.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = null != t ? e[t] : null,
    i = null == l ? void 0 : l.title,
    o = s.useCallback(() => {
      n(_.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]);
  if (null == l || null == i) return null;
  let u = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(f.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    }),
    c = (0, a.jsx)(d.ReactionIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(p, {
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
    n = s.useCallback(() => {
      t(_.ClanDiscoveryMode.TRAITS)
    }, [t]);
  if (null == e) return null;
  let l = (0, a.jsx)("div", {
      className: S.traitsTooltip,
      children: e.map(e => (0, a.jsx)("div", {
        className: S.trait,
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    i = (0, a.jsx)(c.TagIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(p, {
    icon: i,
    text: m.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: l,
    onClick: n,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}
t.default = function() {
  return (0, a.jsx)("div", {
    className: S.toolbar,
    children: (0, a.jsxs)("div", {
      className: S.preferences,
      children: [(0, a.jsx)(I, {}), (0, a.jsx)(T, {}), (0, a.jsx)(g, {})]
    })
  })
}