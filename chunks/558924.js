e.d(t, {
    Z: function () {
        return c;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(26151),
    o = e(358221),
    u = e(985588),
    d = e(354459),
    s = e(388032);
function c(n, t) {
    let [e, c] = (0, r.Wu)([o.Z], () => [o.Z.getParticipants(t), o.Z.getParticipant(t, n.id)], [t, n.id]);
    return (0, u.s)(n) && 0 !== e.length
        ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                  id: 'ring',
                  label: s.intl.string(s.t.bHa9kJ),
                  action: () => a.Z.ring(t, [n.id])
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                    id: 'stop-ringing',
                    label: s.intl.string(s.t.ygslb2),
                    action: () => a.Z.stopRinging(t, [n.id])
                })
              : null
        : null;
}
