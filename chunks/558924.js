t.d(e, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(26151),
    a = t(358221),
    o = t(985588),
    d = t(354459),
    s = t(388032);
function c(n, e) {
    let [t, c] = (0, l.Wu)([a.Z], () => [a.Z.getParticipants(e), a.Z.getParticipant(e, n.id)], [e, n.id]);
    return (0, o.s)(n) && 0 !== t.length
        ? null == c
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'ring',
                  label: s.intl.string(s.t.bHa9kJ),
                  action: () => u.Z.ring(e, [n.id])
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(r.MenuItem, {
                    id: 'stop-ringing',
                    label: s.intl.string(s.t.ygslb2),
                    action: () => u.Z.stopRinging(e, [n.id])
                })
              : null
        : null;
}
