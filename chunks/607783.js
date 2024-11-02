n.d(t, {
    B: function () {
        return Z;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(40851),
    u = n(352954),
    d = n(630759),
    s = n(441894),
    c = n(314897),
    f = n(388032);
function Z(e) {
    let { userId: t, channelId: n, guildId: Z, location: g } = e,
        m = (0, s.J)({
            channelId: n,
            location: g
        }),
        v = (0, r.e7)([c.default], () => c.default.getId() === t),
        b = (0, a.bp)(),
        x = l.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, d.fz)({
                        userId: t,
                        channelId: n,
                        guildId: Z
                    }),
                b
            );
        }, [b, n, Z, t]);
    return !m || v
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'secure-frames-user-verification',
              label: f.intl.string(f.t['8ErYvb']),
              action: x
          });
}
