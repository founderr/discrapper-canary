"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("735250");
a("470079");
var s = a("481060"),
  n = a("689938"),
  i = a("707835");

function r(e) {
  let {
    sendStartNotification: t,
    setSendStartNotification: a
  } = e, r = t ? n.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : n.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
  return (0, l.jsx)("div", {
    className: i.notificationToggle,
    children: (0, l.jsx)(s.Checkbox, {
      type: s.Checkbox.Types.INVERTED,
      size: 14,
      className: i.__invalid_checkbox,
      value: t,
      onChange: function() {
        a(!t)
      },
      children: (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, l.jsx)(s.Tooltip, {
          position: "bottom",
          tooltipClassName: i.tooltip,
          text: n.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          "aria-label": n.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          children: e => (0, l.jsx)("span", {
            ...e,
            children: r
          })
        })
      })
    })
  })
}