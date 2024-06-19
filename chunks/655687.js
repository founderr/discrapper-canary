n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(933557),
  i = n(981631),
  s = n(689938);

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, l.ZP)(e, !0),
    a = (0, l.ZP)(e, !1);
  if (null == e || null == n) return {
    placeholder: "",
    accessibilityLabel: ""
  };
  if (t) return {
    placeholder: s.Z.Messages.READ_ONLY_CHANNEL,
    accessibilityLabel: s.Z.Messages.READ_ONLY_CHANNEL
  };
  if (e.isForumPost()) return {
    placeholder: s.Z.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.Z.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({
      channel: a
    })
  };
  if (i.TPd.THREADS.has(e.type)) return {
    placeholder: s.Z.Messages.TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.Z.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({
      channel: a
    })
  };
  if (e.type === i.d4z.DM) return {
    placeholder: s.Z.Messages.DM_TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.Z.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({
      channel: a
    })
  };
  return {
    placeholder: s.Z.Messages.TEXTAREA_PLACEHOLDER.format({
      channel: n
    }),
    accessibilityLabel: s.Z.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({
      channel: a
    })
  }
}