a.r(n);
var s = a(735250);
a(470079);
var l = a(442837),
  o = a(481060),
  i = a(239091),
  c = a(496675),
  r = a(572004),
  d = a(981631),
  t = a(689938),
  u = a(425415);
n.default = function(e) {
  var n;
  let {
    guild: I,
    user: p,
    onSelect: M
  } = e, _ = null !== (n = null == I ? void 0 : I.id) && void 0 !== n ? n : d.lds, E = (0, l.e7)([c.Z], () => null != I && c.Z.canManageUser(d.Plq.BAN_MEMBERS, p, I), [I, p]);
  return (0, s.jsx)(o.Menu, {
    navId: "member-application-context-menu",
    className: u.contextMenu,
    onClose: i.Zy,
    "aria-label": t.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: M,
    children: (0, s.jsxs)(o.MenuGroup, {
      children: [E && (0, s.jsx)(o.MenuItem, {
        id: "ban",
        label: t.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
        icon: o.HammerIcon,
        color: "danger",
        action: () => (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("43350")]).then(a.bind(a, 98746));
          return n => (0, s.jsx)(e, {
            ...n,
            guildId: _,
            user: p
          })
        })
      }, "ban"), (0, s.jsx)(o.MenuItem, {
        id: "copyUserId",
        label: "Copy User ID",
        icon: o.IdIcon,
        action: () => (0, r.JG)(p.id)
      }, "copyUserId")]
    })
  })
}