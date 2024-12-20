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
    o = t(703656),
    a = t(496675),
    d = t(981631),
    c = t(388032);
function s(n, e) {
    return (0, l.e7)([a.Z], () => a.Z.can(d.Plq.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, i.jsx)(r.MenuItem, {
              id: 'open-chat',
              label: c.intl.string(c.t.ZXxLQk),
              action: () => {
                  u.Z.updateChatOpen(n.id, !0), (0, o.XU)(e.id, n.id);
              }
          })
        : null;
}
