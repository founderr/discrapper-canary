t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  l = t(196051),
  o = t(441729),
  u = t(689938);

function s(e, n) {
  let t = (0, a.e7)([o.Z], () => o.Z.isSpeakingMessage(n.id, e.id), [n, e]);
  return "" === e.content ? null : (0, i.jsx)(r.MenuItem, {
    id: "tts",
    label: t ? u.Z.Messages.STOP_SPEAKING_MESSAGE : u.Z.Messages.SPEAK_MESSAGE,
    icon: r.ChatSpeakIcon,
    action: () => t ? (0, l.NB)() : (0, l.LA)(n, e)
  })
}