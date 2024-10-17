t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(481060),
    s = t(906732),
    o = t(531301),
    u = t(171368),
    d = t(314897),
    r = t(246946),
    c = t(626135),
    Z = t(981631),
    E = t(228168),
    M = t(689938);
function f(e) {
    let { user: n, guildId: t, channelId: f, context: _ } = e,
        { id: I } = n,
        { loading: g, note: A } = (0, o.Z)(I),
        N = !g && null != A && A.length > 0,
        C = _ === Z.IlC.POPOUT,
        m = i.useContext(c.AnalyticsContext),
        { analyticsLocations: T } = (0, s.ZP)();
    return I === d.default.getId() || r.Z.hidePersonalInformation || C
        ? null
        : (0, l.jsx)(a.MenuItem, {
              id: 'note',
              label: g ? M.Z.Messages.LOADING_NOTE : N ? M.Z.Messages.EDIT_NOTE : M.Z.Messages.ADD_NOTE,
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: n.id,
                      section: E.oh.USER_INFO,
                      subsection: E.Tb.NOTE,
                      guildId: t,
                      channelId: f,
                      sourceAnalyticsLocations: T,
                      analyticsLocation: m.location
                  });
              }
          });
}
