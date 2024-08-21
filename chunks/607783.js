t.d(n, {
    B: function () {
        return E;
    }
});
var s = t(735250),
    i = t(470079),
    l = t(442837),
    a = t(481060),
    o = t(352954),
    u = t(630759),
    d = t(441894),
    r = t(314897),
    c = t(689938);
function E(e) {
    let { userId: n, channelId: t, guildId: E, location: Z } = e,
        M = (0, d.J)({
            channelId: t,
            location: Z
        }),
        _ = (0, l.e7)([r.default], () => r.default.getId() === n),
        f = i.useCallback(() => {
            o.Z.openSecureFramesUserVerificationModal(n, t, () =>
                (0, u.fz)({
                    userId: n,
                    channelId: t,
                    guildId: E
                })
            );
        }, [t, E, n]);
    return !M || _
        ? null
        : (0, s.jsx)(a.MenuItem, {
              id: 'secure-frames-user-verification',
              label: c.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: f
          });
}
