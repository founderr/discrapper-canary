t.d(e, {
    i: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(359119),
    u = t(832239),
    a = t(237292),
    o = t(100932),
    d = t(388032);
function s(n) {
    let e = (0, o.x)(n),
        t = (0, a.y0)({ location: 'inappropriate_conversation_context_menu' });
    if (null === e || !t) return null;
    let { isTier1: s, isTier2: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !s &&
                (0, i.jsx)(r.MenuItem, {
                    id: 'mark-as-tier-1-inappro',
                    label: d.intl.string(d.t.EuzCER),
                    action: () => (0, u.KK)(n.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)
                }),
            !c &&
                (0, i.jsx)(r.MenuItem, {
                    id: 'mark-as-tier-2-inappro',
                    label: d.intl.string(d.t['tBw/1t']),
                    action: () => (0, u.KK)(n.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
                })
        ]
    });
}
