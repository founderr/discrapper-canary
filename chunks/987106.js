"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  u = n.n(a),
  i = n("392711"),
  s = n("393586"),
  o = n("481060"),
  r = n("239091"),
  d = n("596454"),
  c = n("911969"),
  p = n("574399"),
  m = n("441957"),
  f = n("572004"),
  S = n("49012"),
  C = n("970184"),
  v = n("280501"),
  E = n("689938"),
  N = n("580961");

function h(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return f.SUPPORTS_COPY && null != t ? (0, l.jsx)(o.Menu, {
    navId: "component-button",
    onClose: r.closeContextMenu,
    "aria-label": E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
    onSelect: n,
    children: (0, l.jsx)(o.MenuGroup, {
      children: (0, l.jsx)(o.MenuItem, {
        id: "copy",
        label: E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
        action: () => (0, f.copy)(t)
      })
    })
  }) : null
}

function T(e) {
  let t;
  let {
    label: n,
    style: a,
    disabled: f,
    emoji: E,
    url: T,
    skuId: I
  } = e, {
    executeStateUpdate: g,
    visualState: y,
    isDisabled: x
  } = (0, C.useComponentState)(e), O = (0, p.useLoadStoreListingDetails)(I), _ = null != I && a === c.ButtonStyle.PREMIUM, j = _ && (null == O ? void 0 : O.disabled), M = _ ? null == O ? void 0 : O.label : n, L = null != M && M.length > 0, R = a === c.ButtonStyle.LINK && null != T && T.length > 0, A = y === v.ActionComponentState.LOADING || _ && null == O;
  return t = R ? () => {
    (0, S.handleClick)({
      href: null != T ? T : "",
      shouldConfirm: !0
    })
  } : _ ? null != O && !1 === O.disabled ? O.onClick : i.noop : () => g(), (0, l.jsxs)(o.Button, {
    color: function(e) {
      switch (e) {
        case c.ButtonStyle.PRIMARY:
        case c.ButtonStyle.PREMIUM:
          return o.Button.Colors.BRAND;
        case c.ButtonStyle.SUCCESS:
          return o.Button.Colors.GREEN;
        case c.ButtonStyle.DESTRUCTIVE:
          return o.Button.Colors.RED;
        default:
          return o.Button.Colors.PRIMARY
      }
    }(a),
    size: o.Button.Sizes.SMALL,
    disabled: f || y === v.ActionComponentState.DISABLED || x || j,
    onClick: t,
    onContextMenu: e => {
      R && (0, r.openContextMenu)(e, e => (0, l.jsx)(h, {
        ...e,
        url: T
      }))
    },
    role: R ? "link" : "button",
    children: [(0, l.jsxs)("div", {
      className: u()(N.content, {
        [N.hidden]: A,
        [N.premium]: _
      }),
      "aria-hidden": A,
      children: [_ ? (0, l.jsx)("div", {
        className: N.shopIcon,
        children: (0, l.jsx)(s.ShopIcon, {
          color: "white",
          height: 16,
          width: 16
        })
      }) : null, null != E ? (0, l.jsx)(d.default, {
        className: u()({
          [N.textEmoji]: L
        }),
        src: E.src,
        emojiId: E.id,
        emojiName: E.name,
        animated: E.animated
      }) : null, L ? (0, l.jsx)("div", {
        className: N.label,
        children: M
      }) : null, R ? (0, l.jsx)(m.default, {
        className: N.launchIcon,
        width: 16,
        height: 16
      }) : null]
    }), A ? (0, l.jsx)("div", {
      className: N.loading,
      children: (0, l.jsx)(o.Dots, {
        dotRadius: 3.5,
        themed: !0
      })
    }) : null]
  })
}