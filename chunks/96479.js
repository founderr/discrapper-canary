"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var s = a("6025"),
  l = a("433355"),
  i = a("626135"),
  r = a("585483"),
  o = a("922409"),
  u = a("545724"),
  d = a("749405"),
  c = a("981631");

function f(e) {
  let {
    index: t,
    className: a,
    channel: f,
    user: E,
    hasSingleMessageRequest: h
  } = e, {
    channelId: _
  } = (0, o.useMessageRequestSidebarState)();
  return (0, n.jsx)(u.default, {
    index: t,
    className: a,
    isFocused: _ === f.id,
    channel: f,
    user: E,
    onClick: e => {
      e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
        channelId: f.id,
        baseChannelId: l.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
        hasSingleMessageRequest: h
      }), i.default.track(c.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !1,
        channel_id: f.id,
        other_user_id: E.id
      }), setTimeout(() => {
        r.ComponentDispatch.dispatch(c.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: f.id
        })
      }, 0)
    },
    children: e => (0, n.jsx)(d.PendingMessageRequestRowItem, {
      active: e,
      user: E,
      channel: f
    })
  })
}