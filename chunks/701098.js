t.d(n, {
    G: function () {
        return I;
    }
});
var l = t(200651),
    a = t(192379),
    r = t(442837),
    s = t(481060),
    i = t(569545),
    o = t(352954),
    u = t(277642),
    c = t(441894),
    d = t(199902),
    M = t(689938);
function I(e) {
    let { stream: n, channelId: t, location: I } = e,
        Z = (0, c.J)({
            channelId: t,
            location: I
        }),
        S = (0, r.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(n)),
        C = (0, i.V9)(n),
        g = (0, u.t)(C),
        E = a.useCallback(() => {
            o.Z.openSecureFramesStreamVerification(C, t);
        }, [t, C]);
    return Z && S && !g
        ? (0, l.jsx)(s.MenuItem, {
              id: 'secure-frames-stream-verification',
              label: M.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: E
          })
        : null;
}
