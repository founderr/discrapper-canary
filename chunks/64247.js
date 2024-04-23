"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("438536"),
  i = n("214906"),
  r = n("346479"),
  o = n("723170"),
  u = n("124368");

function d(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: d,
    navId: c,
    label: f
  } = e, E = (0, a.default)(t, "Notifications Bell"), _ = (0, i.default)(t), m = (0, o.useThreadNotificationSetting)(t);
  return (0, s.jsxs)(l.Menu, {
    navId: c,
    onClose: n,
    "aria-label": f,
    onSelect: d,
    children: [(0, s.jsxs)(l.MenuGroup, {
      children: [t.isForumPost() ? E : null, _]
    }), (0, s.jsx)(l.MenuGroup, {
      children: (0, u.getThreadNotificationOptions)().map(e => {
        let {
          setting: n,
          label: a
        } = e;
        return (0, s.jsx)(l.MenuRadioItem, {
          group: "thread-notifications",
          id: "".concat(n),
          label: a,
          action: () => r.default.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === m
        }, n)
      })
    })]
  })
}