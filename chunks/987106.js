"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  u = n.n(a),
  i = n("481060"),
  o = n("239091"),
  s = n("596454"),
  r = n("911969"),
  d = n("574399"),
  c = n("441957"),
  p = n("572004"),
  m = n("49012"),
  f = n("970184"),
  S = n("280501"),
  C = n("689938"),
  v = n("580961");

function E(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return p.SUPPORTS_COPY && null != t ? (0, l.jsx)(i.Menu, {
    navId: "component-button",
    onClose: o.closeContextMenu,
    "aria-label": C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(i.MenuGroup, {
      children: (0, l.jsx)(i.MenuItem, {
        id: "copy",
        label: C.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, p.copy)(t)
      })
    })
  }) : null
}

function N(e) {
  let t;
  let {
    label: n,
    style: a,
    disabled: p,
    emoji: C,
    url: N,
    sku_id: h
  } = e, {
    executeStateUpdate: g,
    visualState: T,
    isDisabled: y
  } = (0, f.useComponentState)(e), I = null != n && n.length > 0, x = a === r.ButtonStyle.LINK && null != N && N.length > 0, O = T === S.ActionComponentState.LOADING, j = (0, d.useLoadStoreListingDetails)(h);
  return t = x ? () => {
    (0, m.handleClick)({
      href: null != N ? N : "",
      shouldConfirm: !0
    })
  } : null != j ? j : () => g(), (0, l.jsxs)(i.Button, {
    color: function(e) {
      switch (e) {
        case r.ButtonStyle.PRIMARY:
          return i.Button.Colors.BRAND;
        case r.ButtonStyle.SUCCESS:
          return i.Button.Colors.GREEN;
        case r.ButtonStyle.DESTRUCTIVE:
          return i.Button.Colors.RED;
        default:
          return i.Button.Colors.PRIMARY
      }
    }(a),
    size: i.Button.Sizes.SMALL,
    disabled: p || T === S.ActionComponentState.DISABLED || y || null != h && void 0 === j,
    onClick: t,
    onContextMenu: e => {
      x && (0, o.openContextMenu)(e, e => (0, l.jsx)(E, {
        ...e,
        url: N
      }))
    },
    role: x ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: u()(v.content, {
        [v.hidden]: O
      }),
      "aria-hidden": O,
      children: [null != C ? (0, l.jsx)(s.default, {
        className: u()({
          [v.textEmoji]: I
        }),
        src: C.src,
        emojiId: C.id,
        emojiName: C.name,
        animated: C.animated
      }) : null, I ? (0, l.jsx)("div", {
        className: v.label,
        children: n
      }) : null, x ? (0, l.jsx)(c.default, {
        className: v.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), O ? (0, l.jsx)("div", {
      className: v.loading,
      children: (0, l.jsx)(i.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}