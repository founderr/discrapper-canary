n.d(t, {
  Z: function() {
return a;
  }
}), n(789020);
var i = n(904245),
  s = n(667204);

function a(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (i.Z.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
null != t.interactionData && null != a.applicationId && (0, s.d)(t, e, a.applicationId);
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
...a
  });
}