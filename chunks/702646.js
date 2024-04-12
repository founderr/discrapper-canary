"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("828065"),
  r = n("149020"),
  o = n("509633"),
  u = n("670900"),
  d = n("738232"),
  c = n("376644"),
  f = n("481060"),
  E = n("442837"),
  h = n("10473"),
  _ = n("207796"),
  C = n("308083"),
  m = n("689938"),
  S = n("60427");

function I() {
  let [e, t, n, i] = (0, _.useClanDiscoveryUIStore)(e => [e.selectedGames, e.setSelectedGames, e.game, e.setGame], l.default), o = s.useCallback(() => {
    null != n && null != i && (n === _.ClanDiscoveryGame.GENSHIN ? (i(_.ClanDiscoveryGame.VALORANT), t([{
      applicationId: C.VALORANT_ID,
      name: "Valorant"
    }])) : (i(_.ClanDiscoveryGame.GENSHIN), t([{
      applicationId: C.GENSHIN_ID,
      name: "Genshin Impact"
    }])))
  }, [n, i, t]);
  return (0, a.jsxs)(f.Button, {
    className: S.filterPill,
    innerClassName: S.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: o,
    children: [(0, a.jsx)(r.GameControllerIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: m.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
        count: e.length
      })
    })]
  })
}

function T() {
  let e = s.useMemo(C.getPlaystyleOptions, []),
    {
      playstyle: t,
      setMode: n
    } = (0, _.useClanDiscoveryUIStore)(e => ({
      playstyle: e.selectedPlaystyle,
      setMode: e.setMode
    }), l.default),
    i = e[t.id],
    r = s.useCallback(() => {
      n(_.ClanDiscoveryMode.PLAYSTYLE)
    }, [n]),
    o = null == i ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.Heading, {
        variant: "heading-xxl/medium",
        children: i.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(f.Heading, {
          variant: "heading-md/medium",
          children: i.title
        }), (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          children: i.subtitle
        })]
      })]
    });
  return (0, a.jsx)(f.Tooltip, {
    text: o,
    position: "bottom",
    "aria-label": t.name,
    tooltipClassName: S.filterTooltip,
    tooltipContentClassName: S.filterTooltipContent,
    children: e => (0, a.jsxs)(f.Button, {
      ...e,
      className: S.filterPill,
      innerClassName: S.filterPillContents,
      look: f.ButtonLooks.OUTLINED,
      color: f.ButtonColors.CUSTOM,
      onClick: r,
      children: [(0, a.jsx)(d.ReactionIcon, {
        className: S.filterPillIcon,
        color: "currentColor"
      }), (0, a.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: t.name
      })]
    })
  })
}

function p() {
  let [e, t] = (0, _.useClanDiscoveryUIStore)(e => [e.selectedTraits, e.setMode], l.default), n = s.useCallback(() => {
    t(_.ClanDiscoveryMode.TRAITS)
  }, [t]);
  return null == e ? null : (0, a.jsxs)(f.Button, {
    className: S.filterPill,
    innerClassName: S.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: n,
    children: [(0, a.jsx)(c.TagIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: "".concat(e.length, " Traits")
    })]
  })
}

function g() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.setMode, l.default),
    t = s.useCallback(() => {
      e(_.ClanDiscoveryMode.PRIMETIME)
    }, [e]);
  return (0, a.jsxs)(f.Button, {
    className: S.filterPill,
    innerClassName: S.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: t,
    children: [(0, a.jsx)(i.ClockIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: m.default.Messages.CLAN_DISCOVERY_PRIMETIME_FILTER
    })]
  })
}

function A() {
  let e = (0, E.useStateFromStoresArray)([h.default], () => h.default.getFavoriteClans(), []);
  return (0, a.jsxs)(f.Button, {
    className: S.filterPillSmall,
    innerClassName: S.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: [(0, a.jsx)(o.HeartIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)(f.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: e.length
    })]
  })
}

function N() {
  return (0, a.jsx)(f.Button, {
    className: S.filterPillSmall,
    innerClassName: S.filterPillContents,
    look: f.ButtonLooks.OUTLINED,
    color: f.ButtonColors.CUSTOM,
    onClick: () => !1,
    children: (0, a.jsx)(u.MagnifyingGlassIcon, {
      className: S.filterPillIcon,
      color: "currentColor"
    })
  })
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: S.toolbar,
    children: [(0, a.jsxs)("div", {
      className: S.preferences,
      children: [(0, a.jsx)(I, {}), (0, a.jsx)(T, {}), (0, a.jsx)(p, {}), (0, a.jsx)(g, {})]
    }), (0, a.jsxs)("div", {
      className: S.actions,
      children: [(0, a.jsx)(A, {}), (0, a.jsx)(N, {})]
    })]
  })
}