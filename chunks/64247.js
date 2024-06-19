n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(438536),
  a = n(214906),
  r = n(346479),
  o = n(723170),
  c = n(124368);

function u(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: u,
    navId: d,
    label: E
  } = e, _ = (0, l.Z)(t, "Notifications Bell"), I = (0, a.Z)(t), T = (0, o.B)(t);
  return (0, s.jsxs)(i.Menu, {
    navId: d,
    onClose: n,
    "aria-label": E,
    onSelect: u,
    children: [(0, s.jsxs)(i.MenuGroup, {
      children: [t.isForumPost() ? _ : null, I]
    }), (0, s.jsx)(i.MenuGroup, {
      children: (0, c.zb)().map(e => {
        let {
          setting: n,
          label: l
        } = e;
        return (0, s.jsx)(i.MenuRadioItem, {
          group: "thread-notifications",
          id: "".concat(n),
          label: l,
          action: () => r.Z.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === T
        }, n)
      })
    })]
  })
}