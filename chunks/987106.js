"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  s = t.n(a),
  u = t("481060"),
  o = t("239091"),
  r = t("596454"),
  i = t("911969"),
  d = t("441957"),
  c = t("572004"),
  m = t("49012"),
  p = t("970184"),
  f = t("280501"),
  C = t("689938"),
  S = t("858049");

function E(e) {
  let {
    url: n,
    onSelect: t
  } = e;
  return c.SUPPORTS_COPY && null != n ? (0, l.jsx)(u.Menu, {
    navId: "component-button",
    onClose: o.closeContextMenu,
    "aria-label": C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: t,
    children: (0, l.jsx)(u.MenuGroup, {
      children: (0, l.jsx)(u.MenuItem, {
        id: "copy",
        label: C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(n)
      })
    })
  }) : null
}

function v(e) {
  let n;
  let {
    label: t,
    style: a,
    disabled: c,
    emoji: C,
    url: v
  } = e, {
    executeStateUpdate: N,
    visualState: h,
    isDisabled: T
  } = (0, p.useComponentState)(e), x = null != t && t.length > 0, y = a === i.ButtonStyle.LINK && null != v && v.length > 0, g = h === f.ActionComponentState.LOADING;
  return n = y ? () => {
    (0, m.handleClick)({
      href: null != v ? v : "",
      shouldConfirm: !0
    })
  } : () => N(), (0, l.jsxs)(u.Button, {
    color: function(e) {
      switch (e) {
        case i.ButtonStyle.PRIMARY:
          return u.Button.Colors.BRAND;
        case i.ButtonStyle.SUCCESS:
          return u.Button.Colors.GREEN;
        case i.ButtonStyle.DESTRUCTIVE:
          return u.Button.Colors.RED;
        default:
          return u.Button.Colors.PRIMARY
      }
    }(a),
    size: u.Button.Sizes.SMALL,
    disabled: c || h === f.ActionComponentState.DISABLED || T,
    onClick: n,
    onContextMenu: e => {
      y && (0, o.openContextMenu)(e, e => (0, l.jsx)(E, {
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
        children: t
      }) : null, y ? (0, l.jsx)(d.default, {
        className: S.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), g ? (0, l.jsx)("div", {
      className: S.loading,
      children: (0, l.jsx)(u.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}