"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("442837"),
  o = n("693789"),
  l = n("235874"),
  u = n("944613"),
  d = n("607070"),
  _ = n("605436"),
  c = n("496675"),
  E = n("729285"),
  I = n("993409"),
  T = n("689938"),
  f = n("129372");

function S(e) {
  let {
    guild: t,
    guildMember: n,
    highestRole: r,
    onAddRole: S,
    compact: h = !0,
    ...A
  } = e, m = (0, a.useStateFromStores)([d.default], () => d.default.roleStyle), N = e => (0, _.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && c.default.isRoleHigher(t, r, e) && -1 === n.roles.indexOf(e.id);
  return (0, i.jsx)(l.Popout, {
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(u.default, {
        guild: t,
        roleStyle: m,
        roleFilter: N,
        onSelect: S,
        onClose: n
      })
    },
    children: e => (0, i.jsx)(I.default, {
      className: s()(f.button),
      text: T.default.Messages.USER_PROFILE_ADD_ROLE,
      icon: E.default,
      color: o.Button.Colors.CUSTOM,
      size: o.Button.Sizes.NONE,
      compact: h,
      grow: !1,
      ...e,
      ...A
    })
  })
}