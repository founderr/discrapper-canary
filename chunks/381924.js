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
    a = t(208049),
    o = t(893663),
    d = t(496675),
    c = t(944486),
    s = t(981631),
    Z = t(388032);
function h(n, e) {
    let t = (0, l.e7)([d.Z], () => d.Z.can(s.Plq.CONNECT, n), [n]),
        h = (0, l.e7)([c.Z], () => c.Z.getVoiceChannelId()),
        x = (0, o.tT)(e),
        g = h === n.id;
    return n.isGuildVocal() && t && null != x && !g
        ? (0, i.jsx)(r.sN, {
              id: 'join-muted-custom-join-sound',
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                  (0, a.Db)(n.id), u.default.selectVoiceChannel(n.id);
              }
          })
        : null;
}
