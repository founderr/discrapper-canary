"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  CenterControlButton: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("461380"),
  o = n("587974"),
  u = n("550410"),
  d = n("641568"),
  c = n("782340"),
  f = n("397651");

function m(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: a,
    onMouseEnter: r,
    onMouseLeave: o,
    onContextMenu: d,
    className: c,
    wrapperClassName: m,
    iconClassName: h,
    iconComponent: p,
    themeable: g = !1,
    disabled: E = !1,
    isActive: v = !1,
    tooltipPosition: C = "top",
    shouldShowTooltip: I = !0,
    forceTooltipOpen: x = !1,
    buttonRef: _,
    grow: S,
    "aria-label": N
  } = e;
  return (0, l.jsx)(u.default, {
    children: (0, l.jsx)(i.Tooltip, {
      position: C,
      text: t,
      "aria-label": N,
      shouldShow: I,
      forceOpen: x,
      children: e => {
        let {
          onClick: t,
          onContextMenu: u,
          onMouseEnter: C,
          onMouseLeave: I,
          ...x
        } = e;
        return (0, l.jsx)(i.Button, {
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          onKeyDown: e => {
            null == a || a(e)
          },
          onClick: e => {
            null == t || t(), null == n || n(e)
          },
          onMouseEnter: e => {
            null == C || C(), null == r || r(e)
          },
          onMouseLeave: e => {
            null == I || I(), null == o || o(e)
          },
          onContextMenu: e => {
            null == u || u(), null == d || d(e)
          },
          onFocus: e => {
            null == C || C(), null == r || r(e)
          },
          onBlur: e => {
            null == I || I(), null == o || o(e)
          },
          disabled: E,
          innerClassName: f.lineHeightReset,
          className: s({
            [f.active]: v
          }, c),
          wrapperClassName: m,
          buttonRef: _,
          grow: S,
          "aria-label": N,
          ...x,
          children: (0, l.jsx)(p, {
            className: s(f.controlIcon, h, {
              [f.themeable]: g,
              [f.active]: v
            })
          })
        })
      }
    })
  })
}
let h = {
  red: f.red,
  white: f.white,
  green: f.green,
  yellow: f.yellow,
  primaryDark: f.primaryDark,
  primaryLight: f.primaryLight,
  activeLight: f.activeLight
};

function p(e) {
  let {
    color: t,
    isActive: n = !1,
    className: a,
    iconClassName: p,
    onPopoutClick: g,
    popoutOpen: E = !1,
    ...v
  } = e, C = (0, d.default)(t, n), I = (0, l.jsx)(m, {
    ...v,
    grow: !1,
    onContextMenu: g,
    iconClassName: s(p, f.centerIcon),
    className: s(null == g ? a : f.staticButton, f.centerButton, h[C])
  }), x = null;
  return null != g && (x = (0, l.jsxs)("div", {
    className: s(a, f.contextMenuContainer),
    children: [(0, l.jsx)(o.default, {
      mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
      width: 56,
      height: 56,
      children: I
    }), (0, l.jsx)(u.default, {
      children: (0, l.jsx)(i.Clickable, {
        "aria-label": c.default.Messages.MORE_OPTIONS,
        onClick: g,
        onContextMenu: g,
        className: s(f.contextMenuNub, h[C], {
          [f.active]: E
        }),
        children: (0, l.jsx)(r.default, {
          className: s(f.contextMenuCaret, {
            [f.open]: E
          })
        })
      })
    })]
  })), (0, l.jsxs)(l.Fragment, {
    children: [x, (0, l.jsx)("div", {
      className: s({
        [f.unmasked]: null != g
      }, null != g ? a : null),
      children: I
    })]
  })
}