"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(704215),
  _ = n(481060),
  c = n(607070),
  d = n(243778),
  E = n(594174),
  I = n(74538),
  T = n(921944),
  h = n(689938),
  S = n(918841);
let f = {
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
    className: s ? void 0 : S.tooltipContainer,
    children: [(0, i.jsxs)("span", {
      className: S.tooltipContainer,
      children: [(0, i.jsx)(_.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: S.nitroWheel
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

function A(e) {
  let {
    checked: t,
    onClick: n,
    id: s = "burst-reaction-toggle-button"
  } = e, A = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), m = E.default.getCurrentUser(), O = null == m || (0, I.I5)(m) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [R, p] = (0, d.U)(O), [g, C] = r.useState(!1), [v, L] = (0, a.useSpring)(() => ({})), D = (0, a.animated)(_.SuperReactionIcon);
  r.useEffect(() => {
    let e = R === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (p(T.L.DISMISS), setTimeout(() => C(e), 200))
  }, [R, p]);
  let M = g ? h.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? h.Z.Messages.SUPER_REACTION_TOGGLE_ENABLED : h.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED,
    P = g ? h.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
  return (0, i.jsxs)(_.TooltipContainer, {
    position: "top",
    text: (0, i.jsx)(N, {
      textColor: "always-white",
      tooltipText: M,
      headingText: P
    }),
    color: _.Tooltip.Colors.BRAND,
    forceOpen: g,
    "aria-label": M,
    tooltipClassName: S.tooltip,
    children: [(0, i.jsx)("input", {
      className: S.visuallyHidden,
      checked: t,
      onChange: function() {
        L({
          from: {
            rotate: t ? "360deg" : "0deg"
          },
          to: {
            rotate: t ? "0deg" : "360deg"
          },
          config: f
        }), null == n || n(), C(!1)
      },
      id: s,
      type: "checkbox"
    }), (0, i.jsxs)("label", {
      htmlFor: s,
      className: o()(S.label, {
        [S.labelChecked]: t
      }),
      children: [t ? (0, i.jsx)(_.Shine, {
        className: S.shine,
        shinePaused: A
      }) : null, (0, i.jsx)(D, {
        style: A ? void 0 : v,
        size: "custom",
        width: 20,
        height: 20,
        color: t ? "white" : "currentColor",
        className: S.icon
      }), (0, i.jsx)("span", {
        children: (0, i.jsx)(_.Text, {
          className: S.visuallyHidden,
          variant: "text-sm/semibold",
          children: h.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED
        })
      })]
    })]
  })
}