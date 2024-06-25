"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(149765),
  o = n(178940),
  a = n(993365),
  l = n(481060),
  u = n(422559),
  _ = n(689938),
  c = n(385996);

function d(e) {
  let {
    application: t,
    permissions: n,
    deniedPermissions: d,
    onPermissionsChange: E,
    guild: I
  } = e, T = r.useMemo(() => s.U_(I.permissions), [I.permissions]);
  r.useEffect(() => {
    E(!1, s.hX(n, T))
  }, [T, E, n]);
  let h = u.VY.filter(e => s.e$(n, e)),
    f = h.filter(e => !s.e$(T, e)).map(e => {
      let t = (0, u.wt)(e),
        n = !s.e$(d, e);
      return (0, i.jsx)("li", {
        className: c.permission,
        children: (0, i.jsx)(o.X, {
          value: n,
          onChange: (t, n) => E(n, e),
          type: o.X.Types.INVERTED,
          children: (0, i.jsx)(a.x, {
            variant: "text-md/normal",
            children: t
          })
        })
      }, String(e))
    }),
    S = h.filter(e => s.e$(T, e)).map(e => {
      let t = (0, u.wt)(e);
      return (0, i.jsxs)("li", {
        className: c.permission,
        children: [(0, i.jsx)("div", {
          className: c.disabledPermissionIcon,
          children: (0, i.jsx)(l.CloseSmallIcon, {
            size: "md",
            color: "currentColor",
            className: c.icon
          })
        }), (0, i.jsx)(a.x, {
          variant: "text-md/normal",
          children: t
        })]
      }, String(e))
    });
  return (0, i.jsxs)("div", {
    className: c.botPermissions,
    children: [f.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: c.permissionsLabel,
        children: _.Z.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
          applicationName: t.name,
          guildName: I.name
        })
      }), (0, i.jsx)("ul", {
        className: c.permissionsList,
        children: f
      })]
    }) : null, S.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.x, {
        variant: "text-sm/medium",
        color: "header-secondary",
        className: c.disabledPermissionsLabel,
        children: _.Z.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
          applicationName: t.name
        })
      }), (0, i.jsx)("ul", {
        className: c.permissionsList,
        children: S
      })]
    }) : null]
  })
}