s.d(t, {
    Z: function () {
        return E;
    }
}),
    s(47120);
var n = s(735250),
    l = s(470079),
    i = s(120356),
    a = s.n(i),
    r = s(780384),
    o = s(481060),
    c = s(239091),
    d = s(741247),
    u = s(75464),
    h = s(689938),
    m = s(244430);
function g(e) {
    let { role: t, guild: i } = e,
        [r, u] = l.useState(!1);
    return (0, d.useHasGuildRoleItems)(i, t)
        ? (0, n.jsx)(o.Clickable, {
              onClick: (e) => {
                  u(!0),
                      (0, c.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(s.bind(s, 741247));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      role: t,
                                      guild: i
                                  });
                          },
                          { onClose: () => u(!1) }
                      );
              },
              className: a()(m.roleOverflow, { [m.open]: r }),
              children: (0, n.jsx)(o.MoreHorizontalIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20
              })
          })
        : null;
}
function E(e) {
    let { color: t, id: i, role: a, guild: d, children: E, isDragging: T, selectedItem: p, onItemSelect: N, itemType: _, locked: S, lockTooltip: x, showContextMenu: f, theme: C, roleStyle: M, 'aria-label': I } = e,
        R = l.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await s.e('5396').then(s.bind(s, 731646));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            id: i,
                            label: h.Z.Messages.COPY_ID_ROLE
                        });
                });
            },
            [i]
        );
    return T
        ? (0, n.jsx)('div', { className: m.dragged })
        : (0, n.jsx)(o.TabBar.Item, {
              className: m.role,
              id: i,
              selectedItem: p,
              onItemSelect: N,
              itemType: _,
              'aria-label': null != x ? ''.concat(I, ', ').concat(x) : I,
              children: (0, n.jsxs)('div', {
                  className: m.roleContent,
                  children: [
                      'dot' === M
                          ? (0, n.jsx)(o.RoleDot, {
                                color: null != t ? t : void 0,
                                className: m.roleDot,
                                background: !1,
                                tooltip: !1
                            })
                          : (0, n.jsx)(o.RoleCircle, {
                                color: null != t ? t : void 0,
                                className: m.roleCircle
                            }),
                      (function () {
                          if (!S) return null;
                          let e = (0, r.wj)(C) ? s(27377) : s(514811);
                          return (0, n.jsx)(o.Tooltip, {
                              text: x,
                              color: o.Tooltip.Colors.RED,
                              children: (t) =>
                                  (0, n.jsx)(u.Z, {
                                      className: m.lock,
                                      src: e,
                                      ...t
                                  })
                          });
                      })(),
                      (0, n.jsx)('div', {
                          className: m.roleInner,
                          onContextMenu: R,
                          children: E
                      }),
                      f && null != a
                          ? (0, n.jsx)(g, {
                                guild: d,
                                role: a
                            })
                          : null
                  ]
              })
          });
}
