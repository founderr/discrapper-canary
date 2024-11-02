t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(196051),
    o = t(441729),
    s = t(388032);
function u(e, n) {
    let t = (0, l.e7)([o.Z], () => o.Z.isSpeakingMessage(n.id, e.id), [n, e]);
    return '' === e.content
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'tts',
              label: t ? s.intl.string(s.t.CJ30BA) : s.intl.string(s.t.yGLjXF),
              icon: r.ChatSpeakIcon,
              action: () => (t ? (0, a.NB)() : (0, a.LA)(n, e))
          });
}
