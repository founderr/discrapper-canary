n.d(l, {
    Z: function () {
        return g;
    }
});
var t = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(40851),
    u = n(189432),
    d = n(189357),
    o = n(944486),
    c = n(626135),
    E = n(981631),
    M = n(176505),
    Z = n(50493),
    I = n(689938);
function g(e) {
    let { userId: l, guildId: n, channelId: g, location: m, onAction: _ } = e,
        C = a.useContext(c.AnalyticsContext),
        R = (0, s.Aq)(),
        v = (0, i.e7)([o.Z], () => (null != g ? g : o.Z.getChannelId(n, !0)), [g, n]),
        f = (0, d.ms)(n, !0);
    return null != n && f
        ? (0, t.jsx)(r.MenuItem, {
              id: 'mod-view',
              label: I.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
              action: () => {
                  null == _ || _(),
                      (0, u.r)(n, l, null != v ? v : M.oC.MEMBER_SAFETY, {
                          modViewPanel: Z.k.INFO,
                          sourceLocation: null != m ? m : C.location
                      }),
                      R.dispatch(E.CkL.POPOUT_CLOSE);
              }
          })
        : null;
}
