"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("920906"),
  l = n("442837"),
  u = n("704215"),
  d = n("389710"),
  _ = n("481060"),
  c = n("607070"),
  E = n("243778"),
  I = n("594174"),
  T = n("466111"),
  f = n("74538"),
  S = n("921944"),
  h = n("689938"),
  A = n("170799");
let m = {
  tension: 750,
  mass: 2.5,
  friction: 70
};

function N(e) {
  let {
    tooltipText: t,
    headingText: n,
    textColor: r
  } = e, s = null != n;
  return (0, i.jsxs)("span", {
    className: s ? void 0 : A.tooltipContainer,
    children: [(0, i.jsxs)("span", {
      className: A.tooltipContainer,
      children: [(0, i.jsx)(T.default, {
        className: A.nitroWheel
      }), s ? (0, i.jsx)(_.Heading, {
        color: null != r ? r : "text-normal",
        variant: "heading-sm/semibold",
        children: n
      }) : null]
    }), (0, i.jsx)(_.Text, {
      variant: s ? "text-xs/normal" : "text-sm/medium",
      color: null != r ? r : "text-normal",
      children: t
    })]
  })
}

function p(e) {
  let {
    checked: t,
    onClick: n,
    id: s = "burst-reaction-toggle-button"
  } = e, T = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), p = I.default.getCurrentUser(), O = null == p || (0, f.isPremium)(p) ? [u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [C, R] = (0, E.useSelectedDismissibleContent)(O), [g, L] = r.useState(!1), [v, D] = (0, o.useSpring)(() => ({})), M = (0, o.animated)(d.SuperReactionIcon);
  r.useEffect(() => {
    let e = C === u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (R(S.ContentDismissActionType.DISMISS), setTimeout(() => L(e), 200))
  }, [C, R]);
  let y = g ? h.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? h.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : h.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
    P = g ? h.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
  return (0, i.jsxs)(_.TooltipContainer, {
    position: "top",
    text: (0, i.jsx)(N, {
      textColor: "always-white",
      tooltipText: y,
      headingText: P
    }),
    color: _.Tooltip.Colors.BRAND,
    forceOpen: g,
    "aria-label": y,
    tooltipClassName: A.tooltip,
    children: [(0, i.jsx)("input", {
      className: A.visuallyHidden,
      checked: t,
      onChange: function() {
        D({
          from: {
            rotate: t ? "360deg" : "0deg"
          },
          to: {
            rotate: t ? "0deg" : "360deg"
          },
          config: m
        }), null == n || n(), L(!1)
      },
      id: s,
      type: "checkbox"
    }), (0, i.jsxs)("label", {
      htmlFor: s,
      className: a()(A.label, {
        [A.labelChecked]: t
      }),
      children: [t ? (0, i.jsx)(_.Shine, {
        className: A.shine,
        shinePaused: T
      }) : null, (0, i.jsx)(M, {
        style: T ? void 0 : v,
        width: 20,
        height: 20,
        color: t ? "white" : void 0,
        className: A.icon
      }), (0, i.jsx)("span", {
        children: (0, i.jsx)(_.Text, {
          className: A.visuallyHidden,
          variant: "text-sm/semibold",
          children: h.default.Messages.SUPER_REACTION_TOGGLE_DISABLED
        })
      })]
    })]
  })
}