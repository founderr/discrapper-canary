n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(569471),
    r = n(346479),
    o = n(723170),
    c = n(124368),
    u = n(689938);
function d(e) {
    let t = (0, o.B)(e);
    return (0, s.e7)([l.Z], () => l.Z.hasJoined(e.id))
        ? (0, i.jsx)(a.MenuItem, {
              id: 'thread-notifications',
              label: u.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, c.zb)().map((n) => {
                  let { setting: s, label: l } = n;
                  return (0, i.jsx)(
                      a.MenuRadioItem,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(s),
                          label: l,
                          action: () => r.Z.setNotificationSettings(e, { flags: s }),
                          checked: s === t
                      },
                      s
                  );
              })
          })
        : (0, i.jsx)(a.MenuItem, {
              id: 'notifications-disabled',
              label: u.Z.Messages.NOTIFICATION_SETTINGS,
              disabled: !0
          });
}
