t.d(n, {
  Z: function() {
    return l
  }
}), t(789020);
var i = t(904245),
  a = t(667204);

function l(e, n, t) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType()) {
    null != n.interactionData && null != l.applicationId && (0, a.d)(n, e, l.applicationId);
    return
  }
  let {
    content: r,
    tts: o,
    flags: u,
    nonce: s
  } = n;
  i.Z.sendMessage(e.id, {
    content: r,
    tts: o,
    invalidEmojis: [],
    validNonShortcutEmojis: []
  }, void 0, {
    nonce: s,
    flags: u,
    ...l
  })
}