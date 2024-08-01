n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(196051),
  l = n(441729),
  o = n(689938);

function c(e, t) {
  let n = (0, s.e7)([l.Z], () => l.Z.isSpeakingMessage(t.id, e.id), [
t,
e
  ]);
  return '' === e.content ? null : (0, i.jsx)(a.MenuItem, {
id: 'tts',
label: n ? o.Z.Messages.STOP_SPEAKING_MESSAGE : o.Z.Messages.SPEAK_MESSAGE,
icon: a.ChatSpeakIcon,
action: () => n ? (0, r.NB)() : (0, r.LA)(t, e)
  });
}