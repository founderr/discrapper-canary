r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(906732),
    l = r(189432),
    u = r(189357),
    c = r(434404),
    d = r(314897),
    f = r(944486),
    _ = r(475413),
    h = r(176505),
    p = r(50493),
    m = r(388032);
function g(e) {
    let { user: n, guildId: r, channelId: g, onClose: E, shouldShowTooltip: v } = e,
        { newestAnalyticsLocation: I } = (0, o.ZP)(),
        T = (0, a.e7)([d.default], () => d.default.getId() === (null == n ? void 0 : n.id)),
        b = (0, u.ms)(null != r ? r : null, !0),
        y = (0, a.e7)([f.Z], () => (null != g ? g : f.Z.getChannelId(r, !0)), [g, r]);
    return null == r || !b || T
        ? null
        : (0, i.jsx)(_.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: s.ModerationIcon,
              shouldShowTooltip: v,
              tooltipText: m.intl.string(m.t.kj3tz8),
              onClick: () => {
                  c.Z.close(),
                      (0, l.r)(r, n.id, null != y ? y : h.oC.MEMBER_SAFETY, {
                          modViewPanel: p.k.INFO,
                          sourceLocation: I
                      }),
                      null == E || E();
              }
          });
}
