t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(735250),
    a = t(470079),
    r = t(392711),
    l = t.n(r),
    u = t(442837),
    s = t(481060),
    o = t(66999),
    d = t(665906),
    c = t(979651),
    Z = t(557135),
    f = t(689938);
function h(e) {
    let n = (0, d.Y)(e),
        t = (0, u.e7)([c.Z], () => c.Z.isInChannel(e.id)),
        r = (0, u.e7)([c.Z], () => !l().isEmpty(c.Z.getVoiceStatesForChannel(e.id))),
        { needSubscriptionToAccess: h } = (0, o.Z)(e.id),
        M = a.useCallback(() => {
            Z.Z.handleVoiceConnect({
                channel: e,
                connected: t,
                needSubscriptionToAccess: h,
                locked: !1
            });
        }, [e, t, h]);
    return t || !n
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'join-thread-voice',
              label: r ? f.Z.Messages.JOIN_CALL : f.Z.Messages.START_CALL,
              action: M
          });
}
