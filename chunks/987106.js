"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  u = n("239091"),
  r = n("596454"),
  i = n("911969"),
  d = n("441957"),
  c = n("572004"),
  m = n("49012"),
  p = n("970184"),
  f = n("280501"),
  C = n("689938"),
  S = n("858049");

function E(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return c.SUPPORTS_COPY && null != t ? (0, l.jsx)(o.Menu, {
    navId: "component-button",
    onClose: u.closeContextMenu,
    "aria-label": C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(o.MenuGroup, {
      children: (0, l.jsx)(o.MenuItem, {
        id: "copy",
        label: C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(t)
      })
    })
  }) : null
}

function v(e) {
  let t;
  let {
    label: n,
    style: a,
    disabled: c,
    emoji: C,
    url: v
  } = e, {
    executeStateUpdate: N,
    visualState: h,
    isDisabled: T
  } = (0, p.useComponentState)(e), x = null != n && n.length > 0, y = a === i.ButtonStyle.LINK && null != v && v.length > 0, g = h === f.ActionComponentState.LOADING;
  return t = y ? () => {
    (0, m.handleClick)({
      href: null != v ? v : "",
      shouldConfirm: !0
    })
  } : () => N(), (0, l.jsxs)(o.Button, {
    color: function(e) {
      switch (e) {
        case i.ButtonStyle.PRIMARY:
          return o.Button.Colors.BRAND;
        case i.ButtonStyle.SUCCESS:
          return o.Button.Colors.GREEN;
        case i.ButtonStyle.DESTRUCTIVE:
          return o.Button.Colors.RED;
        default:
          return o.Button.Colors.PRIMARY
      }
    }(a),
    size: o.Button.Sizes.SMALL,
    disabled: c || h === f.ActionComponentState.DISABLED || T,
    onClick: t,
    onContextMenu: e => {
      y && (0, u.openContextMenu)(e, e => (0, l.jsx)(E, {
        ...e,
        url: v
      }))
    },
    role: y ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: s()(S.content, {
        [S.hidden]: g
      }),
      "aria-hidden": g,
      children: [null != C ? (0, l.jsx)(r.default, {
        className: s()({
          [S.textEmoji]: x
        }),
        src: C.src,
        emojiId: C.id,
        emojiName: C.name,
        animated: C.animated
      }) : null, x ? (0, l.jsx)("div", {
        className: S.label,
        children: n
      }) : null, y ? (0, l.jsx)(d.default, {
        className: S.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), g ? (0, l.jsx)("div", {
      className: S.loading,
      children: (0, l.jsx)(o.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}