n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(557711),
    r = n(620662),
    s = n(503438),
    a = n(981631),
    o = n(968333);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: h, color: m, onAction: p } = e;
    return null != t && (0, r.Z)(t, a.xjy.SYNC) && (0, s.Z)(t)
        ? (0, i.jsx)(
              l.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: h,
                  color: m,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: p
              },
              'sync'
          )
        : null;
}
