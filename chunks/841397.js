"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("450911"),
  i = n("377114"),
  r = n("61505"),
  o = n("949067"),
  u = n("782340");

function d(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonSize: d = s.ButtonSizes.TINY,
    className: c,
    buttonText: f,
    navigateAwayOnReportSuccess: h = !0,
    onReportClick: C,
    onReportSubmit: p,
    onMouseEnter: E,
    onMouseLeave: m
  } = e, g = (0, r.useIsRelationshipTypeSpamReportable)(t), _ = (0, o.useLongestChannelMessageBeforeReply)(n.id, t);
  if (!g || null == _) return null;
  let S = () => {
    null == p || p(), l.default.closePrivateChannel(n.id, h)
  };
  return (0, a.jsx)(s.Button, {
    className: c,
    size: d,
    color: s.Button.Colors.RED,
    disabled: null == _,
    onClick: () => {
      null == C || C(), (0, i.showReportModalForFirstDM)(_, S)
    },
    onMouseEnter: E,
    onMouseLeave: m,
    children: null != f ? f : u.default.Messages.REPORT_SPAM
  })
}