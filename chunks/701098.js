t.d(n, {
    G: function () {
        return M;
    }
});
var a = t(735250),
    r = t(470079),
    l = t(442837),
    o = t(481060),
    i = t(569545),
    s = t(352954),
    u = t(441894),
    c = t(199902),
    d = t(689938);
function M(e) {
    let { stream: n, channelId: t, location: M } = e,
        S = (0, u.J)({
            channelId: t,
            location: M
        }),
        Z = (0, l.e7)([c.Z], () => null != c.Z.getActiveStreamForApplicationStream(n)),
        m = (0, i.V9)(n),
        h = r.useCallback(() => {
            s.Z.openSecureFramesStreamVerification(m, t);
        }, [t, m]);
    return S && Z
        ? (0, a.jsx)(o.MenuItem, {
              id: 'secure-frames-stream-verification',
              label: d.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: h
          })
        : null;
}
