t.d(n, {
    G: function () {
        return f;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    o = t(481060),
    a = t(569545),
    u = t(352954),
    c = t(277642),
    s = t(441894),
    d = t(199902),
    g = t(388032);
function f(e) {
    let { stream: n, channelId: t, location: f } = e,
        h = (0, s.J)({
            channelId: t,
            location: f
        }),
        m = (0, r.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(n)),
        Z = (0, a.V9)(n),
        I = (0, c.t)(Z),
        C = i.useCallback(() => {
            u.Z.openSecureFramesStreamVerification(Z, t);
        }, [t, Z]);
    return h && m && !I
        ? (0, l.jsx)(o.MenuItem, {
              id: 'secure-frames-stream-verification',
              label: g.intl.string(g.t.tjbJbW),
              action: C
          })
        : null;
}
