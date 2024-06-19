t.d(s, {
  Z: function() {
    return E
  }
}), t(47120);
var l = t(735250),
  n = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(780384),
  o = t(481060),
  d = t(239091),
  c = t(741247),
  u = t(151888),
  h = t(689938),
  m = t(384027);

function g(e) {
  let {
    role: s,
    guild: i
  } = e, [r, u] = n.useState(!1);
  return (0, c.useHasGuildRoleItems)(i, s) ? (0, l.jsx)(o.Clickable, {
    onClick: e => {
      u(!0), (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(t.bind(t, 741247));
        return t => (0, l.jsx)(e, {
          ...t,
          role: s,
          guild: i
        })
      }, {
        onClose: () => u(!1)
      })
    },
    className: a()(m.roleOverflow, {
      [m.open]: r
    }),
    children: (0, l.jsx)(o.MoreHorizontalIcon, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}

function E(e) {
  let {
    color: s,
    id: i,
    role: a,
    guild: c,
    children: E,
    isDragging: N,
    selectedItem: T,
    onItemSelect: p,
    itemType: S,
    locked: x,
    lockTooltip: M,
    showContextMenu: C,
    theme: I,
    roleStyle: R,
    "aria-label": _
  } = e, Z = n.useCallback(e => {
    (0, d.jW)(e, async () => {
      let {
        default: e
      } = await t.e("5396").then(t.bind(t, 731646));
      return s => (0, l.jsx)(e, {
        ...s,
        id: i,
        label: h.Z.Messages.COPY_ID_ROLE
      })
    })
  }, [i]);
  return N ? (0, l.jsx)("div", {
    className: m.dragged
  }) : (0, l.jsx)(o.TabBar.Item, {
    className: m.role,
    id: i,
    selectedItem: T,
    onItemSelect: p,
    itemType: S,
    "aria-label": null != M ? "".concat(_, ", ").concat(M) : _,
    children: (0, l.jsxs)("div", {
      className: m.roleContent,
      children: ["dot" === R ? (0, l.jsx)(o.RoleDot, {
        color: null != s ? s : void 0,
        className: m.roleDot,
        background: !1,
        tooltip: !1
      }) : (0, l.jsx)(o.RoleCircle, {
        color: null != s ? s : void 0,
        className: m.roleCircle
      }), function() {
        if (!x) return null;
        let e = (0, r.wj)(I) ? t(27377) : t(514811);
        return (0, l.jsx)(o.Tooltip, {
          text: M,
          color: o.Tooltip.Colors.RED,
          children: s => (0, l.jsx)(u.Z, {
            className: m.lock,
            src: e,
            ...s
          })
        })
      }(), (0, l.jsx)("div", {
        className: m.roleInner,
        onContextMenu: Z,
        children: E
      }), C && null != a ? (0, l.jsx)(g, {
        guild: c,
        role: a
      }) : null]
    })
  })
}