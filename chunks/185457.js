t.d(n, {
    Z: function () {
        return _;
    }
});
var s = t(735250),
    i = t(470079),
    l = t(481060),
    a = t(906732),
    o = t(531301),
    u = t(171368),
    d = t(314897),
    r = t(246946),
    c = t(626135),
    E = t(981631),
    Z = t(228168),
    M = t(689938);
function _(e) {
    let { user: n, guildId: t, channelId: _, context: f } = e,
        { id: g } = n,
        { loading: I, note: A } = (0, o.Z)(g),
        N = !I && null != A && A.length > 0,
        m = f === E.IlC.POPOUT,
        T = i.useContext(c.AnalyticsContext),
        { analyticsLocations: C } = (0, a.ZP)();
    return g === d.default.getId() || r.Z.hidePersonalInformation || m
        ? null
        : (0, s.jsx)(l.MenuItem, {
              id: 'note',
              label: I ? M.Z.Messages.LOADING_NOTE : N ? M.Z.Messages.EDIT_NOTE : M.Z.Messages.ADD_NOTE,
              action: () => {
                  (0, u.openUserProfileModal)({
                      userId: n.id,
                      section: Z.oh.USER_INFO,
                      subsection: Z.Tb.NOTE,
                      guildId: t,
                      channelId: _,
                      sourceAnalyticsLocations: C,
                      analyticsLocation: T.location
                  });
              }
          });
}
