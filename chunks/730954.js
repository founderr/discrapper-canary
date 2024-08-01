n.d(t, {
  Z: function() {
return s;
  }
}), n(789020);
var i = n(904245),
  a = n(667204);

function s(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (i.Z.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
null != t.interactionData && null != s.applicationId && (0, a.d)(t, e, s.applicationId);
return;
  }
  let {
content: r,
tts: l,
messageReference: o,
flags: c,
nonce: u
  } = t;
  i.Z.sendMessage(e.id, {
content: r,
tts: l,
invalidEmojis: [],
validNonShortcutEmojis: []
  }, void 0, {
nonce: u,
flags: c,
messageReference: null != o ? o : void 0,
...s
  });
}