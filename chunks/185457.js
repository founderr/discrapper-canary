n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(906732),
    a = n(531301),
    u = n(171368),
    d = n(314897),
    s = n(246946),
    c = n(626135),
    f = n(981631),
    Z = n(228168),
    g = n(388032);
function m(e) {
    let { user: t, guildId: n, channelId: m, context: v } = e,
        { id: b } = t,
        { loading: x, note: M } = (0, a.Z)(b),
        I = !x && null != M && M.length > 0,
        h = v === f.IlC.POPOUT,
        C = l.useContext(c.AnalyticsContext),
        { analyticsLocations: L } = (0, o.ZP)();
    return b === d.default.getId() || s.Z.hidePersonalInformation || h
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'note',
              label: x ? g.intl.string(g.t['WLKx//']) : I ? g.intl.string(g.t.sHHsOD) : g.intl.string(g.t.Dglxra),
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: t.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: n,
                      channelId: m,
                      sourceAnalyticsLocations: L,
                      analyticsLocation: C.location
                  });
              }
          });
}
