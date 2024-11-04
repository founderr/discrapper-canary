t.d(e, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(828214),
    u = t(287734),
    o = t(208049),
    a = t(893663),
    c = t(496675),
    d = t(944486),
    s = t(981631),
    Z = t(388032);
function h(n, e) {
    let t = (0, l.e7)([c.Z], () => c.Z.can(s.Plq.CONNECT, n), [n]),
        h = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        x = (0, a.tT)(e),
        f = h === n.id;
    return n.isGuildVocal() && t && null != x && !f
        ? (0, i.jsx)(r.sN, {
              id: 'join-muted-custom-join-sound',
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                  (0, o.Db)(n.id), u.default.selectVoiceChannel(n.id);
              }
          })
        : null;
}
