n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(287734),
    s = n(906732),
    o = n(592125),
    l = n(19780),
    u = n(979651),
    c = n(626135),
    d = n(475413),
    f = n(981631),
    _ = n(388032);
function h(e) {
    let { user: t, activity: n, onAction: h, onClose: p } = e,
        { newestAnalyticsLocation: m } = (0, s.ZP)(),
        g = (0, i.e7)([u.Z, o.Z], () => {
            var e;
            return o.Z.getChannel(null === (e = u.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        E = (0, i.e7)([l.Z], () => l.Z.getChannelId() === (null == g ? void 0 : g.id));
    return (null == n ? void 0 : n.type) !== f.IIU.HANG_STATUS || null == g
        ? null
        : (0, r.jsx)(d.tG, {
              text: _.intl.string(_.t['9C444u']),
              disabled: E,
              fullWidth: !0,
              onClick: () => {
                  null == h || h({ action: 'PRESS_HANG_STATUS_BUTTON' }),
                      a.default.selectVoiceChannel(g.id),
                      c.default.track(f.rMx.HANG_STATUS_CTA_CLICKED, {
                          channel_id: g.id,
                          guild_id: g.guild_id,
                          source: m
                      }),
                      null == p || p();
              }
          });
}
