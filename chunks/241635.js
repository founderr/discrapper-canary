"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("653041");
var n = l("735250");
l("470079");
var a = l("442837"),
  s = l("481060"),
  i = l("749210"),
  r = l("240872"),
  o = l("605436"),
  d = l("228643"),
  u = l("299206"),
  c = l("496675"),
  f = l("740727"),
  I = l("867108"),
  m = l("689938");

function T(e, t) {
  var l;
  let T = (0, a.useStateFromStores)([c.default], () => {
      let l = c.default.getHighestRole(e);
      return !c.default.isRoleHigher(e, l, t)
    }),
    E = [],
    N = (0, I.default)(e, t);
  null != N && E.push(N);
  let _ = (0, u.default)({
    id: t.id,
    label: m.default.Messages.COPY_ID_ROLE
  });
  null != _ && E.push(_);
  let S = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
    h = t.managed && !S,
    g = null != t && (0, o.isEveryoneRoleId)(e.id, t.id);
  return !T && !h && !g && E.push((0, n.jsx)(s.MenuGroup, {
    children: (0, n.jsx)(s.MenuItem, {
      id: "delete-role",
      label: m.default.Messages.DELETE,
      color: "danger",
      icon: f.default,
      action: () => {
        r.default.show({
          title: m.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
          body: m.default.Messages.SETTINGS_ROLES_DELETE_BODY.format({
            name: t.name
          }),
          cancelText: m.default.Messages.CANCEL,
          onConfirm: async () => {
            S && await (0, d.putRoleConnectionsConfigurations)(e.id, t.id, []), i.default.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), E
}