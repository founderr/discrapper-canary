n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    o = n(26151),
    l = n(358221),
    d = n(985588),
    s = n(354459),
    u = n(388032);
function c(e, t) {
    let [n, c] = (0, r.Wu)([l.Z], () => [l.Z.getParticipants(t), l.Z.getParticipant(t, e.id)], [t, e.id]);
    return (0, d.s)(e) && 0 !== n.length
        ? null == c
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'ring',
                  label: u.intl.string(u.t.bHa9kJ),
                  action: () => o.Z.ring(t, [e.id])
              })
            : c.type === s.fO.USER && c.ringing
              ? (0, i.jsx)(a.MenuItem, {
                    id: 'stop-ringing',
                    label: u.intl.string(u.t.ygslb2),
                    action: () => o.Z.stopRinging(t, [e.id])
                })
              : null
        : null;
}
