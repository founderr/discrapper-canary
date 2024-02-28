"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("37983");
a("884691");
var r = a("446674"),
  i = a("77078"),
  s = a("755624"),
  u = a("263024"),
  l = a("414833"),
  o = a("648564"),
  d = a("782340");

function f(e) {
  let t = (0, l.useThreadNotificationSetting)(e),
    a = (0, r.useStateFromStores)([s.default], () => s.default.hasJoined(e.id));
  return a ? (0, n.jsx)(i.MenuItem, {
    id: "thread-notifications",
    label: d.default.Messages.NOTIFICATION_SETTINGS,
    children: (0, o.getThreadNotificationOptions)().map(a => {
      let {
        setting: r,
        label: s
      } = a;
      return (0, n.jsx)(i.MenuRadioItem, {
        group: "thread-notifications",
        id: "".concat(r),
        label: s,
        action: () => u.default.setNotificationSettings(e, {
          flags: r
        }),
        checked: r === t
      }, r)
    })
  }) : (0, n.jsx)(i.MenuItem, {
    id: "notifications-disabled",
    label: d.default.Messages.NOTIFICATION_SETTINGS,
    disabled: !0
  })
}