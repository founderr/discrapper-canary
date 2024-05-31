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
  i = n("393586"),
  o = n("481060"),
  s = n("239091"),
  r = n("596454"),
  d = n("911969"),
  c = n("574399"),
  p = n("441957"),
  m = n("572004"),
  f = n("49012"),
  S = n("970184"),
  C = n("280501"),
  v = n("689938"),
  E = n("580961");

function h(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return m.SUPPORTS_COPY && null != t ? (0, l.jsx)(o.Menu, {
    navId: "component-button",
    onClose: s.closeContextMenu,
    "aria-label": v.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(o.MenuGroup, {
      children: (0, l.jsx)(o.MenuItem, {
        id: "copy",
        label: v.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, m.copy)(t)
      })
    })
  }) : null
}

function N(e) {
  let t;
  let {
    label: n,
    style: a,
    disabled: m,
    emoji: v,
    url: N,
    sku_id: g
  } = e, {
    executeStateUpdate: y,
    visualState: T,
    isDisabled: I
  } = (0, S.useComponentState)(e), x = null != n && n.length > 0, O = a === d.ButtonStyle.LINK && null != N && N.length > 0, j = T === C.ActionComponentState.LOADING, L = (0, c.useLoadStoreListingDetails)(g), _ = a === d.ButtonStyle.PREMIUM;
  return t = O ? () => {
    (0, f.handleClick)({
      href: null != N ? N : "",
      shouldConfirm: !0
    })
  } : null != L ? L : () => y(), (0, l.jsxs)(o.Button, {
    color: function(e) {
      switch (e) {
        case d.ButtonStyle.PRIMARY:
        case d.ButtonStyle.PREMIUM:
          return o.Button.Colors.BRAND;
        case d.ButtonStyle.SUCCESS:
          return o.Button.Colors.GREEN;
        case d.ButtonStyle.DESTRUCTIVE:
          return o.Button.Colors.RED;
        default:
          return o.Button.Colors.PRIMARY
      }
    }(a),
    size: o.Button.Sizes.SMALL,
    disabled: m || T === C.ActionComponentState.DISABLED || I || null != g && void 0 === L,
    onClick: t,
    onContextMenu: e => {
      O && (0, s.openContextMenu)(e, e => (0, l.jsx)(h, {
        ...e,
        url: N
      }))
    },
    role: O ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: u()(E.content, {
        [E.hidden]: j
      }),
      "aria-hidden": j,
      children: [_ ? (0, l.jsx)("div", {
        className: E.premium,
        children: (0, l.jsx)(i.ShopIcon, {
          color: "white",
          height: 16,
          width: 16
        })
      }) : null, null != v ? (0, l.jsx)(r.default, {
        className: u()({
          [E.textEmoji]: x
        }),
        src: v.src,
        emojiId: v.id,
        emojiName: v.name,
        animated: v.animated
      }) : null, x ? (0, l.jsx)("div", {
        className: E.label,
        children: n
      }) : null, O ? (0, l.jsx)(p.default, {
        className: E.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), j ? (0, l.jsx)("div", {
      className: E.loading,
      children: (0, l.jsx)(o.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}