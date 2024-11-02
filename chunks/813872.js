n.d(l, {
    Z: function () {
        return E;
    }
});
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(40851),
    u = n(189432),
    d = n(189357),
    s = n(944486),
    c = n(626135),
    Z = n(981631),
    g = n(176505),
    m = n(50493),
    M = n(388032);
function E(e) {
    let { userId: l, guildId: n, channelId: E, location: v, onAction: f } = e,
        I = i.useContext(c.AnalyticsContext),
        C = (0, o.Aq)(),
        P = (0, a.e7)([s.Z], () => (null != E ? E : s.Z.getChannelId(n, !0)), [E, n]),
        h = (0, d.ms)(n, !0);
    return null != n && h
        ? (0, t.jsx)(r.MenuItem, {
              id: 'mod-view',
              label: M.intl.string(M.t.kj3tz8),
              action: () => {
                  null == f || f(),
                      (0, u.r)(n, l, null != P ? P : g.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != v ? v : I.location
                      }),
                      C.dispatch(Z.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
