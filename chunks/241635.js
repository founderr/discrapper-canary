t.d(n, {
  Z: function() {
    return E
  }
}), t(653041);
var i = t(735250);
t(470079);
var s = t(442837),
  l = t(481060),
  a = t(749210),
  r = t(240872),
  o = t(605436),
  c = t(228643),
  d = t(299206),
  u = t(496675),
  I = t(867108),
  N = t(689938);

function E(e, n) {
  var t;
  let E = (0, s.e7)([u.Z], () => {
      let t = u.Z.getHighestRole(e);
      return !u.Z.isRoleHigher(e, t, n)
    }),
    T = [],
    m = (0, I.Z)(e, n);
  null != m && T.push(m);
  let _ = (0, d.Z)({
    id: n.id,
    label: N.Z.Messages.COPY_ID_ROLE
  });
  null != _ && T.push(_);
  let h = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) === null,
    O = n.managed && !h,
    g = null != n && (0, o.pM)(e.id, n.id);
  return !E && !O && !g && T.push((0, i.jsx)(l.MenuGroup, {
    children: (0, i.jsx)(l.MenuItem, {
      id: "delete-role",
      label: N.Z.Messages.DELETE,
      color: "danger",
      icon: l.TrashIcon,
      action: () => {
        r.Z.show({
          title: N.Z.Messages.SETTINGS_ROLES_DELETE_TITLE,
          body: N.Z.Messages.SETTINGS_ROLES_DELETE_BODY.format({
            name: n.name
          }),
          cancelText: N.Z.Messages.CANCEL,
          onConfirm: async () => {
            h && await (0, c.L_)(e.id, n.id, []), a.Z.deleteRole(e.id, n.id)
          }
        })
      }
    })
  }, "delete-role")), T
}