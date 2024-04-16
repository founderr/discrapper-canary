"use strict";
t.r(n), t.d(n, {
  default: function() {
    return N
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  s = t.n(a),
  u = t("481060"),
  i = t("239091"),
  o = t("596454"),
  r = t("911969"),
  d = t("441957"),
  c = t("572004"),
  m = t("49012"),
  p = t("970184"),
  f = t("280501"),
  S = t("689938"),
  C = t("858049");

function E(e) {
  let {
    url: n,
    onSelect: t
  } = e;
  return c.SUPPORTS_COPY && null != n ? (0, l.jsx)(u.Menu, {
    navId: "component-button",
    onClose: i.closeContextMenu,
    "aria-label": S.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: t,
    children: (0, l.jsx)(u.MenuGroup, {
      children: (0, l.jsx)(u.MenuItem, {
        id: "copy",
        label: S.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, c.copy)(n)
      })
    })
  }) : null
}

function N(e) {
  let n;
  let {
    label: t,
    style: a,
    disabled: c,
    emoji: S,
    url: N
  } = e, {
    executeStateUpdate: v,
    visualState: T,
    isDisabled: h
  } = (0, p.useComponentState)(e), x = null != t && t.length > 0, y = a === r.ButtonStyle.LINK && null != N && N.length > 0, j = T === f.ActionComponentState.LOADING;
  return n = y ? () => {
    (0, m.handleClick)({
      href: null != N ? N : "",
      shouldConfirm: !0
    })
  } : () => v(), (0, l.jsxs)(u.Button, {
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
    disabled: c || T === f.ActionComponentState.DISABLED || h,
    onClick: n,
    onContextMenu: e => {
      y && (0, i.openContextMenu)(e, e => (0, l.jsx)(E, {
        ...e,
        url: N
      }))
    },
    role: y ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: s()(C.content, {
        [C.hidden]: j
      }),
      "aria-hidden": j,
      children: [null != S ? (0, l.jsx)(o.default, {
        className: s()({
          [C.textEmoji]: x
        }),
        src: S.src,
        emojiId: S.id,
        emojiName: S.name,
        animated: S.animated
      }) : null, x ? (0, l.jsx)("div", {
        className: C.label,
        children: t
      }) : null, y ? (0, l.jsx)(d.default, {
        className: C.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), j ? (0, l.jsx)("div", {
      className: C.loading,
      children: (0, l.jsx)(u.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}