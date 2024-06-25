n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(143927),
  o = n(481060),
  c = n(963202),
  u = n(105671),
  d = n(92373),
  E = n(207796),
  h = n(308083),
  _ = n(689938),
  I = n(971633);

function m(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: l,
    tooltip: r,
    onClick: c,
    isActive: u,
    autoWidth: d = !1
  } = e, [h, _] = i.useState(!1), [m, T] = i.useState(!1), g = E.GN.getState().mode, p = g === E.v0.GAMES || g === E.v0.PLAYSTYLE || g === E.v0.TRAITS;
  i.useEffect(() => {
    p && (_(!1), T(!1))
  }, [p]);
  let N = u && (m || h),
    S = i.useMemo(() => (0, s.jsxs)(o.Clickable, {
      className: I.tooltipContentWrapper,
      onClick: c,
      onMouseEnter: () => {
        !p && _(!0)
      },
      onMouseLeave: () => {
        _(!1)
      },
      children: [(0, s.jsx)("div", {
        className: I.tooltipHoverBridge
      }), r]
    }), [r, c, p]);
  return (0, s.jsx)(o.Tooltip, {
    text: S,
    position: "bottom",
    "aria-label": l,
    shouldShow: N,
    forceOpen: N,
    allowOverflow: !0,
    disableTooltipPointerEvents: !1,
    tooltipClassName: a()(I.filterTooltip, {
      [I.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: I.filterTooltipContent,
    children: e => (0, s.jsxs)(o.Button, {
      ...e,
      className: a()(I.filterPill, {
        [I.filterPillActive]: u
      }),
      innerClassName: I.filterPillContents,
      look: o.ButtonLooks.OUTLINED,
      color: o.ButtonColors.CUSTOM,
      onClick: c,
      onMouseEnter: () => {
        T(!0)
      },
      onMouseLeave: () => {
        T(!1)
      },
      children: [t, (0, s.jsxs)("div", {
        className: I.filterPillText,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, s.jsx)(o.ChevronSmallDownIcon, {
          className: I.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function T() {
  var e;
  let t = (0, E.GN)(e => e.selectedGames, r.Z),
    n = i.useCallback(() => {
      (0, E.fH)(E.v0.GAMES, !0)
    }, []),
    l = null !== (e = (0, u.i)(t)) && void 0 !== e ? e : "",
    a = t.slice(0, 3),
    c = t.length - 3,
    h = (0, s.jsx)("div", {
      className: I.gamesTooltip,
      children: a.map((e, t) => (0, s.jsx)(d.Z, {
        applicationId: e,
        otherGamesCount: 2 === t && c > 0 ? c + 1 : void 0
      }, e))
    }),
    T = (0, s.jsx)(o.GameControllerIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, s.jsx)(m, {
    icon: T,
    text: _.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: h,
    onClick: n,
    isActive: t.length > 0,
    ariaLabel: l,
    autoWidth: !0
  })
}

function g() {
  let e = i.useMemo(h.f4, []),
    t = (0, E.GN)(e => e.selectedPlaystyle, r.Z),
    n = null != t ? e[t] : null,
    l = null == n ? void 0 : n.title,
    a = i.useCallback(() => {
      (0, E.fH)(E.v0.PLAYSTYLE, !0)
    }, []),
    c = null != n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-xxl/medium",
        children: n.emoji
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(o.Heading, {
          variant: "heading-md/medium",
          children: n.title
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: n.subtitle
        })]
      })]
    }) : null,
    u = (0, s.jsx)(o.DpadIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, s.jsx)(m, {
    icon: u,
    text: null != l ? l : _.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
    tooltip: c,
    onClick: a,
    isActive: null != n,
    ariaLabel: null != l ? l : _.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
  })
}

function p() {
  let e = (0, E.GN)(e => e.selectedTraits, r.Z),
    t = i.useCallback(() => {
      (0, E.fH)(E.v0.TRAITS, !0)
    }, []);
  if (null == e) return null;
  let n = (0, s.jsx)("div", {
      className: I.traitsTooltip,
      children: e.map(e => (0, s.jsx)("div", {
        className: I.trait,
        children: (0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    l = (0, s.jsx)(o.TagIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    });
  return (0, s.jsx)(m, {
    icon: l,
    text: _.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: n,
    onClick: t,
    isActive: e.length > 0,
    ariaLabel: e.join(", "),
    autoWidth: !0
  })
}

function N() {
  let {
    enableClanCreation: e
  } = (0, c.C3)({
    location: "clan_discovery_add_clan",
    includeConverted: !1
  });
  return e ? (0, s.jsxs)(o.Clickable, {
    className: a()(I.buttonPill),
    onClick: () => (0, E.fH)(E.v0.ADMIN_UPSELL),
    children: [(0, s.jsx)(o.PlusSmallIcon, {
      className: I.filterPillIcon,
      color: "currentColor"
    }), (0, s.jsx)("div", {
      className: I.filterPillText,
      children: (0, s.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: _.Z.Messages.CLAN_DISCOVERY_ADD_CLAN
      })
    })]
  }) : null
}
t.Z = function(e) {
  let {
    className: t
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(I.toolbar, t),
    children: [(0, s.jsx)("div", {
      className: I.addClan,
      children: (0, s.jsx)(N, {})
    }), (0, s.jsxs)("div", {
      className: I.preferences,
      children: [(0, s.jsx)(T, {}), (0, s.jsx)(g, {}), (0, s.jsx)(p, {})]
    }), (0, s.jsx)("div", {
      className: I.actions
    })]
  })
}