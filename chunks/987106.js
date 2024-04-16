"use strict";
n.r(l), n.d(l, {
  default: function() {
    return v
  }
});
var t = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  u = n("481060"),
  i = n("239091"),
  o = n("596454"),
  r = n("911969"),
  d = n("441957"),
  c = n("572004"),
  m = n("49012"),
  p = n("970184"),
  f = n("280501"),
  S = n("689938"),
  C = n("858049");

function E(e) {
  let {
    url: l,
    onSelect: n
  } = e;
  return c.SUPPORTS_COPY && null != l ? (0, t.jsx)(u.Menu, {
    navId: "component-button",
    onClose: i.closeContextMenu,
    "aria-label": S.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, t.jsx)(u.MenuGroup, {
      children: (0, t.jsx)(u.MenuItem, {
        id: "copy",
        label: S.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(l)
      })
    })
  }) : null
}

function v(e) {
  let l;
  let {
    label: n,
    style: a,
    disabled: c,
    emoji: S,
    url: v
  } = e, {
    executeStateUpdate: N,
    visualState: h,
    isDisabled: T
  } = (0, p.useComponentState)(e), y = null != n && n.length > 0, x = a === r.ButtonStyle.LINK && null != v && v.length > 0, j = h === f.ActionComponentState.LOADING;
  return l = x ? () => {
    (0, m.handleClick)({
      href: null != v ? v : "",
      shouldConfirm: !0
    })
  } : () => N(), (0, t.jsxs)(u.Button, {
    color: function(e) {
      switch (e) {
        case r.ButtonStyle.PRIMARY:
          return u.Button.Colors.BRAND;
        case r.ButtonStyle.SUCCESS:
          return u.Button.Colors.GREEN;
        case r.ButtonStyle.DESTRUCTIVE:
          return u.Button.Colors.RED;
        default:
          return u.Button.Colors.PRIMARY
      }
    }(a),
    size: u.Button.Sizes.SMALL,
    disabled: c || h === f.ActionComponentState.DISABLED || T,
    onClick: l,
    onContextMenu: e => {
      x && (0, i.openContextMenu)(e, e => (0, t.jsx)(E, {
        ...e,
        url: v
      }))
    },
    role: x ? "link" : "button",
    children: [(0, t.jsxs)("div", {
      className: s()(C.content, {
        [C.hidden]: j
      }),
      "aria-hidden": j,
      children: [null != S ? (0, t.jsx)(o.default, {
        className: s()({
          [C.textEmoji]: y
        }),
        src: S.src,
        emojiId: S.id,
        emojiName: S.name,
        animated: S.animated
      }) : null, y ? (0, t.jsx)("div", {
        className: C.label,
        children: n
      }) : null, x ? (0, t.jsx)(d.default, {
        className: C.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), j ? (0, t.jsx)("div", {
      className: C.loading,
      children: (0, t.jsx)(u.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}