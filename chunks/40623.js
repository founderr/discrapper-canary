t.d(n, {
  Z: function() {
    return r
  }
});
var s = t(735250);
t(470079);
var l = t(481060),
  a = t(689938),
  i = t(564233);

function r(e) {
  let {
    sendStartNotification: n,
    setSendStartNotification: t
  } = e, r = n ? a.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : a.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
  return (0, s.jsx)("div", {
    className: i.notificationToggle,
    children: (0, s.jsx)(l.Checkbox, {
      type: l.Checkbox.Types.INVERTED,
      size: 14,
      className: i.__invalid_checkbox,
      value: n,
      onChange: function() {
        t(!n)
      },
      children: (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (0, s.jsx)(l.Tooltip, {
          position: "bottom",
          tooltipClassName: i.tooltip,
          text: a.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          "aria-label": a.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
          children: e => (0, s.jsx)("span", {
            ...e,
            children: r
          })
        })
      })
    })
  })
}