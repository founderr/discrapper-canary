"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("493683"),
  i = n("726521"),
  r = n("718538"),
  o = n("868807"),
  u = n("689938");

function d(e) {
  let {
    channel: t,
    buttonSize: n = l.ButtonSizes.TINY,
    className: d,
    onReportClick: c,
    onReportSubmit: f,
    onMouseEnter: h,
    onMouseLeave: m
  } = e, {
    error: p,
    loaded: E
  } = (0, o.useMessageRequestPreview)(t), g = t.isDM() ? t.getRecipientId() : null, C = (0, r.useLongestChannelMessageBeforeReply)(t.id, g);
  if (null == C && (E || p)) return null;
  let S = () => {
    null == f || f(), s.default.closePrivateChannel(t.id)
  };
  return (0, a.jsx)(l.Button, {
    className: d,
    size: n,
    color: l.Button.Colors.RED,
    disabled: null == C,
    onClick: e => {
      e.stopPropagation(), null == c || c(), null != C && (0, i.showReportModalForFirstDM)(C, S)
    },
    onMouseEnter: h,
    onMouseLeave: m,
    children: u.default.Messages.REPORT
  })
}