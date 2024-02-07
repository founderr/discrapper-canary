"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("702976");
var s = n("819689"),
  a = n("916565");

function l(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (s.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
    null != t.interactionData && null != l.applicationId && (0, a.retryCommandMessage)(t, e, l.applicationId);
    return
  }
  let {
    content: i,
    tts: r,
    flags: d,
    nonce: u
  } = t;
  s.default.sendMessage(e.id, {
    content: i,
    tts: r,
    invalidEmojis: [],
    validNonShortcutEmojis: []
  }, void 0, {
    nonce: u,
    flags: d,
    ...l
  })
}