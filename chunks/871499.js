"use strict";
n.d(t, {
  Z: function() {
    return I
  },
  d: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(131388),
  l = n(259580),
  u = n(806519),
  _ = n(618158),
  c = n(362267),
  d = n(689938),
  E = n(162736);

function I(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: r,
    onMouseEnter: a,
    onMouseLeave: l,
    onContextMenu: u,
    className: c,
    wrapperClassName: d,
    iconClassName: I,
    iconComponent: T,
    themeable: h = !1,
    disabled: f = !1,
    isActive: S = !1,
    tooltipPosition: A = "top",
    shouldShowTooltip: N = !0,
    forceTooltipOpen: m = !1,
    buttonRef: O,
    grow: R,
    "aria-label": p
  } = e;
  return (0, i.jsx)(_.Z, {
    children: (0, i.jsx)(o.Tooltip, {
      position: A,
      text: t,
      "aria-label": p,
      shouldShow: N,
      forceOpen: m,
      children: e => {
        let {
          onClick: t,
          onContextMenu: _,
          onMouseEnter: A,
          onMouseLeave: N,
          ...m
        } = e;
        return (0, i.jsx)(o.Button, {
          look: o.Button.Looks.BLANK,
          size: o.Button.Sizes.NONE,
          onKeyDown: e => {
            null == r || r(e)
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == A || A(), null == a || a(e)
          },
          onMouseLeave: e => {
            null == N || N(), null == l || l(e)
          },
          onContextMenu: e => {
            null == _ || _(), null == u || u(e)
          },
          onFocus: e => {
            null == A || A(), null == a || a(e)
          },
          onBlur: e => {
            null == N || N(), null == l || l(e)
          },
          disabled: f,
          innerClassName: E.lineHeightReset,
          className: s()({
            [E.active]: S
          }, c),
          wrapperClassName: d,
          buttonRef: O,
          grow: R,
          "aria-label": p,
          ...m,
          children: (0, i.jsx)(T, {
            className: s()(E.controlIcon, I, {
              [E.themeable]: h,
              [E.active]: S
            }),
            color: "currentColor"
          })
        })
      }
    })
  })
}
let T = {
  red: E.red,
  white: E.white,
  green: E.green,
  yellow: E.yellow,
  primaryDark: E.primaryDark,
  primaryLight: E.primaryLight,
  activeLight: E.activeLight
};

function h(e) {
  let {
    color: t,
    isActive: n = !1,
    className: r,
    iconClassName: h,
    onPopoutClick: f,
    popoutOpen: S = !1,
    premiumGlow: A = !1,
    ...N
  } = e, m = (0, c.Z)(t, n), O = (0, a.Z)("(max-width: 456px)"), R = (0, i.jsx)(I, {
    ...N,
    grow: !1,
    onContextMenu: f,
    iconClassName: s()(h, E.centerIcon),
    className: s()(O ? r : null, E.staticButton, E.centerButton, T[m])
  });
  return O ? R : (0, i.jsxs)("div", {
    className: s()(r, E.contextMenuContainer),
    children: [(0, i.jsx)(u.ZP, {
      className: s()(E.buttonMask, {
        [E.buttonPremiumGlow]: A
      }),
      mask: null == f ? null : u.QS.CHANNEL_CALL_CONTROL_BUTTON,
      width: 56,
      height: 56,
      children: R
    }), null != f ? (0, i.jsx)(_.Z, {
      children: (0, i.jsx)(o.Clickable, {
        "aria-label": d.Z.Messages.MORE_OPTIONS,
        onClick: f,
        onContextMenu: f,
        className: s()(E.contextMenuNub, T[m], {
          [E.active]: S
        }),
        children: (0, i.jsx)(l.Z, {
          className: s()(E.contextMenuCaret, {
            [E.open]: S
          })
        })
      })
    }) : null]
  })
}