n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(906732),
    o = n(189432),
    l = n(189357),
    u = n(434404),
    c = n(314897),
    d = n(944486),
    f = n(475413),
    _ = n(176505),
    p = n(50493),
    h = n(388032);
function m(e) {
    let { user: t, guildId: n, channelId: m, onClose: g, shouldShowTooltip: E } = e,
        { newestAnalyticsLocation: v } = (0, s.ZP)(),
        I = (0, i.e7)([c.default], () => c.default.getId() === (null == t ? void 0 : t.id)),
        b = (0, l.ms)(null != n ? n : null, !0),
        S = (0, i.e7)([d.Z], () => (null != m ? m : d.Z.getChannelId(n, !0)), [m, n]);
    return null == n || !b || I
        ? null
        : (0, r.jsx)(f.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: a.ModerationIcon,
              shouldShowTooltip: E,
              tooltipText: h.intl.string(h.t.kj3tz8),
              onClick: () => {
                  u.Z.close(),
                      (0, o.r)(n, t.id, null != S ? S : _.oC.MEMBER_SAFETY, {
                          modViewPanel: p.k.INFO,
                          sourceLocation: v
                      }),
                      null == g || g();
              }
          });
}
