n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(592125),
    o = n(430824),
    s = n(496675),
    l = n(983436),
    u = n(981631);
function c(e) {
    let { code: t, messageData: n } = e,
        [r, c] = t.split('/'),
        d = a.Z.getChannel(c),
        _ = o.Z.getGuild(r);
    return null != d && d.isGuildVocal() && null != _ && s.Z.can(u.Plq.VIEW_CHANNEL, d) && s.Z.can(u.Plq.CONNECT, d)
        ? (0, i.jsx)(l.Z, {
              guild: _,
              channel: d,
              messageData: n
          })
        : null;
}
