"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("438536"),
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
  } = e, h = (0, s.default)(t, "Notifications Bell"), E = (0, i.default)(t), m = (0, o.useThreadNotificationSetting)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: c,
    onClose: n,
    "aria-label": f,
    onSelect: d,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [t.isForumPost() ? h : null, E]
    }), (0, a.jsx)(l.MenuGroup, {
      children: (0, u.getThreadNotificationOptions)().map(e => {
        let {
          setting: n,
          label: s
        } = e;
        return (0, a.jsx)(l.MenuRadioItem, {
          group: "thread-notifications",
          id: "".concat(n),
          label: s,
          action: () => r.default.setNotificationSettings(t, {
            flags: n
          }),
          checked: n === m
        }, n)
      })
    })]
  })
}