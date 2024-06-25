n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(6025),
  l = n(433355),
  a = n(626135),
  r = n(585483),
  o = n(545724),
  c = n(426051),
  u = n(981631);

function d(e) {
  let {
    index: t,
    className: n,
    channel: d,
    user: E,
    hasSingleMessageRequest: h
  } = e;
  return (0, s.jsx)(o.Z, {
    index: t,
    className: n,
    isFocused: !1,
    channel: d,
    user: E,
    onClick: e => {
      e.stopPropagation(), i.Z.openPrivateChannelAsSidebar({
        channelId: d.id,
        baseChannelId: l.uZ,
        hasSingleMessageRequest: h
      }), a.default.track(u.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !0,
        channel_id: d.id,
        other_user_id: E.id
      }), setTimeout(() => {
        r.S.dispatch(u.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: d.id
        })
      }, 0)
    },
    children: e => (0, s.jsx)(c.Z, {
      active: e,
      user: E,
      channel: d
    })
  })
}