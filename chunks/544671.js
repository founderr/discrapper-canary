n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(557711),
    a = n(620662),
    l = n(503438),
    r = n(981631),
    o = n(968333);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: h, color: p, onAction: m } = e;
    return null != t && (0, a.Z)(t, r.xjy.SYNC) && (0, l.Z)(t)
        ? (0, i.jsx)(
              s.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: h,
                  color: p,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: m
              },
              'sync'
          )
        : null;
}
