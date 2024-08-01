n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(196051),
  l = n(441729),
  o = n(689938);

function c(e, t) {
  let n = (0, a.e7)([l.Z], () => l.Z.isSpeakingMessage(t.id, e.id), [
t,
e
  ]);
  return '' === e.content ? null : (0, i.jsx)(s.MenuItem, {
id: 'tts',
label: n ? o.Z.Messages.STOP_SPEAKING_MESSAGE : o.Z.Messages.SPEAK_MESSAGE,
icon: s.ChatSpeakIcon,
action: () => n ? (0, r.NB)() : (0, r.LA)(t, e)
  });
}