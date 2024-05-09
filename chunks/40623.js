"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("689938"),
  i = n("707835");

function r(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: n
  } = e, r = t ? s.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : s.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
  return (0, a.jsx)("div", {
    className: i.notificationToggle,
    children: (0, a.jsx)(l.Checkbox, {
      type: l.Checkbox.Types.INVERTED,
      size: 14,
      className: i.__invalid_checkbox,
      value: t,
      onChange: function() {
        n(!t)
      },
      children: (0, a.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, a.jsx)(l.Tooltip, {
          position: "bottom",
          tooltipClassName: i.tooltip,
          text: s.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          "aria-label": s.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          children: e => (0, a.jsx)("span", {
            ...e,
            children: r
          })
        })
      })
    })
  })
}