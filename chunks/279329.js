t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    s = t(481060),
    l = t(196051),
    r = t(441729),
    o = t(689938);
function u(e, n) {
    let t = (0, a.e7)([r.Z], () => r.Z.isSpeakingMessage(n.id, e.id), [n, e]);
    return '' === e.content
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'tts',
              label: t ? o.Z.Messages.STOP_SPEAKING_MESSAGE : o.Z.Messages.SPEAK_MESSAGE,
              icon: s.ChatSpeakIcon,
              action: () => (t ? (0, l.NB)() : (0, l.LA)(n, e))
          });
}
