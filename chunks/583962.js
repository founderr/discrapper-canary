n.d(t, {
  PD: function() {
    return O
  },
  aR: function() {
    return P
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(920906),
  o = n(91192),
  u = n(442837),
  c = n(477690),
  d = n(481060),
  h = n(239091),
  g = n(607070),
  p = n(100527),
  m = n(367907),
  C = n(906732),
  E = n(434404),
  f = n(496675),
  _ = n(259580),
  I = n(267642),
  N = n(624138),
  Z = n(667815),
  S = n(531572),
  x = n(26323),
  T = n(30513),
  L = n(981631),
  v = n(689938),
  A = n(960600);
let M = (0, N.Mg)(c.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
  R = e => {
    let {
      guild: t,
      onSelect: n
    } = e, [s, r] = i.useState(t.premiumProgressBarEnabled), [a, o] = i.useState(!1), c = (0, u.e7)([f.Z], () => f.Z.can(L.Plq.MANAGE_GUILD, t)), g = async () => {
      if (!!c) o(!0), await E.Z.saveGuild(t.id, {
        premiumProgressBarEnabled: !s
      }), r(!s), o(!1)
    };
    return (0, l.jsx)(d.Menu, {
      navId: "progress-bar-context",
      onClose: h.Zy,
      "aria-label": v.Z.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: (0, l.jsx)(d.MenuCheckboxItem, {
        id: "progress-bar-enabled",
        label: v.Z.Messages.GUILD_ENABLE_PROGRESS_BAR,
        checked: s,
        disabled: a,
        action: g
      })
    })
  },
  O = 57,
  P = 57 + M,
  j = {
    tension: 180,
    friction: 80
  };
t.ZP = e => {
  let {
    guild: t,
    withMargin: n
  } = e, {
    analyticsLocations: s
  } = (0, C.ZP)(p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
    premiumSubscriberCount: c,
    id: E
  } = t, N = (0, I.rF)(c, E), M = (0, I.FZ)(N, t.id), O = null == M, P = null != M ? M : N, b = (0, u.e7)([S.Z], () => {
    var e;
    return null !== (e = S.Z.getCountForGuild(E)) && void 0 !== e ? e : 0
  }), D = (0, u.e7)([g.Z], () => g.Z.useReducedMotion), y = (0, u.e7)([f.Z], () => f.Z.can(L.Plq.MANAGE_GUILD, t));
  i.useEffect(() => {
    b !== c && (0, Z.v)(E, c)
  }, [E, b, c]);
  let U = "".concat(Math.min(100, c / (0, I.vn)(t.id)[P] * 100), "%"),
    {
      current: G
    } = i.useRef(U),
    w = {
      from: {
        width: b === c ? G : "0%"
      },
      to: {
        width: U
      },
      config: j,
      immediate: D
    },
    [k, B] = (0, a.useSpring)(() => w),
    V = () => {
      (0, m.yw)(L.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: L.jXE.PREMIUM_GUILD_PROGRESS_BAR
        },
        guild_id: E,
        location_stack: s
      }), (0, x.Z)({
        analyticsLocations: s,
        analyticsSourceLocation: {
          page: L.ZY5.GUILD_CHANNEL,
          section: L.jXE.PREMIUM_GUILD_PROGRESS_BAR,
          object: L.qAy.TOOLTIP
        },
        guild: t,
        perks: (0, T.VF)(),
        perkIntro: v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
      })
    },
    H = v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
      levelName: (0, I.e9)(P)
    }),
    F = v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
      numBoosts: c,
      numTotal: (0, I.vn)(t.id)[P]
    });
  O && (H = (0, I.e9)(P), F = v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({
    numBoosts: c
  }));
  let W = (0, o.JA)("boosts-".concat(t.id));
  return (0, l.jsx)("li", {
    children: (0, l.jsx)(d.Tooltip, {
      text: O ? v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({
        levelName: (0, I.nW)(P)
      }),
      color: d.Tooltip.Colors.BLACK,
      position: "top",
      delay: 200,
      hideOnClick: !0,
      children: e => (0, l.jsxs)(d.Clickable, {
        ...W,
        ...e,
        "aria-label": void 0,
        role: "button",
        focusProps: {
          offset: {
            left: 10,
            right: 4
          }
        },
        onClick: V,
        onMouseEnter: () => {
          var t;
          null === (t = e.onMouseEnter) || void 0 === t || t.call(e), B(w)
        },
        className: r()(A.container, {
          [A.containerWithMargin]: n
        }),
        onContextMenu: e => {
          y && (0, h.vq)(e, e => (0, l.jsx)(R, {
            ...e,
            guild: t
          }))
        },
        children: [(0, l.jsx)(d.HiddenVisually, {
          children: e["aria-label"]
        }), (0, l.jsxs)("div", {
          className: A.textArea,
          children: [(0, l.jsx)("div", {
            className: A.goalTextContainer,
            children: (0, l.jsx)(d.Text, {
              className: A.goalText,
              color: "interactive-active",
              variant: "text-xs/bold",
              children: H
            })
          }), (0, l.jsxs)("div", {
            className: A.progressFraction,
            children: [(0, l.jsx)(d.Text, {
              color: "interactive-normal",
              variant: "text-xs/normal",
              children: F
            }), (0, l.jsx)(_.Z, {
              className: A.count,
              height: 16,
              width: 16,
              direction: _.Z.Directions.RIGHT
            })]
          })]
        }), (0, l.jsxs)("div", {
          className: r()(A.progressBarContainer, {
            [A.progressBarContainerComplete]: O
          }),
          children: [(0, l.jsx)(a.animated.div, {
            className: A.progressBar,
            style: k
          }), O ? (0, l.jsx)("span", {
            "aria-label": v.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
            role: "img",
            className: A.tadaIcon,
            children: "\uD83C\uDF89"
          }) : null]
        })]
      })
    })
  })
}