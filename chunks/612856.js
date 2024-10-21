t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    r = t(481060),
    o = t(569471),
    s = t(346479),
    u = t(723170),
    l = t(124368),
    d = t(689938);
function c(e) {
    let n = (0, u.B)(e);
    return (0, a.e7)([o.Z], () => o.Z.hasJoined(e.id))
        ? (0, i.jsx)(r.MenuItem, {
              id: 'thread-notifications',
              label: d.Z.Messages.NOTIFICATION_SETTINGS,
              children: (0, l.zb)().map((t) => {
                  let { setting: a, label: o } = t;
                  return (0, i.jsx)(
                      r.MenuRadioItem,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(a),
                          label: o,
                          action: () => s.Z.setNotificationSettings(e, { flags: a }),
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
