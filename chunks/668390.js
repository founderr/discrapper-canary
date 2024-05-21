"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  r = l("780384"),
  o = l("481060"),
  d = l("239091"),
  u = l("741247"),
  c = l("151888"),
  h = l("808268"),
  m = l("689938"),
  f = l("699566");

function E(e) {
  let {
    role: t,
    guild: n
  } = e, [r, c] = a.useState(!1);
  return (0, u.useHasGuildRoleItems)(n, t) ? (0, s.jsx)(o.Clickable, {
    onClick: e => {
      c(!0), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(l.bind(l, "741247"));
        return l => (0, s.jsx)(e, {
          ...l,
          role: t,
          guild: n
        })
      }, {
        onClose: () => c(!1)
      })
    },
    className: i()(f.roleOverflow, {
      [f.open]: r
    }),
    children: (0, s.jsx)(h.default, {
      width: 20,
      height: 20
    })
  }) : null
}

function g(e) {
  let {
    color: t,
    id: n,
    role: i,
    guild: u,
    children: h,
    isDragging: g,
    selectedItem: S,
    onItemSelect: T,
    itemType: N,
    locked: p,
    lockTooltip: C,
    showContextMenu: _,
    theme: x,
    roleStyle: M,
    "aria-label": I
  } = e, R = a.useCallback(e => {
    (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("5396").then(l.bind(l, "731646"));
      return t => (0, s.jsx)(e, {
        ...t,
        id: n,
        label: m.default.Messages.COPY_ID_ROLE
      })
    })
  }, [n]);
  return g ? (0, s.jsx)("div", {
    className: f.dragged
  }) : (0, s.jsx)(o.TabBar.Item, {
    className: f.role,
    id: n,
    selectedItem: S,
    onItemSelect: T,
    itemType: N,
    "aria-label": null != C ? "".concat(I, ", ").concat(C) : I,
    children: (0, s.jsxs)("div", {
      className: f.roleContent,
      children: ["dot" === M ? (0, s.jsx)(o.RoleDot, {
        color: null != t ? t : void 0,
        className: f.roleDot,
        background: !1,
        tooltip: !1
      }) : (0, s.jsx)(o.RoleCircle, {
        color: null != t ? t : void 0,
        className: f.roleCircle
      }), function() {
        if (!p) return null;
        let e = (0, r.isThemeDark)(x) ? l("27377") : l("514811");
        return (0, s.jsx)(o.Tooltip, {
          text: C,
          color: o.Tooltip.Colors.RED,
          children: t => (0, s.jsx)(c.default, {
            className: f.lock,
            src: e,
            ...t
          })
        })
      }(), (0, s.jsx)("div", {
        className: f.roleInner,
        onContextMenu: R,
        children: h
      }), _ && null != i ? (0, s.jsx)(E, {
        guild: u,
        role: i
      }) : null]
    })
  })
}