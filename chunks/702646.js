"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("442837"),
  u = n("531057"),
  d = n("149020"),
  c = n("738232"),
  f = n("376644"),
  E = n("481060"),
  h = n("963202"),
  _ = n("105671"),
  C = n("92373"),
  m = n("430824"),
  S = n("207796"),
  p = n("308083"),
  I = n("689938"),
  g = n("506254");

function T(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: s,
    tooltip: l,
    onClick: r,
    isActive: o,
    autoWidth: d = !1
  } = e;
  return (0, a.jsx)(E.Tooltip, {
    text: l,
    position: "bottom",
    "aria-label": s,
    shouldShow: o,
    tooltipClassName: i()(g.filterTooltip, {
      [g.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, a.jsxs)(E.Button, {
      ...e,
      className: i()(g.filterPill, {
        [g.filterPillActive]: o
      }),
      innerClassName: g.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, a.jsxs)("div", {
        className: g.filterPillText,
        children: [(0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, a.jsx)(u.ChevronSmallDownIcon, {
          className: g.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function A() {
  var e;
  let t = (0, S.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = s.useCallback(() => {
      n(S.ClanDiscoveryMode.GAMES)
    }, [n]),
    i = null !== (e = (0, _.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    o = t.slice(0, 2),
    u = t.length - 2,
    c = (0, a.jsxs)("div", {
      className: g.gamesTooltip,
      children: [o.map(e => (0, a.jsx)(C.default, {
        applicationId: e
      }, e)), u > 0 && (0, a.jsx)(C.default, {
        applicationId: t[2],
        remainingGame: u
      })]
    }),
    f = (0, a.jsx)(d.GameControllerIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(T, {
    icon: f,
    text: I.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: c,
    onClick: l,
    isActive: t.length > 0,
    ariaLabel: i,
    autoWidth: !0
  })
}

function N() {
  let e = s.useMemo(p.getPlaystyleOptions, []),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    l = null != t ? e[t] : null,
    i = null == l ? void 0 : l.title,
    o = s.useCallback(() => {
      n(S.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]);
  if (null == l || null == i) return null;
  let u = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xxl/medium",
        children: l.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: l.title
        }), (0, a.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: l.subtitle
        })]
      })]
    }),
    d = (0, a.jsx)(c.ReactionIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(T, {
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
    n = s.useCallback(() => {
      t(S.ClanDiscoveryMode.TRAITS)
    }, [t]);
  if (null == e) return null;
  let l = (0, a.jsx)("div", {
      className: g.traitsTooltip,
      children: e.map(e => (0, a.jsx)("div", {
        className: g.trait,
        children: (0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    i = (0, a.jsx)(f.TagIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(T, {
    icon: i,
    text: I.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: l,
    onClick: n,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}

function R() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    t = (0, o.useStateFromStoresArray)([m.default], () => Object.values(m.default.getGuilds()));
  return (0, h.useAnyClanPrepilotExperimentEnabled)(t, "clan_discovery_add_clan") ? (0, a.jsxs)(E.Clickable, {
    className: i()(g.buttonPill),
    onClick: () => e(S.ClanDiscoveryMode.ADMIN_UPSELL),
    children: [(0, a.jsx)(f.TagIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)("div", {
      className: g.filterPillText,
      children: (0, a.jsx)(E.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: I.default.Messages.CLAN_DISCOVERY_ADD_CLAN
      })
    })]
  }) : null
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: g.toolbar,
    children: [(0, a.jsx)("div", {
      className: g.addClan,
      children: (0, a.jsx)(R, {})
    }), (0, a.jsxs)("div", {
      className: g.preferences,
      children: [(0, a.jsx)(A, {}), (0, a.jsx)(N, {}), (0, a.jsx)(v, {})]
    }), (0, a.jsx)("div", {
      className: g.actions
    })]
  })
}