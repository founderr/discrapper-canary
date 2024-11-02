e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    a = e(481060),
    l = e(569471),
    o = e(346479),
    u = e(723170),
    d = e(124368),
    s = e(388032);
function c(n) {
    let t = (0, u.B)(n);
    return (0, r.e7)([l.Z], () => l.Z.hasJoined(n.id))
        ? (0, i.jsx)(a.MenuItem, {
              id: 'thread-notifications',
              label: s.intl.string(s.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                  let { setting: r, label: l } = e;
                  return (0, i.jsx)(
                      a.MenuRadioItem,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(r),
                          label: l,
                          action: () => o.Z.setNotificationSettings(n, { flags: r }),
                          checked: r === t
                      },
                      r
                  );
              })
          })
        : (0, i.jsx)(a.MenuItem, {
              id: 'notifications-disabled',
              label: s.intl.string(s.t.h850Sk),
              disabled: !0
          });
}
