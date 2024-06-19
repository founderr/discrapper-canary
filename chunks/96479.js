n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var s = n(6025),
  l = n(433355),
  a = n(626135),
  r = n(585483),
  o = n(922409),
  c = n(545724),
  u = n(749405),
  d = n(981631);

function E(e) {
  let {
    index: t,
    className: n,
    channel: E,
    user: h,
    hasSingleMessageRequest: _
  } = e, {
    channelId: I
  } = (0, o._)();
  return (0, i.jsx)(c.Z, {
    index: t,
    className: n,
    isFocused: I === E.id,
    channel: E,
    user: h,
    onClick: e => {
      e.stopPropagation(), s.Z.openPrivateChannelAsSidebar({
        channelId: E.id,
        baseChannelId: l.uZ,
        hasSingleMessageRequest: _
      }), a.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !1,
        channel_id: E.id,
        other_user_id: h.id
      }), setTimeout(() => {
        r.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: E.id
        })
      }, 0)
    },
    children: e => (0, i.jsx)(u.C, {
      active: e,
      user: h,
      channel: E
    })
  })
}