n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(26151),
    s = n(358221),
    l = n(314897),
    u = n(354459),
    d = n(689938);
function c(e, t) {
    let n = (0, i.e7)([l.default], () => l.default.getId() === e, [e]),
        [c, I] = (0, i.Wu)([s.Z], () => [s.Z.getParticipants(t), s.Z.getParticipant(t, e)], [t, e]);
    return n || 0 === c.length
        ? null
        : null == I
          ? (0, r.jsx)(a.MenuItem, {
                id: 'ring',
                label: d.Z.Messages.RING,
                action: () => o.Z.ring(t, [e])
            })
          : I.type === u.fO.USER && I.ringing
            ? (0, r.jsx)(a.MenuItem, {
                  id: 'stop-ringing',
                  label: d.Z.Messages.STOP_RINGING,
                  action: () => o.Z.stopRinging(t, [e])
              })
            : null;
}
