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
  r = n("949067"),
  o = n("389495"),
  u = n("782340");

function d(e) {
  let {
    channel: t,
    buttonSize: n = s.ButtonSizes.TINY,
    className: d,
    onReportClick: c,
    onReportSubmit: f,
    onMouseEnter: h,
    onMouseLeave: C
  } = e, {
    error: p,
    loaded: E
  } = (0, o.useMessageRequestPreview)(t), m = t.isDM() ? t.getRecipientId() : null, g = (0, r.useLongestChannelMessageBeforeReply)(t.id, m);
  if (null == g && (E || p)) return null;
  let _ = () => {
    null == f || f(), l.default.closePrivateChannel(t.id)
  };
  return (0, a.jsx)(s.Button, {
    className: d,
    size: n,
    color: s.Button.Colors.RED,
    disabled: null == g,
    onClick: e => {
      e.stopPropagation(), null == c || c(), null != g && (0, i.showReportModalForFirstDM)(g, _)
    },
    onMouseEnter: h,
    onMouseLeave: C,
    children: u.default.Messages.REPORT
  })
}