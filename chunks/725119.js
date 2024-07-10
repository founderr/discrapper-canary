l.d(n, {
    Z: function () {
        return Z;
    }
});
var t = l(735250), i = l(470079), r = l(481060), a = l(40851), s = l(906732), u = l(171368), o = l(626135), d = l(981631), c = l(689938);
function Z(e, n, l) {
    let Z = i.useContext(o.AnalyticsContext), {analyticsLocations: E} = (0, s.ZP)(), M = (0, a.Aq)();
    return (0, t.jsx)(r.MenuItem, {
        id: 'user-profile',
        label: c.Z.Messages.PROFILE,
        action: () => {
            (0, u.openUserProfileModal)({
                userId: e,
                guildId: n,
                channelId: l,
                sourceAnalyticsLocations: E,
                analyticsLocation: Z.location
            }), M.dispatch(d.CkL.POPOUT_CLOSE);
        }
    });
}
