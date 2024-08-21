t.d(n, {
    G: function () {
        return M;
    }
});
var l = t(735250),
    a = t(470079),
    r = t(442837),
    s = t(481060),
    o = t(569545),
    i = t(352954),
    u = t(441894),
    c = t(199902),
    d = t(689938);
function M(e) {
    let { stream: n, channelId: t, location: M } = e,
        Z = (0, u.J)({
            channelId: t,
            location: M
        }),
        S = (0, r.e7)([c.Z], () => null != c.Z.getActiveStreamForApplicationStream(n)),
        I = (0, o.V9)(n),
        C = a.useCallback(() => {
            i.Z.openSecureFramesStreamVerification(I, t);
        }, [t, I]);
    return Z && S
        ? (0, l.jsx)(s.MenuItem, {
              id: 'secure-frames-stream-verification',
              label: d.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: C
          })
        : null;
}
