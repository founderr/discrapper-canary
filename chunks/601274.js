t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(475179),
    a = t(703656),
    o = t(496675),
    c = t(981631),
    d = t(388032);
function s(n, e) {
    return (0, l.e7)([o.Z], () => o.Z.can(c.Plq.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, i.jsx)(r.MenuItem, {
              id: 'open-chat',
              label: d.intl.string(d.t.ZXxLQk),
              action: () => {
                  u.Z.updateChatOpen(n.id, !0), (0, a.XU)(e.id, n.id);
              }
          })
        : null;
}
