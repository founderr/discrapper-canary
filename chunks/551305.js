"use strict";
n.r(t), n.d(t, {
  NotificationTypes: function() {
    return i
  },
  default: function() {
    return E
  }
});
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("907002"),
  d = n("77078"),
  c = n("128295"),
  f = n("414868"),
  p = n("587974"),
  m = n("299341");
(l = i || (i = {}))[l.UPDATE = 0] = "UPDATE", l[l.NEW = 1] = "NEW";
let h = {
  config: {
    friction: 26,
    tension: 700,
    mass: 1
  },
  initial: {
    scale: 1,
    opacity: 1
  },
  from: {
    scale: .6,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  },
  leave: {
    scale: .6,
    opacity: 0
  }
};
var E = s.memo(function(e) {
  let {
    className: t,
    disabled: n = !1,
    innerClassName: l,
    childClassName: i,
    iconClassName: s,
    icon: r,
    children: E,
    onClick: g,
    isActive: S,
    onMouseEnter: C,
    onMouseLeave: T,
    onFocus: v,
    onBlur: I,
    pulse: _,
    sparkle: y,
    notification: A,
    "aria-label": N,
    "aria-expanded": x,
    "aria-haspopup": O,
    "aria-controls": R
  } = e, M = (0, u.useTransition)(null != E, {
    ...h,
    keys: e => e ? "children" : "icon"
  }), L = e => {
    let {
      component: t
    } = e;
    return null != A ? (0, a.jsxs)("div", {
      className: m.buttonContent,
      children: [(0, a.jsx)(p.default, {
        className: m.iconMask,
        mask: p.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: 24,
        height: 24,
        children: t
      }), (0, a.jsx)("span", {
        className: m.notificationDot
      })]
    }) : t
  };
  return (0, a.jsxs)(d.Button, {
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    "aria-label": N,
    "aria-expanded": x,
    "aria-haspopup": O,
    "aria-controls": R,
    disabled: n,
    className: o(t, {
      [m.active]: S
    }),
    innerClassName: o(m.button, l, {
      [m.pulseButton]: _
    }),
    onClick: g,
    onMouseEnter: C,
    onMouseLeave: T,
    onFocus: v,
    onBlur: I,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [M((e, t, n) => {
      let {
        key: l
      } = n;
      return t ? (0, a.jsx)(u.animated.div, {
        style: e,
        className: o(m.buttonWrapper, i),
        children: L({
          component: E
        })
      }, l) : null != r ? (0, a.jsx)(u.animated.div, {
        style: e,
        className: o(m.buttonWrapper, i),
        children: L({
          component: (0, a.jsx)(r, {
            className: o(m.icon, s, {
              [m.pulseIcon]: _
            })
          })
        })
      }, l) : void 0
    }), y && (0, a.jsxs)("div", {
      className: m.sparkleContainer,
      children: [(0, a.jsx)(f.default, {
        className: m.sparkleStar
      }), (0, a.jsx)(c.default, {
        className: m.sparklePlus
      })]
    })]
  })
})