"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("693789"),
  a = n("235874"),
  o = n("944613"),
  l = n("607070"),
  u = n("605436"),
  d = n("496675"),
  _ = n("729285"),
  c = n("993409"),
  E = n("689938"),
  I = n("129372");

function T(e) {
  let {
    guild: t,
    guildMember: n,
    highestRole: T,
    onAddRole: f,
    ...S
  } = e, h = (0, r.useStateFromStores)([l.default], () => l.default.roleStyle), A = e => (0, u.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && d.default.isRoleHigher(t, T, e) && -1 === n.roles.indexOf(e.id);
  return (0, i.jsx)(a.Popout, {
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(o.default, {
        guild: t,
        roleStyle: h,
        roleFilter: A,
        onSelect: f,
        onClose: n
      })
    },
    children: e => (0, i.jsx)(c.default, {
      className: I.button,
      text: E.default.Messages.USER_PROFILE_ADD_ROLE,
      icon: _.default,
      color: s.Button.Colors.CUSTOM,
      size: s.Button.Sizes.NONE,
      grow: !1,
      ...e,
      ...S
    })
  })
}