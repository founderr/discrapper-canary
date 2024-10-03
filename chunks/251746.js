n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(392711),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(66999),
    u = n(665906),
    d = n(979651),
    h = n(557135),
    m = n(689938);
function p(e) {
    let t = (0, u.Y)(e),
        n = (0, r.e7)([d.Z], () => d.Z.isInChannel(e.id)),
        a = (0, r.e7)([d.Z], () => !l().isEmpty(d.Z.getVoiceStatesForChannel(e.id))),
        { needSubscriptionToAccess: p } = (0, c.Z)(e.id),
        _ = s.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: e,
                connected: n,
                needSubscriptionToAccess: p,
                locked: !1
            });
        }, [e, n, p]);
    return n || !t
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'join-thread-voice',
              label: a ? m.Z.Messages.JOIN_CALL : m.Z.Messages.START_CALL,
              action: _
          });
}
