"use strict";
i.r(t), i.d(t, {
  useMutedUntilText: function() {
    return r
  },
  default: function() {
    return a
  }
});
var n = i("37983");
i("884691");
var s = i("77078"),
  l = i("782340");

function r(e) {
  return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function a(e) {
  let {
    muteConfig: t,
    className: i
  } = e, l = r(t);
  return null != l ? (0, n.jsx)(s.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: i,
    children: l
  }) : null
}