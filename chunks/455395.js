t.d(e, {
    i: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(359119),
    u = t(832239),
    a = t(100932),
    o = t(388032);
function d(n) {
    let e = (0, a.x)(n);
    if (null === e) return null;
    let { isTier1: t, isTier2: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !t &&
                (0, i.jsx)(l.MenuItem, {
                    id: 'mark-as-tier-1-inappro',
                    label: o.intl.string(o.t.EuzCER),
                    action: () => (0, u.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !d &&
                (0, i.jsx)(l.MenuItem, {
                    id: 'mark-as-tier-2-inappro',
                    label: o.intl.string(o.t['tBw/1t']),
                    action: () => (0, u.KK)(n.id, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
