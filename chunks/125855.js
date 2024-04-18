"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("6025"),
  l = a("433355"),
  i = a("626135"),
  r = a("585483"),
  o = a("545724"),
  u = a("426051"),
  d = a("981631");

function c(e) {
  let {
    index: t,
    className: a,
    channel: c,
    user: f,
    hasSingleMessageRequest: E
  } = e;
  return (0, n.jsx)(o.default, {
    index: t,
    className: a,
    isFocused: !1,
    channel: c,
    user: f,
    onClick: e => {
      e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
        channelId: c.id,
        baseChannelId: l.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
        hasSingleMessageRequest: E
      }), i.default.track(d.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !0,
        channel_id: c.id,
        other_user_id: f.id
      }), setTimeout(() => {
        r.ComponentDispatch.dispatch(d.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: c.id
        })
      }, 0)
    },
    children: e => (0, n.jsx)(u.default, {
      active: e,
      user: f,
      channel: c
    })
  })
}