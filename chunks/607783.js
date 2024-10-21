t.d(n, {
    B: function () {
        return E;
    }
});
var l = t(200651),
    i = t(192379),
    a = t(442837),
    s = t(481060),
    o = t(40851),
    u = t(352954),
    d = t(630759),
    r = t(441894),
    c = t(314897),
    Z = t(689938);
function E(e) {
    let { userId: n, channelId: t, guildId: E, location: M } = e,
        f = (0, r.J)({
            channelId: t,
            location: M
        }),
        _ = (0, a.e7)([c.default], () => c.default.getId() === n),
        I = (0, o.bp)(),
        g = i.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
                n,
                t,
                () =>
                    (0, d.fz)({
                        userId: n,
                        channelId: t,
                        guildId: E
                    }),
                I
            );
        }, [I, t, E, n]);
    return !f || _
        ? null
        : (0, l.jsx)(s.MenuItem, {
              id: 'secure-frames-user-verification',
              label: Z.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: g
          });
}
