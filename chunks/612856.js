t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    r = t(481060),
    l = t(569471),
    u = t(346479),
    s = t(723170),
    o = t(124368),
    d = t(689938);
function c(e) {
    let n = (0, s.B)(e);
    return (0, a.e7)([l.Z], () => l.Z.hasJoined(e.id))
        ? (0, i.jsx)(r.MenuItem, {
              id: 'thread-notifications',
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, o.zb)().map((t) => {
                  let { setting: a, label: l } = t;
                  return (0, i.jsx)(
                      r.MenuRadioItem,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(a),
                          label: l,
                          action: () => u.Z.setNotificationSettings(e, { flags: a }),
                          checked: a === n
                      },
                      a
                  );
              })
          })
        : (0, i.jsx)(r.MenuItem, {
              id: 'notifications-disabled',
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              disabled: !0
          });
}
