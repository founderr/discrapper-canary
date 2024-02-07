"use strict";
s.r(t), s.d(t, {
  useMutedUntilText: function() {
    return a
  },
  default: function() {
    return r
  }
});
var i = s("37983");
s("884691");
var n = s("77078"),
  l = s("782340");

function a(e) {
  return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function r(e) {
  let {
    muteConfig: t,
    className: s
  } = e, l = a(t);
  return null != l ? (0, i.jsx)(n.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: s,
    children: l
  }) : null
}