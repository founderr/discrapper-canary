t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(392711),
    o = t.n(r),
    s = t(442837),
    u = t(481060),
    l = t(66999),
    d = t(665906),
    c = t(979651),
    f = t(557135),
    Z = t(689938);
function v(e) {
    let n = (0, d.Y)(e),
        t = (0, s.e7)([c.Z], () => c.Z.isInChannel(e.id)),
        r = (0, s.e7)([c.Z], () => !o().isEmpty(c.Z.getVoiceStatesForChannel(e.id))),
        { needSubscriptionToAccess: v } = (0, l.Z)(e.id),
        h = a.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: e,
                connected: t,
                needSubscriptionToAccess: v,
                locked: !1
            });
        }, [e, t, v]);
    return t || !n
        ? null
        : (0, i.jsx)(u.MenuItem, {
              id: 'join-thread-voice',
              label: r ? Z.Z.Messages.JOIN_CALL : Z.Z.Messages.START_CALL,
              action: h
          });
}
